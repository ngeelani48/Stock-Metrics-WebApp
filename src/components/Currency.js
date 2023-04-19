import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Currency = ({ forex }) => {
  const navigate = useNavigate();
  return (
    <div
      className="forex-card"
      data-testid="card"
      onClick={() => navigate(`/details/${forex[0]}`)}
      aria-hidden="true"
    >
      <h2>{forex[1].name}</h2>
      <p className="forex-changes">
        Timestamp:
        {forex[1].timestamp}
      </p>
    </div>
  );
};

Currency.propTypes = {
  forex: PropTypes.shape({
    name: PropTypes.string,
    ticker: PropTypes.string,
    changes: PropTypes.string,
  }).isRequired,
};

export default Currency;
