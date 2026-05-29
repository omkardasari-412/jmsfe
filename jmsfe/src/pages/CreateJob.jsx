import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateJob() {

    const navigate = useNavigate();

    const [formData, setFormData] =
        useState({
            title: "",
            companyName: "",
            location: "",
            salary: "",
            jobType: "",
            experience: "",
            description: "",
            skills: ""
        });

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]:
                e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        await axios.post(
            "http://localhost:5000/api/jobs",
            {
                ...formData,
                skills:
                    formData.skills
                        .split(",")
                        .map(skill =>
                            skill.trim())
            }
        );

        navigate("/jobs");
    };

    return (

        <div>

            <h2>Create Job</h2>

            <form onSubmit={handleSubmit}>

                {Object.keys(formData).map(key => (

                    <div key={key}>

                        <input
                            type="text"
                            name={key}
                            placeholder={key}
                            value={formData[key]}
                            onChange={handleChange}
                        />

                        <br /><br />

                    </div>

                ))}

                <button type="submit">
                    Create Job
                </button>

            </form>

        </div>
    );
}

export default CreateJob;