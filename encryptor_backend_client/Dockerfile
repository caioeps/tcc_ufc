FROM ruby:2.6.3-alpine

ENV APP_DIR=/opt/app/

WORKDIR ${APP_DIR}

COPY Gemfile ${APP_DIR}
COPY Gemfile.lock ${APP_DIR}

# For caching gems.
ENV BUNDLE_PATH=/bundle \
    BUNDLE_BIN=/bundle/bin \
    GEM_HOME=/bundle

ENV PATH="${BUNDLE_BIN}:${PATH}"

RUN apk update \
    && apk add \
    openssl \
    tar \
    build-base \
    tzdata \
    postgresql-dev \
    postgresql-client

COPY ./scripts/docker-entrypoint /docker-entrypoint

RUN chmod +x /docker-entrypoint

ENTRYPOINT ["/docker-entrypoint"]

COPY . $APP_HOME

EXPOSE 3000
