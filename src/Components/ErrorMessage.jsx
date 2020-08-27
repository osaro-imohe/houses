import React, { useContext } from 'react';
import '../Css/ErrorMessage.css';
import { DisconnectOutlined } from '@ant-design/icons';
import { GlobalContext } from '../Context/GlobalContext';

const ErrorMessage = ({ url }) => {
  const { loadHouses } = useContext(GlobalContext);
  const retry = () => {
    loadHouses(url);
  };
  return (
    <div className="error">
      <DisconnectOutlined className="erroricon" />
      <p className="errortext">Looks like something went wrong and we can't load more houses right now.</p>
      <button className="errorbutton" type="button" onClick={retry}>
        <p className="errorbuttontext">Try Again</p>
      </button>
    </div>
  );
};
export default ErrorMessage;
