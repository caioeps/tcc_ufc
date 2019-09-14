defmodule EncryptorTcp.Protocol do
  def handle_data(line) do
    clean_line = cleanup_line(line)

    case clean_line do
      "" ->
        ""
      _ ->
        tranform_line_to_payload(clean_line)
        |> handle_payload
    end
  end

  def cleanup_line(line), do: String.trim(line)

  defp tranform_line_to_payload(line) do
    String.trim(line)
    |> String.split(";", parts: 3)
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
