# Verdant Visions Landscaping 🌿

## Description

Verdant Visions Landscaping is a client-facing single-page application built with React, TypeScript and Material-UI, leveraging AWS WebSocket APIs for real-time quote submission. Users can explore portfolio galleries, review service offerings, and submit landscaping quote requests—receiving instant confirmation via WebSocket.

## Features

- **Portfolio Browsing**  
  View beautifully rendered garden and landscape designs in an image carousel.

- **Service Overview**  
  Learn about our offerings—landscape design, outdoor living spaces, irrigation.

- **Real-Time Quote Request**  
  Fill out a dynamic quote form; submit via WebSocket and get instant feedback.

- **Responsive Design**  
  Fully mobile-friendly layouts and navigation.

## Technologies Used

### Frontend

- **React**
- **TypeScript** (core pages, entry points, and WebSocket manager)
- **Material-UI** (custom theme, components)
- **React Router** (client-side routing)
- **WebSocket API** (custom `WebSocketManager.ts`)

### Backend Integration

> _(see serverless repo for full implementation)_

- AWS API Gateway (WebSocket)
- AWS Lambda
- AWS DynamoDB

## Installation

To run the project locally:

1. Clone the repository.
2. Navigate to the project directory.
3. Run the following commands:

\```bash
npm i
npm start
\```

## Usage

The interface allows users to visualize landscaping designs and schedule quotes seamlessly. Key features include:

- **Design Visualization**: Users can view proposed landscaping designs.
- **Appointment Scheduling**: Schedule quotes for landscaping services.

## Tech Stack

- **React**: Offers a sleek UI/UX.
- **AWS**: Powers the backend and infrastructure.
- **Serverless Architecture**: Ensures scalability and cost-efficiency.
- **Database Scalability**: Provides a scalable database solution.

## Links

- [Live Website](https://www.verdantvisionslandscaping.com/)
- [Live Admin Website](https://verdantvisionslandscapingadmin.com/)
