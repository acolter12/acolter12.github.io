import { Route, Switch } from 'react-router-dom';

import AboutScreen from '../../Pages/about-screen';
import ContactScreen from '../../Pages/contact-screen';
import HomeScreen from "../../Pages/home-screen";
import ProjectScreen from '../../Pages/project-screen';

const AppRouter=()=>{
    return(
        <Switch>
            <Route exact path = {"/"} component = {HomeScreen} />
            <Route exact path = {"/my-projects"} component = {ProjectScreen} />
            <Route exact path = {"/about"} component = {AboutScreen} />
            <Route exact path = {"/contact"} component = {ContactScreen} />
        </Switch>
    )
}

export default AppRouter;