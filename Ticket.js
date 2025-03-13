// ticketModel.js (or wherever you define your schema)
const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true, // Make sure the subject is required
  },
  description: {
    type: String,
    required: true, // Make sure the description is required
  },
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
