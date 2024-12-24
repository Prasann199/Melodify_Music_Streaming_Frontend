import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import "./Membership.css"
const Membership = () => {

  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[number,setNumber]=useState("")
  const handlePayment = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/createOrder');
      const order = response.data;

      if (window.Razorpay) {
        var options = {
          key: "rzp_test_Vl4y7gDqkd18nY",
          amount: order.amount,
          currency: order.currency,
          name: "Melodify",
          description: "Test Transaction",
          image: "https://example.com/your_logo",
          order_id: order.id,
          handler: function (response) {
            axios.post('http://localhost:8080/verify', null, {
              params: {
                orderId: order.id,
                paymentId: response.razorpay_payment_id,
                signature: response.razorpay_signature
              }
            }).then(res => {
              if (res.data) {
                window.location.href = "/admin";
              } else {
                window.location.href = "/membership";
              }
            }).catch(error => {
              console.error('Error verifying payment', error);
            });
          },
          prefill: {
            name: name,
            email: email,
            contact: number
          },
          notes: {
            address: "Razorpay Corporate Office"
          },
          theme: {
            color: "#F37254"
          }
        };

        var rzp1 = new window.Razorpay(options);
        rzp1.open();
      } else {
        console.error("Razorpay SDK not loaded");
      }
    } catch (error) {
      console.error('Error initiating payment', error);
    }
  };

  return (
    <>
      <Navbar />
    <form className='membership-form' onSubmit={handlePayment} >
      <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder='Enter name'/>
      <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="text" placeholder='Enter email'/>
      <input value={number} onChange={(e)=>{setNumber(e.target.value)}} type="text" placeholder='Enter Number'/>

      <input className='prime'  type="submit" value="GET PREMIUM" />
    </form>
    </>
  );
};

export default Membership;
