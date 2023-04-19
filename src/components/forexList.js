import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Currency from './Currency';
import '../styles/forexList.css';
import { getForex } from '../redux/forex/forexSlice';

const ForexList = () => {
  const { forexs, isLoading } = useSelector((store) => store.forex);

  const dispatch = useDispatch();

  useEffect(() => {
    if (forexs.length === 0) {
      dispatch(getForex());
    }
  }, [dispatch, forexs.length]);
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="container">
      <div className="forex">
        <h2>Forex Exchange rates</h2>
      </div>
      <div className="forexs-container">
        {forexs.map((forex, index) => (
          <Currency key={forex[0]} forex={forex} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ForexList;
