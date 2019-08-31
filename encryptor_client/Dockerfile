FROM ruby:2.6.3-alpine

ENV APP_DIR=/opt/app/

WORKDIR ${APP_DIR}

RUN apk update \
    && apk add openssl \
               tar \
               build-base \
               tzdata \
               postgresql-dev \
               postgresql-client \
               bind-tools

COPY . $APP_HOME

# For caching gems.
ENV BUNDLE_PATH=/bundle \
    BUNDLE_BIN=/bundle/bin \
    GEM_HOME=/bundle

ENV PATH="${BUNDLE_BIN}:${PATH}"

COPY Gemfile ${APP_DIR}
COPY Gemfile.lock ${APP_DIR}

RUN bundle install --binstubs="$BUNDLE_BIN"

EXPOSE 3000

