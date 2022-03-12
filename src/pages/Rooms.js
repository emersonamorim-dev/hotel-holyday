import React from 'react';
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";
import RoomsContainer from "../components/RoomsContainer";

// rsc
const Rooms = () => {
    return (
        <>
            <Hero hero="roomsHero">
                <Banner title="nossos quartos">
                    <Link to="/" className="btn-primary">Voltar Home</Link>
                </Banner>
            </Hero>
            <RoomsContainer/>
        </>
    );
};

export default Rooms;