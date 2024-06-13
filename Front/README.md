
# API Documentation

## Introduction

This API provides endpoints to retrieve user data, user activity, user performance, and user average sessions. It supports both mock data and real backend data for development and production environments.

## Base URL

http://localhost:3000/user

## Endpoints

### Get User

- **Endpoint**: `/user/{userId}`
- **Method**: `GET`
- **Parameters**: `userId` 
- **Description**: Fetches user details by user ID.
- **Example Request**: 

  GET http://localhost:3000/user/12

- **Example Response**:

json
  {
    "id": 12,
    "firstName": "Karl",
    "lastName": "Dovineau",
    "age": 31,
    "score": 0.12,
    "keyData": {
      "calorieCount": 1930,
      "proteinCount": 155,
      "carbohydrateCount": 290,
      "lipidCount": 50
    }
  }

### Get User Activity

- **Endpoint**: `/user/{userId}/activity`
- **Method**: `GET`
- **Parameters**: `userId` 
- **Description**: Fetches user activity by user ID.
- **Example Request**: 

  GET http://localhost:3000/user/12/activity

- **Example Response**:
json
  [
    {
      "day": "2020-07-01",
      "kilogram": 80,
      "calories": 240
    },
    ...
  ]

### Get User Performance

- **Endpoint**: `/user/{userId}/performance`
- **Method**: `GET`
- **Parameters**: `userId` 
- **Description**: Fetches user performance by user ID.
- **Example Request**: 

  GET http://localhost:3000/user/12/performance

- **Example Response**:

json
  {
    "userId": 12,
    "kind": {
      "1": "cardio",
      "2": "energy",
      ...
    },
    "data": [
      {
        "value": 80,
        "kind": 1
      },
      ...
    ]
  }

### Get User Average Sessions

- **Endpoint**: `/user/{userId}/average-sessions`
- **Method**: `GET`
- **Parameters**: `userId` 
- **Description**: Fetches user average sessions by user ID.
- **Example Request**: 

  GET http://localhost:3000/user/12/average-sessions

- **Example Response**:
  
  json
  {
    "userId": 12,
    "sessions": [
      {
        "day": 1,
        "sessionLength": 30
      },
      ...
    ]
  }

## Error Handling

Errors are returned with appropriate HTTP status codes. Common errors include:

- `404 Not Found`: The requested user or data does not exist.
- `500 Internal Server Error`: An error occurred on the server.

Example error response:

json
{
  "error": "Error retrieving user",
  "message": "Oups! Aucun utilisateur a cet id! Status: 404"
}
