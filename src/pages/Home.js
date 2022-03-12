import React from 'react';
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";

// rsf
function Home(props) {
    return (
        <>
        <Hero>
            <Banner title="quartos luxuosos" subtitle="quartos de luxo a partir de R$ 280">
                <Link to="/rooms" className="btn-primary">nossos quartos</Link>
            </Banner>
        </Hero>
            <Services/>
            <FeaturedRooms/>
        </>
    );
}

export default Home;
