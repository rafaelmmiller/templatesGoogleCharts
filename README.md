# Olympics MEAN Seed

This is an example app that I use as a very basic seed for MEAN Stack apps.

The original app is an example in a "Watch us build" video from CodeSchool
https://github.com/codeschool/OlympicsMEAN

Requires MongoDB server running

## Developing

```npm install``` to resolve dependencies

```npm install -g gulp``` to install Gulp globally

```npm run watch``` to start transpile watch. This command will read files under client/src and generate a single file under client/dist/bundle.js which should be included by index.html

Seed database: ```mongoimport --db olympics-dev --collection sports --type json --file server/sports-seed.json --jsonArray --drop```
