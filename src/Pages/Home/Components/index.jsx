import { React, useContext } from 'react';
import { Context } from '../../../app/ContextStore/appContext';

export const Index = () => {
  const { store, actions } = useContext(Context);

  return (
      <p>Esta es la variable de prueba {store.currentMenuItem}</p>
  );
};
