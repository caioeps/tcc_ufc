defmodule EncryptorWeb.V1.EncryptionView do
  use EncryptorWeb, :view

  def render("encrypt.json", %{ciphertext: ciphertext}) do
    %{ciphertext: ciphertext}
  end
end
