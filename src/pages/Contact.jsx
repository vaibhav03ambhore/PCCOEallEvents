
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../pages_css/Contact.css"
const Contact = () => {
  function showAlert1() {
    alert("Mail SuccessFully! Sended");
}
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vn7vwrl', 'template_vi52r2p', form.current, 'wWjWvr8EMyrzQXFKZ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <>
      <div className="Mcontainer">
        <div className="apply">
          <h1>Contact Us</h1>
          <form action="" ref={form} onSubmit={sendEmail}>
            <div className="form_container">
              <div className="form_control">
                <label htmlFor="first_name">First Name</label>
                <input id="first_name" name="from_name" placeholder="enter first name...." />
              </div>
              <div className="form_control">
                <label htmlFor="last_name">Last Name</label>
                <input id="last_name" name="last name" placeholder="enter last name...." />
              </div>
              <div className="form_control">
                <label htmlFor="email">Email</label>
                <input id="email" name="from_email"
                  type="email" placeholder="enter email...." />
              </div>
              <div className="form_control">
                <label htmlFor="job_role">Job Role</label>
                <select id="job_role" name="job_role">
                  <option value="">Select Job Role</option>
                  <option value="frontend">Frontend Developer</option>
                  <option value="backend">backend Developer</option>
                  <option value="UI/UX">UI/UX Developer</option>
                  <option value="full stack">Full stack Developer</option>
                </select>
              </div>
              <div className="text_area_control">
                <label htmlFor="address">Describe Your Query Here</label>
                <textarea name="message" id="address" cols="100" rows="3"
                  placeholder="Enter Area"></textarea>
              </div>
              <div className="form_control">
                <label htmlFor="city">City</label>
                <input id="city" name="city"
                  placeholder="enter city name...." />
              </div>
              <div className="form_control">
                <label htmlFor="pincode">Pincode</label>
                <input id="pincode" name="pincode"
                  type="number" placeholder="enter pincode...." />
              </div>
              <div className="form_control">
                <label htmlFor="date">Date</label>
                <input id="date" name="date"
                  type="date" value="2023-01-18" />
              </div>
              <div className="form_control">
                <label htmlFor="upload_cv">Upload_CV</label>
                <input id="upload_cv" name="upload_cv"
                  type="file" />
              </div>

            </div>
            <div className="button_container">
              <button type="submit" onClick={showAlert1}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact