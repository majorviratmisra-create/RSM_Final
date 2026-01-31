"use client";

import { useState } from "react";

// ⚠️ IMPORTANT: Replace this with your Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || "";

export default function GetInvolved() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    districtState: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    try {
      // Submit to Google Sheets via Apps Script
      if (GOOGLE_SCRIPT_URL) {
        const response = await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors", // Required for Google Apps Script
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        
        // Note: With no-cors mode, we can't read the response
        // The request will succeed if it doesn't throw an error
      }
      
      setIsSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        districtState: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      console.error("Form submission error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="get-involved" className="flex-1 flex items-center py-8 sm:py-10 md:py-12 lg:py-16 bg-[var(--primary)]">
      <div className="container-custom w-full">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center text-white mb-6 sm:mb-8">
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3" 
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Get Involved
            </h2>
            <p className="text-base sm:text-lg opacity-90">
              The nation does not need applause.{" "}
              <strong>It needs participation and ACTION.</strong>
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl">
            {isSubmitted ? (
              <div className="text-center py-6 sm:py-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                  Thank You for Joining!
                </h3>
                <p className="text-sm sm:text-base text-[var(--text-muted)]">
                  We will be in touch with you soon. Together, we shall serve राष्ट्रमा.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                {/* Error Message */}
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                {/* District / State */}
                <div>
                  <label htmlFor="districtState" className="form-label">
                    District / State
                  </label>
                  <input
                    type="text"
                    id="districtState"
                    name="districtState"
                    value={formData.districtState}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter your district and state"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary py-3 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    <>
                      Join RSM (राष्ट्रमा)
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
