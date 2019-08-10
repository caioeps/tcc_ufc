defmodule EncryptorWeb.Router do
  use EncryptorWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", EncryptorWeb do
    pipe_through :api
  end
end
