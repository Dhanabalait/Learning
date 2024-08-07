import React from "react";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../App";
import { useNavigate, Link, Navigate } from "react-router-dom";
export const Create = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [inputs, setInputs] = useState({ title: "", body: "" });
    const handleChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        let data = { title: inputs.title, body: inputs.body };
        axios
            .post(BASE_URL + "/api/posts", data)
            .then(() => {
                navigate("/");
            })
            .catch(() => {
                setError("Unable to create a post");
            });
    };
    return (
        <div className="container py-5">
            <div className="d-flex align-items-center">
                <Link to="/">
                    <i className="bi bi-arrow-left-circle fs-5 text-secondary"></i>
                </Link>
                <h3 className="ms-3">Create Post</h3>
            </div>
            {error ? (
                <div className="alert alert-danger p-2 mt-3">{error}</div>
            ) : (
                ""
            )}
            <form action="" onSubmit={handleFormSubmit}>
                <div className="form-group mb-3">
                    <label htmlFor="">Title</label>
                    <input
                        className="form-control"
                        type="text"
                        onChange={handleChange}
                        name="title"
                        id=""
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="">Description</label>
                    <textarea
                        className="form-control"
                        onChange={handleChange}
                        name="body"
                        id=""
                        rows="5"
                    ></textarea>
                </div>
                <div className="form-group mb-3">
                    <button className="btn btn-success mt-2">Save</button>
                </div>
            </form>
        </div>
    );
};
export default Create;
