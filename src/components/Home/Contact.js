// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import "./Contact.css"
function ContactForm() {
  const [state, handleSubmit] = useForm("mgeqdrqq");
  if (state.succeeded) {
      return <p className='contact-res'>Thanks for Contacting!</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
      {/* <label htmlFor="email">
        Email Address
      </label>
      <input
        id="name"
        type="text" 
        name="name"
      />
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="phoneNo"
        type="number" 
        name="phone"
      /> */}
      <h1 style={{color:"white"}}>Contact Me</h1>
      <div className='contact-us'>
      <div class="col-sm-6">
    </div>
    <div class="col-sm-12">
      <div class="input-block">
        <label for="">Full Name</label>
        <input id="name"
        type="text" 
        name="name" placeholder='Full Name' class="form-control"/>
      </div>
    </div>
    <div class="col-sm-12">
      <div class="input-block">
        <label for="">Email</label>
        <input  id="email"
        type="email" 
        name="email" placeholder='Email' class="form-control"/>
      </div>
    </div>
    <div class="col-sm-12">
      <div class="input-block">
        <label for="">Phone Number</label>
        <input id="phoneNo"
        type="tel" 
        name="phone" placeholder='Phone Number' class="form-control"/>
      </div>
    </div>
    <div class="col-sm-12">
      <div class="input-block textarea">
        <label for="">Drop your message here</label>
        <textarea rows="3" type="text" id="message"
       name="message" placeholder='Message' class="form-control"></textarea>
      </div>
    </div>
    
    <div className='errorText'>
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        </div>
      {/* <textarea
        id="message"
        name="message"
      /> */}
      <button className='submitBtn' type="submit" disabled={state.submitting}>
        Submit
      </button>
      </div>
    </form>
  );
}


export default ContactForm;
