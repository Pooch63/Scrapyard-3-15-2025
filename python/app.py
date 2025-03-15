from flask import Flask, render_template, jsonify
import json
from flask_cors import CORS


app = Flask(__name__, template_folder='../hi', static_folder='../static')
CORS(app)

@app.route('/')
def index():
    print('flask running')
    return render_template('index.html')

@app.route("/get_vid")
def get_vid():
    # Open the JSON file and load its data
    with open('course.json', 'r') as file:
        data = json.load(file)
    vid = data['course']['modules'][0]['lessons'][0]
    print(vid)
    return jsonify(vid)

@app.route("/get_quiz1")
def get_quiz1():
    # Open the JSON file and load its data
    with open('course.json', 'r') as file:
        data = json.load(file)
    quiz = data['course']['modules'][0]['lessons'][1]
    print(quiz)
    return jsonify(quiz)

@app.route("/get_article")
def article():
    # Open the JSON file and load its data
    with open('course.json', 'r') as file:
        data = json.load(file)
    vid = data['course']['modules'][0]['lessons'][2]
    print(vid)
    return jsonify(vid)

@app.route("/get_quiz2")
def get_quiz2():
    # Open the JSON file and load its data
    with open('course.json', 'r') as file:
        data = json.load(file)
    quiz = data['course']['modules'][0]['lessons'][3]
    print(quiz)
    return jsonify(quiz)

if __name__ == '__main__':
    app.run(debug=True)