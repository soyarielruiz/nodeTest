FROM mysql:5.7

ENV MYSQL_ROOT_PASSWORD qwerty123
ENV MYSQL_DATABASE fizzmod
ENV MYSQL_PASSWORD qwerty123
ENV MYSQL_USER user
ENV MYSQL_PASSWORD qwerty123
ENV DATABASE_HOST db

ADD seeder.sql /docker-entrypoint-initdb.d

RUN chown -R mysql:root /var/lib/mysql/