import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { openingHours, socials } from '../../constants/index.js';

const Contact = () => {
  const form = useRef();
  const [emailSent, setEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_iggcxbk',     
        'template_os989fp',    
        form.current,
        'nRsYrkkp4RvAbfXC2' 
      )
      .then(
        () => {
          setEmailSent(true);
          form.current.reset();
        },
        (error) => {
          console.error('Email failed to send:', error);
        }
      );
  };

  return (
    <footer id="contact">
      <img src="/images/footer-right-leaf.png" alt="leaf-right" id="f-right-leaf" />
      <img src="/images/footer-left-leaf.png" alt="leaf-left" id="f-left-leaf" />

      <div className="content">
        <h2>Where to Find Us</h2>

        <div>
          <h3>Visit Our Bar</h3>
          <p>Hauz Khas Social, 4th Floor, DLF Avenue, Saket, New Delhi – 110017</p>
        </div>

        <div>
          <h3>Contact Us</h3>
          <p>(+91) 933595XXXX</p>
          <p>hello@mojitojunction.in</p>
        </div>

        <div>
          <h3>Open Every Day</h3>
          {openingHours.map((time) => (
            <p key={time.day}>
              {time.day} : {time.time}
            </p>
          ))}
        </div>

        <div>
          <h3>Socials</h3>
          <div className="flex-center gap-5">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <img src={social.icon} />
              </a>
            ))}
          </div>
        </div>

        {/* Email Registration Section */}
        <div style={{ marginTop: '2rem' }}>
          <h3>Register with Us</h3>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="email"
              name="user_email"
              placeholder="Enter your email"
              required
              style={{ padding: '0.5rem', marginRight: '0.5rem' }}
            />
            <button type="submit">Submit</button>
          </form>
          {emailSent && <p style={{ color: 'white', marginTop: '1rem' }}>Confirmation email sent!</p>}
        </div>
      </div>
    </footer>
  );
};

export default Contact;
