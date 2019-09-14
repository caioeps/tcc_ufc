FROM elixir:1.9.1

ENV APP_DIR=/opt/app

RUN mix local.hex --force \
    && mix local.rebar --force \
    && mix hex.info

WORKDIR ${APP_DIR}

COPY . ${APP_DIR}

RUN mix local.hex --force

RUN mix deps.get

RUN mix do compile

CMD ["mix", "run", "-e", "'EncryptorTcp.Application.start(nil,nil)'", "--no-halt"]
