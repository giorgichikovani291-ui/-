"use client";

import { useState, type FormEvent } from "react";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const initialValues: FormValues = { name: "", email: "", message: "" };

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Sorry, this field can't be empty";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
    errors.email = "Sorry, invalid format here";
  if (!values.message.trim()) errors.message = "Sorry, this field can't be empty";
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSent(true);
      setValues(initialValues);
    }
  }

  const fields: { key: keyof FormValues; label: string; type: string }[] = [
    { key: "name", label: "Name", type: "text" },
    { key: "email", label: "Email", type: "email" },
    { key: "message", label: "Message", type: "textarea" },
  ];

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 pb-24 md:px-10 lg:px-16">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
        <div>
          <h2 className="text-heading-l font-bold">Contact</h2>
          <p className="mt-4 max-w-sm text-body-l font-medium text-muted/70">
            I would love to hear about your project and how I could help.
            Please fill in the form, and I&apos;ll get back to you as soon as
            possible.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
          {fields.map(({ key, label, type }) => (
            <div key={key}>
              <label
                htmlFor={key}
                className="text-xs font-bold uppercase tracking-widest text-muted/50"
              >
                {label}
              </label>
              {type === "textarea" ? (
                <textarea
                  id={key}
                  rows={3}
                  value={values[key]}
                  onChange={(e) => setValues({ ...values, [key]: e.target.value })}
                  className={`mt-2 w-full resize-none border-b bg-transparent py-2 text-white outline-none ${
                    errors[key] ? "border-red-500" : "border-muted/30 focus:border-white"
                  }`}
                />
              ) : (
                <input
                  id={key}
                  type={type}
                  value={values[key]}
                  onChange={(e) => setValues({ ...values, [key]: e.target.value })}
                  className={`mt-2 w-full border-b bg-transparent py-2 text-white outline-none ${
                    errors[key] ? "border-red-500" : "border-muted/30 focus:border-white"
                  }`}
                />
              )}
              {errors[key] && (
                <p className="mt-1 text-xs text-red-500">{errors[key]}</p>
              )}
            </div>
          ))}

          <div className="flex items-center justify-between">
            {sent && (
              <span className="text-xs uppercase tracking-widest text-accent">
                Thanks, I&apos;ll be in touch!
              </span>
            )}
            <button
              type="submit"
              className="ml-auto border-b-2 border-accent pb-1 text-sm font-bold uppercase tracking-widest transition-colors hover:text-accent"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
