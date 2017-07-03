# CodeConnect
## Description  
Open Source Platform for Open Source Projects. Contributers are welcome!

## Install
    npm install

## Set up the Repo
You should create an .env file in the root directory with your arguments of

    MAILGUN_USERNAME =      'YOUR_MAILGUN_USERNAME'
    MAILGUN_PASSWORD =      'YOUR_MAILGUN_PASSWORD'

    GITHUB_CLIENT_ID =      'YOUR_GITHUB_CLIENT_ID'
    GITHUB_CLIENT_SECRET =  'YOUR_GITHUB_CLIENT_SECRET'
    CALLBACK =              'YOUR_CALLBACK_URL'

    DATABASE_URL =          'YOUR_POSTGRESQL_DB'
    SECRET =                'A_RANDOM_SECURITY_SECRET'

## Build
    npm run build

## Run Application
    node server.js

## Run Tests
    npm test

## Init DB
   knex migrate:latest

## Delete DB
   knex migrate:rollback

## Start Swagger Doc  
   swagger project edit



# SmokeTests

## Requirements
- PHP
- codeception
- selenium-server-standalone
- chromedriver
- phantomjs

## Install
    composer install

## Run commands
### Run selenium
    selenium-server -p 4444
### Add test
    php ./vendor/bin/codecept generate:cest acceptance Startpage/Slider
### All tests acceptance
    php ./vendor/bin/codecept run acceptance
### Single test
    php ./vendor/bin/codecept run acceptance Startpage/SliderCest 
###Params
    --env firefox --env chrome | --env mobile,firefox | --env mobilechrome
    --steps --xml --html -vvv 