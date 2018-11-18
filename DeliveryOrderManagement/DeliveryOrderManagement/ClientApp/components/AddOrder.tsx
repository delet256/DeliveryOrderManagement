import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import { OrderData } from './OrderTable';

interface AddOrderDataState {

    loading: boolean;
    orderData: OrderData;
}


export class AddOrder extends React.Component<RouteComponentProps<{}>, AddOrderDataState> {
    constructor(props) {
        super(props);
        this.state = { loading: true, orderData: new OrderData };

        
        this.state = { loading: false, orderData: new OrderData };
        /*      }
            */  // This binding is necessary to make "this" work in the callback  

        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderCreateForm();
        return <div>
            <h1>Заказ</h1>

            <hr />
            {contents}
        </div>;
    }

    private handleSave(event) {
        event.preventDefault();
        const data = new FormData(event.target);

      
        fetch('api/Employee/Create', {
            method: 'POST',
            body: data,
        }).then((response) => response.json())
         .then((responseJson) => {
             this.props.history.push("/ordertable");
            }); 
        //     }
    }

    // This will handle Cancel button click event.  
    private handleCancel(e) {
        e.preventDefault();
  //      this.props.history.push("/fetchemployee");
    }



    // Returns the HTML Form to the render() method.  
    private renderCreateForm() {
        return (
            <form onSubmit={this.handleSave} >

                <h2>Добавить новый заказ</h2>

                  <p>Город отправителя</p>
                <input type="text" name="senderCity" defaultValue={this.state.orderData.senderCity} required />
                <p>Адрес отправителя</p>
                <input type="text" name="senderAddress" defaultValue={this.state.orderData.senderAddress} required ></input>

                <p>Город получателя</p>
                <input type="text" name="recipientCity" defaultValue={this.state.orderData.recipientCity} required ></input>

                <p>Адрес получателя</p>
                <input type="text" name="recipientAddress" defaultValue={this.state.orderData.recipientAddress} required ></input>

                <p>Вес груза</p>
                <input type="number" name="weightCargo" defaultValue={String(this.state.orderData.weightCargo)} required ></input>

                <p>Дата забора груза</p>
                <input name="datePickupCargo" defaultValue={this.state.orderData.datePickupCargo} required ></input>
                <br></br><br></br><br></br>
                <button type="submit">Добавить заказ</button>
                <br></br><br></br>

                <button className="btn" onClick={this.handleCancel}>Cancel</button>


            </form >
        )
    }
}