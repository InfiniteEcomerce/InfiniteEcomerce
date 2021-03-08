import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Login.css';
import NavBar from '../../components/NavBar';
import { useHistory } from 'react-router-dom';

function Login() {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    function handleSubmit(event) {
        event.preventDefault();

        if (user === '' || password === '') {
            alert('Preencha os campos');
        }
        else if (user === 'admin' && password === 'admin123') {

            history.push('/loading');
            setTimeout(() => {
                history.push('/home');
            }, 3000);
        }
        else {
            alert('Dados Inccorretos');
        }
    }

    return (
        <>
            <NavBar></NavBar>
            <div className='login-container'>
                <form className='container'>
                    <div className='box-login'>
                        <div className="row">
                            <div className="input-field col s12">
                                <input value={user} onChange={(event) => { setUser(event.target.value) }} id="user" type="text" className="validate" />
                                <label className="active" htmlFor="user">Usuario</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s12">
                                <input value={password} onChange={(event) => { setPassword(event.target.value) }} id="password" type="password" className="validate" />
                                <label className="active" htmlFor="password">Senha</label>
                            </div>
                        </div>
                    </div>

                    <button className="btn waves-effect waves-light deep-orange accent-2 " type="submit" name="action" onClick={handleSubmit} >Acesse
                <i className="material-icons right ">send</i>
                    </button>
                    <div className='login-text'>
                        <br />
                        <Link to="#">Esqueceu sua Senha?</Link>
                        <br />
                        <Link to="#">Cadastre-se </Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login;