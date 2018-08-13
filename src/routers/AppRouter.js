import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from '../pages/Home';
import SplashScreen from '../pages/SplashScreen';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={SplashScreen} exact />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
