import React from "react";
import Header from '../components/NavBar';

const HomePage = ({
    ...otherProps
}) => {
    return (
        <div>
           <Header/> 
        </div>
    );
};

export default HomePage;