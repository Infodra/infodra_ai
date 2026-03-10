"use client";

import { useState, useRef } from "react";
import { Metadata } from "next";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    productOrSolution: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  // Email validation function
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Real-time email validation
    if (name === "email") {
      if (value && !validateEmail(value)) {
        setEmailError("Please enter a valid email address (e.g., user@example.com)");
      } else {
        setEmailError("");
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert("Please fill in all required fields");
      return;
    }

    // Validate email format
    if (!validateEmail(formData.email)) {
      setEmailError("Please enter a valid email address (e.g., user@example.com)");
      alert("Please enter a valid email address");
      return;
    }

    setIsLoading(true);

    try {
      // Submit form data to MongoDB via API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        productOrSolution: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      alert(
        "Error sending message. Please try again or contact us directly."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main>
      {/* Contact Page Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-violet-50/30 to-indigo-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-violet-950/50 pt-24 pb-16">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[500px] h-[500px] -top-48 -left-48 bg-violet-300 dark:bg-violet-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-15 animate-float"></div>
          <div className="absolute w-[500px] h-[500px] top-1/3 -right-48 bg-indigo-300 dark:bg-indigo-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-15 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute w-[500px] h-[500px] -bottom-48 left-1/3 bg-violet-400 dark:bg-violet-800 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-15 animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        {/* Content */}
        <div className="relative max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            {/* Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-[1.4]">
              <span className="block bg-gradient-to-r from-gray-900 via-primary-800 to-accent-800 dark:from-white dark:via-primary-300 dark:to-accent-300 bg-clip-text text-transparent pb-2">
                Get In Touch
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-[700px] mx-auto leading-relaxed">
              Have questions? Our team is ready to help you find the perfect AI solution for your business.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <a
                href="#contact-form"
                className="group w-full sm:w-auto px-10 py-4 bg-gradient-ai text-white rounded-xl font-semibold text-lg hover:opacity-90 transition-all hover:scale-105 flex items-center justify-center space-x-2 shadow-xl shadow-primary-500/20"
              >
                <span>Send Message</span>
              </a>
            </div>

            {/* Trust Indicator */}
            <p className="text-sm text-gray-500 dark:text-gray-400 font-normal">
              Phone: +91 81481 46785 • Email: business@infodratechnologies.com
            </p>
          </div>
        </div>
      </section>

      <section id="contact-form" className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
                Contact Information
              </h2>
              <div className="space-y-8">
                {/* Company Name */}
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-300 mb-2 text-sm uppercase tracking-wide text-blue-600 dark:text-blue-400">
                    Company
                  </h3>
                  <p className="text-xl font-bold text-gray-900 dark:text-white">
                    Infodra Technologies Private Limited
                  </p>
                </div>

                {/* Address */}
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-300 mb-2 text-sm uppercase tracking-wide text-blue-600 dark:text-blue-400">
                    Address
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    INNOV8, 2ND FLOOR
                    <br />
                    RMZ MILLENIA BUSINESS PARK
                    <br />
                    CAMPUS 1A
                    <br />
                    NO.143, DR.M.G.R.ROAD
                    <br />
                    PERUNGUDI, CHENNAI-600096
                  </p>
                </div>

                {/* Phone */}
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-300 mb-2 text-sm uppercase tracking-wide text-blue-600 dark:text-blue-400">
                    Phone
                  </h3>
                  <a
                    href="tel:+918148146785"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold"
                  >
                    +91 81481 46785
                  </a>
                </div>

                {/* Email */}
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-300 mb-2 text-sm uppercase tracking-wide text-blue-600 dark:text-blue-400">
                    Email
                  </h3>
                  <a
                    href="mailto:business@infodratechnologies.com"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 break-all"
                  >
                    business@infodratechnologies.com
                  </a>
                </div>

                {/* WhatsApp CTA */}
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-300 mb-3 text-sm uppercase tracking-wide text-blue-600 dark:text-blue-400">
                    Quick Contact
                  </h3>
                  <WhatsAppCTA
                    productName="Infodra AI Solutions"
                    variant="default"
                    size="md"
                    fullWidth
                  />
                </div>

                {/* Business Hours */}
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-300 mb-2 text-sm uppercase tracking-wide text-blue-600 dark:text-blue-400">
                    Business Hours
                  </h3>
                  <div className="text-gray-600 dark:text-gray-400 space-y-1">
                    <p className="font-medium">Monday - Friday</p>
                    <p>9:00 AM - 6:00 PM IST</p>
                    <p className="font-medium mt-2">Saturday</p>
                    <p>10:00 AM - 4:00 PM IST</p>
                    <p className="font-medium mt-2"><span className="text-red-600 dark:text-red-400">Sunday - </span><span className="text-red-600 dark:text-red-400">Closed</span></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-lg border border-blue-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                Send us a Message
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Fill out the form below and our team will get back to you within
                24 hours.
              </p>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 dark:text-gray-300 font-semibold mb-2"
                  >
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 dark:text-gray-300 font-semibold mb-2"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@company.com"
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition ${
                      emailError
                        ? "border-red-500 focus:ring-red-500 bg-red-50 dark:bg-red-900/20"
                        : "border-gray-300 dark:border-gray-600 focus:ring-blue-500 bg-white dark:bg-gray-800"
                    } text-gray-900 dark:text-white`}
                  />
                  {emailError && (
                    <p className="text-red-600 dark:text-red-400 text-sm mt-1 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18.101 12.93a1 1 0 00-1.414-1.414L10 15.586 7.707 13.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l8-8z" />
                      </svg>
                      {emailError}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 dark:text-gray-300 font-semibold mb-2"
                  >
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                </div>

                {/* Company */}
                <div>
                  <label
                    htmlFor="company"
                    className="block text-gray-700 dark:text-gray-300 font-semibold mb-2"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name (optional)"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                </div>

                {/* Product/Solution Interest */}
                <div>
                  <label
                    htmlFor="productOrSolution"
                    className="block text-gray-700 dark:text-gray-300 font-semibold mb-2"
                  >
                    Product / Solution Interest
                  </label>
                  <select
                    id="productOrSolution"
                    name="productOrSolution"
                    value={formData.productOrSolution}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  >
                    <option value="">Select a product or solution...</option>
                    <optgroup label="AI Products">
                      <option value="ai-video-translator">AI Video Translator</option>
                      <option value="ai-user-manual-generation">AI User Manual Generation</option>
                      <option value="ai-document-translator">AI Document Translator</option>
                      <option value="bizlead-database">BiZlead Database</option>
                      <option value="all-products">All Products / General Inquiry</option>
                    </optgroup>
                    <optgroup label="Engineering Services">
                      <option value="engineering-talent">Engineering Talent Services</option>
                      <option value="custom-development">Custom Development</option>
                      <option value="other-services">Other Services</option>
                    </optgroup>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 dark:text-gray-300 font-semibold mb-2"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your inquiry, requirements, or how we can help you..."
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading || !!emailError}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition font-semibold text-lg tracking-wider flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                  <span className="text-red-500">*</span> Required fields
                </p>
              </form>

              {submitted && (
                <div className="mt-6 p-4 bg-green-100 dark:bg-green-900/20 border border-green-400 dark:border-green-700 text-green-700 dark:text-green-400 rounded-lg flex items-start">
                  <svg
                    className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-lg">🎉 Message Received Successfully!</h3>
                    <p className="text-sm mt-1">
                      Thank you, <strong>{formData.name}</strong>! We've received your message.
                    </p>
                    <p className="text-sm mt-2">
                      Our team will review your inquiry and get back to you within <strong>24 hours</strong>.
                    </p>
                    <p className="text-sm mt-2 font-semibold">
                      We appreciate your interest in working with us! 
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Find Us on the Map
          </h2>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.823456789!2d80.2444165!3d12.9710945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525db836ad22c5%3A0xa093bcdbfcbeb1c!2sInfodra%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Infodra Technologies Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "How long does it take to get a response?",
                a: "We aim to respond to all inquiries within 24 hours during business hours. For urgent matters, please call us directly at +91 81481 46785.",
              },
              {
                q: "Which products are best for my business?",
                a: "Our team will analyze your specific needs and recommend the most suitable products. Contact us for a personalized consultation.",
              },
              {
                q: "Do you offer trial periods or demos?",
                a: "Yes! We offer free demos and trial periods for all our products. Contact us to schedule a demo tailored to your needs.",
              },
              {
                q: "What are your payment terms?",
                a: "We offer flexible pricing plans with monthly and annual billing options. Contact our sales team for detailed pricing information.",
              },
            ].map((item, index) => (
              <details
                key={index}
                className="group border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:border-blue-300 dark:hover:border-blue-600 transition bg-white dark:bg-gray-900"
              >
                <summary className="flex cursor-pointer items-center justify-between font-semibold text-gray-900 dark:text-white">
                  {item.q}
                  <span className="transition group-open:rotate-180">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
