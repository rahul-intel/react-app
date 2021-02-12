import { useEffect, useState } from 'react';
import  axios from "axios";

function Contact() {
    const [ fname, setFname ] = useState('');
    const [ lname, setLname ] = useState('');
    const [ email, setEmail ] = useState('');
    useEffect(()=>{
        const getdata = async () => {
            const res = await axios.get("https://reqres.in/api/users/2");
            setFname(res.data.data.first_name);
            setLname(res.data.data.last_name);
            setEmail(res.data.data.email);
        }
        getdata();
    })
    
    return (
        <div className="content-inner">
        <h2>Hi I am {fname} {lname}</h2>
        <h3>You can email me at {email}</h3>
        </div>
    )
}

export default Contact;