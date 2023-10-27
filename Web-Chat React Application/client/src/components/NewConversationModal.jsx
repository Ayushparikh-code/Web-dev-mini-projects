import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useContacts } from "../contexts/ContactsProvider";
import { useConversations } from "../contexts/ConversationsProvider";

export default function NewConversationModal({ closeModal }) {
  const [selectedContactIds, setSelectedContactIds] = useState([]);
  const { contacts } = useContacts();
  const { createConversation } = useConversations();

  function handleSubmit(e) {
    e.preventDefault();
    createConversation(selectedContactIds);
    closeModal();
  }

  function handleCheckboxChange(contactId) {
    // selectedContactIds is initialized as an empty array, so it checks whether the selected id is alrealy in the list or not
    setSelectedContactIds((prevSelectedContactIds) => {
      // if it is already present then we will remove it from the list
      if (prevSelectedContactIds.includes(contactId)) {
        return prevSelectedContactIds.filter((prevId) => {
          return contactId !== prevId;
        });
      } else {
        // add to the list if not present
        return [...prevSelectedContactIds, contactId];
      }
    });
  }

  return (
    <>
      <Modal.Header closeButton>Create Conversation</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {contacts.map((contact) => (
            <Form.Group controlId={contact.id} key={contact.id}>
              <Form.Check
                type="checkbox"
                // value of value will be true or false depending on whether the selected contact is checked or not, this is for checkbox
                value={selectedContactIds.includes(contact.id)}
                label={contact.name}
                onChange={() => handleCheckboxChange(contact.id)}
              />
            </Form.Group>
          ))}
          <Button type="submit" className="mt-3">
            Create
          </Button>
        </Form>
      </Modal.Body>
    </>
  );
}
