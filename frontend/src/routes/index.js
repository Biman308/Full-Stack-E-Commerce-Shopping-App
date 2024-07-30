import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Login from '../pages/Login';
import ForgotPasswrd from '../pages/ForgotPasswrd';
import SignUp from '../pages/SignUp';

const Router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "",
                element : <Home/>
            },
            {
                path : "login",
                element : <Login/>
            },
            {
                path : "forgot-password",
                element : <ForgotPasswrd/>
            },
            {
                path : "sign-up",
                element : <SignUp/>
            },
        ]
    }
])


export default Router
