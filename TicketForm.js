// TicketForm.js
import React, { useState } from "react";
import axios from "axios";

function TicketForm() {
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newTicket = { subject, description };

      // Send POST request to create the ticket
      const response = await axios.post("http://localhost:5000/api/tickets", newTicket);

      // Clear the input fields on successful submission
      setSubject("");
      setDescription("");

      alert("Ticket created successfully!");
      console.log("Created ticket:", response.data);
    } catch (error) {
      console.error("There was an error creating the ticket!", error);
      alert("Error creating the ticket. Please try again.");
    }
  };

  return (
    <div>
      <h1>Create New Ticket</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Ticket Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div>
          <textarea
            placeholder="Ticket Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create Ticket</button>
      </form>
    </div>
  );
}

export default TicketForm;
