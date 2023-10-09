import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonContent,
  IonFooter,
  IonRouterOutlet,
  IonText,
  IonTitle,
  IonToolbar,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

import "./App.css";

/* Theme variables */
import "./theme/variables.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Create from "./pages/Create";
import NotFoundPage from "./pages/NotFoundPage";
import NavContainer from "./components/NavContainer";
import CreateButton from "./components/CreateButton";
import AboutUs from "./pages/AboutUs";

import axios from "axios";
import Detail from "./pages/Detail";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <CreateButton />
    <NavContainer />
    <IonContent>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/about-us">
            <AboutUs />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/create">
            <Create />
          </Route>
          <Route exact path="/detail/:id">
            <Detail />
          </Route>
          {/* <Route path="/dashboard/users/:id" component={UserDetailPage} /> */}
          {/* <Route
          exact
          path="/dashboard"
          render={(props) => {
            return isAuthed ? <DashboardPage {...props} /> : <LoginPage />;
          }}
        /> */}
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route component={NotFoundPage} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonContent>
  </IonApp>
);

export default App;
