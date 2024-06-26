"use client";
import React, { useState, useEffect } from "react";
import blogimg from "../assets/img/webp/blogimg.webp";
import usericon from "../assets/img/png/user.png";
import { applicants } from "./Questions";
import Image from "next/image";

const TravelForum = () => {
  const [textareaValue, setTextareaValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [AnswerValue, setanswerValue] = useState("");
  const [username, setUsername] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isButtonDisabled2, setIsButtonDisabled2] = useState(true);
  const [isButtonDisabled3, setIsButtonDisabled3] = useState(true);
  const [comments, setComments] = useState([]);
  const [isDivVisible, setIsDivVisible] = useState(false); // State to manage visibility

  useEffect(() => {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const handleTextareaChange = (e) => {
    const value = e.target.value;
    setTextareaValue(value);
    setIsButtonDisabled(value.trim() === "" || !username);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setIsButtonDisabled2(value.trim() === "");
  };
  const handleanswerChange = (e) => {
    const value = e.target.value;
    setanswerValue(value);
    setIsButtonDisabled3(value.trim() === "");
  };

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    setIsButtonDisabled(textareaValue.trim() === "" || !value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (textareaValue.trim() && username) {
      const newComment = {
        username: username,
        text: textareaValue,
        timestamp: new Date().toLocaleDateString(), // Changing to display only date
      };
      setComments([...comments, newComment]);
      setTextareaValue("");
      setUsername("");
      setIsButtonDisabled(true);
    }
  };

  const toggleDivVisibility = () => {
    setIsDivVisible(!isDivVisible);
  };

  return (
    <>
      <section className="py-5">
        <div className="py-5 bg_blue mt-sm-5">
          <div className=" container max_width ">
            <p className="mb-4 text-white fw-mediumxsm font_poppins">
              Ask your questions, get tips and help in planning your trips and
              discuss about various travel-related topics with like-minded and
              real travelers
            </p>
            <div className="bg-white bg-opacity-25 rounded-4 p-4">
              <form onSubmit={handleFormSubmit}>
                <input
                  required
                  value={username}
                  onChange={handleUsernameChange}
                  className="input_style_2 w-100 rounded-4 p-3"
                  placeholder="Your name"
                ></input>

                <textarea
                  required
                  value={textareaValue}
                  onChange={handleTextareaChange}
                  className="input_style_2 w-100 pt-3 rounded-4 ps-4 mt-3"
                  rows={2}
                  placeholder="Post Your Question Here..."
                ></textarea>
                <div className="mt-3 text-end">
                  <button
                    className="btn btn-primary fw-medium fs_md text-uppercase rounded-4 px-4 py-2"
                    type="submit"
                    disabled={isButtonDisabled}
                  >
                    Post
                  </button>
                </div>
              </form>
            </div>
            <div className="mt-3">
              <p className="mb-3 fs_xsm fw-medium text-white font_poppins">
                Suggested Topics:
              </p>
              <div className="d-flex align-items-center gap-2">
                <a
                  className="p-2 Suggested_btn text-decoration-none text-white fw-medium fs_xsm font_poppins"
                  href="#"
                >
                  Popular
                </a>
                <a
                  className="p-2 Suggested_btn text-decoration-none text-white fw-medium fs_xsm font_poppins"
                  href="#"
                >
                  Spiti Valley
                </a>
                <a
                  className="p-2 Suggested_btn text-decoration-none text-white fw-medium fs_xsm font_poppins"
                  href="#"
                >
                  Winter Treks
                </a>
              </div>
              <div className="bg-white bg-opacity-25 mt-4 d-flex justify-content-between flex-column flex-sm-row  align-items-center w-100 w_80 rounded-4 ">
                <input
                  id="Input"
                  required
                  value={inputValue}
                  onChange={handleInputChange}
                  className="input_style_2 input_width_2 bg-transparent text-white rounded-4 p-3 p-md-4"
                  placeholder="Best Way To Travel Ladakh In Budget..."
                ></input>
                <div className="text-end w-100 pe-2 pe-sm-0">
                  <button
                    className="btn btn-primary fw-medium fs_md rounded-4 px-4 py-2 m-sm-4 m-md-0 me-md-4 mb-3 "
                    type="submit"
                    disabled={isButtonDisabled2}
                  >
                    Search Forum
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" container">
          <div className=" row position-relative justify-content-between pt-5 pb-0 pb-lg-5">
            <div className="pt-lg-5 col-lg-8 ">
              <p className="mb-4 fw-bold fs_3xl text-black font_poppins">
                Latest Questions
              </p>{" "}
              {comments.map((comment, index) => (
                <div key={index} className="mb-4 blue_border rounded-3 p-3">
                  <div className="d-flex align-items-center w-100 justify-content-between mb-2">
                    <p className="fw-medium fs_xsm d-flex align-items-center gap-2 text-decoration-none clr_gray font_poppins">
                      <Image width={50} src={usericon} alt="usericon" />{" "}
                      {comment.username}
                    </p>
                    <p className="fw-medium fs_xsm text-decoration-none clr_gray font_poppins">
                      {comment.timestamp}
                    </p>
                  </div>
                  <p className="fw-semibold fs_md text-decoration-none text-black font_poppins">
                    {comment.text}
                  </p>
                  <div className=" d-flex align-items-center justify-content-between">
                    <button
                      onClick={toggleDivVisibility}
                      className=" input_style_2 bg-transparent  fw-medium fs-6 rounded-2 "
                    >
                      {isDivVisible ? "Cancel" : "Answer"}
                    </button>
                    <article className=" d-flex align-items-center gap-3">
                      <a id="facebook" href="#">
                        <svg
                          className="w-100"
                          fill="#a6a6a6"
                          height="25px"
                          width="25px"
                          version="1.1"
                          id="Layer_1"
                          viewBox="0 0 310 310"
                          stroke="#a6a6a6"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <g id="XMLID_834_">
                              {" "}
                              <path
                                id="XMLID_835_"
                                d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064 c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996 V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545 C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703 c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z"
                              ></path>{" "}
                            </g>{" "}
                          </g>
                        </svg>{" "}
                      </a>
                      <a id="twitter" href="#">
                        <svg
                          className="w-100"
                          fill="#a6a6a6"
                          height="25px"
                          width="25px"
                          version="1.1"
                          id="Layer_1"
                          viewBox="0 0 310 310"
                          stroke="#a6a6a6"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <g id="XMLID_826_">
                              {" "}
                              <path
                                id="XMLID_827_"
                                d="M302.973,57.388c-4.87,2.16-9.877,3.983-14.993,5.463c6.057-6.85,10.675-14.91,13.494-23.73 c0.632-1.977-0.023-4.141-1.648-5.434c-1.623-1.294-3.878-1.449-5.665-0.39c-10.865,6.444-22.587,11.075-34.878,13.783 c-12.381-12.098-29.197-18.983-46.581-18.983c-36.695,0-66.549,29.853-66.549,66.547c0,2.89,0.183,5.764,0.545,8.598 C101.163,99.244,58.83,76.863,29.76,41.204c-1.036-1.271-2.632-1.956-4.266-1.825c-1.635,0.128-3.104,1.05-3.93,2.467 c-5.896,10.117-9.013,21.688-9.013,33.461c0,16.035,5.725,31.249,15.838,43.137c-3.075-1.065-6.059-2.396-8.907-3.977 c-1.529-0.851-3.395-0.838-4.914,0.033c-1.52,0.871-2.473,2.473-2.513,4.224c-0.007,0.295-0.007,0.59-0.007,0.889 c0,23.935,12.882,45.484,32.577,57.229c-1.692-0.169-3.383-0.414-5.063-0.735c-1.732-0.331-3.513,0.276-4.681,1.597 c-1.17,1.32-1.557,3.16-1.018,4.84c7.29,22.76,26.059,39.501,48.749,44.605c-18.819,11.787-40.34,17.961-62.932,17.961 c-4.714,0-9.455-0.277-14.095-0.826c-2.305-0.274-4.509,1.087-5.294,3.279c-0.785,2.193,0.047,4.638,2.008,5.895 c29.023,18.609,62.582,28.445,97.047,28.445c67.754,0,110.139-31.95,133.764-58.753c29.46-33.421,46.356-77.658,46.356-121.367 c0-1.826-0.028-3.67-0.084-5.508c11.623-8.757,21.63-19.355,29.773-31.536c1.237-1.85,1.103-4.295-0.33-5.998 C307.394,57.037,305.009,56.486,302.973,57.388z"
                              ></path>{" "}
                            </g>{" "}
                          </g>
                        </svg>
                      </a>
                    </article>
                  </div>
                  {isDivVisible && (
                    <textarea
                      required
                      className="input_style_2 w-100 pt-3 rounded-4 bg-light ps-4 mt-3"
                      rows={4}
                      placeholder="Post Your Answer Here..."
                    ></textarea>
                  )}
                </div>
              ))}
              {applicants.map(function (data) {
                return (
                  <>
                    {" "}
                    <div className="mb-4 blue_border rounded-3 p-3">
                      <div className=" d-flex align-items-center justify-content-between w-100 mb-4">
                        <div className=" d-flex align-items-center gap-2">
                          <Image width={40} src={usericon} alt="usericon" />
                          <p className=" mb-0 clr_gray font_poppins fw-medium fs_xsm ">
                            {data.name}
                          </p>
                        </div>{" "}
                        <p className="fw-medium fs_xsm mb-0 clr_gray font_poppins">
                          {data.date}
                        </p>
                      </div>
                      <p className="fw-semibold fs_md text-decoration-none text-black font_poppins">
                        {data.question}
                      </p>
                      <div className=" d-flex align-items-center justify-content-between w-100">
                        <a
                          className=" fw-semibold fs_sm text-black text-decoration-none font"
                          href="#"
                        >
                          Answer
                        </a>

                        <article className=" d-flex align-items-center gap-3">
                          <a id="facebook" href="#">
                            <svg
                              className="w-100"
                              fill="#a6a6a6"
                              height="25px"
                              width="25px"
                              version="1.1"
                              id="Layer_1"
                              viewBox="0 0 310 310"
                              stroke="#a6a6a6"
                            >
                              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                              <g
                                id="SVGRepo_tracerCarrier"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></g>
                              <g id="SVGRepo_iconCarrier">
                                {" "}
                                <g id="XMLID_834_">
                                  {" "}
                                  <path
                                    id="XMLID_835_"
                                    d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064 c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996 V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545 C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703 c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z"
                                  ></path>{" "}
                                </g>{" "}
                              </g>
                            </svg>{" "}
                          </a>
                          <a id="twitter" href="#">
                            <svg
                              className="w-100"
                              fill="#a6a6a6"
                              height="25px"
                              width="25px"
                              version="1.1"
                              id="Layer_1"
                              viewBox="0 0 310 310"
                              stroke="#a6a6a6"
                            >
                              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                              <g
                                id="SVGRepo_tracerCarrier"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></g>
                              <g id="SVGRepo_iconCarrier">
                                {" "}
                                <g id="XMLID_826_">
                                  {" "}
                                  <path
                                    id="XMLID_827_"
                                    d="M302.973,57.388c-4.87,2.16-9.877,3.983-14.993,5.463c6.057-6.85,10.675-14.91,13.494-23.73 c0.632-1.977-0.023-4.141-1.648-5.434c-1.623-1.294-3.878-1.449-5.665-0.39c-10.865,6.444-22.587,11.075-34.878,13.783 c-12.381-12.098-29.197-18.983-46.581-18.983c-36.695,0-66.549,29.853-66.549,66.547c0,2.89,0.183,5.764,0.545,8.598 C101.163,99.244,58.83,76.863,29.76,41.204c-1.036-1.271-2.632-1.956-4.266-1.825c-1.635,0.128-3.104,1.05-3.93,2.467 c-5.896,10.117-9.013,21.688-9.013,33.461c0,16.035,5.725,31.249,15.838,43.137c-3.075-1.065-6.059-2.396-8.907-3.977 c-1.529-0.851-3.395-0.838-4.914,0.033c-1.52,0.871-2.473,2.473-2.513,4.224c-0.007,0.295-0.007,0.59-0.007,0.889 c0,23.935,12.882,45.484,32.577,57.229c-1.692-0.169-3.383-0.414-5.063-0.735c-1.732-0.331-3.513,0.276-4.681,1.597 c-1.17,1.32-1.557,3.16-1.018,4.84c7.29,22.76,26.059,39.501,48.749,44.605c-18.819,11.787-40.34,17.961-62.932,17.961 c-4.714,0-9.455-0.277-14.095-0.826c-2.305-0.274-4.509,1.087-5.294,3.279c-0.785,2.193,0.047,4.638,2.008,5.895 c29.023,18.609,62.582,28.445,97.047,28.445c67.754,0,110.139-31.95,133.764-58.753c29.46-33.421,46.356-77.658,46.356-121.367 c0-1.826-0.028-3.67-0.084-5.508c11.623-8.757,21.63-19.355,29.773-31.536c1.237-1.85,1.103-4.295-0.33-5.998 C307.394,57.037,305.009,56.486,302.973,57.388z"
                                  ></path>{" "}
                                </g>{" "}
                              </g>
                            </svg>
                          </a>
                        </article>
                      </div>
                      {/* <div className=" d-flex align-items-center justify-content-between">
                        <button
                          onClick={toggleDivVisibility}
                          className=" input_style_2 bg-transparent  fw-medium fs-6 rounded-2 "
                        >
                          {isDivVisible ? "Cancel" : "Answer"}
                        </button>
                        <article className=" d-flex align-items-center gap-3">
                          <a id="facebook" href="#">
                            <svg
                              fill="#a6a6a6"
                              height="25px"
                              width="25px"
                              version="1.1"
                              id="Layer_1"
                              viewBox="0 0 310 310"
                              stroke="#a6a6a6"
                            >
                              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                              <g
                                id="SVGRepo_tracerCarrier"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></g>
                              <g id="SVGRepo_iconCarrier">
                                {" "}
                                <g id="XMLID_834_">
                                  {" "}
                                  <path
                                    id="XMLID_835_"
                                    d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064 c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996 V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545 C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703 c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z"
                                  ></path>{" "}
                                </g>{" "}
                              </g>
                            </svg>{" "}
                          </a>
                          <a id="twitter" href="#">
                            <svg
                              fill="#a6a6a6"
                              height="25px"
                              width="25px"
                              version="1.1"
                              id="Layer_1"
                              viewBox="0 0 310 310"
                              stroke="#a6a6a6"
                            >
                              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                              <g
                                id="SVGRepo_tracerCarrier"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></g>
                              <g id="SVGRepo_iconCarrier">
                                {" "}
                                <g id="XMLID_826_">
                                  {" "}
                                  <path
                                    id="XMLID_827_"
                                    d="M302.973,57.388c-4.87,2.16-9.877,3.983-14.993,5.463c6.057-6.85,10.675-14.91,13.494-23.73 c0.632-1.977-0.023-4.141-1.648-5.434c-1.623-1.294-3.878-1.449-5.665-0.39c-10.865,6.444-22.587,11.075-34.878,13.783 c-12.381-12.098-29.197-18.983-46.581-18.983c-36.695,0-66.549,29.853-66.549,66.547c0,2.89,0.183,5.764,0.545,8.598 C101.163,99.244,58.83,76.863,29.76,41.204c-1.036-1.271-2.632-1.956-4.266-1.825c-1.635,0.128-3.104,1.05-3.93,2.467 c-5.896,10.117-9.013,21.688-9.013,33.461c0,16.035,5.725,31.249,15.838,43.137c-3.075-1.065-6.059-2.396-8.907-3.977 c-1.529-0.851-3.395-0.838-4.914,0.033c-1.52,0.871-2.473,2.473-2.513,4.224c-0.007,0.295-0.007,0.59-0.007,0.889 c0,23.935,12.882,45.484,32.577,57.229c-1.692-0.169-3.383-0.414-5.063-0.735c-1.732-0.331-3.513,0.276-4.681,1.597 c-1.17,1.32-1.557,3.16-1.018,4.84c7.29,22.76,26.059,39.501,48.749,44.605c-18.819,11.787-40.34,17.961-62.932,17.961 c-4.714,0-9.455-0.277-14.095-0.826c-2.305-0.274-4.509,1.087-5.294,3.279c-0.785,2.193,0.047,4.638,2.008,5.895 c29.023,18.609,62.582,28.445,97.047,28.445c67.754,0,110.139-31.95,133.764-58.753c29.46-33.421,46.356-77.658,46.356-121.367 c0-1.826-0.028-3.67-0.084-5.508c11.623-8.757,21.63-19.355,29.773-31.536c1.237-1.85,1.103-4.295-0.33-5.998 C307.394,57.037,305.009,56.486,302.973,57.388z"
                                  ></path>{" "}
                                </g>{" "}
                              </g>
                            </svg>
                          </a>
                        </article>
                      </div>
                      {isDivVisible && (
                        <div>
                          <textarea
                            required
                            className="input_style_2 w-100 pt-3 rounded-4 bg-light ps-4 mt-3"
                            rows={4}
                            value={AnswerValue}
                            onChange={handleanswerChange}
                            placeholder="Post Your Answer Here..."
                          ></textarea>{" "}
                          <div className=" text-end">
                            <button
                              className="btn btn-primary fw-normal fs-6 text-uppercase rounded-4 px-3 py-2"
                              type="submit"
                              disabled={isButtonDisabled3}
                            >
                              Post
                            </button>
                          </div>
                        </div>
                      )}{" "} */}
                    </div>
                  </>
                );
              })}
            </div>
            <div className=" col-lg-4 col-xxl-3">
              <div className="top-10 position-sticky pt-4 pt-lg-5">
                <div className="border-3 border rounded-3 p-4 mb-4">
                  <p className="mb-2 font_poppins fw-semiboldxsm text-black text-center">
                    Have Doubts? Talk To Our Travel Experts!
                  </p>
                  <p className="mb-0 font_poppins fw-medium fs-13 text-black text-center">
                    Allow Us to Call You Back
                  </p>
                  <a
                    className="white_space callback_btn fs_xsm fw-medium w-100 rounded-5 d-inline-block mt-3 text-center text-decoration-none"
                    href="#"
                  >
                    Request Callback
                  </a>
                </div>
                <Image
                  className="w-100 h_400 rounded-4 mb-lg-5"
                  src={blogimg}
                  alt="blogimg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TravelForum;
