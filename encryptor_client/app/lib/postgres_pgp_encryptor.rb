# frozen_string_literal: true

class PostgresPgpEncryptor
  class << self
    def encrypt(options)
      client = Client.instance
      client.encrypt(options[:key], options[:value])
    end

    def decrypt(options)
      client = Client.instance
      client.decrypt(options[:key], options[:value])
    end
  end

  class Client
    include Singleton

    ENCRYPT_SQL = 'SELECT pgp_sym_encrypt(%s, %s, %s) as value'
    DECRYPT_SQL = 'SELECT pgp_sym_decrypt(%s, %s, %s) as value'

    def encrypt(key, value)
      execute_sql(ENCRYPT_SQL, [value, key, ''])
    end

    def decrypt(key, value)
      execute_sql(DECRYPT_SQL, [value, key, ''])
    end

    private

    def execute_sql(sql, binds)
      ApplicationRecord.connection.execute(sanitize_sql(sql, binds)).first['value']
    end

    def sanitize_sql(sql, binds)
      sql % binds.map { |value| ActiveRecord::Base.connection.quote(value) }
    end
  end
end
