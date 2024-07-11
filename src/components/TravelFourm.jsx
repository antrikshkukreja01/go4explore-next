"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import blogimg from "../assets/img/webp/blogimg.webp";
import { fetchForumsData } from "./Api";
import Link from "next/link";

const TravelForum = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchForumsData()
      .then((data) => setData(data))
      .catch((error) => setError(error));
  }, []);

  const [textareaValue, setTextareaValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [answerValue, setAnswerValue] = useState("");
  const [username, setUsername] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isButtonDisabled2, setIsButtonDisabled2] = useState(true);
  const [comments, setComments] = useState([]);
  const [isDivVisible, setIsDivVisible] = useState(false);

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

  const handleAnswerChange = (e) => {
    const value = e.target.value;
    setAnswerValue(value);
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
        timestamp: new Date().toLocaleDateString(), // Showing only the date
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

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <section className="py-5">
      <div className="py-5 bg_blue mt-sm-5">
        <div className="container max_width">
          <p className="mb-4 text-white fw-mediumxsm font_poppins">
            Ask your questions, get tips and help in planning your trips and
            discuss various travel-related topics with like-minded and real
            travelers.
          </p>
          <div className="bg-white bg-opacity-25 rounded-4 p-4">
            <form onSubmit={handleFormSubmit}>
              <input
                required
                value={username}
                onChange={handleUsernameChange}
                className="input_style_2 w-100 rounded-4 p-3"
                placeholder="Your name"
              />
              <textarea
                required
                value={textareaValue}
                onChange={handleTextareaChange}
                className="input_style_2 w-100 pt-3 rounded-4 ps-4 mt-3"
                rows={2}
                placeholder="Post Your Question Here..."
              />
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
            <div className="bg-white bg-opacity-25 mt-4 d-flex justify-content-between flex-column flex-sm-row align-items-center w-100 w_80 rounded-4">
              <input
                id="Input"
                required
                value={inputValue}
                onChange={handleInputChange}
                className="input_style_2 input_width_2 bg-transparent text-white rounded-4 p-3 p-md-4"
                placeholder="Best Way To Travel Ladakh In Budget..."
              />
              <div className="text-end w-100 pe-2 pe-sm-0">
                <button
                  className="btn btn-primary fw-medium fs_md rounded-4 px-4 py-2 m-sm-4 m-md-0 me-md-4 mb-3"
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
      <div className="container">
        <div className="row position-relative justify-content-between pt-5 pb-0 pb-lg-5">
          <div className="pt-lg-5 col-lg-8">
            <p className="mb-4 fw-bold fs_3xl text-black font_poppins">
              Latest Questions
            </p>
            {data.data.map((user) => (
              <div key={user.id} className="mb-4 blue_border rounded-3 p-3">
                <div className="d-flex align-items-center justify-content-between w-100 mb-4">
                  <div className="d-flex align-items-center gap-2">
                    <Image
                      className="rounded-5"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "40px", height: "40px" }}
                      src={user.user.image}
                      alt={user.user.name}
                    />
                    <p className="mb-0 clr_gray font_poppins fw-medium fs_xsm">
                      {user.user.name}
                    </p>
                  </div>
                  <p className="fw-medium fs_xsm mb-0 clr_gray font_poppins">
                    {new Date(user.created_at).toLocaleDateString()}
                  </p>
                </div>
                <Link
                  className="text-decoration-none"
                  href={`/forums/${encodeURIComponent(user.forumurl)}`}
                >
                  <p className="fw-semibold fs_md text-decoration-none text-black font_poppins">
                    {user.forum}
                  </p>
                </Link>

                <div className="d-flex align-items-center justify-content-between w-100">
                  <button
                    className="fw-semibold fs_sm  text-black text-decoration-none font_poppins border-0 bg-transparent mt-3"
                    onClick={toggleDivVisibility}
                  >
                    Answer
                  </button>

                  <article className="d-flex align-items-center gap-3">
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
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <g id="XMLID_834_">
                            <path
                              id="XMLID_835_"
                              d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064 c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996 V71.978c0-9.732,5.243-14.701,15.583-14.701h29.411c2.762,0,5-2.238,5-5V5c0-2.762-2.238-5-5-5h-40.545c-0.29-0.014-0.92-0.024-1.9-0.024 c-9.156,0-39.015,1.789-55.439,23.092c-13.54,16.868-11.859,37.055-11.503,41.271v45.536H81.703c-2.762,0-5,2.238-5,5v51.502 C76.703,162.868,78.941,165.106,81.703,165.106z"
                            ></path>
                          </g>
                        </g>
                      </svg>
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
                    <a id="linkedin" href="#">
                      <svg
                        className="w-100"
                        fill="#a6a6a6"
                        height="25px"
                        width="25px"
                        version="1.1"
                        id="Layer_1"
                        viewBox="0 0 382 382"
                        stroke="#a6a6a6"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path d="M347.445,0H34.555C15.457,0,0,15.457,0,34.555v312.89C0,366.543,15.457,382,34.555,382h312.89 C366.543,382,382,366.543,382,347.445V34.555C382,15.457,366.543,0,347.445,0z M114.244,328.313H56.722V148.592h57.522V328.313z M85.483,124.338h-0.381c-19.306,0-31.782-13.286-31.782-29.922c0-16.94,12.883-29.92,32.567-29.92 c19.685,0,31.783,12.98,32.165,29.92C117.868,111.052,105.392,124.338,85.483,124.338z M325.378,328.313h-57.521V234.667 c0-23.551-8.418-39.637-29.419-39.637c-16.046,0-25.595,10.794-29.798,21.225c-1.531,3.717-1.918,8.891-1.918,14.104v97.954 h-57.52c0,0,0.762-158.896,0-175.168h57.52v24.826c7.646-11.799,21.335-28.647,51.899-28.647 c37.897,0,66.308,24.756,66.308,78.043V328.313z"></path>
                        </g>
                      </svg>
                    </a>
                  </article>
                </div>
                {user.forumanswers.map((answer) => (
                  <div className=" blue_border bg_gray p-4 rounded-3 mt-3">
                    <div className=" d-flex align-items-center justify-content-between">
                      {" "}
                      <div className="d-flex align-items-center gap-2">
                        <Image
                          className="rounded-5"
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "40px", height: "40px" }}
                          src={answer.user.image}
                          alt={answer.user.name}
                        />
                        <p className="mb-0 clr_gray font_poppins fw-medium fs_xsm">
                          {answer.user.name}
                        </p>
                      </div>
                      <p className="fw-medium fs_xsm mb-0 clr_gray font_poppins">
                        {new Date(answer.created_at).toLocaleDateString()}
                      </p>
                    </div>
                    <p
                      className="fw-medium fs_xsm text-decoration-none text-black font_poppins mt-3"
                      dangerouslySetInnerHTML={{ __html: answer.answer }}
                    ></p>
                  </div>
                ))}
              </div>
            ))}
            {comments.length > 0 && (
              <div className="comments-section">
                <h3>Comments</h3>
                {comments.map((comment, index) => (
                  <div key={index} className="comment">
                    <p>{comment.username}</p>
                    <p>{comment.text}</p>
                    <p>{comment.timestamp}</p>
                  </div>
                ))}
              </div>
            )}
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
  );
};

export default TravelForum;
