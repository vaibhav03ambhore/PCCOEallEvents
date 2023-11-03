import React, { useState } from 'react';
import '../pages_css/Event_form_CSS//EventForm.css';

const EventForm = () => {
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventDateTime, setEventDateTime] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [eventOrganizer, setEventOrganizer] = useState('');
  const [eventContact, setEventContact] = useState('');
  const [eventRegistration, setEventRegistration] = useState(false);
  const [eventRegistrationDeadline, setEventRegistrationDeadline] = useState('');
  const [eventImage, setEventImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any necessary validation or data processing here
    // and then submit the form data to your backend or perform any other actions.

    // Reset the form fields after submission
    setEventName('');
    setEventDescription('');
    setEventDateTime('');
    setEventLocation('');
    setEventOrganizer('');
    setEventContact('');
    setEventRegistration(false);
    setEventRegistrationDeadline('');
    setEventImage('');
  };

  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Event Information</h2>
      <label className="form-label">
        Event Name:
        <input className="form-input" type="text" value={eventName} onChange={(e) => setEventName(e.target.value)} />
      </label>
      <br />
      <label className="form-label">
        Event Description:
        <textarea className="form-input" value={eventDescription} onChange={(e) => setEventDescription(e.target.value)} />
      </label>
      <br />
      <label className="form-label">
        Event Date and Time:
        <input className="form-input" type="datetime-local" value={eventDateTime} onChange={(e) => setEventDateTime(e.target.value)} />
      </label>
      <br />
      <label className="form-label">
        Event Location:
        <input className="form-input" type="text" value={eventLocation} onChange={(e) => setEventLocation(e.target.value)} />
      </label>
      <br />
      <label className="form-label">
        Event Organizer:
        <input className="form-input" type="text" value={eventOrganizer} onChange={(e) => setEventOrganizer(e.target.value)} />
      </label>
      <br />
      <label className="form-label">
        Event Contact Information:
        <input className="form-input" type="text" value={eventContact} onChange={(e) => setEventContact(e.target.value)} />
      </label>
      <br />
      <label className="form-label">
        Event Registration:
        <input className="form-checkbox" type="checkbox" checked={eventRegistration} onChange={(e) => setEventRegistration(e.target.checked)} />
      </label>
      <br />
      {eventRegistration && (
        <label className="form-label">
          Event Registration Deadline:
          <input className="form-input" type="datetime-local" value={eventRegistrationDeadline} onChange={(e) => setEventRegistrationDeadline(e.target.value)} />
        </label>
      )}
      <br />
      <label className="form-label">
        Event Image or Logo:
        <input className="form-input" type="file" accept="image/*" onChange={(e) => setEventImage(e.target.files[0])} />
      </label>
      <br />
      <button className="form-button" type="submit">Submit</button>
    </form>
  );
};

export default EventForm;
