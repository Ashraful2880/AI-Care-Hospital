import { Route, Redirect, useHistory, useLocation} from "react-router-dom";
import useAuth from "../Hooks/UseAuth";

const PrivateRoute = ({children,...rest}) => {
    const{user}=useAuth();
    let history=useHistory();
    let location=useLocation();

    return (
        <Route 
        {...rest}
        render={()=>
            user.email?children:<Redirect
            to={{
                pathname:"/login",
                state: { from: location }
            }}
            />
        }/>
    );
};

export default PrivateRoute;