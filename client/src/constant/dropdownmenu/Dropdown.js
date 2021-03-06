import React, { Component } from 'react';
import './style.css';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import { Link, withRouter, Redirect } from 'react-router-dom';


class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this)
  }

  //clear local storage & redirect to Home
  logOut() {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('userToken');
    localStorage.removeItem('userName');
    localStorage.removeItem('coords');
    return <Redirect to='/' />
  }

  render() {
    let userName = JSON.parse(localStorage.getItem('userName'));

    return (
      <MDBDropdown>
        <MDBDropdownToggle caret color="primary" className='toogle dropdown-toggle'>
          <div className='userName dropdown-toggle'
          // style={{marginRight:'400px'}}
          >{userName}</div>
        </MDBDropdownToggle>
        <MDBDropdownMenu basic>
          <MDBDropdownItem> <Link rel="noopener noreferrer" to={`/profile`}>Profile</Link></MDBDropdownItem>
          <MDBDropdownItem onClick={this.logOut}> <Link rel="noopener noreferrer" to={`/`}>Log Out</Link></MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
    );
  }
}
export default Dropdown;














// import React from 'react';
// import {Dropdown ,DropdownButton} from 'react-dom'



// class Dropdow extends React.Component {
//   constructor() {
//     super();

//     // this.state = {
//     //   displayMenu: false,
//     // };

//     // this.showDropdownMenu = this.showDropdownMenu.bind(this);
//     // this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

//   };

//   // showDropdownMenu(event) {
//   //   event.preventDefault();
//   //   this.setState({ displayMenu: true }, () => {
//   //     document.addEventListener('click', this.hideDropdownMenu);
//   //   });
//   // }

//   // hideDropdownMenu() {
//   //   this.setState({ displayMenu: false }, () => {
//   //     document.removeEventListener('click', this.hideDropdownMenu);
//   //   });

//   // }

//   render() {
//     return (
//       <div className='container'>
//         {/* <div className="row">

//           <div className="col-md-8 col-lg-8 col-xl-8 d-none d-sm-block">
//             <div className="button btn btn-primary btn-sm" onClick={this.showDropdownMenu}> User Name </div>

//             {this.state.displayMenu ? (
//               <ul className="nav navsm">
//                 <li className="nav-item navmargin12" >
//                   <button className="active btn btn-primary btn-sm">My Profile</button>
//                 </li>
//                 <li className="nav-item navbiddbtn">
//                   <button className="btn btn-primary btn-sm">Log Out</button>
//                 </li>
//               </ul>
//             ) :
//             (
//               null
//               )
//             }
//           </div>
//         </div> */}
//         {/* <li><a href="#Manage Pages">Manage Pages</a></li>
//       <li><a href="#Create Ads">Create Ads</a></li>
//       <li><a href="#Manage Ads">Manage Ads</a></li>
//       <li><a href="#Activity Logs">Activity Logs</a></li>
//       <li><a href="#Setting">Setting</a></li> */}
//         <DropdownButton id="dropdown-basic-button" title="Dropdown button">
//           <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//           <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//           <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//         </DropdownButton>;
//       </div>
//     );
//   }


// }


// export default Dropdow;