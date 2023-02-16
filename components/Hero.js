import React, { useState } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";

const Hero = ({
  listUser = [
    {
      name: "Users",
      number: "390",
      icon: "/assets/Icon/heroicons_sm-user.svg",
    },
    {
      name: "Locations",
      number: "20",
      icon: "/assets/Icon/gridicons_location.svg",
    },
    {
      name: "Server",
      number: "50",
      icon: "/assets/Icon/bx_bxs-server.svg",
    },
  ],
}) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [email, setEmail] = useState("");
  const [requirements, setRequirements] = useState("");
  const [occupation, setOccupation] = useState("");
  const [whatsap, setWhatsap] = useState("");
  const [country, setCountry] = useState("");
  const [duration, setDuration] = useState("");
  const [revenue, setRevenue] = useState("");

  const [flg, setFlg] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setFirstname(event.target.firstname.value);
    setLastname(event.target.lastname.value);
    setBirthdate(event.target.birthdate.value);
    setEmail(event.target.email.value);
    setRequirements(event.target.requirements.value);

    //   lastname: event.target.lastname.value,
    //   birthdate: event.target.birthdate.value,
    //   email: event.target.email.value,
    //   requirements: event.target.requirements.value,
    // };

    // Send the data to the server in JSON format.
    // const JSONdata = JSON.stringify(data);
    // API endpoint where we send form data.
    // const endpoint = "http://localhost:8000/api/register/";

    // Form the request for sending data to the server.
    // const options = {
    // The method is POST because we are sending data.
    // method: "POST",
    // Tell the server we're sending JSON.
    // headers: {
    // "Content-Type": "application/json",
    // },
    // Body of the request is the JSON data we created above.
    // body: JSONdata,
    // };

    // console.log(options);
    // Send the form data to our forms API on Vercel and get a response.
    // const response = await fetch(endpoint, options);
    // fetch(endpoint, options)
    //   .then((res) => res.json())
    //   .catch((err) => console.log(err));

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    // const result = await response.json();
    //console.log(result.status);
    // if (result.status == "success") {
    setFlg(1);
  };
  const handleSubmit2 = async (event) => {
    event.preventDefault();

    const data = {
      firstname: firstname,
      lastname: lastname,
      birthdate: birthdate,
      email: email,
      requirements: requirements,
      occupation: event.target.occupation.value,
      whatsap: event.target.whatsap.value,
      country: event.target.country.value,
      duration: event.target.duration.value,
      revenue: event.target.revenue.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "https://freudentag-shop.com/public/api/register2";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    console.log(JSONdata);
    const response = await fetch(endpoint, options);
    const result = await response.json();
    if (result.status == "success") {
      setFlg(2);
    }
  };

  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-4 mx-auto" id="about">
      <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16 ">
        <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          </h1>
          <p className="text-black-500 mt-4 mb-6">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          </p>
          <div className="flex w-full">
            <div className="h-full w-full">
              <Image
                src="/assets/Illustration1.png"
                alt="VPN Illustrasi"
                quality={100}
                width={612}
                height={383}
                layout="responsive"
              />
            </div>
          </div>
        </div>
        <div className="p-4">
          {flg != 2 && (
            <div className="flex flex-col justify-center items-center rounded-xl py-4 px-6 lg:px-16 xl:px-20 border border-gray-500 shadow shadow-lg">
              <div className="w-full max-w-xs">
                {flg == 0 && (
                  <form
                    onSubmit={handleSubmit}
                    className="bg-white  rounded pt-6 pb-8 mb-6"
                  >
                    <div>
                      <h1 className="text-2xl form-title p-4 text-center font-medium text-black-600 leading-normal">
                        PERSONAL INFO
                      </h1>
                    </div>
                    <div className="mb-8">
                      <h6 className="text-1xl form-title p-4 pt-0 text-center font-medium text-black-600 leading-normal">
                        Lorem ipsum dolor sit amet
                      </h6>
                    </div>
                    <div className="mb-4">
                      <input
                        className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="firstname"
                        type="text"
                        placeholder="First name"
                        value={firstname}
                        onChange={(e) => {
                          setFirstname(e.target.value);
                        }}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="lastname"
                        type="text"
                        placeholder="Last name"
                        value={lastname}
                        onChange={(e) => {
                          setLastname(e.target.value);
                        }}
                        required
                      />
                    </div>
                    <div className="mb-4 datebox">
                      <input
                        type="text"
                        className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="birthdate"
                        placeholder="Birth date"
                        value={birthdate}
                        onChange={(e) => {
                          setBirthdate(e.target.value);
                        }}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="requirements"
                        type="text"
                        placeholder="Requirements"
                        value={requirements}
                        onChange={(e) => {
                          setRequirements(e.target.value);
                        }}
                        required
                      />
                    </div>
                    <div className="flex items-center justify-center">
                      <button
                        className="font-medium tracking-wide py-2 px-5 sm:px-8 border-none text-white-500 bg-green-500 outline-none rounded-lg"
                        type="submit"
                      >
                        Continue
                      </button>
                    </div>
                  </form>
                )}
                {flg == 1 && (
                  <form
                    onSubmit={handleSubmit2}
                    className="bg-white  rounded pt-6 pb-8 mb-6"
                  >
                    <div>
                      <h1 className="text-2xl form-title p-4 text-center font-medium text-black-600 leading-normal">
                        PERSONAL INFO
                      </h1>
                    </div>
                    <div className="mb-8">
                      <h6 className="text-1xl form-title p-4 pt-0 text-center font-medium text-black-600 leading-normal">
                        Lorem ipsum dolor sit amet
                      </h6>
                    </div>
                    <div className="mb-4">
                      <input
                        className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="occupation"
                        type="text"
                        placeholder="Occupation"
                        value={occupation}
                        onChange={(e) => {
                          setOccupation(e.target.value);
                        }}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="whatsap"
                        type="text"
                        placeholder="whatsap number"
                        value={whatsap}
                        onChange={(e) => {
                          setWhatsap(e.target.value);
                        }}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="country"
                        type="text"
                        placeholder="Country"
                        value={country}
                        onChange={(e) => {
                          setCountry(e.target.value);
                        }}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="duration"
                        type="text"
                        placeholder="Duration"
                        value={duration}
                        onChange={(e) => {
                          setDuration(e.target.value);
                        }}
                        required
                      />
                    </div>
                    <div className="mb-8">
                      <input
                        className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="revenue"
                        type="text"
                        placeholder="Revenue"
                        value={revenue}
                        onChange={(e) => {
                          setRevenue(e.target.value);
                        }}
                        required
                      />
                    </div>
                    <div className="flex items-center justify-center">
                      <button
                        className="font-medium tracking-wide py-2 px-5 sm:px-8 border-none text-white-500 bg-green-500 outline-none rounded-lg"
                        type="submit"
                      >
                        Continue
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          )}
          {flg == 2 && (
            <div className="flex flex-col justify-center items-center rounded-xl py-4 px-6 lg:px-16 xl:px-20">
              <div className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal w-full max-w-xs">
                Welcome
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="relative w-full flex">
        <div className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
          {listUser.map((listUsers, index) => (
            <div
              className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
              key={index}
            >
              <div className="flex mx-auto w-40 sm:w-auto">
                <div className="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full">
                  <img src={listUsers.icon} className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-black-600 font-bold">
                    {listUsers.number}+
                  </p>
                  <p className="text-lg text-black-500">{listUsers.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
