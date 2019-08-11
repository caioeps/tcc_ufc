defmodule EncryptorTest do
  use ExUnit.Case, async: true

  test "it encrypts and decrypts correctly" do
    message = "Hey there, guys!"
    key = Encryptor.generate_secret

    encrypted_message = Encryptor.encrypt(message, key)
    decryped_message = Encryptor.decrypt(encrypted_message, key)

    assert message == decryped_message
  end
end
