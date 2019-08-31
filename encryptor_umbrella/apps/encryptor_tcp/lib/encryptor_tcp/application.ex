defmodule EncryptorTcp.Application do
  def start(_type, _args) do
    port = String.to_integer(System.get_env("PORT") || raise "missing $PORT environment variable")

    children = [
      {Task.Supervisor, name: EncryptorTcp.TaskSupervisor},
      Supervisor.child_spec({Task, fn -> EncryptorTcp.accept(port) end}, restart: :permanent)
    ]

    opts = [strategy: :one_for_one, name: EncryptorTcp.Supervisor]
    Supervisor.start_link(children, opts)
  end
end
