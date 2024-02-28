import React, { useState, useEffect } from "react";
import styles from "./Main.module.css";
import validate from "../functions/validate";
import Contacts from "./Contacts";
import { v4 } from "uuid";

const Main = () => {
  const [contacts, setContacts] = useState([]);
  const [alert, setAlert] = useState("");
  const [data, setData] = useState({
    id: "",
    name: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem("contacts")) || [];
    setContacts(storedContacts);
  }, []);

  useEffect(() => {
    setError(validate(data));
  }, [data]);

  const changeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (!error) {
      setContacts((contacts) => [...contacts, newData]);
      const newData = { ...data, id: v4() };
      localStorage.setItem("contacts", JSON.stringify([...contacts, newData]));
      setData({
        name: "",
        lastName: "",
        email: "",
        phoneNumber: "",
      });
      setAlert("");
    } else {
      setAlert(error);
    }
  };
  const deleteHandler = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
    localStorage.setItem("contacts", JSON.stringify(newContacts));
  };
  return (
    <div className={styles.container}>
      <h2>Contact App</h2>
      <p>Save your Contacts here | Developed by Ehsan</p>
      <form className={styles.formContainer} onSubmit={submitHandler}>
        <div>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={data.name}
            onChange={changeHandler}
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={data.lastName}
            onChange={changeHandler}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={data.email}
            onChange={changeHandler}
          />
          <input
            type="phoneNumber"
            placeholder="PhoneNumber"
            name="phoneNumber"
            value={data.phoneNumber}
            onChange={changeHandler}
          />
        </div>
        {alert && <span>{alert}</span>}
        <button>Add Contact</button>
      </form>
      {<Contacts contact={contacts} deleteHandler={deleteHandler} />}
    </div>
  );
};

export default Main;
