import React from 'react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [ isSubmitting, setIsSubmitting  ] = useState(null);
    const [stateMessage, setStateMessage ] = useState(null);
    const sendEmail = (e) => {
        e.persist();
        e.preventDefault();
        setIsSubmitting(true);
        emailjs
        .sendForm('service_f8kuukd', 'template_9i426gr', e.target, {
            publicKey: 'mYfrvtb3rBK9ad2s6',
          })
          .then(
            (result) => {
              setStateMessage('Message sent!');
              setIsSubmitting(false);
              setTimeout(() => {
                setStateMessage(null);
              }, 5000); // hide message after 5 seconds
            },
            (error) => {
              setStateMessage('Something went wrong, please try again later');
              setIsSubmitting(false);
              setTimeout(() => {
                setStateMessage(null);
              }, 5000); // hide message after 5 seconds
            }
          );
        
        // Clears the form after sending the email
        e.target.reset();
      };
      return (
        <div id="contact" className="bg-gray-800 py-20 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
            <form className="max-w-lg mx-auto" onSubmit={sendEmail}>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full mb-4 p-3 rounded-lg text-black"
                name="user_name"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full mb-4 p-3 rounded-lg text-black"
                name="user_email"
              />
              <textarea
                placeholder="Your Message"
                className="w-full mb-4 p-3 rounded-lg text-black"
                rows="5"
                name="message"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg"
                disabled={isSubmitting}
              >
                Send Message
              </button>
              {stateMessage && <p>{stateMessage}</p>}
            </form>
          </div>
        </div>
      );
    //   return (
    //     <form onSubmit={sendEmail}>
    //       <label>Name</label>
    //       <input type="text" name="user_name" />
    //       <label>Email</label>
    //       <input type="email" name="user_email" />
    //       <label>Message</label>
    //       <textarea name="message" />
    //       <input type="submit" value="Send" disabled={isSubmitting} />
    //       {stateMessage && <p>{stateMessage}</p>}
    //     </form>
    //   );
};

export default Contact;
