import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../App";

const List = () => {
    const [posts, setPosts] = useState([]);

    const loadPosts = () => {
        axios
            .get(BASE_URL + "/api/posts")
            .then((response) => response.data)
            .then((response_data) => {
                let posts = response_data.data;
                setPosts(posts);
            });
    };

    useEffect(() => {
        loadPosts();
    }, []);

    const handleDelete = (id) => {
        axios.delete(BASE_URL + "/api/posts/" + id).then(() => {
            loadPosts();
        });
    };

    return (
        <div className="container py-5">
            <div align="right">
                <Link to="/create" className="btn btn-primary mb-2">
                    Create
                </Link>
            </div>

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post, index) => {
                        return (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td width="150">{post.title}</td>
                                <td>{post.body}</td>
                                <td width="150">
                                    <Link
                                        to={"edit/" + post.id}
                                        className="btn btn-warning btn-sm"
                                    >
                                        Edit
                                    </Link>
                                    {"\u00A0"}
                                    {"\u00A0"}
                                    <a
                                        onClick={() => handleDelete(post.id)}
                                        className="btn btn-danger btn-sm"
                                    >
                                        Delete
                                    </a>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default List;
