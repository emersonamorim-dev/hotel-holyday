import React, {Component} from 'react';
import Title from "./Title";
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa";

class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail/>,
                title: "Coquetéis grátis",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, blanditiis?"
            },
            {
                icon: <FaHiking/>,
                title: "Caminhadas de manhã",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, blanditiis?"
            },
            {
                icon: <FaShuttleVan/>,
                title: "Transporte gratuito",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, blanditiis?"
            },
            {
                icon: <FaBeer/>,
                title: "Cortesias",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, blanditiis?"
            }
        ]
    }

    render() {
        return (
            <section className="services">
                <Title title="Serviços"/>
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}

                </div>
            </section>
        );
    }
}

export default Services;