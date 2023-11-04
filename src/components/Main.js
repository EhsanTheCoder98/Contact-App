import React , {useState ,useEffect} from "react";
import styles from "./Main.module.css";
import validate from "../functions/validate";

const Main = () => {
    const [data,setData] = useState({
        name:"",
        lastName:"",
        email:"",
        phoneNumber: "" ,
    })
    const [error,setError] = useState("");

    useEffect(()=> {
        setError(validate(data))
        console.log(error)
    },[data])

    const changeHandler = (event) => {
        setData({...data , [event.target.name]:event.target.value})
        console.log(data.name)
    }
  return (
    <div className={styles.container}>
      <h2>Contact App</h2>
      <p>Save your Contacts here | Developed by Ehsan</p>
      <form className={styles.formContainer}>
        <div>
          <input type="text" placeholder="Name" name="name" value={data.name} onChange={changeHandler} />
          <input type="text" placeholder="Last Name" name="lastName" value={data.lastName} onChange={changeHandler}  />
        </div>
        <div>
          <input type="email" placeholder="Email" name="email" value={data.email} onChange={changeHandler} />
          <input type="phoneNumber" placeholder="PhoneNumber" name="phoneNumber" value={data.phoneNumber} onChange={changeHandler} />
        </div>
        {error ? <span>{error}</span> : <button>Add Contact</button>}
      </form>
    </div>
  );
};

export default Main;
