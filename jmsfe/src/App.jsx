import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Login from "./pages/Login";
import ShowJobs from "./pages/ShowJobs";
import CreateJob from "./pages/CreateJob";
import JobDetails from "./pages/JobDetails";
import UpdateJob from "./pages/UpdateJob";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<Login />}
                />

                <Route
                    path="/jobs"
                    element={
                        <ProtectedRoute>
                            <ShowJobs />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/create-job"
                    element={
                        <ProtectedRoute>
                            <CreateJob />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/jobs/:id"
                    element={
                        <ProtectedRoute>
                            <JobDetails />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/jobs/edit/:id"
                    element={
                        <ProtectedRoute>
                            <UpdateJob />
                        </ProtectedRoute>
                    }
                />

            </Routes>

        </BrowserRouter>

    );
}

export default App;