import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { OrderTable } from "./components/OrderTable";
import { AddOrder } from "./components/AddOrder";


export const routes =<Layout>
    <Route exact path='/' component={OrderTable} />
    <Route path='/addorder' component={AddOrder} />
    <Route path='/order/edit/:orderid' component={AddOrder} />
</Layout>;
