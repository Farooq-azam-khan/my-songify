# cps406-iteration2and3
- This project with help people get to class 
- _visit here_:http://my-songify.herokuapp.com/

## TODO 
### Farooq 
- [x] Make a virtual environment for python 
- [x] install Flask 
- [ ] setup Flask with routes
- [x] setup bootstrap 
- [x] setup heroku server for flask
- [ ] implement functionality - json files for everything
    - [ ] make songs, 
    - [ ] playlist, 
    - [ ] users
- [x] make a folder for tests 

### Kaniskan 
- work in the test folder, use `pytest` in that folder to run the tests.
- [ ] make virtual env
- [ ] read `http://flask.pocoo.org/docs/1.0/testing/`
- [ ] writing proposals for test (30 tests?) 
    - [ ] creating tests for databases 
    - [ ] help *Hafeez* with selenium testing 
    - [ ] help *Farooq* with routes testing 
- [ ] implement tests into python unittesting
- [ ] create a report on which tests passsed and which failed

### Hafeez 
- [ ] make virtual env
- [ ] writing proposals for test (10 tests)
    - [ ] write tests for selenium (if we have JS)

### Harun 
- [x] make virtual env
- [ ] design core layout of settings (Bootstrap)
- [ ] parse `songs.jong` and display them on home page
### Avneet
- [X] make virtual env
- [ ] writing proposals for test (10 tests)
- [X] make a logo 
- [X] make a favicon for the website 
- [ ] think of design layout 


## Setup (for local version)
- install python 
- install virtualenv with `pip install virtualenv`
- make a virtual environment for this project 
    - `virtualenv iteration2and3`
- `cd iteration2and3`
- `. Scripts/activate` (for git bash/windows) `source bin/activate` (for mac)
- `mkdir src`
- `cd src`
- `git clone [repo link] .`
- now you need to install all the requirements for this project. `pip install -r requirements.txt`
- `python application.py`(will start local server)
- if you want to turn debug on or off got the if condition and set debug to True/False, or simply run the bash script provided to you 

# Development (_For Grounp Members Only_)
- `git branch [your-branch-name]`
- `git checkout [your-branch-name]`
- work on your branch
- `git add .`
- `git commit -m "[your-message]"`
- `git push`
          
