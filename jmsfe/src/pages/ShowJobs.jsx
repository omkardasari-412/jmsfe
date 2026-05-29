import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ShowJobs() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async () => {
        try {
            const response = await axios.get(
                "http://localhost:5000/api/jobs"
            );

            setJobs(response.data.data);
        } catch (error) {
            console.error(
                "Error fetching jobs:",
                error
            );
        }
    };

    const deleteJob = async (id) => {
        try {
            await axios.delete(
                `http://localhost:5000/api/jobs/${id}`
            );

            setJobs(prevJobs =>
                prevJobs.filter(
                    job => job._id !== id
                )
            );

            alert("Job deleted successfully");
        } catch (error) {
            console.error(
                "Error deleting job:",
                error
            );

            alert("Failed to delete job");
        }
    };

    return (
        <div>

            <h1>Job Listings</h1>

            <table
                border="1"
                cellPadding="10"
                cellSpacing="0"
            >

                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Company</th>
                        <th>Location</th>
                        <th>Salary</th>
                        <th>Job Type</th>
                        <th>Experience</th>
                        <th>Skills</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>

                    {jobs.length > 0 ? (

                        jobs.map((job) => (

                            <tr key={job._id}>

                                <td>{job.title}</td>

                                <td>
                                    {job.companyName}
                                </td>

                                <td>
                                    {job.location}
                                </td>

                                <td>
                                    {job.salary}
                                </td>

                                <td>
                                    {job.jobType}
                                </td>

                                <td>
                                    {job.experience}
                                </td>

                                <td>
                                    {job.skills.join(", ")}
                                </td>

                                <td>

                                    <Link
                                        to={`/jobs/${job._id}`}
                                    >
                                        View
                                    </Link>

                                    {" | "}

                                    <Link
                                        to={`/jobs/edit/${job._id}`}
                                    >
                                        Edit
                                    </Link>

                                    {" | "}

                                    <button
                                        onClick={() =>
                                            deleteJob(
                                                job._id
                                            )
                                        }
                                    >
                                        Delete
                                    </button>

                                </td>

                            </tr>

                        ))

                    ) : (

                        <tr>
                            <td
                                colSpan="8"
                                align="center"
                            >
                                No Jobs Found
                            </td>
                        </tr>

                    )}

                </tbody>

            </table>

        </div>
    );
}

export default ShowJobs;