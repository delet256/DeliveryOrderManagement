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
        fetch('api/Order/Index')
            .then(response => response.json() as Promise<OrderData[]>)
            .then(data => {
                this.setState({ orderList: data, loading: false });
            });

        // This binding is necessary to make "this" work in the callback  
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }




    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderOrderTable(this.state.orderList);
        return <div>
            <br /><br />
            <p>
                <Link to="/addorder">Создать новый заказ</Link>
            </p>
            <h1>Список заказов</h1>
            {contents}
        </div>;
    }



    // Handle Delete request for an order  
    private handleDelete(id: number) {
        if (!confirm("Вы хотите удалить заказ под номером " + id + " ?"))
            return;
        else {
            fetch('api/Order/Delete/' + id, {
                method: 'delete'
            }).then(data => {
                this.setState(
                    {
                        orderList: this.state.orderList.filter((rec) => {
                            return (rec.id != id);
                        })
                    });
            });
        }
    }
    private handleEdit(id: number) {
        this.props.history.push("/order/edit/" + id);
    }


    private renderOrderTable(orderList: OrderData[]) {
        return <table className='table'>
            <thead>
                <tr>
                    <th></th>
                    <th>Номер заказа</th>
                    <th>Город получателя</th>
                    <th>Адрес получателя</th>
                    <th>Город отправителя</th>
                    <th>Адресс отправителя</th>
                    <th>Вес груза</th>
                    <th>Дата забора заказа</th>
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
                            <a className="action" onClick={(id) => this.handleEdit(order.id)}>Редактировать</a>  |
                            <a className="action" onClick={(id) => this.handleDelete(order.id)}>Удалить</a>
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