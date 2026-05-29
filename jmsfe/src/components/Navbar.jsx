import { Link, useNavigate }
from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem(
            "token"
        );

        navigate("/");
    };

    return (

        <div>

            <Link to="/jobs">
                Jobs
            </Link>

            {" | "}

            <Link to="/create-job">
                Create Job
            </Link>

            {" | "}

            <button onClick={logout}>
                Logout
            </button>

            <hr />

        </div>
    );
}

export default Navbar;