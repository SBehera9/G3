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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <input
          type="text"
          {...register("name", {
            required: "Name is required",
            minLength: { value: 3, message: "Name must be at least 3 characters" },
          })}
          placeholder="Your Name"
          className="w-full p-4 rounded-md bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
      </div>

      <div>
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
          className="w-full p-4 rounded-md bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <input
          type="text"
          {...register("subject", {
            required: "Subject is required",
            minLength: { value: 3, message: "Subject must be at least 3 characters" },
          })}
          placeholder="Subject"
          className="w-full p-4 rounded-md bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400"
        />
        {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
      </div>

      <div>
        <textarea
          rows={4}
          {...register("message", { required: "Message is required" })}
          placeholder="Your Message"
          className="w-full p-4 rounded-md bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400"
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-4 w-full rounded-md transition duration-200"
      >
        Send Message
      </button>

      <p className="text-blue-400 text-sm text-center underline mt-2 cursor-pointer">
        Privacy Notice
      </p>
    </form>
  );
};

export default ContactForm;
