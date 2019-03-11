import React, {Component} from 'react';


class SearchOrder extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: []
        }
    }

    componentDidMount() {
        this.getProducts();
    }

    getProducts = () => {
        fetch('http://localhost:3001/getall')
            .then(res => res.json())
            .then(res => {
                this.setState({products: res});
            })
            .catch(err => console.log(err))
    }

    sortBy = (e) => {
        e.preventDefault();

        if (e.target.value === "Chose...") {
            return;
        }

        fetch(`http://localhost:3001/getAndSort/${e.target.value}`)
            .then(res => res.json())
            .then(res => this.setState({products: res}))
            .catch(err => console.log(err));
    }


    render() {
        const products = this.state.products;
        return(
            <div>
                <div className = "container text-center mt-4">
                    <h2>Search Order DB</h2> <hr/>
                    <p>Please specify the order details...</p>

                    <div className = "container mt-4">
                    {/* FORM */}
                        Här ska det vara ett formulääääär sådeså
                    </div>
                </div>

                    <div className = "container mt-4">
                        <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">Sort by:</label>
                            <select className="form-control" id="inlineFormCustomSelect" onChange = {this.sortBy}>
                                <option defaultValue>Choose...</option>
                                <option value='id'>ID</option>
                                <option value='namn'>Namn</option>
                                <option value='lagersaldo'>Lagersaldo</option>
                                <option value='plats'>Plats</option>
                                <option value='datum'>Date</option>
                            </select>
                    </div>

                    <div className = "container text-center mt-4">
                        <table className="table table-striped table-dark">
                        <thead>
                            <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Namn</th>
                            <th scope="col">Lagersaldo</th>
                            <th scope="col">Plats</th>
                            <th scope="col">Senast uppdaterad</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((item, iKey) => (
                                <tr key = {iKey}>
                                    <th scope ="row">{item.id}</th>
                                    <td>{item.namn}</td>
                                    <td>{item.lagersaldo}</td>
                                    <td>{item.plats}</td>
                                    <td>{item.datum}</td>
                                </tr>
                            ))}
                                <tr>
                                    <th scope ="row">...</th>
                                    <td>...</td>
                                    <td>...</td>
                                    <td>...</td>
                                    <td>...</td>
                                </tr>
                        </tbody>
                        </table>
                    </div>
                </div>
        );
    }
}

export default SearchOrder;