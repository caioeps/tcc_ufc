FROM elixir:1.9.1

ENV APP_DIR=/opt/app

RUN mix local.hex --force \
    && mix local.rebar --force \
    && mix hex.info

RUN mix archive.install hex phx_new 1.4.9 --force

WORKDIR ${APP_DIR}

