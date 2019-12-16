FROM mongo:4

VOLUME [ "memobank" ]

EXPOSE "27018:27017"

ENV MONGO_INITDB_ROOT_USERNAME=mongoadmin
ENV MONGO_INITDB_ROOT_PASSWORD=secret