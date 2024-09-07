const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.error("Error Connecting to MongoDB:", error);
});

// Define Appointment Schema
const appointmentSchema = new mongoose.Schema({
    date: Date,
    time: String,
    name: String,
    job: String
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

// API Endpoint to Save Appointments to MongoDB
app.post('/api/appointments', async (req, res) => {
    try {
        const appointments = req.body; // Ensure req.body contains an array of appointment objects
        const savedAppointments = await Appointment.insertMany(appointments);
        console.log('Appointments saved to MongoDB:', savedAppointments);
        res.status(201).json(savedAppointments);
    } catch (error) {
        console.error('Error saving appointments to MongoDB:', error);
        res.status(500).json({ error: 'Failed to save appointments to MongoDB' });
    }
});

// Start Server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
