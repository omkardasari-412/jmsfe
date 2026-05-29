import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function UpdateJob() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [formData, setFormData] =
        useState({});

    useEffect(() => {

        axios.get(
            `http://localhost:5000/api/jobs/${id}`
        )
            .then(res => {

                setFormData(
                    res.data.data
                );

            });

    }, [id]);

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]:
                e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        await axios.put(
            `http://localhost:5000/api/jobs/${id}`,
            formData
        );

        navigate("/jobs");
    };

    return (

        <div>

            <h2>Update Job</h2>

            <form onSubmit={handleSubmit}>

                <input
                    name="title"
                    value={formData.title || ""}
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    name="companyName"
                    value={
                        formData.companyName || ""
                    }
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    name="location"
                    value={
                        formData.location || ""
                    }
                    onChange={handleChange}
                />

                <br /><br />

                <button type="submit">
                    Update
                </button>

            </form>

        </div>
    );
}

export default UpdateJob;