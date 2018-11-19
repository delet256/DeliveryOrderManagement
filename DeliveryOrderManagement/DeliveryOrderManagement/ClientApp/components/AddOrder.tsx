import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import { OrderData } from './OrderTable';

interface AddOrderDataState {
    title: string;
    loading: boolean;
    orderData: OrderData;
}


export class AddOrder extends React.Component<RouteComponentProps<{}>, AddOrderDataState> {
    constructor(props) {
        super(props);
        this.state = { title: "", loading: true, orderData: new OrderData };

        var orderid = this.props.match.params["orderid"];

        // This will set state for Edit order
        if (orderid > 0) {
            fetch('api/Order/Details/' + orderid)
                .then(response => response.json() as Promise<OrderData>)
                .then(data => {
                    data.datePickupCargo = data.datePickupCargo.substring(0, 10);
                    this.setState({ title: "Редактировать", loading: false, orderData: data });
                });

        }
        // This will set state for Add order
        else {
            this.state = { title: "Создать", loading: false, orderData: new OrderData };
        }

        // This binding is necessary to make "this" work in the callback
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderCreateForm();
        return <div className="center">
            <h1>{this.state.title} Заказ</h1>

            <hr />
            {contents}
        </div>;
    }

    // This will handle the submit form event. 
    private handleSave(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        // PUT request for Edit order
        if (this.state.orderData.id) {
            fetch('api/Order/Edit', {
                    method: 'PUT',
                    body: data,
                }).then(() => {
                    this.props.history.push("/ordertable");
                });
        }
        // POST request for Add order
        else {
            fetch('api/Order/Create', {
                method: 'POST',
                body: data,
            }).then(() => {
                this.props.history.push("/ordertable");
            });
        }
    }

    // This will handle Cancel button click event.  
    private handleCancel(e) {
        e.preventDefault();
        this.props.history.push("/ordertable");
    }

    // Returns the HTML Form to the render() method.  
    private renderCreateForm() {
        return (
            <form onSubmit={this.handleSave} >
                <div className="form-group row" >
                    <input type="hidden" name="id" value={this.state.orderData.id} />
                </div>

                <div className="form-group row" >
                    <label className=" control-label col-md-12"> Город отправителя</label>
                    <input type="text" name="senderCity" defaultValue={this.state.orderData.senderCity} required />
                </div>

                <div className="form-group row" >
                    <label className=" control-label col-md-12"> Адрес отправителя</label>
                    <input type="text" name="senderAddress" defaultValue={this.state.orderData.senderAddress} required />
                </div>

                <div className="form-group row" >
                    <label className=" control-label col-md-12">Город получателя</label>
                    <input type="text" name="recipientCity" defaultValue={this.state.orderData.recipientCity} required />
                </div>

                <div className="form-group row" >
                    <label className=" control-label col-md-12">Адрес получателя</label>
                    <input type="text" name="recipientAddress" defaultValue={this.state.orderData.recipientAddress} required />
                </div>

                <div className="form-group row" >
                    <label className=" control-label col-md-12">Вес груза</label>
                    <input type="number" name="weightCargo" defaultValue={String(this.state.orderData.weightCargo)} required />
                </div>

                <div className="form-group row" >
                    <label className=" control-label col-md-12">Дата забора груза</label>
                    <input type="date" name="datePickupCargo" defaultValue={this.state.orderData.datePickupCargo} required />
                </div>

                <br></br><br></br>
                <div className="form-group row" >
                    <button type="submit" className="btn btn-default">{this.state.title} заказ</button>
                    <br></br><br></br>
                    <button className="btn" onClick={this.handleCancel}>Отмена</button>
                </div>
            </form >
        );
    }
}