defmodule Encryptor do
  @moduledoc """
  Module responsible for encrypting and decrypting messages.
  """

  @aad "AES256GCM"

  def encrypt(message, key) do
    iv = :crypto.strong_rand_bytes(16)
    {ciphertext, tag} =
      :crypto.block_encrypt(:aes_gcm, decode_key(key), iv, {@aad, to_string(message), 16})
    (iv <> tag <> ciphertext) |> :base64.encode
  end

  def decrypt(ciphertext, key) do
    ciphertext = :base64.decode(ciphertext)
    <<iv::binary-16, tag::binary-16, ciphertext::binary>> = ciphertext
    :crypto.block_decrypt(:aes_gcm, decode_key(key), iv, {@aad, ciphertext, tag})
  end

  def generate_secret do
    :crypto.strong_rand_bytes(16) |> :base64.encode
  end

	defp decode_key(key) do
		:base64.decode(key)
	end
end
