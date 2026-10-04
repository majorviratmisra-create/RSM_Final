"use client";

import { useState } from "react";

// ⚠️ IMPORTANT: Replace this with your Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || "";

const emptyForm = {
  fullName: "",
  age: "",
  skills: "",
  areaOfInterest: "",
  district: "",
  state: "",
  phone: "",
  email: "",
  instaId: "",
  fbId: "",
};

const socialChannels = [
  {
    name: "X",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "Telegram",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21 3 3 10.5l6.4 2.2L18 6l-6.7 8 6.1 4.1L21 3Z" />
        <path d="M9.4 12.7 10 20l2.7-4.7" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.5 11.5a8.5 8.5 0 0 1-12.4 7.6L3 20.5l1.4-5.1A8.5 8.5 0 1 1 20.5 11.5Z" />
        <path d="M8.5 8.2c.2-.3.5-.4.8-.3l1 .5c.3.1.4.4.3.7l-.4 1c.7 1.2 1.6 2.1 2.8 2.8l1-.4c.3-.1.6 0 .7.3l.5 1c.1.3 0 .6-.3.8-.7.6-1.5.7-2.3.4a9 9 0 0 1-5.4-5.4c-.3-.8-.2-1.6.3-2.3Z" />
      </svg>
    ),
  },
];

function FieldLabel({
  htmlFor,
  children,
  required,
}: {
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label htmlFor={htmlFor} className="form-label">
      {children}
      {required ? (
        <span className="text-[var(--primary)]"> *</span>
      ) : (
        <span className="text-[var(--text-light)] font-normal"> (optional)</span>
      )}
    </label>
  );
}

export default function GetInvolved() {
  const [formData, setFormData] = useState(emptyForm);
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
      // Submit to Google Sheets via Apps Script — same as the original form
      if (!GOOGLE_SCRIPT_URL) {
        setError("Google Sheet is not connected. Add NEXT_PUBLIC_GOOGLE_SCRIPT_URL to .env.local and restart npm run dev.");
        return;
      }

      const sheetPayload = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        districtState: [formData.district, formData.state].filter(Boolean).join(", "),
        age: formData.age,
        skills: formData.skills,
        areaOfInterest: formData.areaOfInterest,
        district: formData.district,
        state: formData.state,
        instaId: formData.instaId,
        fbId: formData.fbId,
      };

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Required for Google Apps Script
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sheetPayload),
      });

      // Note: With no-cors mode, we can't read the response
      // The request will succeed if it doesn't throw an error
      void response;

      setIsSubmitted(true);
      setFormData(emptyForm);

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
    <section id="get-involved" className="py-10 sm:py-12 md:py-16 lg:py-20 bg-[var(--primary)]">
      <div className="container-custom w-full">
        <div className="max-w-5xl mx-auto">
          <div className="text-center text-white mb-6 sm:mb-8">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Get Involved
            </h2>
            <p className="text-base sm:text-lg opacity-90 max-w-2xl mx-auto">
              Join Rashtrama and help build the Rashtrama district network.
            </p>
          </div>

          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl mb-8 sm:mb-10">
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
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <FieldLabel htmlFor="fullName" required>
                        Name
                      </FieldLabel>
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

                    <div>
                      <FieldLabel htmlFor="age" required>
                        Age
                      </FieldLabel>
                      <input
                        type="number"
                        id="age"
                        name="age"
                        min={1}
                        max={120}
                        value={formData.age}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Enter your age"
                        required
                      />
                    </div>

                    <div>
                      <FieldLabel htmlFor="skills">Skills</FieldLabel>
                      <input
                        type="text"
                        id="skills"
                        name="skills"
                        value={formData.skills}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Your skills"
                      />
                    </div>

                    <div>
                      <FieldLabel htmlFor="areaOfInterest">Area of Interest</FieldLabel>
                      <input
                        type="text"
                        id="areaOfInterest"
                        name="areaOfInterest"
                        value={formData.areaOfInterest}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="What do you want to work on?"
                      />
                    </div>

                    <div>
                      <FieldLabel htmlFor="district" required>
                        District
                      </FieldLabel>
                      <input
                        type="text"
                        id="district"
                        name="district"
                        value={formData.district}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Enter your district"
                        required
                      />
                    </div>

                    <div>
                      <FieldLabel htmlFor="state" required>
                        State
                      </FieldLabel>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Enter your state"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <FieldLabel htmlFor="phone" required>
                        Phone No
                      </FieldLabel>
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

                    <div>
                      <FieldLabel htmlFor="email" required>
                        Email ID
                      </FieldLabel>
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

                    <div>
                      <FieldLabel htmlFor="instaId">Insta ID</FieldLabel>
                      <input
                        type="text"
                        id="instaId"
                        name="instaId"
                        value={formData.instaId}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Your Instagram handle"
                      />
                    </div>

                    <div>
                      <FieldLabel htmlFor="fbId">FB ID</FieldLabel>
                      <input
                        type="text"
                        id="fbId"
                        name="fbId"
                        value={formData.fbId}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Your Facebook profile"
                      />
                    </div>
                  </div>
                </div>

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
                      Join Rashtrama
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          <div id="social">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
              {socialChannels.map((channel) => (
                <a
                  key={channel.name}
                  href={channel.href}
                  onClick={(event) => {
                    if (channel.href === "#") {
                      event.preventDefault();
                    }
                  }}
                  className="h-full min-h-[120px] bg-white/10 hover:bg-white text-white hover:text-[var(--primary)] border border-white/20 rounded-xl p-4 sm:p-5 flex flex-col items-center justify-center gap-2 text-center transition-all"
                  aria-label={`${channel.name} (coming soon)`}
                >
                  {channel.icon}
                  <span className="text-xs sm:text-sm font-semibold leading-tight">{channel.name}</span>
                  <span className="text-[10px] sm:text-xs opacity-80">Coming soon</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
