import { Redirect, Route, Switch } from 'react-router-dom';
import AboutMe from '../pages/AboutMe';
import Certifications from '../pages/Certifications';
import HomePage from '../pages/HomePage';
import Projects from '../pages/Projects';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about-me" component={AboutMe} />
      <Route exact path="/certifications" component={Certifications} />
      <Route exact path="/projects" component={Projects} />
      <Redirect from="*" to="/" />
    </Switch>
  );
};

export default Routes;
