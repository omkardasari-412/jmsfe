import React, { useState, useEffect } from "react";
import axios from "axios";

function ShowJobs() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/jobs")
            .then((response) => {
                setJobs(response.data.data);
            })
            .catch((error) => {
                console.error("Error fetching jobs:", error);
            });
    }, []);

    return (
        <div>
            <h1>Job Listings</h1>

            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Company</th>
                        <th>Location</th>
                        <th>Salary</th>
                        <th>Job Type</th>
                        <th>Experience</th>
                        <th>Skills</th>
                    </tr>
                </thead>

                <tbody>
                    {jobs.map((job) => (
                        <tr key={job._id}>
                            <td>{job.title}</td>
                            <td>{job.companyName}</td>
                            <td>{job.location}</td>
                            <td>{job.salary}</td>
                            <td>{job.jobType}</td>
                            <td>{job.experience}</td>
                            <td>{job.skills.join(", ")}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ShowJobs;