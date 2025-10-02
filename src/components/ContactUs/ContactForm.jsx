"use client";
import React, { useState } from "react";
import "./ContactForm.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { CreateLeads } from "@/DAL/Create";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    query: "",
    subject: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubjectChange = (e) => {
    const { value, checked } = e.target;

    setFormData((prev) => {
      const subjects = new Set(prev.subject);
      if (checked) {
        subjects.add(value);
      } else {
        subjects.delete(value);
      }
      return { ...prev, subject: [...subjects] };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formatSubject = (subjects) => {
      if (subjects.length === 0) return "";
      if (subjects.length === 1) return subjects[0];
      return subjects.slice(0, -1).join(", ") + " and " + subjects.slice(-1);
    };
    const payload = {
      name: formData.name,
      lastname: formData.lastname,
      email: formData.email,
      phone: formData.phone,
      query: formData.query,
      subject: formatSubject(formData.subject),
    };

    try {
      const res = await CreateLeads(payload);

      if (res.status == 201) {
        setStatus("success");
        toast.success(res?.message || "Form submitted successfully");
        setErrors({});
        setFormData({
          name: "",
          lastname: "",
          email: "",
          phone: "",
          subject: "",
          query: "",
        });
      }
      if (res?.status === 400) {
        const fieldErrors = {};
        res.missingFields.forEach((field) => {
          fieldErrors[field.name] = field.message;
        });
        setErrors(fieldErrors);
      } else {
        setStatus("error");
      }
    } catch (err) {
      if (err.response?.status == 400 && err.response.data?.missingFields) {
        const fieldErrors = {};
        err.response.data.missingFields.forEach((field) => {
          fieldErrors[field.name] = field.message;
        });
        setErrors(fieldErrors);
      } else {
        setStatus("error");
        toast.error("Submission failed. Please try again.");
      }
    }
  };

  return (
    <div className="contact-section">
      {/* Left: Form */}
      <div className="contact-form-card">
        <h2>Get in Touch with Us</h2>
        <p>
          We’d love to hear from you! Please fill out the form below and our
          team will get back to you shortly.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              {errors.name && <span className="error-msg">{errors.name}</span>}
              <input
                id="firstName"
                type="text"
                placeholder="John"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              {errors.lastname && (
                <span className="error-msg">{errors.lastname}</span>
              )}
              <input
                id="lastName"
                type="text"
                placeholder="Doe"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              {errors.email && (
                <span className="error-msg">{errors.email}</span>
              )}
              <input
                id="email"
                type="email"
                placeholder="johndoe@gmail.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              {errors.phone && (
                <span className="error-msg">{errors.phone}</span>
              )}
              <input
                id="phone"
                type="tel"
                placeholder="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Select Subject / Products?</label>
            {errors.subject && (
              <span className="error-msg">{errors.subject}</span>
            )}
            <div className="radio-group-grid">
              {[
                "Automotive Lubricants",
                "Industrial Lubricants",
                "Marine Lubricants",
                "Oilfield Lubricants",
                "Equipments",
                "Speciality Lubricants",
                "General Inquery",
                "Other",
              ].map((subject) => {
                const id = subject.toLowerCase().replace(/\s+/g, "-");
                return (
                  <div className="radio-element" key={id}>
                    <input
                      id={id}
                      type="checkbox"
                      name="subject"
                      value={subject}
                      checked={formData.subject.includes(subject)}
                      onChange={handleSubjectChange}
                    />

                    <label htmlFor={id} className="radio-wrapper">
                      {subject}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            {errors.query && <span className="error-msg">{errors.query}</span>}
            <textarea
              id="message"
              name="query"
              value={formData.query}
              onChange={handleChange}
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>

      {/* Right Info */}
      <div className="contact-info">
        <div className="info-item">
          <div className="icon-circle">
            <FaPhoneAlt />
          </div>
          <div>
            <strong>Lorem Ipsum</strong>
            <p>12345678910</p>
          </div>
        </div>

        <div className="info-item">
          <div className="icon-circle">
            <MdEmail />
          </div>
          <div>
            <strong>Lorem Ipsum</strong>
            <p>Lorem Has Been Ipsum Has</p>
          </div>
        </div>

        <div className="info-item">
          <div className="icon-circle">
            <FaLocationDot />
          </div>
          <div>
            <strong>Lorem Ipsum</strong>
            <p>Lorem Has Been Ipsum Has</p>
          </div>
        </div>

        <img
          className="contact-logo"
          src="/carter-oil-logo.svg"
          alt="Carter Oil"
        />
      </div>
    </div>
  );
};

export default ContactForm;
