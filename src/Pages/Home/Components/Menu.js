import React, { useState,useContext } from 'react';
import { Context } from '../../../app/ContextStore/appContext';
import { Vistalogin } from '../vistas/vistalogin';
import { Index } from '../Components/index';
import {
  AppstoreOutlined,
  LinkOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import {Menu,} from 'antd';




function getItem(label, key, icon,children) {
  return {
    key,
    icon,
    label,
    children
  };
}


const items = [
  getItem('Desplegar', 'sub1', <AppstoreOutlined />, [
    getItem('Autorizacion', '1'),
    getItem('Listado', '2'),
    getItem('Nuevo', '3'),
  ]),
  getItem('Configuración', 'sub2', <SettingOutlined />, [
    getItem('Registro nuevo usuario', '4'),
    getItem('Salir', '5'),
  ]),
  getItem(
    <a href="https://iats.csic.es/" target="_blank" rel="noopener noreferrer">
      WEB IATS
    </a>,
    'link',
    <LinkOutlined />,
  ),
];


const Vales1 = () => {
  const { store, actions } = useContext(Context);
  const [mode, setMode] = useState('inline');
  const [theme, setTheme] = useState('light');
  const [valorMenu, setValorMenu]=useState(null);
  const [currentMenuItem, setCurrentMenuItem] = useState(null);  


  return (
    <>
      <Menu
        style={{
          width: 256,
        }}
        mode={mode}
        theme={theme}
        items={items}
        onSelect={actions.handleClick}
        //selectedKeys={[currentMenuItem]}
        >
        {items.map((item) => (
          <Menu.Item key={item.key} icon={item.icon}>
            {item.content}
          </Menu.Item>
        ))}
        </Menu>     
    </>
  );
};
export default Vales1;