defmodule EncryptorWeb.V1.DecryptionControllerTest do
  use EncryptorWeb.ConnCase

  alias EncryptorWeb.BenchmarkCase

  test 'it returns a decrypted string', %{conn: conn} do
    message = "Hey, there!"
    key = Encryptor.generate_secret

    ciphertext = Encryptor.encrypt(message, key)

    params = %{ciphertext: ciphertext, key: key}

    json_body = post(conn, "/api/v1/decrypt", params)
                |> json_response(200)

    %{"decrypted_message" => decrypted_message} = json_body

    assert message == decrypted_message
  end

  @tag :performance
  test "it is fast", %{conn: conn} do
    message = "Hey, there!"
    key = Encryptor.generate_secret

    ciphertext = Encryptor.encrypt(message, key)

    endpoint = "api/v1/decrypt"
    params = %{ciphertext: ciphertext, key: key}

    {mean_time_us, _, _} =
      BenchmarkCase.measure(4000, fn -> post(conn, endpoint, params) end)
      |> IO.inspect(label: "/api/v1/decrypt {mean, max, min} micro secs")

    assert mean_time_us < 500
  end
end
