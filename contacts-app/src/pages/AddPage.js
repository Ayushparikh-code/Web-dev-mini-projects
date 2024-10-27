import React from "react";
import { addContact } from "../utils/api";
import ContactInput from "../components/ContactInput";
import { useNavigate } from "react-router-dom";

function AddPage() {
    const navigate = useNavigate();
    async function onAddContactHandler(contact) {
        await addContact(contact);
        navigate("/");
    }
    return (
        <section>
            <h2>Tambah Kontak</h2>
            <ContactInput addContact={onAddContactHandler} />
        </section>
    );
}
export default AddPage;
