#!/bin/bash
while ! nc -z mysqld 3306; do sleep 3; done
npm start