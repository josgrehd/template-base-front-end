import {React, useContext,useState} from 'react';
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Context } from '../../../app/ContextStore/appContext';

const Login = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const [enviarFormulario, setFormulario] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    return (
    <>
      <h1>Instituto de acuicultura torre la sal</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={(valores) => {
          let errores = {};

          // Validacion cajas
          if (!valores.email) {
            errores.email = "Por favor ingresa un email";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.email
            )
          ) {
            errores.email =
              "El email solo puede contener letras, numeros, puntos, guiones y guión bajo";
          }

          if (!valores.password) {
            errores.password = "Por favor ingresa el password";
            // } else if (
            //   !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
            //     valores.password
            //   )
            // ) {
            errores.password =
              "El email solo puede contener letras, numeros, puntos, guiones y guión bajo";
          }

          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          console.log("Formulario enviado");
          console.log("Formulario enviado", valores.email, valores.password);
          setEmail(valores.email);
          setPassword(valores.password);
          setFormulario(true);
          setTimeout(() => setFormulario(false), 5000);
        }}
      >
        {({ errors }) => (
          <Form className="formulario">
            <h1 className="mb-5">Login</h1>
            <div>
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                onKeyUp={(e) => setEmail(e.target.value)}
              />
              <ErrorMessage
                name="email"
                component={() => <div className="error">{errors.email}</div>}
              />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                onKeyUp={(e) => setPassword(e.target.value)}
              />
              <ErrorMessage
                name="password"
                component={() => <div className="error">{errors.password}</div>}
              />
            </div>

            <button type="submit" onClick={"enviar datos al backend"}>
              Enviar
            </button>
            {enviarFormulario && (
              <p className="exito">Formulario enviado con exito!</p>
            )}
          </Form>
        )}
      </Formik>
      </>
    );
  };

  export default Login;
  
