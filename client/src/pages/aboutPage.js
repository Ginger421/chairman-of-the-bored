import React from 'react';
import DevProfile from '../components/DeveloperProfile';
import EveryPageLayout from '../layouts/EveryPage';

const AboutPage = () => {
    <EveryPageLayout>
        <div className='flex flex-col'>
            <div>
                <h1>About our App!</h1>
                <p></p>
            </div>

            <div>
                <h1><a href='https://github.com/Ginger421/chairman-of-the-bored'>Visit our GitHub!</a></h1>
            </div>

            <div>
                <h1>Meet the Developers behind your favorite App!</h1>
                <DevProfile/>
                <DevProfile/>
                <DevProfile/>
                <DevProfile/>
            </div>
        </div>
    </EveryPageLayout>
};

export default AboutPage;