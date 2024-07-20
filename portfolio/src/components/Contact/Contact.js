import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
  
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "1b434f8f-1c38-4547-a2ff-b7125f9a12b0");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div className='contact' id="contact">
      <div className='contact-title'>
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt=''/>
      </div>
      <div className='contact-section'>
        <div className='contact-left'>
          <h1>Let's Talk</h1>
          <p>I am excited about the opportunity to collaborate with like-minded professionals and contribute to innovative projects.</p>
          <div className='contact-details'>
            <div className='contact-detail'>
              <img src={mail_icon} alt ='' /> <p>ramyathiru213002@gmail.com</p>
            </div>
            <div className='contact-detail'>
              <img src={call_icon} alt ='' /> <p>+91 9037238365</p>
            </div>
            <div className='contact-detail'>
              <img src={location_icon} alt ='' /> <p>Trivandrum, Kerala</p>
            </div>
          </div> 
          <div className="contact-github">
              <a className='anchor-link' offset={50} href ='https://github.com/RamyaThiruppathi'>GitHub profile</a>
            </div>
        </div>
        <form onSubmit={onSubmit} className='contact-right'>
          <label htmlFor ="">Enter your name</label>
          <input type="text" placeholder='Enter your name' name='name'/>
          <label htmlFor ="">Your Email</label>
          <input type="email" placeholder='Enter your email' name='email'/>
          <label htmlFor ="">Write your message here</label>
          <textarea name="message" rows="7" placeholder='Enter your message'></textarea>
          <button type='submit' className='contact-submit'>Submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact