namespace :jmeter do
  desc 'Generates test plan'
  task generate_test_plan: :environment do
    require 'ruby-jmeter'

    JmeterJmxGenerator.new.call
  end

  class JmeterJmxGenerator
    def call
      local_encryption_plan
      remote_encryption_plan
      pg_pgp_encryption_plan

      test name: 'Aggregated' do
        threads name: 'Local', count: 10, loops: 500 do
          visit name: 'Users with local encryption',
                url: 'http://localhost:3000/users?user_class=UserWithLocalEncryption',
                connect_timeout: '1000',
                response_timeout: '10000'
        end

        threads name: 'Postgres PGP', count: 10, loops: 500 do
          visit name: 'Users with PG PGP Encryption',
                url: 'http://localhost:3000/users?user_class=UserWithPostgresPgpEncryption',
                connect_timeout: '1000',
                response_timeout: '10000'
        end

        threads name: 'Remote Encryptor', count: 10, loops: 500 do
          visit name: 'Users with TCP encryption',
                url: 'http://localhost:3000/users?user_class=User',
                connect_timeout: '1000',
                response_timeout: '10000'
        end
      end.jmx(file: Rails.root.join('aggregated_test_plan.jmx'))
    end

    private

    attr_reader :output

    def local_encryption_plan
      test name: 'Local Encryption' do
        threads count: 10 do
          visit name: 'Users with local encryption',
                url: 'http://localhost:3000/users?user_class=UserWithLocalEncryption'
        end
      end.jmx(file: Rails.root.join('local_encryption_plan.jmx'))
    end

    def remote_encryption_plan
      test name: 'Remote TCP encryption' do
        threads count: 10 do
          visit name: 'Users with TCP encryption',
                url: 'http://localhost:3000/users?user_class=User'
        end
      end.jmx(file: Rails.root.join('remote_encryption_plan.jmx'))
    end

    def pg_pgp_encryption_plan
      test name: 'Postgres PGP Encryption' do
        threads count: 10 do
          visit name: 'Users with PG PGP Encryption',
                url: 'http://localhost:3000/users?user_class=UserWithPostgresPgpEncryption'
        end
      end.jmx(file: Rails.root.join('pg_pgp_encryption_plan.jmx'))
    end
  end
end
