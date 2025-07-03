// server.js

// Import required modules
const express = require('express');
const cors = require('cors');

// Initialize the express application
const app = express();
const PORT = 3001; // Port for the backend server to run on

// --- Middleware ---

// Enable CORS (Cross-Origin Resource Sharing) to allow our frontend to communicate with this backend
app.use(cors());

// Enable the express app to parse JSON formatted request bodies
app.use(express.json());

// --- API Endpoint ---

/**
 * @route   POST /api/apply
 * @desc    Receives a new merchant cash advance application
 * @access  Public
 */
app.post('/api/apply', (req, res) => {
    console.log('✅ New application received at /api/apply');
    
    // The form data sent from the frontend will be in the request body (req.body)
    const applicationData = req.body;

    // --- Data Processing (Placeholder) ---
    // For now, we'll just log the data to the console to confirm it's working.
    // In a real application, you would:
    // 1. Validate the data thoroughly.
    // 2. Save the data to a database (like PostgreSQL or MongoDB).
    // 3. Handle the file uploads (e.g., save them to AWS S3).
    // 4. Send an email notification to your team.
    
    console.log('--- Application Data ---');
    console.log(applicationData);
    console.log('------------------------');

    // --- Response ---
    // Send a success response back to the frontend
    res.status(200).json({ 
        status: 'success', 
        message: 'Application received successfully!',
        data: applicationData // Echo the data back for confirmation
    });
});

// --- Start the Server ---

// Make the server listen for requests on the specified port
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
    console.log('Waiting for applications...');
});
