defmodule Encryptor.Repo do
  use Ecto.Repo,
    otp_app: :encryptor,
    adapter: Ecto.Adapters.Postgres
end
