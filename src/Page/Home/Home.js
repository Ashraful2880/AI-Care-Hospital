import React from 'react';
import Banner from '../Banner/Banner';
import LatestNews from '../LatestNews/LatestNews';
import Services from '../Services/Services';
const Home = () => {
    return (
        <div>
            <Banner/>
            <Services/>
            <LatestNews/>
        </div>
    );
};

export default Home;