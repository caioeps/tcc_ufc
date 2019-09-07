defmodule EncryptorTcp.Handler do
  require Logger

  def start_link(ref, socket, transport, opts) do
    pid = spawn_link(__MODULE__, :init, [ref, socket, transport, opts])
    {:ok, pid}
  end

  def init(ref, socket, transport, _opts = []) do
    :ok = :ranch.accept_ack(ref)

    case transport.peername(socket) do
      {:ok, _peer}     -> loop(socket, transport)
      {:error, reason} -> Logger.error("[tcp.handler] init receive error reason: #{inspect(reason)}")
    end
  end

  def loop(socket, transport) do
    case transport.recv(socket, 0, 5000) do
      {:ok, data} ->
        transport.send(socket, data)
        loop(socket, transport)
      _ ->
        :ok = transport.close(socket)
    end
  end
end
