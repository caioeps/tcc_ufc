defmodule EncryptorWeb.V1.SecretView do
  use EncryptorWeb, :view

  def render("generate.json", %{secret: secret}) do
    %{secret: secret}
  end
end
