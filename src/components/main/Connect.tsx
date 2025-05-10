import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";

const formId = import.meta.env.VITE_FORMSPREE_FORM_ID || "xrbprowg";

const Connect = () => {
  const [state, handleSubmit] = useForm(formId);
  const [click, setClick] = useState(0);

  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (state.succeeded) {
      setFormData({
        company: "",
        name: "",
        email: "",
        message: "",
        consent: false,
      });
      setErrors({});
    }
  }, [state.succeeded]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox"
        ? (e.target as HTMLInputElement).checked
        : value,
    }));
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.company.trim()) newErrors.company = "*Company Name* is required field";
    if (!formData.name.trim()) newErrors.name = "*Name* is required field";
    if (!formData.email.trim()) newErrors.email = "*Email* is required field";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Invalid email address.";
    if (!formData.message.trim()) newErrors.message = "*Message* is required field";
    if (!formData.consent) newErrors.consent = "*Consent* is required field";
    return newErrors;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      handleSubmit(e as React.FormEvent<HTMLFormElement>);
    }
  };

  useEffect(() => {
    const handleCustomEvent = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail === 'customization') {
        setClick(1); 
      }
    };
  
    window.addEventListener('switch-tab', handleCustomEvent);
    return () => {
      window.removeEventListener('switch-tab', handleCustomEvent);
    };
  }, []);

  return (
    <div id="Contact_Us" className="flex flex-col items-center justify-center gap-6 my-10 px-4 sm:px-8 md:px-16 lg:px-20 w-full">
      <div className="flex flex-col gap-1 items-center text-center w-full max-w-md">
        <h3 className="text-[#FAFAFA] text-xl font-bold">Let’s connect</h3>
        <p className="text-[#A1A1AA] text-xs sm:text-sm">
          Leave us a line, we contact you within a few hours.
        </p>
      </div>

      <div className="flex flex-col gap-6 items-center justify-center w-full max-w-md">
        <div className="bg-[#212123] text-[#A1A1AA] flex gap-2 rounded-full p-0.5 text-xs sm:text-sm relative w-full max-w-xs">
          {["Contact Us", "Customization"].map((item, index) => (
            <div
              key={index}
              className="relative cursor-pointer p-2 flex-1 text-center"
              onClick={() => setClick(index)}
            >
              {click === index && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-black rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item}</span>
            </div>
          ))}
        </div>

        <AnimatePresence>
          {state.succeeded && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-green-600/10 text-green-400 border border-green-600/40 px-4 py-2 rounded-md text-sm w-full text-center"
            >
              🎉 Thanks for your submission! We'll be in touch shortly.
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={onSubmit} className="flex flex-col items-center justify-center gap-4 w-full">
          <div className="w-full max-w-md flex flex-col gap-4">
            <div>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                aria-label="Company Name"
                className={`border p-2 rounded-md w-full bg-[#09090B] placeholder:text-xs placeholder:text-[#A1A1AA] ${
                  errors.company ? "border-red-400" : "border-[#27272A]"
                }`}
                placeholder="Company Name*"
              />
              {errors.company && (
                <div className="text-red-400 text-xs mt-1 ml-1">{errors.company}</div>
              )}
            </div>

            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                aria-label="Full Name"
                className={`border p-2 rounded-md w-full bg-[#09090B] placeholder:text-xs placeholder:text-[#A1A1AA] ${
                  errors.name ? "border-red-400" : "border-[#27272A]"
                }`}
                placeholder="Full Name*"
              />
              {errors.name && (
                <div className="text-red-400 text-xs mt-1 ml-1">{errors.name}</div>
              )}
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                aria-label="Email Address"
                onChange={handleChange}
                className={`border p-2 rounded-md w-full bg-[#09090B] placeholder:text-xs placeholder:text-[#A1A1AA] ${
                  errors.email ? "border-red-400" : "border-[#27272A]"
                }`}
                placeholder="Email Address*"
              />
              {errors.email && (
                <div className="text-red-400 text-xs mt-1 ml-1">{errors.email}</div>
              )}
            </div>

            <div>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                aria-label="Message"
                className={`border p-2 rounded-md w-full bg-[#09090B] resize-none placeholder:text-xs placeholder:text-[#A1A1AA] ${
                  errors.message ? "border-red-400" : "border-[#27272A]"
                }`}
                placeholder="A brief summary of what you need."
              />
              {errors.message && (
                <div className="text-red-400 text-xs mt-1 ml-1">{errors.message}</div>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="consent"
                  aria-label="I agree to be contacted by ChainSight regarding this demo request"
                  checked={formData.consent}
                  onChange={handleChange}
                  className={`w-4 h-4 bg-transparent border cursor-pointer mt-1 ${
                    errors.consent ? "border-red-400" : "border-gray-500"
                  }`}
                />
                <div className="text-[#A1A1AA] text-xs sm:text-sm">
                  I have read and agree to our{" "}
                  <a
                    href="https://chainsight.network/docs/privacy"
                    target="_blank"
                    className="hover:text-[#FFE000]"
                  >
                    Privacy Policy
                  </a>
                  .
                </div>
              </label>
              {errors.consent && (
                <div className="text-red-400 text-xs ml-6">{errors.consent}</div>
              )}
            </div>
          </div>

          <button className="max-w-md z-50 p-2 px-4 h-10 rounded-full bg-[#355DEA] text-sm sm:text-base hover:scale-105 cursor-pointer active:scale-95 transition-transform duration-200">
            Send it over!
          </button>

          <ValidationError errors={state.errors} />
        </form>
      </div>
    </div>
  );
};

export default Connect;
