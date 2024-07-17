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
    nameRequest: yup.string().required(),
    surname: yup.string().required(),
    phone: yup.number().required(),
    company: yup.string().required(),
    companyAdress: yup.string().required(),
    emailRequest: yup.string().required(),
    subject: yup.string().required(),
    request: yup.string().required(),
  })
  .required();

type Props = {};

type FormData = {
  nameRequest: string;
  surname: string;
  phone: number;
  company: string;
  companyAdress: string;
  emailRequest: string;
  subject: string;
  request: string;
};

function RequestForm({}: Props) {
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

      console.log(response.config.data);
      if (response) {
        setSent(true);
        setLoading(false);
      }
    } catch (error) {
      setError(true);
      console.log(error);
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
        <div className="w-full md:w-1/2 m-auto">
          <Success />
        </div>
      ) : (
        <>
          <form
            onSubmit={onSubmit}
            className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2"
          >
            <div>
              <label
                htmlFor="nameRequest"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                <FormattedMessage id="requestName" />
              </label>
              <input
                id="nameRequest"
                {...register("nameRequest")}
                onChange={handleInputChange}
                name="nameRequest"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-yellow-200 transition duration-100 focus:ring"
              />
            </div>

            <div>
              <label
                htmlFor="surname"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                <FormattedMessage id="requestSurname" />
              </label>
              <input
                id="surname"
                {...register("surname")}
                onChange={handleInputChange}
                name="surname"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-yellow-200 transition duration-100 focus:ring"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                <FormattedMessage id="requestPhone" />
              </label>
              <input
                id="phone"
                {...register("phone")}
                onChange={handleInputChange}
                name="phone"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-yellow-200 transition duration-100 focus:ring"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="company"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                <FormattedMessage id="requestCompany" />
              </label>
              <input
                id="company"
                {...register("company")}
                onChange={handleInputChange}
                name="company"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-yellow-200 transition duration-100 focus:ring"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="companyAdress"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                <FormattedMessage id="requestCompanyAdress" />
              </label>
              <input
                id="companyAdress"
                {...register("companyAdress")}
                onChange={handleInputChange}
                name="companyAdress"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-yellow-200 transition duration-100 focus:ring"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="emailRequest"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                <FormattedMessage id="requestEmail" />
              </label>
              <input
                id="emailRequest"
                {...register("emailRequest")}
                onChange={handleInputChange}
                name="emailRequest"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-yellow-200 transition duration-100 focus:ring"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="subject"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                <FormattedMessage id="requestSubject" />
              </label>
              <input
                id="subject"
                {...register("subject")}
                onChange={handleInputChange}
                name="subject"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-yellow-200 transition duration-100 focus:ring"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="request"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                <FormattedMessage id="requestMessage" />
              </label>
              <textarea
                id="request"
                {...register("request")}
                onChange={handleInputChange}
                name="request"
                className="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-yellow-200 transition duration-100 focus:ring"
              ></textarea>
            </div>

            <div className="flex items-center flex-col justify-between sm:col-span-2">
              <button
                type="submit"
                className="inline-block rounded-lg w-full bg-[#ED224F] px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-[#ED224F] transition duration-100 hover:bg-[#D71D46] focus-visible:ring active:bg-[#ED224F] md:text-base"
              >
                <FormattedMessage id="requestMessageButton" />
              </button>
              <p className="text-xs text-gray-500 mt-3">
                <FormattedMessage id="belowRequestButtonText" />
              </p>
            </div>
          </form>
        </>
      )}{" "}
    </>
  );
}

export default RequestForm;
