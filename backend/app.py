from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
from PIL import Image
import io
import random
import os

app = Flask(__name__)

# CORS configuration for production
CORS(app, resources={
    r"/api/*": {
        "origins": [
            "http://localhost:3000",
            "https://*.vercel.app",
            "https://*.railway.app"
        ],
        "methods": ["GET", "POST", "OPTIONS"],
        "allow_headers": ["Content-Type"]
    }
})

# Simulated AI model predictions (replace with real model in production)
SKIN_CONDITIONS = [
    {'name': 'Benign Nevus', 'risk': 'low'},
    {'name': 'Basal Cell Carcinoma', 'risk': 'medium'},
    {'name': 'Melanoma', 'risk': 'high'},
    {'name': 'Seborrheic Keratosis', 'risk': 'low'},
    {'name': 'Hemangioma', 'risk': 'low'}
]

XRAY_CONDITIONS = [
    {'name': 'Normal', 'risk': 'low'},
    {'name': 'Bacterial Pneumonia', 'risk': 'high'},
    {'name': 'Viral Pneumonia', 'risk': 'medium'},
    {'name': 'Mild Inflammation', 'risk': 'low'}
]

def analyze_image(image_data, analysis_type):
    """
    Simulated AI analysis. In production, replace with:
    - TensorFlow/PyTorch model inference
    - Pre-trained medical imaging models
    - Proper image preprocessing
    """
    # Simulate processing time
    import time
    time.sleep(1)
    
    if analysis_type == 'skin':
        condition = random.choice(SKIN_CONDITIONS)
        confidence = random.randint(75, 98)
        details = f"Detected characteristics of {condition['name']}. Further professional medical examination is recommended to confirm diagnosis."
    else:  # xray
        condition = random.choice(XRAY_CONDITIONS)
        confidence = random.randint(80, 97)
        details = f"X-ray imaging shows signs of {condition['name']}. Please consult a doctor for detailed evaluation."
    
    return {
        'prediction': condition['name'],
        'confidence': confidence,
        'risk_level': condition['risk'],
        'details': details
    }

@app.route('/api/analyze', methods=['POST'])
def analyze():
    try:
        if 'image' not in request.files:
            return jsonify({'error': 'No image uploaded'}), 400
        
        file = request.files['image']
        analysis_type = request.form.get('type', 'skin')
        
        # Read and process image
        image_bytes = file.read()
        image = Image.open(io.BytesIO(image_bytes))
        
        # Convert to RGB if necessary
        if image.mode != 'RGB':
            image = image.convert('RGB')
        
        # Resize for model input (typical size for medical imaging models)
        image = image.resize((224, 224))
        
        # Perform analysis
        result = analyze_image(image, analysis_type)
        
        return jsonify(result)
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/health', methods=['GET'])
def health():
    return jsonify({'status': 'healthy', 'message': 'MediScan AI Backend is running'})

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    debug = os.environ.get('FLASK_ENV', 'production') == 'development'
    app.run(debug=debug, host='0.0.0.0', port=port)
