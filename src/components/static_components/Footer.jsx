import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';

class Footer extends Component {
    render() {
        return(
            <div className = "footer navbar-fixed-bottom">
                <div className="container text-center py-3">© 2018 Copyright:
                    <Link to="#"> Fredrik Andersson </Link>
                </div>
            </div>
        );
    }
}

export default Footer;