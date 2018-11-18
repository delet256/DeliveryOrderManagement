import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { OrderTable } from "./components/OrderTable";
import { AddOrder } from "./components/AddOrder";
//import { FetchData } from './components/FetchData';
//import { Counter } from './components/Counter';



//      <Route path='/counter' component={Counter} />
//                       <Route path='/fetchdata' component={FetchData} />




export const routes = <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/ordertable' component={OrderTable} />
    <Route path='/addorder' component={AddOrder } />
</Layout>;
