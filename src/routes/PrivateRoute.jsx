import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext)

    if(loading){
        return (
                <div className="flex justify-center mt-12">
                    <span className="loading loading-spinner loading-lg bg-primary"></span>
                </div>
               )
    }



     if(user){
        return children;
     }
    
     return <Navigate to={"/login"}></Navigate>
    
};

PrivateRoute.propTypes ={
    children: PropTypes.node
} 

export default PrivateRoute;