import React from 'react';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';
import M from  'materialize-css/dist/js/materialize.min.js';
import { Link } from 'react-router-dom';
import { signOut } from '../../store/actions/authAction';

class Navbar extends React.Component {
    componentDidMount() {
        let sidenav = document.querySelector('#mobile-demo');
        M.Sidenav.init(sidenav, {});
    } 
    render(){
        const { auth, profile } = this.props;
        const links = auth.uid? <SignedInLinks profile={profile}/>: <SignedOutLinks />;
        const sideLinks = auth.uid? (
            <div>
                <li><Link to='/create'>New Project</Link></li>
                <li><Link to= '/signin' onClick={this.props.signOut}>Log Out</Link></li>
            </div>
        ) : (
            <div>
                <li><Link to='/signup'>Sign Up</Link></li>
                <li><Link to='/signin'>Log In</Link></li>
            </div>
        );
        return(
            <div>
                <nav className="blue">
                    <div className="nav-wrapper container">
                        <Link to='#' data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
                        <Link to='/' className="brand-logo">React App</Link>    
                        { links }
                    </div>
                </nav>
                <ul className="sidenav" id="mobile-demo">
                    { sideLinks }
                </ul>
            </div>
        );
    }   
}
const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        signOut: () => dispatch(signOut())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);