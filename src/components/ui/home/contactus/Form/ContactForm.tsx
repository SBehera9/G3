import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await axios.post("http://localhost:5000/api/contact", data);
      alert("Form submitted successfully!");
      reset();
      navigate("/contact-form");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to submit the form. Please try again.");
    }
  };

  return (
    <div className="bg-black">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-transparent space-y-5 "
      >
        <input
          type="text"
          {...register("name", {
            required: "Name is required",
            minLength: { value: 3, message: "Name must be at least 3 characters" },
          })}
          placeholder="Your Name"
          className="w-full p-3 py-5 rounded-md bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          })}
          placeholder="Your Email"
          className="w-full p-3 py-5 rounded-md bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

        <input
          type="text"
          {...register("subject", {
            required: "Subject is required",
            minLength: { value: 3, message: "Subject must be at least 3 characters" },
          })}
          placeholder="Subject"
          className="w-full p-3 py-5 rounded-md bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400"
        />
        {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}

        <textarea
          rows={4}
          {...register("message", { required: "Message is required" })}
          placeholder="Your Message"
          className="w-full p-3 py-7 rounded-md bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400"
        ></textarea>
        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}

        <button
          type="submit"
          className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-5 w-full rounded-md transition duration-200"
        >
          Send Message
        </button>

        <p className="text-blue-400 text-sm text-center underline mt-2 cursor-pointer">
          Privacy Notice
        </p>
      </form>
      </div>
  );
};

export default ContactForm;
