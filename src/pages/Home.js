import React from 'react'
import { Link } from 'react-router-dom'
import ConferenceLogo from '../images/platzi-conf.svg'
import Astronauts from '../images/astronauts.svg'
import './styles/Home.css'

class Home extends React.Component {

    render() {
        return (<>
            <div className="Home">
                <div className="Home__info">
                    {/* <figure>
                        <img src={ConferenceLogo} alt="Logo de Platzi Conf"/>
                    </figure> */}
                    <h1>Print your badges</h1>
                    <span>The easiest way to manage your conference</span>
                    <span>Helped by Platzi</span>
                    <Link to="/badges/new">
                        <button>Start Now</button>
                    </Link>
                    <Link to="/badges">
                        <button>Go to Badges</button>
                    </Link>
                </div>
                <div className="Home__hero">
                    <figure>
                        <img src={Astronauts} alt="Imagen de Astronautas"/>
                    </figure>
                </div>
            </div>
        </>)
    }
}

export default Home