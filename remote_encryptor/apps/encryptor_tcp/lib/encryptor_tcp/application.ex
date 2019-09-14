defmodule EncryptorTcp.Application do
  @moduledoc false

  use Application

  def start(_type, _args) do
    config = Application.get_env(:encryptor_tcp, :server)

    children = [
      {EncryptorTcp.RanchServer, config}
    ]

    opts = [strategy: :one_for_one, name: EncryptorTcp.Supervisor]

    Supervisor.start_link(children, opts)
    |> IO.inspect
  end
end
