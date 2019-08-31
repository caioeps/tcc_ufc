require 'rails_helper'

RSpec.describe TccEncryptor do
  describe '#encrypt' do
    let(:secret_key) { 'MO0WT3c5zTjFUgdKAgooww==' }
    let(:value) { 'a value' }

    context 'when successful' do
      before do
        response = <<~RESPONSE
          HTTP/1.1 200 OK
          cache-control: max-age=0, private, must-revalidate
          content-length: 65
          content-type: application/json; charset=utf-8
          date: Sun, 25 Aug 2019 19:00:56 GMT
          server: Cowboy
          x-request-id: Fb4_m14NICas_McAAAAk

          {"ciphertext":"Cy4r6BPys5vulckxoMxFEBvFZeOXGlIzAQZgy4JvVdX3ivZP"}
        RESPONSE

        stub_request(
          :post,
          ENV.fetch('ENCRYPTOR_URL') + '/api/v1/encrypt'
        ).with(
          body: {
            key: secret_key,
            message: value
          }
        ).to_return(response)
      end

      it 'delegates encryption to a third party service' do
        options = {
          value: value,
          secret_key: secret_key
        }
        expect(TccEncryptor.encrypt(options))
          .to eq 'Cy4r6BPys5vulckxoMxFEBvFZeOXGlIzAQZgy4JvVdX3ivZP'
      end
    end
  end

  describe '#decrypt' do
    let(:secret_key) { 'MO0WT3c5zTjFUgdKAgooww==' }
    let(:ciphertext) { 'cr/xm8ElTcNnZTHkr3V8HnZur40OQKFwZ9EWw+HYRfZIMeOE' }

    context 'when successful' do
      before do
        response = <<~RESPONSE
          HTTP/1.1 200 OK
          cache-control: max-age=0, private, must-revalidate
          content-length: 28
          content-type: application/json; charset=utf-8
          date: Sun, 25 Aug 2019 19:29:01 GMT
          server: Cowboy
          x-request-id: Fb5BI6npFs1nFw0AAAAj

          {"decrypted_message":"caio"}
        RESPONSE

        stub_request(
          :post,
          ENV.fetch('ENCRYPTOR_URL') + '/api/v1/decrypt'
        ).with(
          body: {
            key: secret_key,
            ciphertext: ciphertext
          }
        ).to_return(response)
      end

      it 'delegates encryption to a third party service' do
        options = {
          value: ciphertext,
          secret_key: secret_key
        }
        expect(TccEncryptor.decrypt(options)).to eq 'caio'
      end
    end
  end
end
