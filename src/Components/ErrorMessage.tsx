import React from 'react';
import '../Css/ErrorMessage.css';
import { DisconnectOutlined } from '@ant-design/icons';

const ErrorMessage = () => (
  <div className="error">
    <DisconnectOutlined className="erroricon" />
    <p className="errortext">Looks like something went wrong and we can't load more houses right now.</p>
    <p className="errortext">Try Again</p>
  </div>
);

export default ErrorMessage;