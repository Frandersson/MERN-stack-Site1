import React, {Component} from 'react';
import './PlaceOrder.css';

class PlaceOrder extends Component {

    state = {
        curNamn: '',
        curSaldo: '',
        curPlats: '',
        products: []
    }

    componentDidMount() {
        console.log("Successful mount");
        this.getProducts();
    }

    getProducts = _ => {
        fetch('http://localhost:3001/getall')
            .then(res => res.json())
            .then(res => {
                this.setState({products: res});
                console.log(res);
             })
            .catch((err) => console.log(err))
    }

    addProduct = (event) => {
        event.preventDefault();

        fetch('http://localhost:3001/addproduct', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                namn: this.state.curNamn,
                lagersaldo: this.state.curSaldo,
                plats: this.state.curPlats
            })
        })
        .then(res => {
            this.getProducts();
            this.setState({curNamn: '', curSaldo: '', curPlats: ''});
            console.log("POSTAD!!!");
            console.log(res);
        })
        .catch((err) => console.log(err))
    }


    handleNameChange = (e) => {
        console.log("Name changed");
        this.setState({curNamn: e.target.value});
    }

    handleSaldoChange = (e) => {
        console.log("Saldo changed");
        this.setState({curSaldo: e.target.value});
    }

    handlePlatsChange = (e) => {
        console.log("Plats changed");
        this.setState({curPlats: e.target.value});
    }

    render() {
        const products = this.state.products;
        return (
            <div>
                <div className = "container text-center mt-4">
                    <h2>Place an Order</h2> <hr/>
                    <p>Specify the order details and click 'submit' when you are done to place the order.</p>
                </div>


                <div className = "container text-center mt-4">
                    {/* FORM */}
                    <form className="form-inline" method = 'POST' onSubmit = {this.addProduct}>
                        <label className="sr-only" htmlFor="inlineFormProduktNamn">Name</label>
                        <div className="input-group mb-2 mr-sm-2">
                            <div className="input-group-prepend">
                            <div className="input-group-text"><b>Namn:</b></div>
                            </div>
                            <input type="text" className="form-control" id="inlineFormProduktNamn" placeholder="Produktnamn" 
                                   value = {this.state.curNamn} onChange = {this.handleNameChange}></input>
                        </div>

                        <label className="sr-only" htmlFor="inlineFormInputGroupUsername2">Lagersaldo</label>
                        <div className="input-group mb-2 mr-sm-2">
                            <div className="input-group-prepend">
                            <div className="input-group-text"><b>Lagersaldo:</b></div>
                            </div>
                            <input type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="Lagersaldo" 
                                   value = {this.state.curSaldo} onChange = {this.handleSaldoChange}></input>
                        </div>

                        <label className="sr-only" htmlFor="inlineFormPlats">Plats</label>
                        <div className="input-group mb-2 mr-sm-2">
                            <div className="input-group-prepend">
                            <div className="input-group-text"><b>Plats:</b></div>
                            </div>
                            <input type="text" className="form-control" id="inlineFormPlats" placeholder="Plats" 
                                   value = {this.state.curPlats} onChange = {this.handlePlatsChange}></input>
                        </div>

                        <button type="submit" className="btn btn-dark mb-2 ml-4">Submit</button>
                    </form>
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
                    </tbody>
                    </table>
                </div>

                

            </div>
        );
    }

}

export default PlaceOrder;