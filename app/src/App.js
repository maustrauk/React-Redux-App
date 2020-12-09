import './App.css';
import { connect } from 'react-redux';

import {getQuote} from './actions/marsActions';

import MarsPhoto from './components/MarsPhoto';

const App = props => {
  return (
    <div className="App">
      <MarsPhoto load={props.getQuote} data={props.data} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    data: state.API_Data
  };
};

export default connect(mapStateToProps,{getQuote})(App);
