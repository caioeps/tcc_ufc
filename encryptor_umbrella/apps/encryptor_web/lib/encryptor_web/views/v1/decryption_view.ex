defmodule EncryptorWeb.V1.DecryptionView do
  use EncryptorWeb, :view

  def render("decrypt.json", %{decrypted_message: decrypted_message}) do
    %{decrypted_message: decrypted_message}
  end
end
