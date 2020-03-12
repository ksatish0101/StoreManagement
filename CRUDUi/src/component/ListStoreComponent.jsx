import React, { Component } from 'react'
import StoreDataService from '../service/StoreDataService';


class ListStoreComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            storeData: [],
            message: null
        }
        this.deleteClicked = this.deleteStoreClicked.bind(this)
        this.updateStoreClicked = this.updateStoreClicked.bind(this)
        this.addStoreClicked = this.addStoreClicked.bind(this)
        this.refreshStoreList = this.refreshStoreList.bind(this)
    }

    componentDidMount() {
        this.refreshStoreList();
    }

    refreshStoreList() {
        StoreDataService.retrieveAllStores()//HARDCODED
            .then(
                response => {
                    //console.log(response);
                    this.setState({ storeData: response.data })
                }
            )
    }

    deleteStoreClicked(id) {
        StoreDataService.deleteStore(id)
            .then(
                response => {
                    this.setState({ message: `Delete of Store ${id} Successful` })
                    this.refreshStoreList()
                }
            )

    }

    addStoreClicked() {
        this.props.history.push(`/store/-1`)
    }

    updateStoreClicked(id) {
        console.log('update ' + id)
        this.props.history.push(`/store/${id}`)
    }

    render() {
        console.log('render')
        return (
            <div className="container">
                <h3>Store List</h3>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Store Name</th>
                                <th>Type</th>
                                <th>Address</th>
                                <th>City</th>
                                <th>State</th>
                                <th>zip</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.storeData.map(
                                    storeList =>
                                        <tr key={storeList.id}>
                                            <td>{storeList.id}</td>
                                            <td>{storeList.name}</td>
                                            <td>{storeList.type}</td>
                                            <td>{storeList.address}</td>
                                            <td>{storeList.city}</td>
                                            <td>{storeList.state}</td>
                                            <td>{storeList.zip}</td>
                                            <td><button className="btn btn-success" onClick={() => this.updateStoreClicked(storeList.id)}>Update</button></td>
                                            <td><button className="btn btn-warning" onClick={() => this.updateStoreClicked(storeList.id)}>Delete</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addStoreClicked}>Add</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListStoreComponent