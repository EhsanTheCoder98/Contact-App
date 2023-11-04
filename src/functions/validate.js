const validate = (data) => {
    let error = "";
    if(!data.name.trim() || !data.lastName.trim()){
        error = "Enter Valid Name and LastName!";
    }
    else if(!/\S+@\S+\.\S+/.test(data.email)){
        error = "Enter Valid Email!"
    }
    else if(data.phoneNumber.length !== 11 || !(+data.phoneNumber)) {
        error = "Enter Valid Phone Number "
    }
    return error;
}

export default validate;