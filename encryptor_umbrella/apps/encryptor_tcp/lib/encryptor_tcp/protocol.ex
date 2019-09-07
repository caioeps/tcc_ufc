defmodule EncryptorTcp.Protocol do
  def handle_data(line) do
    tranform_line_to_payload(line)
    |> handle_payload
  end

  defp tranform_line_to_payload(line) do
    String.split(line, ";", parts: 3)
    |> Enum.map(fn s -> String.split(s, ":", parts: 2) end)
    |> Enum.map(fn [k,v] -> {k,v} end)
    |> Map.new
  end

  defp handle_payload(%{"action" => action, "key" => key, "data" => data}) do
    case action do
      "encrypt" -> Encryptor.encrypt(data, key)
      "decrypt" -> Encryptor.decrypt(data, key)
    end
  end
end
