import React, {Component} from 'react';
import './PlaceOrder.css';


class PlaceOrder extends Component {
    constructor(props) {
        super(props);

        this.state = {
            curNamn: '',
            curSaldo: '',        
            curPlats: '',
            products: []
        }
    }
    
    componentDidMount() {
        console.log("Successful mount");
        this.getProducts();
    }

    getProducts = _ => {
        fetch('http://localhost:3001/getTen')
            .then(res => res.json())
            .then(res => {
                this.setState({products: res});
                console.log(res);
             })
            .catch((err) => console.log(err))
    }

    resolveRes = (response) => {
        if (response.status === 200) {
            this.getProducts();
            this.setState({curNamn: '', curSaldo: '', curPlats: ''});
            console.log("OK");
            console.log(response);
        } else {
            alert("Rejected");
            console.log("Rejected.");
            console.log(response);
        }
    }

    checkEmptyValues = (obj) => {
        var emptyBool = false;
        Object.values(obj).forEach(val => {
            if (val === '') emptyBool = true;
        })
        return emptyBool;
    }

    addProduct = (event) => {
        event.preventDefault();

        const data = {
            namn: this.state.curNamn,
            lagersaldo: this.state.curSaldo,
            plats: this.state.curPlats
        }

        if (this.checkEmptyValues(data)) {
            alert("Please fill in all the fields");
            return;
        }  

        fetch('http://localhost:3001/addproduct', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => this.resolveRes(res))  // Server validation
        .catch((err) => console.log(err))
    }

    // Input handlers
    handleChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;

        //console.log("Name: " + name);
        //console.log("Value: " + value);

        switch (name) {
            case 'inlineFormProduktNamn':
              this.setState({curNamn: value});
              break;
            case 'inlineFormLagersaldo':
              this.setState({curSaldo: value});
              break;
            case 'inlineFormPlats':
              this.setState({curPlats: value});
              break;
            default: 
              break;
        }      
    }

    // Ordering
    sortBy = (e) => {
        if (e.target.value === "Choose...") {
            return;
        } 

        fetch(`http://localhost:3001/getAndSortTen/${e.target.value}`)
            .then(res => res.json())
            .then(res => {
                this.setState({products: res});
                console.log(res);
            })
            .catch((err) => console.log(err))
        }
        
    // Main render
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
                    <form className="form-inline" method = 'POST' onSubmit = {this.addProduct} noValidate>
                        <label className="sr-only" htmlFor="inlineFormProduktNamn">Name</label>
                        <div className="input-group mb-2 mr-sm-2">
                            <div className="input-group-prepend">
                            <div className="input-group-text"><b>Namn:</b></div>
                            </div>
                            <input type="text" className="form-control" id="inlineFormProduktNamn" placeholder="Produktnamn" 
                                   value = {this.state.curNamn} name = "inlineFormProduktNamn" onChange = {this.handleChange} noValidate></input>
                            
                        </div>

                        <label className="sr-only" htmlFor="inlineFormInputLagersaldo">Lagersaldo</label>
                        <div className="input-group mb-2 mr-sm-2">
                            <div className="input-group-prepend">
                            <div className="input-group-text"><b>Lagersaldo:</b></div>
                            </div>
                            <input type="text" className="form-control" id="inlineFormLagersaldo" placeholder="Lagersaldo" 
                                   value = {this.state.curSaldo} name = "inlineFormLagersaldo" onChange = {this.handleChange} noValidate></input>
                            
                        </div>
                        

                        <label className="sr-only" htmlFor="inlineFormPlats">Plats</label>
                        <div className="input-group mb-2 mr-sm-2">
                            <div className="input-group-prepend">
                            <div className="input-group-text"><b>Plats:</b></div>
                            </div>
                            <input type="text" className="form-control" id="inlineFormPlats" placeholder="Plats" 
                                   value = {this.state.curPlats} name = "inlineFormPlats" onChange = {this.handleChange} noValidate></input>
                            
                        </div>

                        <button type="submit" className="btn btn-dark mb-2 ml-4">Submit</button>
                    </form>
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

export default PlaceOrder;