# This file is responsible for configuring your umbrella
# and **all applications** and their dependencies with the
# help of the Config module.
#
# Note that all applications in your umbrella share the
# same configuration and dependencies, which is why they
# all use the same configuration file. If you want different
# configurations or dependencies per app, it is best to
# move said applications out of the umbrella.
import Config

config :encryptor_tcp, :server,
  port: String.to_integer(System.get_env("TCP_PORT") || "4000")

config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]
