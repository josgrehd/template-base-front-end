import { React, useContext } from 'react';
import { Context } from '../../../app/ContextStore/appContext';
import  Login from '../Components/login';
import {Row,Col} from 'antd';

export const Vistalogin= () => {
  const { store, actions } = useContext(Context);

  return (
    <Row justify="center">
      <Col md={8} sm={24}>
        <Login/>
      </Col>    
    </Row>
  );
};