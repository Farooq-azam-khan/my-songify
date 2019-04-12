# cps406-iteration2and3
- This project with help people get to class 
- _visit here_:http://my-songify.herokuapp.com/

## TODO 
### Farooq 
- [x] Make a virtual environment for python 
- [x] install Flask 
- [x] setup Flask with routes
- [x] setup bootstrap 
- [x] setup heroku server for flask
- [x] implement functionality - json files for everything
    - [x] make songs, 
    - [x] playlist, 
    - [x] users
- [x] make a folder for tests 

### Kaniskan 
- work in the test folder, use `pytest` in that folder to run the tests.
- [x] make virtual env
- [x] read `http://flask.pocoo.org/docs/1.0/testing/`
- [x] writing proposals for test (20 tests?) 
    - [x] creating tests for databases  
    - [x] help *Farooq* with routes testing 
- [x] implement tests into python unittesting
- [x] create a report on which tests passsed and which failed

### Hafeez 
- [X] make virtual env
- [x] writing proposals for test (10 tests)

### Harun 
- [x] make virtual env 
- [x] design core layout of settings (Bootstrap)
- [x] parse `songs.jong` and display them on home page
### Avneet
- [X] make virtual env
- [x] writing proposals for test (10 tests)
- [X] make a logo 
- [X] make a favicon for the website 


## Setup (for local version)
- install python3.6
- install virtualenv with `pip3 install virtualenv`
- make a virtual environment for this project 
    - `virtualenv iteration2and3`
- `cd iteration2and3`
- `. Scripts/activate` (for git bash/windows) `source bin/activate` (for mac)
- `mkdir src`
- `cd src`
- `git clone [repo link] .`
- now you need to install all the requirements for this project. `pip3 install -r requirements.txt`
- `python application.py`(will start local server)
- if you want to turn debug on or off got the if condition and set debug to True/False, or simply run the bash script provided to you 

# Development (_For Grounp Members Only_)
- `git branch [your-branch-name]`
- `git checkout [your-branch-name]`
- work on your branch
- `git add .`
- `git commit -m "[your-message]"`
- `git push`
