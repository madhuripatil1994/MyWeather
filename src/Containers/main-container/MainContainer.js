import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SoilComponent from './../Soil/Now/Now';
import ForecastSoilComponent from './../Soil/Forecast/Forecast';
import Header from '../../Components/Header';
import { connect } from 'react-redux';

class MainContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("propss", this.props);
        return(<Router>
                <div>
                    <Header></Header>
                <Route path="/soil/now" component={SoilComponent}></Route>
                <Route path="/soil/forecast" component={ForecastSoilComponent}></Route>

                </div>
            </Router>)
    }
}




  export default MainContainer;