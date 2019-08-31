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

    ENCRYPT_URL = ENV.fetch('ENCRYPTOR_URL') + '/api/v1/encrypt'
    DECRYPT_URL = ENV.fetch('ENCRYPTOR_URL') + '/api/v1/decrypt'

    def initialize
      @client = HTTPClient.new
    end

    def encrypt(key, value)
      response = nil
      puts (Benchmark.ms do
        response = @client.post(ENCRYPT_URL, body: { key: key, message: value })
      end)
      body = JSON.parse(response.body)
      body['ciphertext']
    end

    def decrypt(key, value)
      response = @client.post(DECRYPT_URL, body: { key: key, ciphertext: value })
      body = JSON.parse(response.body)
      body['decrypted_message']
    end
  end
end
