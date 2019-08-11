defmodule EncryptorWeb.V1.EncryptionControllerTest do
  use EncryptorWeb.ConnCase

  alias EncryptorWeb.BenchmarkCase

  test 'it returns a ciphertext', %{conn: conn} do
    params = %{message: "hey there", key: Encryptor.generate_secret}

    json_body = post(conn, "/api/v1/encrypt", params)
                |> json_response(200)

    %{"ciphertext" => ciphertext} = json_body

    assert "hey there" != ciphertext
  end

  @tag :performance
  test "it is fast", %{conn: conn} do
    endpoint = "api/v1/encrypt"
    params = %{message: "hey there", key: Encryptor.generate_secret}

    {mean_time_us, _, _} =
      BenchmarkCase.measure(1000, fn -> post(conn, endpoint, params) end)
      |> IO.inspect(label: "/api/v1/encrypt {mean, max, min} micro secs")

    assert mean_time_us < 500
  end
end

