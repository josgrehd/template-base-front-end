import { React, useContext } from 'react';
import { Context } from '../../../app/ContextStore/appContext';
import Vales1 from '../Components/Menu';
import {Row,Col} from 'antd';
import { Vistalogin } from './vistalogin';
import { Index } from '../Components';
import NewVale from '../Components/Nuevo';

export const VistaPersonal= () => {
  const { store, actions } = useContext(Context);
  const getMenuContent = () => {
    switch (store.currentMenuItem) {
        case '3':
            // Aquí puedes mostrar la vista de registro de nuevo usuario o la vista de login
            return <NewVale />;
      case '4':
        // Aquí puedes mostrar la vista de registro de nuevo usuario o la vista de login
        return <Vistalogin />;
      default:
        // Aquí puedes mostrar otras vistas o el contenido predeterminado
        return <Index />;
    }
  }
  return (
    <>
    <Row justify="left">
      <Col md={8} sm={24}>
        <Vales1/>
      </Col>
      <Col md={8} sm={24}>
            {getMenuContent()}
      </Col>    
    </Row>
    </>
  );
};