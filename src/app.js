import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import 'font-awesome/css/font-awesome.css';
import './app.scss';
import Navbar from './components/Navbar';
import Chat from './components/chat/Chat';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: localStorage.getItem('username') ? localStorage.getItem('username') : '',
        }
    }

    onChange(e) {
        this.setState({
            username: e.target.value
        });
        console.log(this.onChange(e));
    }

    changeUsername(e) {
        e.preventDefault();
        if(this.state.username.length){
            localStorage.setItem('username', this.state.username);
            window.location.reload();
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="modal fade" id="changePseudo" tabIndex="-1" role="dialog"
                     aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="changePseudo">Changer votre Pseudonyme</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form onSubmit={this.changeUsername.bind(this)}>
                                <div className="modal-body">
                                    <label>Votre pseudo: </label>
                                    <p>{this.state.username}</p>
                                    <label>Votre nouveau pseudo: </label>
                                    <br/>
                                    <input
                                        className="form-control"
                                        value={this.state.username}
                                        placeholder="Pseudonyme"
                                        onChange={this.onChange.bind(this)}
                                    />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Annuler</button>
                                    <button
                                        className="btn btn-outline-primary"
                                        type="submit"
                                        value="submit">Changer votre pseudo
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="createRoom" tabIndex="-1" role="dialog"
                     aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Création de votre salon</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <label>Nom du salon a créer : </label>
                                <br/>
                                <input/>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Annuler
                                </button>
                                <button type="button" className="btn btn-primary">Création</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="choiceRoom" tabIndex="-1" role="dialog"
                     aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Rejoindre un Salon</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Annuler
                                </button>
                                <button type="button" className="btn btn-primary">Rejoindre</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Navbar/>
                <Chat/>
            </React.Fragment>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);