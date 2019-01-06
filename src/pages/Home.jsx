import React, {Component} from 'react';
import Jumbotron from '../components/Jumbotron';
import {Link} from 'react-router-dom';
import './Home.css';

class Home extends Component {
    render() {
        return(
            <div>
                <Jumbotron title = "Welcome, admin!" subtitle = "Welcome to LogisticsAB warehouse system. What do you want to do today?"/>

                <div className = "container mt-4">
                    
                </div>

                <div className = "container mt-4">
                    <div className = "row">

                        <Link className = "col-sm text-center border link" to = "/PlaceOrder">  
                            <img src = {require("../images/write-order.jpg")} 
                                 width = "220" height = "200" alt = "img not found." 
                                 className = "rounded-circle mt-4" />

                            <p className = "display-4"> Place Order </p>
                            <p/>
                            <hr/>
                            Click here if you want to place an order. You will be redirected to the correct page.
                        </Link>

                        <Link className = "col-sm text-center border link" to ="/">
                            <img src = {require("../images/list-orders.jpg")} 
                                    width = "220" height = "200" alt = "img not found." 
                                    className = "rounded-circle mt-4" />

                            <p className = "display-4"> List Orders </p>
                            <p/>
                            <hr/>
                            Click here if you want to list all available, recent orders. You will be redirected to the correct page.
                        </Link>

                        <Link className = "col-sm text-center border link" to = "/">
                            <img src = {require("../images/search-orders.jpg")} 
                                    width = "220" height = "200" alt = "img not found." 
                                    className = "rounded-circle mt-4" />

                            <p className = "display-4"> Search Order </p>
                            <p/>
                            <hr/>
                            (Admins only) Click here if you want to search for an order. You will be redirected to the correct page.
                        </Link>

                    </div>
                
                </div>
                
            </div>
        );
    }
}

export default Home;