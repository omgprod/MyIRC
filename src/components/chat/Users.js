import React from 'react';

class Users extends React.Component {

    constructor(props){
        super(props);
    }



    render() {
        console.log(this.props.users);
        return (
            <div className="users col-xs-12 col-sm-12 col-md-4 col-lg-2">
                {this.props.users.length ? this.props.users.map((user, i) => {
                    return (
                        <div className="user" key={i}>
                            <i className="fa fa-user"/> {user}
                        </div>

                    )
                }) : 'No Users Online'}
            </div>
        )
    }
}

export default Users;