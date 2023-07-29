# Google Drive Risk Assessment Application (Backend)

The backend server for the Google Drive Risk Assessment Application. This server handles authentication with Google and communicates with the Google Drive API.

## Features

- Handles Google OAuth2 authentication
- Fetches and analyzes data from Google Drive
- Provides an endpoint to revoke the server's access to Google Drive

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed [Node.js](https://nodejs.org/)
- You have installed [MongoDB](https://www.mongodb.com/)
- You have a Google Developer account and access to the Google Drive API

## Installing Google Drive Risk Assessment Application (Backend)

To install the backend, follow these steps:


# Clone the repository
git clone https://github.com/ShameemSaifudeen/jarviot-challenge-full-stack.git

# Navigate into the cloned repository directory
cd <repository>/backend

# Install the dependencies with npm
npm install

To use the Google Drive Risk Assessment Application, follow these steps:


# Start the application
pnpm start


# Google Drive Risk Assessment Application (Backend)

The backend server for the Google Drive Risk Assessment Application. This server handles authentication with Google and communicates with the Google Drive API.

## Features

- Handles Google OAuth2 authentication
- Fetches and analyzes data from Google Drive
- Provides an endpoint to revoke the server's access to Google Drive

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed [Node.js](https://nodejs.org/)
- You have installed [MongoDB](https://www.mongodb.com/)
- You have a Google Developer account and access to the Google Drive API

## Installing Google Drive Risk Assessment Application (Backend)

To install the backend, follow these steps:


# Clone the repository
git clone https://github.com/ShameemSaifudeen/jarviot-challenge-full-stack.git

# Navigate into the cloned repository directory
cd <repository>/backend

# Install the dependencies with npm
npm install

To use the Google Drive Risk Assessment Application, follow these steps:


# Start the application
pnpm start

# Configuring Google Drive Risk Assessment Application (Backend)
Before you can run the server, you will need to set up your Google API credentials and MongoDB connection string:

Visit the Google Developer Console
Create a new project
Enable the Google Drive API for that project
Create OAuth2 credentials
Set the authorized redirect URIs to http://localhost:5000/oauth2callback
Save the Client ID and Client Secret, these will go in your .env file
Create a new MongoDB database and save the connection string, this will also go in your .env file
Rename .env.example to .env and fill in your Google API credentials and MongoDB connection string.
