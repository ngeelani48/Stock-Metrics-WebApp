import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCurrencyData } from '../redux/currency/currencySlice';
import '../styles/details.css';

const DetailsExchange = () => {
  const { details, isLoading } = useSelector((store) => store.currency);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCurrencyData(id));
  }, [dispatch, id]);

  if (details.length === 0) {
    return (
      <h2 className="empty-forexs">
        No Details
      </h2>
    );
  }

  if (isLoading) return <h1>Loading...</h1>;
  return (

    <div className="details-card">
      <h2>{details[0][1].name}</h2>
      <table className="table">
        <tbody>
          <tr>
            <td>Ask</td>
            <td>{details[0][1].ask}</td>
          </tr>
          <tr>
            <td>Bid</td>
            <td>{details[0][1].bid}</td>
          </tr>
          <tr>
            <td>Date</td>
            <td>{details[0][1].create_date}</td>
          </tr>
          <tr>
            <td>High</td>
            <td>{details[0][1].high}</td>
          </tr>
          <tr>
            <td>Low</td>
            <td>{details[0][1].low}</td>
          </tr>
          <tr>
            <td>Percentage Change</td>
            <td>{details[0][1].pctChange}</td>
          </tr>
          <tr>
            <td>Timestamo</td>
            <td>{details[0][1].timestamp}</td>
          </tr>
          <tr>
            <td>VarBid</td>
            <td>{details[0][1].varBid}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DetailsExchange;
