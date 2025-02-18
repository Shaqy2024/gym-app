// import axios from "axios";
import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";

import * as emailjs from "emailjs-com"; 
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message1, setMessage1] = useState("");
   const [loading, setLoading] = useState(false);

   const sendMail = async (e) => {
     e.preventDefault();
     setLoading(true);
     try {
      const { data } = await axios.post(
        "https://gym-app-dffp.onrender.com/send/mail",
        
         {
           name,
           email,
           message,
         },
         {
           withCredentials: true,
         headers: { "Content-Type": "application/json" },
         }
       );
       setName("");
       setEmail("");
       setMessage("");
       toast.success(data.message);
       setLoading(false);
     } catch (error) {
       setLoading(false);
       toast.error(error.response.data.message);
     }
   };




  return (
    <section className="contact">
      <form className="sakib">
        <h1>CONTACT US</h1>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Message</label>
          <input
            type="text"
            value={message1}
            onChange={(e) => setMessage1(e.target.value)}
          />
        </div>
        <button
 
        
       
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "15px",
          }}
        >
          
          Send Message
        </button>
        
      </form>
    </section>
  );
};

export default Contact;
