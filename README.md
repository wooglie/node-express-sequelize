#NESS

#####It is a typescript startup project built of node.js, express, sequelize & socket.io

####CLI

```javascript
yarn archive // create archive from develop
yarn build // build project
yarn bootstrap // bootstrap project (yarn install && yarn env)
yarn env <production|staging|development|local> // create env varibles
yarn start // starts the app (default on 8080)
yarn watch // rebuild and run on every code change
yarn debug // same as watch but also debug socket.io
yarn watch-ts // build on file change
yarn watch-node // run app on new build
yarn db:create <db name>// create new database
yarn db:create:migration // create migration based of off template
yarn db:create:seed // create seed based of off template
yarn db:drop <db name>// drop database
yarn db:migrate <db name>// migrate database
yarn db:migrate:undo <db name>// undo last migration
yarn db:seed <db name>// seed database
yarn db:seed:undo <db name>// undo last seed
yarn db:scrub <db name>// clean database
```

####Getting started
#####1. Clone the repo
#####2. Adjust `env.yml` to you needs
#####3. `yarn bootstrap`
#####4. `yarn db:create <db name>`
#####5. `yarn db:migrate <db name>`
#####6. `yarn db:seed <db name>`
#####7. `yarn build`
#####8. `yarn start`
