defmodule EncryptorWeb.V1.DecryptionController do
  use EncryptorWeb, :controller

  alias EncryptorWeb.V1.DecryptionView

  def decrypt(conn, %{"ciphertext" => ciphertext, "key" => key}) do
    decrypted_message = Encryptor.decrypt(ciphertext, key)

    conn
    |> put_view(DecryptionView)
    |> render("decrypt.json", %{decrypted_message: decrypted_message})
  end
end
