export const contactForm = {
  fields: [
    {
      name: "name",
      type: "text",
      label: "Full Name",
      placeholder: "John Doe",
      validation: {
        required: "Full Name is required",
        minLength: {
          value: 2,
          message: "Minimum 2 characters required",
        },
        maxLength: {
          value: 100,
          message: "Maximum 100 characters allowed",
        },
      },
    },
    {
      name: "email",
      type: "email",
      label: "Email Address",
      placeholder: "john@example.com",
      validation: {
        required: "Email is required",
        pattern: {
          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          patternMessage: "Please enter a valid email address",
        },
      },
    },
    {
      name: "phone",
      type: "tel",
      label: "Phone Number",
      placeholder: "+1 (555) 000-0000",
      validation: {},
    },
    {
      name: "message",
      type: "textarea",
      label: "Message",
      placeholder: "Tell us how we can help you...",
      validation: {
        required: "Message is required",
        minLength: {
          value: 10,
          message: "Minimum 10 characters required",
        },
        maxLength: {
          value: 1000,
          message: "Maximum 1000 characters allowed",
        },
      },
    },
  ],
};
