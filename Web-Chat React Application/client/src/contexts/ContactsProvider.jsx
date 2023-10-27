import React, {useContext} from 'react'
import useLocalStorage from "../hooks/useLocalStorage"

const ContactsContext = React.createContext()

//for using the contacts
export function useContacts() {
  return useContext(ContactsContext)
}

export function ContactsProvider({children}) {

  // will have the list of contacts
  const [contacts, setContacts] = useLocalStorage('contacts', [])

  // function to create a new contact
  function createContact(id, name) {
    setContacts(prevContacts => {
      // appends the recieved id and name in the contacts list
      return [...prevContacts, {id,name}]
    })
  }

  return (
    <ContactsContext.Provider value={{contacts, createContact}}>
      {children}
    </ContactsContext.Provider>

  )
}
