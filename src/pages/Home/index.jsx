import React from 'react';

import './styles.css';

import separator from '../../assets/images/separator.svg';
import yoda from '../../assets/images/character/yoda.png';

const Home = () => {
    return (
        <>
        <div className="section-1">
            <div className="container">
                <header className="header">
                    <h2>Luke Code</h2>
                    <nav>
                        <button>FAZER LOGIN </button>
                        <button>INSCREVA-SE</button>
                    </nav>
                </header>
                <main>
                    <section>
                        <h1>Se torne um mestre <br/> da programação!</h1>
                        <img src={separator} alt=""/>
                        <p>
                            De o próximo passo para o ser futuro, <br/>
                            que a força esteja com você.
                        </p>
                    </section>

                    <section>
                        <img src={yoda} alt="Yoda - Star Wars"/>
                    </section>
                </main>
            </div>
        </div>
        </>
    )
}

export default Home;