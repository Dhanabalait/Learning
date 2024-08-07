import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../App";
import { useNavigate, Link, Navigate, useParams } from "react-router-dom";
export const Edit = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [error, setError] = useState(null);
    const [inputs, setInputs] = useState({ title: "", body: "" });

    const handleChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        let data = { title: inputs.title, body: inputs.body };
        axios
            .put(BASE_URL + "/api/posts/" + id, data)
            .then(() => {
                navigate("/");
            })
            .catch(() => {
                setError("Unable to update a post");
            });
    };

    const getEditPost = () => {
        axios
            .get(BASE_URL + "/api/posts/" + id + "/edit")
            .then((res) => res.data)
            .then((res_data) => {
                let post = res_data.data;
                setInputs({ title: post.title, body: post.body });
            });
    };

    useEffect(() => {
        getEditPost();
    },[]);

    return (
        <div className="container py-5">
            <div className="d-flex align-items-center">
                <Link to="/">
                    <i className="bi bi-arrow-left-circle fs-5 text-secondary"></i>
                </Link>
                <h3 className="ms-3">Edit Post</h3>
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
                        value={inputs.title}
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="">Description</label>
                    <textarea
                        className="form-control"
                        onChange={handleChange}
                        name="body"
                        value={inputs.body}
                        rows="5"
                    ></textarea>
                </div>
                <div className="form-group mb-3">
                    <button className="btn btn-success mt-2">Update</button>
                </div>
            </form>
        </div>
    );
};
export default Edit;
