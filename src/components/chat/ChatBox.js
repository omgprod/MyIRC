import React from 'react';

class ChatBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username : localStorage.getItem('username'),
            message: '',

        }
    }

    onChange(e) {
        this.setState({
            message: e.target.value
        })
    }

    onKeyUp(e) {
        if (e.key === 'Enter') {
            if (this.state.message.length) {
                    this.Command(this.state.message);
                } else {
                    alert('ADMIN \n\nVous ne pouvez pas envoyer de messages vide.');
                }
            }
        }

    Command() {

        if (this.state.message.includes('/nick') === true) {
            let name = this.state.message.slice(6);
            console.log(name);
            this.setState({
                username: name
            });
            localStorage.setItem('username', name);
            window.location.reload()
        } else if (this.state.message.includes('/create') === true) {
            let room = this.state.message.slice(8);
            console.log(room);





        } else if (this.state.message.includes('/join') === true) {
            console.log('hello you');
            let mess = message.text.slice(6);
            console.log(mess);
        } else {
            this.props.sendMessage({
                type: 'message',
                text: this.state.message
            });
            this.setState({message: ''});
        }
    }

    render() {
        return (
            <div className="input-group chatbox col-xs-12 col-sm-12 col-md-8 col-lg-10">
                <div className="input-group-prepend">
                    <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={this.props.toggleGif}
                    >
                        <i className="fa fa-image"/> GIF
                    </button>
                </div>
                <input
                    className="form-control"
                    placeholder="Taper votre message.."
                    value={this.state.message}
                    onChange={this.onChange.bind(this)}
                    onKeyUp={this.onKeyUp.bind(this)}
                />
            </div>
        );
    }
}

export default ChatBox;