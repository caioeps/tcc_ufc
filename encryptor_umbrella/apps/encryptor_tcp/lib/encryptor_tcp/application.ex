defmodule EncryptorTcp.Application do
  @moduledoc false

  use Application

  def start(_type, _args) do
    # Get configuration
    config = Application.get_env(:encryptor_tcp, :server)

    children = [
      # Add it to supervison tree
      {EncryptorTcp.RanchServer, config}
    ]

    opts = [strategy: :one_for_one, name: EncryptorTcp.Supervisor]
           |> IO.inspect
    Supervisor.start_link(children, opts)
  end
end
