import React from 'react';
import DevProfile from '../components/DeveloperProfile';
import EveryPageLayout from '../layouts/EveryPage';

const AboutPage = () => {
    return (

        <EveryPageLayout>
            <div className='flex flex-col bg-about bg-cover bg-center h-screen p-8 space-y-6'>
                <div className='flex bg-yellow-300/70 justify-center md:text-xl'>
                    <h1 className='flex md:flex text-center text-8xl text-black'>About our App!</h1>
                    <p className='text-4xl text-black text-center'>

                    </p>
                </div>

                <div className='flex justify-center bg-yellow-300/70'>
                    <h1 className='text-8xl text-black text-center hover:text-yellow-300'><a href='https://github.com/Ginger421/chairman-of-the-bored'>Visit our GitHub!</a></h1>
                </div>

                <div className='flex flex-col justify-center items-center bg-yellow-300/70'>
                    <h1 className='text-5xl text-center'>Meet the Developers behind your favorite App!</h1>
                    <div className='grid grid-cols-2'>
                        <DevProfile/>
                        <DevProfile/>
                        <DevProfile/>
                        <DevProfile/>
                    </div>
                </div>
            </div>
        </EveryPageLayout>
    )
};

export default AboutPage;