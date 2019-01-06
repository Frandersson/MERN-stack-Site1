import React, {Component} from 'react';
import './PlaceOrder.css';

class PlaceOrder extends Component {
    render() {
        return (
            <div>
                <div className = "container text-center mt-4">
                    <h2>Place an Order</h2> <hr/>
                    <p>Specify the order details and click 'submit' when you are done to place the order.</p>
                </div>

                <div className = "container">

                    <div className = "orderForm">
                        <form>
                            <div class="form-group col-md-2">
                                <label for="formGroupExampleInput">ID:</label>
                                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" />
                            </div>

                            <div class="form-group col-md-2">
                                <label for="formGroupExampleInput2">Recipent:</label>
                                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Example input" />
                            </div>
                            
                        </form>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default PlaceOrder;