FROM loadimpact/k6
RUN mkdir src
WORKDIR /src

COPY . .

# RUN k6 run importer.js


