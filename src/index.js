import "./style/app.scss";
import ReactDOM from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { Route, Switch, HashRouter } from "react-router-dom";
import Promise from "redux-promise";
import reducers from "./reducers";
import App from "./component/app";
import Notes from "./component/notes";
import Detail from "./component/detail";
import DetailMedium from "./component/detailmedium";
import Work from "./component/work";
import Medium from "./component/medium";
import Book from "./component/book";
// import Workout from "./component/workout";

const createStoreWithMiddleware = applyMiddleware(Promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <HashRouter>
      <main className="body-wrapper">
        <Switch>
          <Route exact path="/notes/:id" component={Detail} />
          <Route exact path="/medium/:id" component={DetailMedium} />
          <Route exact path="/notes" component={Notes} />
          <Route exact path="/medium" component={Medium} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/book" component={Book} />
          {/* <Route exact path="/workout" component={Workout} /> */}
          <Route exact path="/" component={App} />
        </Switch>
      </main>
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
