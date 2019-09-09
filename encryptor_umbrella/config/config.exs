# This file is responsible for configuring your umbrella
# and **all applications** and their dependencies with the
# help of Mix.Config.
#
# Note that all applications in your umbrella share the
# same configuration and dependencies, which is why they
# all use the same configuration file. If you want different
# configurations or dependencies per app, it is best to
# move said applications out of the umbrella.
use Mix.Config

# Configure Mix tasks and generators
config :encryptor,
  ecto_repos: [Encryptor.Repo]

config :encryptor_web,
  ecto_repos: [Encryptor.Repo],
  generators: [context_app: :encryptor]

config :encryptor_tcp, :server,
  port: String.to_integer(System.get_env("TCP_PORT") || "4444")

# Configures the endpoint
config :encryptor_web, EncryptorWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "atUsM4JH+fUJ9Qg/5Fj9T/Pn9Y9ONbSdV9y6lzCpi79XxueYLwxsuNWShtYrML/P",
  render_errors: [view: EncryptorWeb.ErrorView, accepts: ~w(json)],
  pubsub: [name: EncryptorWeb.PubSub, adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
