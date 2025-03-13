// TicketList.js
import React, { useEffect, useState } from "react";
import axios from "axios";

function TicketList() {
  const [tickets, setTickets] = useState([]);

  // Fetch tickets from the server
  const fetchTickets = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/tickets");
      setTickets(response.data);
    } catch (error) {
      console.error("Error fetching tickets:", error);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  return (
    <div>
      <h1>All Tickets</h1>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket._id}>
            <h2>{ticket.subject}</h2>
            <p>{ticket.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TicketList;
