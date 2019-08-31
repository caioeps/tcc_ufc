defmodule EncryptorWeb.Router do
  use EncryptorWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api/v1/", EncryptorWeb.V1 do
    pipe_through :api

    post "/encrypt", EncryptionController, :encrypt
    post "/decrypt", DecryptionController, :decrypt
    post "/secret/generate", SecretController, :generate
  end
end
