import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import StoreDataService from '../service/StoreDataService';


class StoreComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            type:'',
            name: '',
            address: '',
            city: '',
            state: '',
            zip: ''
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)

    }

    componentDidMount() {

        console.log(this.state.id)

        // eslint-disable-next-line
        if (this.state.id == -1) {
            return
        }

        StoreDataService.retrieveStore(this.state.id)
            .then(response => this.setState({
                type: response.data.type,
                name: response.data.name,
                address: response.data.address,
                city: response.data.city,
                state: response.data.state,
                zip: response.data.zip
            }))
    }

    validate(values) {
        let errors = {}
        if ((!values.name) || (!values.type)){
            errors.name = 'Enter Store Name and Type'
        } 

        return errors

    }

    onSubmit(values) {

        let storeData = {
            id: this.state.id,
            type: values.type,
            name: values.name,
            address: values.address,
            city: values.city,
            state: values.state,
            zip: values.zip
        }

        if (this.state.id === -1) {
            StoreDataService.createStore(storeData)
                .then(() => this.props.history.push('/store'))
        } else {
            StoreDataService.updateStore(this.state.id, storeData)
                .then(() => this.props.history.push('/store'))
        }

        console.log(values);
    }

    render() {

        let { type,name,address,city,state,zip,id } = this.state

        return (
            <div>
                <h3>Store Details</h3>
                <div className="container">
                    <Formik
                        initialValues={id,type,name,address,city,state,zip}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="Name" component="div"
                                        className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Id</label>
                                        <Field className="form-control" type="text" name="id" disabled />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Type</label>
                                        <Field className="form-control" type="text" name="type" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Name</label>
                                        <Field className="form-control" type="text" name="name" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Address</label>
                                        <Field className="form-control" type="text" name="address" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>City</label>
                                        <Field className="form-control" type="text" name="city" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>State</label>
                                        <Field className="form-control" type="text" name="state" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>zip</label>
                                        <Field className="form-control" type="number" name="zip" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>

                </div>
            </div>
        )
    }
}

export default StoreComponent