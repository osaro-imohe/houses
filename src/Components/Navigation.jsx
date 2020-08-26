import React from 'react';
import '../Css/Navigation.css';
import {
  NotificationOutlined,
  ClockCircleOutlined,
  UsergroupDeleteOutlined,
  CreditCardOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const Navigation = () => (
  <div className="navigation col-lg-2 d-none d-lg-block">
    <div className="navigationinner">
      <div className="logo">
        <p className="logotext">Houses</p>
      </div>
      <ul className="navul">
        <li className="navs">
          <div className="navsinner active">
            <div className="row">
              <NotificationOutlined className="icons" />
              <p className="navstext activetext">Listings</p>
            </div>
          </div>
        </li>
        <li className="navs">
          <div className="navsinner">
            <div className="row">
              <ClockCircleOutlined className="icons" />
              <p className="navstext">Dashboard</p>
            </div>
          </div>
        </li>
        <li className="navs">
          <div className="navsinner">
            <div className="row">
              <UsergroupDeleteOutlined className="icons" />
              <p className="navstext">Users</p>
            </div>
          </div>
        </li>
        <li className="navs">
          <div className="navsinner">
            <div className="row">
              <CreditCardOutlined className="icons" />
              <p className="navstext">Billings</p>
            </div>
          </div>
        </li>
        <li className="navs">
          <div className="navsinner">
            <div className="row">
              <SettingOutlined className="icons" />
              <p className="navstext">Settings</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
);

export default Navigation;
