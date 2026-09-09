import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import PostJob from "./Pages/PostJob/PostJob";
import Jobs from "./Pages/Jobs/Jobs";

let Routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/post',
                element: <PostJob />
            },
            {
                path: '/jobs',
                element: <Jobs />
            }
        ]
    }
])

export default Routes;