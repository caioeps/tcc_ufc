defmodule EncryptorWeb.V1.SecretController do
  use EncryptorWeb, :controller

  alias EncryptorWeb.V1.SecretView

  def init(conn), do: conn

  def generate(conn, _params) do
    secret = Encryptor.generate_secret

    conn
    |> put_view(SecretView)
    |> render("generate.json", %{secret: secret})
  end
end
