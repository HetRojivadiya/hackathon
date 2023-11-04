from flask import Flask, jsonify, request
from flask_cors import CORS
import time
import os
import numpy as np
import cv2


app = Flask(__name__)
CORS(app)



reference_image_path = "./het2.jpeg"
reference_image = cv2.imread(reference_image_path, cv2.IMREAD_GRAYSCALE)

def authenticate_face(input_image):

    face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')
    faces = face_cascade.detectMultiScale(input_image, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))


    if len(faces) == 0:
        return False

   
    reference_face = cv2.resize(reference_image, (input_image.shape[1], input_image.shape[0]))
    similarity_score = np.mean(np.abs(input_image - reference_face))

    similarity_threshold = 135
    
    print(similarity_score)
    
    if similarity_score > similarity_threshold:
        return True
    else:
        return False

@app.route('/capture_and_authenticate', methods=['GET'])
def capture_and_authenticate():
   
    video_cap = cv2.VideoCapture(0)
    
    if not video_cap.isOpened():
        return jsonify(message="Failed to open webcam")
    
    ret, video_data = video_cap.read()
    
    if not ret:
        return jsonify(message="Failed to capture video frame")
    
    gray_frame = cv2.cvtColor(video_data, cv2.COLOR_BGR2GRAY)
    authenticated = authenticate_face(gray_frame)
    
    if authenticated:
        message = "Authenticated"
    else:
        message = "Authentication failed"
    
    video_cap.release()
    
    return jsonify(message=message)

if __name__ == '__main__':
    app.run(debug=True)
    

    
