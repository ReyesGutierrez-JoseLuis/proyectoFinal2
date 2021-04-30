import React from "react";
import GoogleLogin from "react-google-login";
import swal from "sweetalert"
import PopularAndRecentBlogPost from "./blogs/PopularAndRecentBlogPosts";
import MiniCenteredFooter from "./footers/MiniCenteredFooter";
class Login extends React.Component {

  render() {
    const respuesta_exito=()=> {
      swal({
        title: "Bienvenido",
        text: "Inicio de Sesion con exito",
        icon: "success",
        button:"Aceptar"
    })
    }
    const respuesta_fallo = () => {
      swal({
        title: "Error al iniciar sesion",
        text: "Intentalo de nuevo",
        icon: "error",
        button:"Aceptar"
    })
    }
    return (
      <div>
        <center>
          <GoogleLogin
            clientId="69419251981-01ase98llsa4kls1r18kmmut93kkg68f.apps.googleusercontent.com"
            buttonText="Inicio de Sesion"
            onSuccess={respuesta_exito}
            onFailure={respuesta_fallo}
            cookiePolicy={"single_host_origin"}
          />
          <PopularAndRecentBlogPost />
          <MiniCenteredFooter />
        </center>
      </div>
    );
  }
}

export default Login;
