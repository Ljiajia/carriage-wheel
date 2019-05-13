import React from 'react';
import {Switch,Route} from "react-router-dom";
const Myreact=props=>(
    <Switch>
        {props.children}
        {props.route ? props.route.map(item=>(
            <Route key={item.path} path={item.path} render={()=><item.component route={item.route} />}></Route>
        )):null}
    </Switch>
)
export default Myreact