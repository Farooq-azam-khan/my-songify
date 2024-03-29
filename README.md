# My-Songify

- This is a spotify like app with the aim of look at key featured need for a full stack application
- the frontend design has been created with [figma](https://www.figma.com/file/vF4gHRFNkWgm7omPB28KiC/my-songify?node-id=0%3A1)
- the database relationship has been created with [lucid charts](https://www.lucidchart.com/invitations/accept/6d2a65f2-4727-43d7-926f-83f41a4d722b)
- [trello board](https://trello.com/b/2fcmBsSB/my-songify) is used to keep track of new feature to be added


## Software

- backend with _Flask_,
  - ORM used is _flask-sqlalchmey_
    - postgresql for production database
    - mysqlite3 database for testing
  - testing backend code with _pytest_
- frontend is designed with _ReactJS_
  - _MaterialUi_ is used for design components
  - testing with _jest_
- git/github is used for code management

### Port to new Software
- backend with __FAST API__
  - ORM: _sqlalchemy_
  - postgres for production db
  - sqlite3 (in memory) for testing
  - make sure to use fastapi cors so that there is a backend server and a frontend server 
- __Elm__ for frontend language
- __TailwindCSS__ for css framework 
- __elm-test__ 


## Points of Reserach and external articles

- look into elasticsearch for python
- [portable version of sqlite view](https://sqlitebrowser.org/dl/)
- [pushing to non master branch on heroku](https://devcenter.heroku.com/articles/git#deploying-code)

## pushing for production
- make sure the build file is deleted from `app/static/`
1. run `build_and_export.sh` file located at `app/main/template/fe`
  - the above file does the following three steps
  1. build tailwindcss for production (by purgin classes that are not used).
    - makesure in `tailwind.config.js` the `purge.enabled` value is set to `true`.
    - run `npm run build:tailwind`
  2. compile react to a production build `npm run build`.
  3. move the build file to `app/static/` file. 
2. update the `js` and `css` files in `app/main/template/index.html` file. 
