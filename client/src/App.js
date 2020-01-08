import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import LandingPage from './pages/landing';
import ConsumerLanding from './pages/consumer_services/ConsumerLandingPage';
import CorporateLandingPage from './pages/corporate_services/CorporateLandingPage';
import CorporateDashboard from './pages/corporate_services/CorporateDashboard';
import CreditCheckPage from './pages/corporate_services/CreditCheckPage';
import DataSubmissionPage from './pages/corporate_services/DataSubmissionPage';
import CreditQueryBuilderPage from './pages/corporate_services/CreditQueryBuilderPage';
import StaffLoginPage from './pages/staff/StaffLoginPage';
import CorporateSignUpPage from './pages/corporate_services/Corporate-signup';
import AuthenticationService from './services/authenticationService';
import SetPasswordPage from './pages/SetPasswordPage';


const PrivateRoute = ({ component: Component, authenticationService, ...rest }) => (
  <Route {...rest} render={(props) => (authenticationService.isAuthenticated() === true ? <Component {...props} />: <Redirect to='/corporate' /> )} />
)

function App() {
  const authenticationService = new AuthenticationService();
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/consumer">
          <ConsumerLanding />
        </Route>
        <Route path="/corporate/corporate-signup">
          <CorporateSignUpPage/>
        </Route>
        <PrivateRoute path="/corporate/corporate-dash" component={CorporateDashboard} authenticationService={authenticationService}/>
        <PrivateRoute path="/corporate/data-submission" component={DataSubmissionPage} authenticationService={authenticationService}/>
        <PrivateRoute path="/corporate/credit-check" component={CreditCheckPage} authenticationService={authenticationService}/>
        <PrivateRoute path="/corporate/credit-query" component={CreditQueryBuilderPage} authenticationService={authenticationService}/>
        <Route path="/corporate">
          <CorporateLandingPage />
        </Route>
        <Route path="/staff">
          <StaffLoginPage/>
        </Route>
        <Route path="/set-password/:token" component={SetPasswordPage}/>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
