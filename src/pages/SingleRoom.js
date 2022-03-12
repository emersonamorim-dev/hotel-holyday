import React, {Component} from 'react';
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import {RoomContext} from "../context";
import {Link} from "react-router-dom";
import Banner from "../components/Banner";
import StyledHero from "../components/StyledHero"

// rcc
class SingleRoom extends Component {
    constructor(props) {
        super(props);
        // console.log(this.props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        };
    }

    static contextType = RoomContext;

    // componentDidMount() {}

    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
        console.log(room);

        if (!room) {
            return (
                <div className="error">
                    <h3>nenhum quarto foi encontrado...</h3>
                    <Link to="/rooms" className="btn-primary">de volta aos quartos</Link>
                </div>
            )
        }

        const {
            name,
            description,
            capacity,
            size,
            price,
            extras,
            breakfast,
            pets,
            images
        } = room;

        const [mainImg, ...defaultImg] = images

        return (
            <>
                <StyledHero img={mainImg || this.state.defaultBcg}>
                    <Banner title={`Quarto ${name} `}>
                        <Link to="/rooms" className="btn-primary">voltar aos quartos</Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {defaultImg.map((item, index) => {
                            return <img key={index} src={item} alt={name}/>;
                        })}
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>detalhes</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>info</h3>
                            <h6>preço : ${price}</h6>
                            <h6>tamanho : {size} SQFT</h6>
                            <h6>
                                max capacidade :{" "}
                                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
                            </h6>
                            <h6>{pets ? "animais de estimação permitidos" : "não são permitidos animais"}</h6>
                            <h6>{breakfast && "pequeno-almoço gratuito incluído"}</h6>
                        </article>
                    </div>
                </section>
                <section className="room-extras">
                    <h6>extras</h6>
                    <ul className="extras">
                        {extras.map((item, index) => {
                            return <li key={index}>- {item}</li>
                        })}
                    </ul>
                </section>
            </>
        );
    }
}

export default SingleRoom;