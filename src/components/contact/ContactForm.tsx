import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import FormLoader from "../loader/FormLoader";
import Success from "./Success";
import Error from "./Error";
import axios from "axios";
import { FormattedMessage } from "react-intl";

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().required(),
    message: yup.string().required(),
  })
  .required();

type Props = {};

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = (props: Props) => {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setValue(name as keyof FormData, value);
  };

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    try {
      const response = await axios.post("api/contact/", data);

      // console.log(response.config.data);
      if (response) {
        setSent(true);
        setLoading(false);
      }
    } catch (error) {
      setError(true);
      // console.log(error);
    }
    setError(false);
  });
  return (
    <>
      {error ? <Error /> : null}
      {loading ? (
        <>
          <FormLoader />
        </>
      ) : sent && !error && !loading ? (
        <>
          <Success />
        </>
      ) : (
        <>
          <form onSubmit={onSubmit}>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                <FormattedMessage id="contactName" />
              </label>
              <input
                type="text"
                id="name"
                {...register("name")}
                onChange={handleInputChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-yellow-200 focus:ring-2 focus:ring-yellow-100 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <p>{errors.name?.message}</p>
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                <FormattedMessage id="contactEmail" />
              </label>
              <input
                type="email"
                id="email"
                {...register("email")}
                onChange={handleInputChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-yellow-200 focus:ring-2 focus:ring-yellow-100 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <p>{errors.email?.message}</p>
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                <FormattedMessage id="contactMessage" />
              </label>
              <textarea
                id="message"
                {...register("message")}
                onChange={handleInputChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-yellow-200 focus:ring-2 focus:ring-yellow-100 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
              <p>{errors.message?.message}</p>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-[#9E0606] border-0 py-2 px-6 focus:outline-none hover:bg-[#C31F1F] rounded text-md"
            >
              <FormattedMessage id="contactButton" />
            </button>
            <p className="text-xs text-gray-500 mt-3">
              <FormattedMessage id="belowContactButtonText" />
            </p>
          </form>
        </>
      )}
    </>
  );
};

export default ContactForm;
