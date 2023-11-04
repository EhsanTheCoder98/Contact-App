import React from "react";
import styles from "./Contacts.module.css"

const Contacts = ({ contact , deleteHandler }) => {
  return (
    <div>
      {contact.map((contact) => 
        <div key={contact.id} className={styles.container}>
          <span>{contact.name}</span>
          <span>{contact.lastName}</span>
          <span>{contact.email}</span>
          <span>{contact.phoneNumber}</span>
          <button onClick={()=>deleteHandler(contact.id)}>🗑️</button>
        </div>
      )}
    </div>
  );
};

export default Contacts;
