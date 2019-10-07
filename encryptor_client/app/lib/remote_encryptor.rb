# frozen_string_literal: true

class RemoteEncryptor
  class << self
    def encrypt(options)
      conn_pool.with do |client|
        client.encrypt(options[:key], options[:value])
      end
    end

    def decrypt(options)
      conn_pool.with do |client|
        client.decrypt(options[:key], options[:value])
      end
    end

    private

    def conn_pool
      @pool ||= ConnectionPool.new(size: ENV.fetch('RAILS_MAX_THREADS', 5), timeout: 5) do
        Client.new
      end
    end
  end

  class Client
    def initialize
      @client = TCPSocket.new ENV.fetch('ENCRYPTOR_HOST'), ENV.fetch('ENCRYPTOR_PORT')
    end

    def encrypt(key, value)
      request = "action:encrypt;key:#{key};data:#{value}"
      write(request)
      encrypted_value = read
      encrypted_value
    end

    def decrypt(key, value)
      request = "action:decrypt;key:#{key};data:#{value}"
      write(request)
      decrypted_value = read
      decrypted_value
    end

    private

    def write(request)
      tcp_operation do
        @client.write_nonblock(request)
      end
    end

    def read
      tcp_operation do
        @client.read_nonblock(8192)
      end
    end

    def tcp_operation
      yield
    rescue IO::WaitReadable
      IO.select([@client])
      retry
    rescue IO::WaitWritable
      IO.select(nil, [@client])
      retry
    rescue Errno::EPIPE
      @client = TCPSocket.new ENV.fetch('ENCRYPTOR_HOST'), ENV.fetch('ENCRYPTOR_PORT')
    end
  end
end
