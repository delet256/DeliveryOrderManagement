import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';

interface FetchOrderDataState {
    orderList: OrderData[];
    loading: boolean;
}


export class OrderTable extends React.Component<RouteComponentProps<{}>, FetchOrderDataState> {
    constructor() {
        super();
        this.state = { orderList: [], loading: true };
        fetch('api/Employee/Index')
            .then(response => response.json() as Promise<OrderData[]>)
            .then(data => {
                this.setState({ orderList: data, loading: false });
            });
      }




    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderOrderTable(this.state.orderList);
        return <div>
            <h1>Order Data</h1>
            <p>This component demonstrates fetching Order data from the server.</p>
            <p>
                <Link to="/addorder">Create New</Link>
            </p>
            {contents}
        </div>;
    }


    private renderOrderTable(orderList: OrderData[]) {
        return <table className='table'>
            <thead>
                <tr>
                    <th></th>
                    <th>Id</th>
                    <th>SenderCity</th>
                    <th>senderAddress</th>
                    <th>recipientCity</th>
                    <th>recipientAddress</th>
                    <th>weightCargo</th>
                    <th>atePickupCargo</th>
                </tr>
            </thead>
            <tbody>
                {orderList.map(order =>
                    <tr key={order.id}>
                        <td></td>
                        <td>{order.id}</td>
                        <td>{order.senderCity}</td>
                        <td>{order.senderAddress}</td>
                        <td>{order.recipientCity}</td>
                        <td>{order.recipientAddress}</td>
                        <td>{order.weightCargo}</td>
                        <td>{order.datePickupCargo}</td>
                        <td>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>;
    }
}



export class OrderData {
    id: number = 0;
    senderCity: string = "";
    senderAddress: string = "";
    recipientCity: string = "";
    recipientAddress: string = "";
    weightCargo: number = 0;
    datePickupCargo: string = "";

}