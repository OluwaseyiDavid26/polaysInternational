import React, { useState } from "react";
import { User, Mail, Settings } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  service: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  service?: string;
}

const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    service: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const services = [
    { value: "", label: "Select a Service" },
    { value: "project-management", label: "Project Management" },
    { value: "3d-drawing", label: "3D Drawing" },
    { value: "design-drawing", label: "Design Drawing" },
    { value: "renovation-remodeling", label: "Renovation & Remodeling" },
    { value: "other", label: "Other" },
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitMessage("");

    setTimeout(() => {
      setSubmitMessage("Thank you! Your message has been sent successfully.");
      setFormData({ name: "", email: "", service: "" });
      setIsSubmitting(false);

      setTimeout(() => setSubmitMessage(""), 5000);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section
      id="contact-us"
      className="relative w-full py-20 overflow-hidden min-h-screen flex items-center justify-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Decorative Pattern Overlay - Top Left */}
      <div className="absolute top-0 left-0 w-64 h-64 pointer-events-none opacity-20">
        <svg
          className="w-full h-full"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0 L100 50 L100 150 L0 100 Z"
            stroke="#ef4444"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M0 100 L100 150 L0 200 Z"
            stroke="#ef4444"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>

      {/* Decorative Pattern - Bottom Right */}
      <div className="absolute bottom-0 right-0 w-48 h-48 pointer-events-none opacity-30">
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-red-500" />
      </div>

      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <div className="w-full max-w-lg bg-white rounded-sm shadow-2xl p-10 relative mx-4">
          {/* Decorative Red Corner - Top Right */}
          <div className="absolute -top-2 -right-2 w-12 h-12 bg-red-500" />

          <div className="relative">
            <h3 className="text-3xl font-bold text-blue-900 mb-2 text-center">
              Polays International Consulting
            </h3>
            <div className="w-20 h-0.5 bg-gray-800 mx-auto mb-6" />
            <p className="text-gray-600 text-center mb-8 text-sm">
              Get in touch and let Polays make your dreams a reality
            </p>

            {submitMessage && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded text-green-700 text-center text-sm">
                {submitMessage}
              </div>
            )}

            <div className="space-y-5">
              {/* Name Field */}
              <div className="relative">
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 text-red-500">
                  <User className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={`w-full pl-8 pr-4 py-3 border-b ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } focus:border-red-500 outline-none transition-colors bg-transparent text-gray-700 placeholder-gray-400`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div className="relative">
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 text-red-500">
                  <Mail className="w-5 h-5" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className={`w-full pl-8 pr-4 py-3 border-b ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } focus:border-red-500 outline-none transition-colors bg-transparent text-gray-700 placeholder-gray-400`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* Service Select */}
              <div className="relative">
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 text-red-500 pointer-events-none z-10">
                  <Settings className="w-5 h-5" />
                </div>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`w-full pl-8 pr-4 py-3 border-b ${
                    errors.service ? "border-red-500" : "border-gray-300"
                  } focus:border-red-500 outline-none transition-colors bg-transparent appearance-none cursor-pointer ${
                    !formData.service ? "text-gray-400" : "text-gray-700"
                  }`}
                >
                  {services.map((service) => (
                    <option key={service.value} value={service.value}>
                      {service.label}
                    </option>
                  ))}
                </select>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                {errors.service && (
                  <p className="text-red-500 text-xs mt-1">{errors.service}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="relative w-full bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 overflow-hidden transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-6"
              >
                <span className="relative z-10 tracking-wider">
                  {isSubmitting ? "SENDING..." : "SEND"}
                </span>

                {/* Decorative corners */}
                <span className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white opacity-60" />
                <span className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white opacity-60" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Left Decorative Element */}
      <div className="absolute bottom-8 left-8 w-24 h-24 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-red-500 opacity-40" />
      </div>
    </section>
  );
};

export default ContactFormSection;
