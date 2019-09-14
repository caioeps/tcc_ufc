defmodule EncryptorTcp do
  use Application

  def start(_type, _args) do
    import Supervisor.Spec, warn: false

    children = [
      worker(EncryptorTcp.Server, [])
    ]

    opts = [strategy: :one_for_one, name: EncryptorTcp.Supervisor]
    Supervisor.start_link(children, opts)
  end
end
