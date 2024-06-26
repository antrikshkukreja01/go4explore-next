"use client";
import React, { useState } from "react";

const BookNowPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    date: "",
  });

  const [mobileValid, setMobileValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };

    setFormData(newFormData);

    if (name === "mobile") {
      setMobileValid(value.length === 10);
    }

    if (name === "email") {
      setEmailValid(value.endsWith("@gmail.com"));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.mobile.length !== 10) {
      setMobileValid(false);
      return;
    }

    if (!formData.email.endsWith("@gmail.com")) {
      setEmailValid(false);
      return;
    }

    setMobileValid(true);
    setEmailValid(true);

    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setFormData({
        name: "",
        email: "",
        mobile: "",
        date: "",
      });
    } else {
      alert("Registration failed.");
      setFormData({
        name: "",
        email: "",
        mobile: "",
        date: "",
      });
    }
  };

  const [todos, setTodos] = useState([]);
  const [todoInputs, setTodoInputs] = useState({
    input1: "",
    input2: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === "input2") {
      // Remove non-numeric characters
      newValue = value.replace(/\D/g, "");

      // Limit to 10 characters
      if (newValue.length > 10) {
        newValue = newValue.slice(0, 10);
      }
    }

    setTodoInputs({
      ...todoInputs,
      [name]: newValue,
    });
  };

  const createTodo = () => {
    const { input1, input2 } = todoInputs;

    if (input1.trim() === "" || input2.trim() === "") {
      // Highlight the empty fields in red
      Object.keys(todoInputs).forEach((inputName) => {
        const inputElement = document.getElementById(inputName);
        if (todoInputs[inputName].trim() === "") {
          inputElement.style.background = "rgb(243, 149, 149)";
          setTimeout(() => {
            inputElement.style.background = "white";
          }, 2000);
        }
      });
      return;
    }

    const newTodo = {
      text: `${input1} ( +91 ${input2} )`,
      number: todos.length + 1,
      isEditing: false,
    };

    setTodos([...todos, newTodo]);
    setTodoInputs({
      input1: "",
      input2: "",
    });
  };

  const handleEdit = (index) => {
    const newTodos = [...todos];
    newTodos[index].isEditing = true;
    setTodos(newTodos);
  };

  const handleSave = (index, newText) => {
    const newTodos = [...todos];
    newTodos[index] = {
      ...newTodos[index],
      text: newText,
      isEditing: false,
    };
    setTodos(newTodos);
  };

  const handleRemove = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(
      newTodos.map((todo, index) => ({
        ...todo,
        number: index + 1,
      }))
    );
  };

  // Check if any of the required fields are empty
  const isFormEmpty =
    formData.name.trim() === "" ||
    formData.email.trim() === "" ||
    formData.mobile.trim() === "" ||
    formData.date.trim() === "";

  return (
    <>
      <section className="py-5">
        <div className=" container pt-5 mt-5">
          <div className="grayborder boxshadow py-4 px-3 p-sm-5 guest_width mx-auto rounded-3 bg-white">
            <p className="mb-0 fs_lg fw-semibold font_poppins text-black text-center">
              Please fill your details
            </p>
            <form onSubmit={handleSubmit}>
              <div className="d-flex align-items-center flex-column flex-md-row gap-2 gap-md-3 mt-4">
                <article className="inputwidths">
                  <p className="mb-2 fw-normal fs_xsm font_poppins text-black">
                    Name
                  </p>
                  <input
                    required
                    className="mb-2 mb-md-3 p-3 rounded-3 grayborder input_style_2 w-100"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Your Name"
                  />
                </article>
                <article className="inputwidths">
                  <p className="mb-2 fw-normal fs_xsm font_poppins text-black">
                    Email
                  </p>
                  <input
                    required
                    className="mb-2 mb-md-3 p-3 rounded-3 grayborder input_style_2 w-100"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                  />
                </article>
              </div>
              {!emailValid && (
                <p className="text-danger text-end">
                  Email must be a valid Gmail address
                </p>
              )}

              <div className="d-flex align-items-center flex-column flex-md-row gap-2 gap-md-3 mt-2">
                <div className="d-flex flex-column inputwidths">
                  <p className="mb-2 fw-normal fs_xsm font_poppins text-black">
                    Phone Number
                  </p>
                  <input
                    required
                    className="mb-2 mb-md-3 p-3 rounded-3 grayborder input_style_2 w-100"
                    type="number"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Mobile"
                  />
                  {!mobileValid && (
                    <p className="text-danger">
                      Mobile Number must be 10 digits
                    </p>
                  )}
                </div>
                <div className="position-relative inputwidths">
                  <p className="mb-2 fw-normal fs_xsm font_poppins text-black">
                    Date of Travel
                  </p>
                  <input
                    required
                    className="mb-2 mb-md-3 p-3 rounded-3 bg-white grayborder input_style_2 w-100"
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                  />
                  {!formData.date && (
                    <span
                      className="position-absolute top-50 start-0 translate-middle-y d-sm-none text-muted ps-3"
                      style={{ pointerEvents: "none" }}
                    >
                      dd/mm/yyyy
                    </span>
                  )}
                </div>
              </div>
              <p className="mb-2 mt-3 fs_sm fw-medium text-black">
                Additional Traveler
              </p>
              <div className="inputparent rounded-3 mb-3 d-flex justify-content-between flex-column flex-md-row gap-3">
                <input
                  className="input form-control"
                  id="input1"
                  name="input1"
                  type="text"
                  placeholder="Traveler Name"
                  value={todoInputs.input1}
                  onChange={handleInputChange}
                />
                <input
                  className="input form-control"
                  id="input2"
                  name="input2"
                  type="number"
                  placeholder="Traveler Number"
                  value={todoInputs.input2}
                  onChange={handleInputChange}
                />

                <a
                  href="#"
                  className="bg-primary text-decoration-none text-center text-white fw-semibold fs_sm font_poppins input_style_2 py-2 rounded-3 px-4"
                  onClick={createTodo}
                >
                  Add
                </a>
              </div>
              <ul id="listeditem" className="ps-0">
                {todos.map((todo, index) => (
                  <li key={index} className="d-flex flex-column mb-2">
                    <div className="d-flex align-items-center flex-column flex-sm-row justify-content-between">
                      <div className="DivPatent rounded-3">
                        {todo.isEditing ? (
                          <>
                            {todo.number}.{" "}
                            <input
                              type="text"
                              defaultValue={todo.text}
                              onBlur={(e) => handleSave(index, e.target.value)}
                              autoFocus
                            />
                          </>
                        ) : (
                          <>
                            {todo.number}. {todo.text}
                          </>
                        )}
                      </div>
                      <div className="d-flex justify-content-end gap-2">
                        {!todo.isEditing && (
                          <button
                            className="btn btn_remove"
                            onClick={() => handleEdit(index)}
                          >
                            Edit
                          </button>
                        )}
                        {todo.isEditing && (
                          <button
                            className="btn btn_remove"
                            onClick={() => handleSave(index, todo.text)}
                          >
                            Save
                          </button>
                        )}
                        <button
                          className="btn btn_remove"
                          onClick={() => handleRemove(index)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="d-flex justify-content-center mt-5">
                <button
                  type="submit"
                  className={`bg-primary text-white input_style_2 fw-bold fs_md rounded-3  px-4 py-3 ${
                    isFormEmpty ? "disabled" : ""
                  }`}
                  disabled={isFormEmpty}
                  style={{ opacity: isFormEmpty ? "0.5" : "1" }}
                >
                  Proceed
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookNowPage;
