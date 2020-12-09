import './App.css';
import { connect } from 'react-redux';

import {getQuote} from './actions/marsActions';

import MarsPhoto from './components/MarsPhoto';

const App = props => {
  return (
    <div className="App">
      <MarsPhoto load={props.getQuote} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching
  };
};

export default connect(mapStateToProps,{getQuote})(App);
