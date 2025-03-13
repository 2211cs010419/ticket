import React from "react";
import TicketForm from "./components/TicketForm";
import TicketList from "./components/TicketList";

function App() {
  return (
    <div>
      <h1>Ticket Raising Platform</h1>
      <TicketForm />
      <TicketList />
    </div>
  );
}

export default App;
