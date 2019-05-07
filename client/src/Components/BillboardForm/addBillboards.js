import React, { Component } from 'react';
import Header from '../header';
import Footer from '../footer';
// import BillboradForm from './billboardForm';
import BillBoard from './billBoard';
import BillBoardDetail from './billBoardDetail';

class AddBillboards extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <Header />
                <BillBoard/>
                {/* <BillboradForm/> */}
                {/* <BillBoardDetail /> */}
                <Footer />
            </div>
        )
    }

}

export default AddBillboards;