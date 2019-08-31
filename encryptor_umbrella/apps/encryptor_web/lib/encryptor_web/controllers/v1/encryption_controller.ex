defmodule EncryptorWeb.V1.EncryptionController do
  use EncryptorWeb, :controller

  alias EncryptorWeb.V1.EncryptionView

  def init(conn), do: conn

  def encrypt(conn, %{"message" => message, "key" => key}) do
    ciphertext = Encryptor.encrypt(message, key)
                 |> IO.inspect

    conn
    |> put_view(EncryptionView)
    |> render("encrypt.json", %{ciphertext: ciphertext})
  end
end
