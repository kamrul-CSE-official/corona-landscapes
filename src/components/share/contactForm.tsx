import { useState } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  message?: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      
    } else if (!/^[\d\s\-()+]+$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number format";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    // Replace with your actual API endpoint
    try {
      const response = await fetch("YOUR_API_ENDPOINT_HERE", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message:
            "Thank you! Our estimator will contact you within one business day.",
        });

        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          message: "",
        });

        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus({ type: null, message: "" });
        }, 5000);
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message:
          "Something went wrong. Please try again or call us directly at (425) 446-2308.",
      });

      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ type: null, message: "" });
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="bg-white p-6 sm:p-8 md:p-12 shadow-[0_20px_60px_rgba(179,206,209,0.1)] border border-gray-50">
      <div className="mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-serif text-[#1a2e30] mb-3 md:mb-4 italic">
          Request an Estimate
        </h2>
        <p className="text-sm md:text-base text-gray-500 font-light leading-relaxed">
          Provide us with some details about your project, and our estimator will
          contact you within one business day.
        </p>
      </div>

      {/* Status Messages */}
      {submitStatus.type === "success" && (
        <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 text-green-700 text-sm animate-slide-down">
          {submitStatus.message}
        </div>
      )}

      {submitStatus.type === "error" && (
        <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm animate-slide-down">
          {submitStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
        {/* Name Fields - 2 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {/* First Name */}
          <div>
            <label className="block text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-[#1a2e30] mb-2 md:mb-3">
              First Name <span className="text-[#b3ced1]">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className={`w-full px-4 py-3 md:py-4 bg-transparent border-2 border-black ${
                errors.firstName ? "border-red-500" : "border-gray-200"
              } focus:border-[#b3ced1] outline-none transition-colors text-sm md:text-base font-light text-[#1a2e30] placeholder:text-gray-300`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-[10px] md:text-xs mt-1">
                {errors.firstName}
              </p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-[#1a2e30] mb-2 md:mb-3">
              Last Name <span className="text-[#b3ced1]">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className={`w-full px-4 py-3 md:py-4 bg-transparent border ${
                errors.lastName ? "border-red-500" : "border-gray-200"
              } focus:border-[#b3ced1] outline-none transition-colors text-sm md:text-base font-light text-[#1a2e30] placeholder:text-gray-300`}
            />
            {errors.lastName && (
              <p className="text-red-500 text-[10px] md:text-xs mt-1">
                {errors.lastName}
              </p>
            )}
          </div>
        </div>

        {/* Phone */}
        <div>
          <label className="block text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-[#1a2e30] mb-2 md:mb-3">
            Phone <span className="text-[#b3ced1]">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className={`w-full px-4 py-3 md:py-4 bg-transparent border ${
              errors.phone ? "border-red-500" : "border-gray-200"
            } focus:border-[#b3ced1] outline-none transition-colors text-sm md:text-base font-light text-[#1a2e30] placeholder:text-gray-300`}
          />
          {errors.phone && (
            <p className="text-red-500 text-[10px] md:text-xs mt-1">
              {errors.phone}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-[#1a2e30] mb-2 md:mb-3">
            Email <span className="text-[#b3ced1]">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className={`w-full px-4 py-3 md:py-4 bg-transparent border ${
              errors.email ? "border-red-500" : "border-gray-200"
            } focus:border-[#b3ced1] outline-none transition-colors text-sm md:text-base font-light text-[#1a2e30] placeholder:text-gray-300`}
          />
          {errors.email && (
            <p className="text-red-500 text-[10px] md:text-xs mt-1">
              {errors.email}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="block text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-[#1a2e30] mb-2 md:mb-3">
            Message <span className="text-[#b3ced1]">*</span>
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows={5}
            className={`w-full px-4 py-3 md:py-4 bg-transparent border ${
              errors.message ? "border-red-500" : "border-gray-200"
            } focus:border-[#b3ced1] outline-none transition-colors text-sm md:text-base font-light text-[#1a2e30] placeholder:text-gray-300 resize-none`}
          />
          {errors.message && (
            <p className="text-red-500 text-[10px] md:text-xs mt-1">
              {errors.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-auto inline-flex items-center justify-center gap-3 md:gap-4 bg-[#b3ced1] text-[#1a2e30] px-8 md:px-12 py-3 md:py-4 text-[10px] md:text-[11px] font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase hover:bg-[#1a2e30] hover:text-white transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
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
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:translate-x-1 transition-transform"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;