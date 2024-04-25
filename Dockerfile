FROM oven/bun:latest

WORKDIR /

COPY / /

RUN apt-get update && apt-get install unzip

RUN bun upgrade

RUN bun i

EXPOSE 3000

CMD bun run start
