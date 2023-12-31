import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
const ContactForm = () => {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_atmyylg",
        "template_zf6ki1h",
        form.current,
        "ThNN2CPsqok89ptbn"
      )
      .then(
        result => {
          console.log(result.text);
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: toast => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "success",
            title: "Message Sent successfully",
          });
          form.current.reset();
        },
        error => {
          console.log(error.text);
          Toast.fire({
            icon: "error",
            title:
              "Something Went Wrong | Please contact: npinternationalbd@gmail.com",
          });
        }
      );
  };

  const formStyle =
    "block w-full mt-1 p-3 border-black dark:bg-my-dark-btn text-gray-500 rounded-lg shadow-sm bg-gray-50 focus:border-indigo-300 focus:ring-2 focus:ring-np focus:ring-opacity-50 outline-none";
  return (
    <form className="w-full" ref={form} onSubmit={sendEmail}>
      <h1 className="text-4xl text-red-500 py-2 font-semibold">
        Inquiry Online
      </h1>
      <label className="block mb-3">
        <span className="text-gray-700">Your name</span>
        <input
          type="text"
          name="user_name"
          className={`${formStyle}`}
          placeholder="Joe Bloggs"
        />
      </label>
      <label className="block mb-3">
        <span className="text-gray-700">Email address</span>
        <input
          name="user_email"
          type="email"
          className={`${formStyle}`}
          placeholder="joe.bloggs@example.com"
          required=""
        />
      </label>
      <label className="block mb-3">
        <span className="text-gray-700">Your company name</span>
        <input
          name="user_company_name"
          type="text"
          className={`${formStyle}`}
          placeholder="Example company"
          required=""
        />
      </label>
      <label className="block mb-3">
        <span className="text-gray-700">Phone Number</span>
        <input
          name="user_phone"
          type="number"
          className={`${formStyle}`}
          placeholder="+88017....."
          required=""
        />
      </label>
      <label className="block mb-3">
        <span className="text-gray-700">Your Query</span>
        <textarea
          name="message"
          className={`${formStyle}`}
          rows={3}
          placeholder="Tell me what you're thinking about..."
          defaultValue={""}
        />
      </label>
      <div className="mb-3">
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
      <div></div>
    </form>
  );
};

export default ContactForm;
