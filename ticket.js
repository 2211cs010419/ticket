const express = require("express");
const Ticket = require("../models/Ticket");

const router = express.Router();

// Create a new ticket
router.post("/", async (req, res) => {
  const { subject, description } = req.body;

  const newTicket = new Ticket({
    subject,
    description
  });

  try {
    const savedTicket = await newTicket.save();
    res.status(201).json(savedTicket);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all tickets
router.get("/", async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.status(200).json(tickets);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update ticket status
router.put("/:id", async (req, res) => {
  const { status } = req.body;

  try {
    const ticket = await Ticket.findByIdAndUpdate(req.params.id, { status, updatedAt: new Date() }, { new: true });
    res.status(200).json(ticket);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
