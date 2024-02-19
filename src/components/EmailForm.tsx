import { useMutation } from "@apollo/client";
import React, { useEffect, useRef, useState } from "react";
import { ADD_EMAIL } from "../mutations/emailMutations";
import { BarLoader } from "react-spinners";

const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const EmailForm = () => {
  const errRef = useRef<HTMLSpanElement>(null);

  const [formMessage, setFormMessage] = useState("");
  const [formMessageClass, setFormMessageClass] = useState<
    "success" | "failure"
  >("success");
  const [email, setEmail] = useState("");

  const [createEmail, { data, loading, error }] = useMutation(ADD_EMAIL);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormMessage("");
    const valid = emailRegex.test(email);
    if (!valid) {
      setFormMessage("Please input a valid email address");
      setFormMessageClass("failure");
      errRef?.current?.focus();
      errRef?.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      return;
    }
    createEmail({ variables: { email } });
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
    if (error) {
      console.log("error: ", JSON.stringify(error, null, 2));
      setFormMessage(error.message || "An error occurred. Please try again");
      setFormMessageClass("failure");
      errRef?.current?.focus();
      errRef?.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [error]);

  useEffect(() => {
    if (data?.createEmail?.email) {
      setFormMessage("Thank you for signing up!");
      setFormMessageClass("success");
    }
  }, [data]);

  return (
    <div>
      <form noValidate onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <h2 className='text-3xl '>Get Updates from in hands</h2>
        <p className='text-lg'>
          Get information on discounts and sales delivered straight to your
          inbox
        </p>
        <div>
          <input
            type='email'
            value={email}
            onChange={handleInput}
            placeholder='Enter your email address'
            autoComplete='false'
            aria-label='Sign up for updates'
            className='py-2 px-3 border border-solid border-[#333] rounded-tl rounded-bl outline-none'
          />
          <button
            type='submit'
            className='py-2 px-3 bg-[#333] text-white border border-solid border-[#333] rounded-tr rounded-br hover:bg-white hover:text-[#333]'
          >
            Sign Up
          </button>
        </div>
        {loading && (
          <div className='ml-2 -mt-2'>
            <BarLoader height={6} />
          </div>
        )}
      </form>
      {formMessage && (
        <div>
          <span
            ref={errRef}
            className={`ml-1 font-semibold ${
              formMessageClass === "success"
                ? "text-green-600"
                : "text-rose-600"
            }`}
          >
            {formMessage}
          </span>
        </div>
      )}
    </div>
  );
};

export default EmailForm;
