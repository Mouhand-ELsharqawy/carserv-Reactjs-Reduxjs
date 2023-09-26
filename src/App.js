import './App.css';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import About from './components/About';
import Booking from './components/Booking,';
import Contact from './components/Contact';
import Service from './components/Service';
import Testimonial from './components/Testimonial';
import PageNotFound from './components/PageNotFound';
import Team from './components/Team';
import AllBooking from './components/AllBookings';
import OneBooking from './components/oneBooking';
import AddBooking from './components/AddBooking';
import EditBooking from './components/EditBooking';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" >
            <Main />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/booking" >
            <Booking />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/service" >
            <Service />
          </Route>
          <Route exact path="/team">
            <Team />
          </Route>
          <Route exact path="/testimonial">
            <Testimonial />
          </Route>
          <Route exact path="/booking/all" >
            <AllBooking />
          </Route>
          <Route exact path="/booking/one/:id">
              <OneBooking />
          </Route>
          <Route exact path="/booking/add">
              <AddBooking />
          </Route>
          <Route exact path="/booking/update/:id" >
            <EditBooking />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
