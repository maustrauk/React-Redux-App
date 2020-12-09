import './App.css';
import { connect } from 'react-redux';

import {getQuote} from './actions/marsActions';

import MarsPhotos from './components/MarsPhotos';

const App = props => {
  return (
    <div className="App">
      <MarsPhotos load={props.getQuote} data={props.data} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    data: state.photos
  };
};

export default connect(mapStateToProps,{getQuote})(App);
