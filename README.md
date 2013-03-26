jsPhpFileIO
===========

This is some kind of a js-php framework
which allowes you to read and write files
from javascript with no php knowledge.

##########

The three functions:

->fileWrite:

it has two parameters:
-(string) name of file
-(string) to write

it returns a confirmation about the success of the write:

example:
var confirmation = fileWrite("somefile.txt", "Some text to write");

in case of success confirmation would contain:
'Some text to write' written into 'somefile.txt'

----------

->fileAppend:

it has two parameters:
-(string) name of file
-(string) to append to the end of the file

example:
var confirmation = fileWrite("somefile.txt", "\r\nSome more text to append");

["\r\n" is for a new line]

in case of success confirmation would contain:
'Some text to write' written into 'somefile.txt'

----------

->fileRead:

it has one parameter:
-(string) name of file to read

example:
var fileText = fileRead("somefile.txt");

in case of success fileText would conatain:
Some text to write
Some more text to append
