import React from 'react';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username : props.username
        }
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light">
                <a className="navbar-brand" href="#">My Internet Relay Chat</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link"
                               href="#"
                               data-toggle="modal"
                               data-target="#changePseudo">Changer de Pseudo
                            </a>
                        </li>

                            <li className="nav-item active">
                                <a className="nav-link"
                                   href="#"
                                   data-toggle="modal"
                                   data-target="#createRoom">Créer votre salon
                                </a>
                            </li>

                            <li className="nav-item active">
                                <a className="nav-link"
                                   href="#"
                                   data-toggle="modal"
                                   data-target="#choiceRoom">Rejoinde un salon
                                </a>
                            </li>
                        <li className="nav-item active">
                            <button type="button" className="btn btn-primary" disabled>
                                Nombre de salon <span className="badge badge-light">9</span>
                            </button>
                        </li>
                    </ul>
                </div>


            </nav>
        )
    }
}

export default Navbar;