from flask import Flask, render_template, request, url_for
import socket
import sys
import json


#start flask server
app =Flask(__name__)

'''
@app.route("/")
def hello():
        return "Hello World!"
'''


if __name__ == "__main__":
        app.run()

#get current user
import getpass
current_user = getpass.getuser()

#get current song playing
import spotilib
current_artist = spotilib.artist()
current_song = spotilib.song()

#get player id


#listen and receive request from client
@application.route('/getgameinfo')
def getgameinfo():
        url = 'http://localhost:3000'





#store data received in json format


#handling session









