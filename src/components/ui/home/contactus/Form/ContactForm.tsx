import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import Img from "../../../../../assets/Image/img30.jpg";

interface FormData {
  name: string;
  email: string;
  companyname: string;
  countryname: string;
  message: string;
}

interface ContactFormProps {
  bgClassName?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ bgClassName = "bg-slate-500" }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await axios.post("http://localhost:5000/api/contact", data);
      alert("Form submitted successfully!"); // Alert message
      reset(); // Clear form fields
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to submit the form. Please try again."); // Error alert
    }
  };

  
  return (
    <div className={`flex items-center justify-center p-9 py-12 min-h-screen bg-fixed bg-cover ${bgClassName}`}
    style={{ backgroundImage: `url(${Img})` }}>

      <div className="bg-transparent p-4 w-[500px]">
        <form className="space-y-6 flex-row md:flex-col" onSubmit={handleSubmit(onSubmit)}>

          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-white">Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required", minLength: { value: 3, message: "Name must be at least 3 characters" } })}
              placeholder="Your Name"
              className={`w-full px-4 py-2 border bg-transparent rounded-md bg-white focus:outline-none focus:ring ${
                errors.name ? "border-red-500" : "focus:ring-teal-100"
              } mt-1`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-white">Business Email address</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" },
              })}
              placeholder="Your Email"
              className={`w-full px-4 py-2 border bg-transparent rounded-md bg-white focus:outline-none focus:ring ${
                errors.email ? "border-red-500" : "focus:ring-teal-300"
              } mt-1`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Company Name */}
          <div>
            <label className="block text-sm font-medium text-white">Company Name</label>
            <input
              type="text"
              {...register("companyname", { required: "Company Name is required", minLength: { value: 3, message: "Company Name must be at least 3 characters" } })}
              placeholder="Company Name"
              className={`w-full px-4 py-2 border bg-transparent rounded-md bg-white focus:outline-none focus:ring ${
                errors.companyname ? "border-red-500" : "focus:ring-teal-300"
              } mt-1`}
            />
            {errors.companyname && <p className="text-red-500 text-sm mt-1">{errors.companyname.message}</p>}
          </div>

          {/* Company Name */}
          <div>
            <label className="block text-sm font-medium text-white">Country</label>
            <input
              type="text"
              {...register("countryname", { required: "Country is required", minLength: { value: 3, message: "Country Name must be at least 3 characters" } })}
              placeholder="Enter Country Name"
              className={`w-full px-4 py-2 border bg-transparent rounded-md bg-white focus:outline-none focus:ring ${
                errors.countryname ? "border-red-500" : "focus:ring-teal-300"
              } mt-1`}
            />
            {errors.countryname && <p className="text-red-500 text-sm mt-1">{errors.countryname.message}</p>}
          </div>


          {/* Message Field */}
          <div>
            <label className="block text-sm font-medium text-white">How can we help you with?</label>
            <textarea
              rows={4}
              {...register("message", { required: "Message is required" })}
              placeholder="Your Message"
              className={`w-full px-4 py-1 border bg-transparent rounded-md bg-white focus:outline-none focus:ring ${
                errors.message ? "border-red-500" : "focus:ring-teal-300"
              } mt-1`}
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center items-center">
          <button
            type="submit"
            className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring focus:ring-teal-300"
          >
            Submit
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;