import React, { useState } from "react";
import Login from "./Login";
import useLocalStorage from "../hooks/useLocalStorage";
import Dashboard from "./Dashboard";
import { ContactsProvider } from "../contexts/ContactsProvider";
import { ConversationsProvider } from "../contexts/ConversationsProvider";
import { SocketProvider } from "../contexts/SocketProvider";

function App() {
  const [id, setId] = useLocalStorage("id");

  const dashboard = (
    // the dashboard has now access to the contacts and createContact function
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider id={id}>
          <Dashboard id={id} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
  );

  return id ? dashboard : <Login onIdSubmit={setId} />;
}

export default App;
