import React, { useRef } from 'react';
import emailjs from '@emailjs/browser' ;
import Swal from 'sweetalert2';
 const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    console.log(form.current);

    emailjs.sendForm('service_atmyylg', 'template_zf6ki1h', form.current, 'ThNN2CPsqok89ptbn')
      .then((result) => {
          console.log(result.text);
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Message Sent successfully'
          })
          form.current.reset();

      }, (error) => {
          console.log(error.text);
          Toast.fire({
            icon: 'error',
            title: 'Something Went Wrong | Please contact: npinternationalbd@gmail.com'
          })
      });
  };

  return (
    <form className='w-full' ref={form} onSubmit={sendEmail}>
<h1 className='text-4xl text-red-500 py-3 font-semibold'>Inquiry Online</h1>
  <label className="block mb-6">
    <span className="text-gray-700">Your name</span>
    <input
      type="text"
      name="user_name"
      className="
      block
      w-full
      mt-1
      p-3
      border-black
     dark:bg-my-dark-btn
   text-gray-500
      rounded-md
      shadow-sm
      bg-gray-200
      focus:border-indigo-300
      focus:ring
      focus:ring-indigo-200
      focus:ring-opacity-50
    "
      placeholder="Joe Bloggs"
    />
  </label>
  <label className="block mb-6">
    <span className="text-gray-700">Email address</span>
    <input
      name="user_email"
      type="email"
      className="
      block
      w-full
      text-gray-500
      mt-1
      bg-gray-200
      p-3
      border-black
      rounded-md
      shadow-sm
     dark:bg-my-dark-btn
     dark:text-white
     
    
    "
      placeholder="joe.bloggs@example.com"
      required=""
    />
  </label>
  <label className="block mb-6">
    <span className="text-gray-700">Phone Number</span>
    <input
      name="user_phone"
      type="number"
      className="
      block
      w-full
      bg-gray-200
      text-gray-500
      mt-1
      p-3
      border-black
      rounded-md
      shadow-sm
     dark:bg-my-dark-btn
     dark:text-white
     
    
    "
      placeholder="+88017....."
      required=""
    />
  </label>
  <label className="block mb-6">
    <span className="text-gray-700">Your Query</span>
    <textarea
      name="message"
      className="
      block
      w-full
      mt-1
      bg-gray-200
      text-gray-500
      p-5
     dark:bg-my-dark-btn
     dark:text-white
      border-black
      rounded-md
      shadow-sm
     bg-my-gray-btn
    "
      rows={3}
      placeholder="Tell me what you're thinking about..."
      defaultValue={""}
    />
  </label>
  <div className="mb-6">
    <button
      type="submit"
      className="
      h-10
      px-5
      text-white
      bg-btn-grad
      rounded-lg
      transition-colors
      duration-150
      focus:shadow-outline
      bg-np
      hover:bg-indigo-800
    "
    >
      Send Now
    </button>
  </div>
  <div>
 
  </div>


    </form>
  );
};

export default ContactForm;