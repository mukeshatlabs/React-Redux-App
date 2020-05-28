
import React from 'react';
import { connect } from 'react-redux';
import { getNASA } from '../actions';
import PhotoCard from "./PhotoCard";


const NasaPhotos = props => {
  const fetchNASA = e => {
    e.preventDefault();
    props.getNASA();
  };

  return (
    <>
      <h2>See NASA Photo of the Day!</h2>
      {props.isFetching && <p>Fetching your Photo</p>}
      <div>
        <PhotoCard pod = {props.NASA} />
      </div>
      {props.error && <p className="error">{props.error}</p>}
      <button onClick={fetchNASA}>Fetch NASA Photo!</button>
    </>
  );
};

const mapStateToProps = state => ({
  NASA: state.NASA,
  error: state.error,
  isFetching: state.isFetching
});

export default connect(
  mapStateToProps,
  { getNASA }
)(NasaPhotos);


