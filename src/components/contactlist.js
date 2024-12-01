import React from "react";

import ContactCard from "./contactcard";
import { Link } from "react-router-dom";

const ContactList = (props) =>
{
    const deletecontacthandler = (id) => {
        props.getcontactid(id);
    };
    
    const renderContactList = props.contacts.map((contact) => {
        return(
            <ContactCard contact={contact} clickhandler = {deletecontacthandler} key = {contact.id}/>
        );
    });
    return (
        
        <div className="m">
        <h2 className="text"> Contact List
        </h2>
        <div>
        <div className="list"> {renderContactList} </div> 
        <Link to="/add">
        <button className="addbtn">Add Contact</button></Link>
        </div>
        </div>
    );
};
export default ContactList;