import React from 'react';
import './LoginPage.css';
import DirectionGraphq from '../../components/conection/IpGraphql';



class LoginPage extends React.Component {

    state = {

        CampoUsuario: " ",
        CampoPassword: "",

        data: {
            data: {
                signIn: null
            },
            errors: [{
                message: {
                    content: {},
                    message: "",
                    status: 0

                }
            }]
        }
    }



    handleClick = e => {

        const query = `
            mutation {
                signIn(user: {
                    email: "${this.state.CampoUsuario}"
                    password: "${this.state.CampoPassword}"
                }) {
                    content
                    message
                    status
                } 
            }
        `;

        const url = DirectionGraphq;
        const opts = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query })
        };

        fetch(url, opts)
            .then(res => res.json())
            .then(response => {
                this.setState({ data: response })
            })
            .then(console.log)
            .catch(console.error, error => {
                this.setState({ errors: error })
            });

        e.preventDefault();


        console.log(this.state.data.data);


    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleProbar = e => {
         e.preventDefault();
         console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
         console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
         console.log(this.state.data)
         console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
         console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
    }

    render() {
        return (
            <div className="LoginPage">
                <div className="CajaLogin">
                    <h1 className="TituloLogin">Iniciar Sesión</h1>

                    <div className="ContenedorCamposLogin">
                        <label className="LabelUsuario">Usuario:</label>
                        <input name="CampoUsuario" onChange={this.handleChange} className="InputUsuario" value={this.state.CampouUario} type="text"></input>
                        <br />
                        <label className="LabelPassword">Contraseña:</label>
                        <input name="CampoPassword" onChange={this.handleChange} className="InputPassword" value={this.state.CampoPassword} type="password"></input>
                    </div>

                    <div className="BotonesEntrarVolver">
                        <a href="/user" onClick={this.handleClick} className="BotonEntrar">Entrar</a>
                        {/* <a className="BotonRegresar" href="/">Volver</a> */}
                        <a onClick={this.handleProbar} className="BotonRegresar" href="/">PROBAR</a>
                    </div>
                </div>
            </div>
        );
    }
}


export default LoginPage;
