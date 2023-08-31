import React from 'react'
import "../pages_css/Contact.css"
const Contact = () => {
  return (
    <>
      <div className="Mcontainer">
        <div className="apply">
          <h1>Contact Us</h1>
          <form action="">
            <div className="form_container">
              <div className="form_control">
                <label for="first_name">First Name</label>
                <input id="first_name" name="first name" placeholder="enter first name...." />
              </div>
              <div className="form_control">
                <label for="last_name">Last Name</label>
                <input id="last_name" name="last name" placeholder="enter last name...." />
              </div>
              <div className="form_control">
                <label for="email">Email</label>
                <input id="email" name="first name"
                  type="email" placeholder="enter email...." />
              </div>
              <div className="form_control">
                <label for="job_role">Job Role</label>
                <select id="job_role" name="job_role">
                  <option value="">Select Job Role</option>
                  <option value="frontend">Frontend Developer</option>
                  <option value="backend">backend Developer</option>
                  <option value="UI/UX">UI/UX Developer</option>
                  <option value="full stack">Full stack Developer</option>
                </select>
              </div>
              <div className="text_area_control">
                <label for="address">Address</label>
                <textarea name="address" id="address" cols="100" rows="3"
                  placeholder="Enter Area"></textarea>
              </div>
              <div className="form_control">
                <label for="city">City</label>
                <input id="city" name="city"
                  placeholder="enter city name...." />
              </div>
              <div className="form_control">
                <label for="pincode">Pincode</label>
                <input id="pincode" name="pincode"
                  type="number" placeholder="enter pincode...." />
              </div>
              <div className="form_control">
                <label for="date">Date</label>
                <input id="date" name="date"
                  type="date" value="2023-01-18" />
              </div>
              <div className="form_control">
                <label for="upload_cv">Upload_CV</label>
                <input id="upload_cv" name="upload_cv"
                  type="file" />
              </div>

            </div>
            <div className="button_container">
              <button type="submit">Click Here</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact