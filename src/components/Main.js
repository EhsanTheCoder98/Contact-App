import React from "react";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <div className={styles.container}>
      <h2>Contact App</h2>
      <p>Save your Contacts here | Developed by Ehsan</p>
      <form className={styles.formContainer}>
        <div>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <div>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Add Contact</button>
      </form>
    </div>
  );
};

export default Main;
