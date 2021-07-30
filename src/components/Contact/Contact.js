import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log('Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`Your ${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
  };

  return (
    <section className="section">
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
      <div class="card2 mt-5">
        <div class="card-content">
          <h1 data-testid="h1tag">Contact Me</h1>
          <h3>(Sorry... this is under construction)</h3>
          <div class="content ">
            <form id="contact-form" onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'start', flexDirection: 'column', }}>
              <div class="control has-icons-left ">
                <input class="input is-medium" type="text" name="name" defaultValue={name} onBlur={handleChange} placeholder="Name" />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </div>
              <div class="control has-icons-left ">
                <input class="input is-medium" type="email" name="email" defaultValue={email} onBlur={handleChange} placeholder="Email"></input>
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
              </div>
              <div class="control has-icons-left " >
                <textarea class="textarea is-medium" name="message" rows="5" defaultValue={message} onBlur={handleChange} placeholder="Send Me A Message" />
              </div>
              {errorMessage && (
                <div>
                  <p className="error-text">{errorMessage}</p>
                </div>
              )}
              <button data-testid="button" type="submit" class="has-background-black">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Contact;
