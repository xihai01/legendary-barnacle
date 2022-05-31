# Sorting Sentences Alphabetically
This small program takes in a short story .txt file, sorts the sentences alphabetically, and writes the output to a new .txt. The purpose of this project was to gain more practice using a variety of concepts in JavaScript and Computer Science such as file I/O, sorting, automated testing, and running async code.

I assumed a sentence in this case ends with [., ! or ?]

## Tech Stack
This program is built on node v14.17.6

Mocha and Chai used for unit testing.

## Instructions
1. Fork and ```git clone git@github.com:xihai01/legendary-barnacle.git```
2. ```npm install``` (OPTIONAL: for running "npm test")
3. ```node index.js```
4. Result is stored in the ```data/result``` sub-directory

## Project Structure
index.js is the main program.

data folder stores the input (ShortStory.txt) and output in a sub-folder called result.

helpers is a folder containing helper functions for index.js such as file I/O, parsing and sorting functions.

test folder contains mocha and chai unit tests for the helper functions. Also contains a folder for mock data.
