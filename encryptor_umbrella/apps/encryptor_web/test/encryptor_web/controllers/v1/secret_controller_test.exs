defmodule EncryptorWeb.V1.SecretControllerTest do
  use EncryptorWeb.ConnCase

  alias EncryptorWeb.BenchmarkCase

  test 'it returns a new secret', %{conn: conn} do
    json_body = post(conn, "/api/v1/secret/generate")
                |> json_response(200)

    %{"secret" => secret} = json_body

    assert secret
  end
end

