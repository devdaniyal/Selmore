import React, { Component } from 'react';


class LogOut extends Component {
    constructor(props) {
        super(props);
        this.signOut = this.signOut.bind(this)
        this.state = {
            displayMenu: false,
        };
        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    }

    signOut() {
        localStorage.removeItem('loggedIn');

    }

    showDropdownMenu(event) {
        event.preventDefault();
        this.setState({ displayMenu: true }, () => {
            document.addEventListener('click', this.hideDropdownMenu);
        });
    }

    hideDropdownMenu() {
        this.setState({ displayMenu: false }, () => {
            document.removeEventListener('click', this.hideDropdownMenu);
        });

    }

    render() {
        return (
            // <div>
            // </div>
            
            
            <div className="dropdown" style={{}} >
                <div className="button" onClick={this.showDropdownMenu}> My Setting </div>

                {this.state.displayMenu ? (
                    <ul>
                        <li><a className="active" href="#Create Page"></a></li>
                        {/* <li><a href="#Manage Pages">Manage Pages</a></li>
                        <li><a href="#Create Ads">Create Ads</a></li>
                        <li><a href="#Manage Ads">Manage Ads</a></li>
                        <li><a href="#Activity Logs">Activity Logs</a></li>
                        <li><a href="#Setting">Setting</a></li> */}
                        <li><button onClick={this.signOut}>Sign Out</button></li>
                     
                    </ul>
                ) :
                    (
                        null
                    )
                }

            </div>
        )
    }

}
export default LogOut;
