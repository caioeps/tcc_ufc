defmodule Encryptor.Application do
  def start(_type, _args) do
    children = [
    ]

    opts = [strategy: :one_for_one, name: Encryptor.Supervisor]

    Supervisor.start_link(children, opts)
  end
end
