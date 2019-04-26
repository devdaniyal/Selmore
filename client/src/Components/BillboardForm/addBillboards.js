import React, { Component } from 'react';
import BillboradForm from './billboardForm';
import Header from '../header';
import Panel1 from '../panel1';
import Panel2 from '../panel2';
import Footer from '../footer';

class AddBillboards extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <Header />
                <BillboradForm/>
                <Footer />
            </div>
        )
    }

}

export default AddBillboards;