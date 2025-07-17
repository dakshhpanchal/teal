FROM golang:1.22 AS builder

WORKDIR /app
COPY . .

RUN go mod tidy && go build -o teal

FROM debian:bullseye-slim

RUN apt-get update && apt-get install -y ca-certificates && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY --from=builder /app/teal .

CMD ["./teal"]
