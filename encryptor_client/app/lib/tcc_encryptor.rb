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
      @client = TCPSocket.new ENV.fetch('ENCRYPTOR_HOST'), ENV.fetch('ENCRYPTOR_PORT')
    end

    def encrypt(key, value)
      request = "action:encrypt;key:#{key};data:#{value}"
      encrypted_value = nil
      puts (Benchmark.ms do
        write(request)
        encrypted_value = read
      end)
      encrypted_value
    end

    def decrypt(key, value)
      request = "action:decrypt;key:#{key};data:#{value}"
      decrypted_value = nil
      puts (Benchmark.ms do
        write(request)
        decrypted_value = read
      end)
      decrypted_value
    end

    def write(request)
      @client.write_nonblock(request)
    rescue IO::WaitReadable
      IO.select([@client])
      retry
    rescue IO::WaitWritable
      IO.select(nil, [@client])
      retry
    end

    def read
      @client.read_nonblock(8192)
    rescue IO::WaitReadable
      IO.select([@client])
      retry
    rescue IO::WaitWritable
      IO.select(nil, [@client])
      retry
    end
  end
end
