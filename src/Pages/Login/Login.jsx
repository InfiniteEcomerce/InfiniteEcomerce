import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Login.css';
import NavBar from '../../components/NavBar';
import Rodape from '../../components/Rodape';
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
            <Rodape></Rodape>

        </>
    )
}

export default Login;