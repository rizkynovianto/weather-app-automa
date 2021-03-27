import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import {routes, defaultPath} from '../routes.js';

class Main extends Component{

getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/main") {
        return(
          <Route
            path={prop.layout + prop.path}
            render={props => (
              <prop.component {...props}/>
            )}
            key={key}
          />
        );
      } else {
        return null;
      }
    })
  }

  render(){
    
    return (
        <div>

            <Switch>
                {this.getRoutes(routes)}
                <Redirect from="/" to={defaultPath}/>    
            </Switch>

        </div>
        
    );
  }

}
export default Main;
