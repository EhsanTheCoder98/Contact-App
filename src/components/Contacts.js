import React from "react";
import styles from "./Contacts.module.css"

const Contacts = ({ contact }) => {
  return (
    <div>
      {contact.map((contact) => 
        <div className={styles.container}>
          <span>{contact.name}</span>
          <span>{contact.lastName}</span>
          <span>{contact.email}</span>
          <span>{contact.phoneNumber}</span>
        </div>
      )}
    </div>
  );
};

export default Contacts;
