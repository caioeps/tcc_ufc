# frozen_string_literal: true

class TccEncryptor
  class << self
    def encrypt(options)
      client = Client.instance
      client.encrypt(options[:secret_key], options[:value])
    end

    def decrypt(options)
      client = Client.instance
      client.decrypt(options[:secret_key], options[:value])
    end
  end

  class Client
    include Singleton

    def initialize
      @client = TCPSocket.new ENV.fetch('ENCRYPTOR_URL'), 4444
    end

    def encrypt(key, value)
      request = "action:encrypt;key:#{key};data:#{value}"
      encrypted_value = nil
      puts (Benchmark.ms do
        @client.write(request)
        encrypted_value = @client.read_nonblock(request)
      end)
      encrypted_value
    end

    def decrypt(key, value)
      request = "action:decrypt;key:#{key};data:#{value}"
      decrypted_value = nil
      puts (Benchmark.ms do
        @client.write(request)
        decrypted_value = @client.read_nonblock(request)
      end)
      decrypted_value
    end
  end
end
