import React from 'react';
import Header from './../../components/NavBar';


const LandingPageLayout = ({
    ...otherProps
}) => {
    return(
        <div>
            <Header />
        </div>
    );
};

export default LandingPageLayout;