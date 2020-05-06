- the frontend design has been created with (figma)[https://www.figma.com/file/vF4gHRFNkWgm7omPB28KiC/my-songify?node-id=0%3A1]
- the database relationship has been created with (lucid charts)[https://www.lucidchart.com/documents/edit/69a13cda-0404-4bc9-97b4-cb54c51648e4/0_0?beaconFlowId=A7414A00E528135C#?folder_id=home&browser=icon] 
- (trello board)[https://trello.com/b/2fcmBsSB/my-songify] is used to keep track of new feature to be added

## Software

- backend with _Flask_,
  - ORM used is _flask-sqlalchmey_
    - postgresql for production database
    - mysqlite3 database for testing 
  - testing backend code with _pytest_
- frontend is designed with _ReactJS_
  - _MaterialUi_ is used for design components
  - testing with _jest_

## Migrating the Database
1. create the migration directory: `flask db init`
2. create the migration tables: `flask db migrate -m "message"`
3. update the migration tables: `flask db upgrade`


## Points of Reserach and external articles
- look into elasticsearch for python
- (react router with material ui)[https://medium.com/@unionproject88/react-material-ui-drawer-with-routes-8e27c91b6119]
