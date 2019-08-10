defmodule EncryptorTest do
  use ExUnit.Case, async: true

  test "it ecrypts" do
    message = "Hey there, guys!"
    key = Encryptor.generate_secret
          |> IO.inspect

    encrypted_message = Encryptor.encrypt(message, key)
                        |> IO.inspect(label: "encrypted_message")
    decryped_message = Encryptor.decrypt(encrypted_message, key)

    assert message == decryped_message
  end
end
