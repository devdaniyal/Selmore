import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../header';
import Panel1 from '../panel1';
import Panel2 from '../panel2';
import Footer from '../footer';
import ProfileView from './profileView';



class Profile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <ProfileView/>
                <Panel1 />
                <Panel2 />
                <Footer />
            </div>
            // <div>
            //     <h1>My Profile</h1>
            // </div>
        )
    }

}

export default Profile;
