import React, {Component} from 'react';


class SearchOrder extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: []
        }
    }


    render() {
        return(
            <div>
                <div className = "container text-center mt-4">
                    <h2>Search Order DB</h2> <hr/>
                    <p>Please specify the order details...</p>
                </div>
            </div>
        );
    }
}

export default SearchOrder;