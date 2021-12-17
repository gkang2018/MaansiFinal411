import React, {useEffect} from 'react';
import { useNavigate } from 'react-router';
import "./index.css"

const Homepage = ({
    checkAuthStatus
}) => {

    const navigate = useNavigate();

    const checkAuth = async () => {
        try {
            const auth = await checkAuthStatus();
            if (auth) {
                navigate("/dashboard")
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        checkAuth();
    }, [])

    return (
        <div className="background-container container">
            
        </div>
    )
}

export default Homepage