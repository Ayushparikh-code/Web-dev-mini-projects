import React, { useContext, useEffect, useState } from "react";
import ContactList from "../components/ContactList";
import { deleteContact } from "../utils/api";
import { getContacts } from "../utils/api";
import SearchBar from "../components/SearchBar";
import { useParams, useSearchParams } from "react-router-dom";
import LocaleContext, { LocaleConsumer } from "../contexts/LocaleContext";

function HomePage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [contacts, setContacts] = useState([]);
    const [keyword, setKeyword] = useState(() => {
        return searchParams.get(keyword) || "";
    });
    const { locale } = useContext(LocaleContext);
    useEffect(() => {
        getContacts().then(({ data }) => {
            setContacts(data);
        });
    }, []);
    async function onDeleteHandler(id) {
        await deleteContact(id);

        // update th contact state from network.js
        const { data } = await getContacts();
        setContacts(data);
    }
    function onKeywordChangeHandler(keyword) {
        setKeyword(keyword);
        setSearchParams({ keyword });
    }
    const filteredContact = contacts.filter((contact) => {
        return contact.name.toLowerCase().includes(keyword.toLowerCase());
    });
    return (
        <section>
            <SearchBar
                keyword={keyword}
                keywordChange={onKeywordChangeHandler}
            />
            <h2>{locale === "id" ? "Daftar Kontak" : "Contacts List"}</h2>
            <ContactList
                contacts={filteredContact}
                onDelete={onDeleteHandler}
            />
        </section>
    );
}

export default HomePage;

// function HomePageWrapper() {
//     const [searchParams, setSearchParams] = useSearchParams();
//     const keyword = searchParams.get("keyword");
//     function changeSearchParams(keyword) {
//         setSearchParams({ keyword });
//     }
//     return (
//         <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
//     );
// }
// class HomePage extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             contact: [],
//             keyword: this.props.defaultKeyword || "",
//         };
//         this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
//         this.onDeleteHandler = this.onDeleteHandler.bind(this);
//     }

//     onKeywordChangeHandler(keyword) {
//         this.setState(() => {
//             console.log(this.state.keyword);
//             return { keyword };
//         });
//         this.props.keywordChange(keyword);
//     }
//     async onDeleteHandler(id) {
//         await deleteContact(id);
//         const { data } = await getContacts();
//         // update contact
//         this.setState(() => {
//             return {
//                 contact: data,
//             };
//         });
//     }
//     async componentDidMount() {
//         const { data } = await getContacts();
//         this.setState(() => {
//             return {
//                 contact: data,
//             };
//         });
//     }
//     render() {
//         const contacts = this.state.contact.filter((contact) => {
//             return contact.name
//                 .toLowerCase()
//                 .includes(this.state.keyword.toLowerCase());
//         });
//         return (
//             <LocaleConsumer>
//                 {({ locale }) => {
//                     return (
//                         <section>
//                             <SearchBar
//                                 keyword={this.state.keyword}
//                                 keywordChange={this.onKeywordChangeHandler}
//                             />
//                             <h2>
//                                 {locale === "id"
//                                     ? "Daftar kontak"
//                                     : "Contact list"}
//                             </h2>
//                             <ContactList
//                                 contacts={contacts}
//                                 onDelete={this.onDeleteHandler}
//                             />
//                         </section>
//                     );
//                 }}
//             </LocaleConsumer>
//         );
//     }
// }
// export default HomePageWrapper;
