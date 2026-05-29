import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function JobDetails() {

    const { id } = useParams();

    const [job, setJob] = useState(null);

    useEffect(() => {

        axios.get(
            `http://localhost:5000/api/jobs/${id}`
        )
            .then(res =>
                setJob(res.data.data)
            );

    }, [id]);

    if (!job) {
        return <h3>Loading...</h3>;
    }

    return (

        <div>

            <h2>{job.title}</h2>

            <p>
                Company:
                {job.companyName}
            </p>

            <p>
                Location:
                {job.location}
            </p>

            <p>
                Salary:
                {job.salary}
            </p>

            <p>
                Experience:
                {job.experience}
            </p>

            <p>
                Description:
                {job.description}
            </p>

            <p>
                Skills:
                {job.skills.join(", ")}
            </p>

        </div>
    );
}

export default JobDetails;