# Use a lightweight Python image
FROM python:3.8-slim-buster

# Set the working directory
WORKDIR /app

# Copy application files
COPY app/requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

# Copy the app code
COPY app/ .

# Run the Flask application
CMD [ "python3", "app.py" ]

