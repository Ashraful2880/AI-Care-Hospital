import React from 'react';
import Banner from '../Banner/Banner';
import BestDoctor from '../BestDoctor/BestDoctor';
import LatestNews from '../LatestNews/LatestNews';
import Services from '../Services/Services';
const Home = () => {
    return (
        <div>
            <Banner/>
            <Services/>
            <LatestNews/>
            <BestDoctor/>
        </div>
    );
};

export default Home;