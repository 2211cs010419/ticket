// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

// Use middleware
app.use(cors());  // Enable CORS
app.use(bodyParser.json());  // Parse JSON bodies

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/ticketSystem", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Define the Ticket schema
const ticketSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true, // Make sure subject is required
  },
  description: {
    type: String,
    required: true, // Make sure description is required
  },
});

// Create the Ticket model
const Ticket = mongoose.model("Ticket", ticketSchema);

// Route to create a new ticket
app.post("/api/tickets", async (req, res) => {
  try {
    const { subject, description } = req.body;

    // Create a new ticket document
    const newTicket = new Ticket({ subject, description });
    await newTicket.save();

    res.status(201).json(newTicket);  // Respond with the created ticket
  } catch (error) {
    console.error("Error creating ticket:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to fetch all tickets
app.get("/api/tickets", async (req, res) => {
  try {
    const tickets = await Ticket.find(); // Fetch all tickets from the database
    res.status(200).json(tickets);
  } catch (error) {
    console.error("Error fetching tickets:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
