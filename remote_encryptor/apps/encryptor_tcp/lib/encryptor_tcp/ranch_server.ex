defmodule EncryptorTcp.RanchServer do
  use GenServer

  alias EncryptorTcp.Handler

  require Logger

  def start_link(args) do
    GenServer.start_link(__MODULE__, args, name: __MODULE__)
  end

  def init(port: port) do
    opts = [{:port, port}]

    {:ok, pid} = :ranch.start_listener(:encryptor_tpc, :ranch_tcp, opts, Handler, [])

    Logger.info(fn ->
      "Listening for connections on port #{port}"
    end)

    {:ok, pid}
  end
end
