import React, {useState}  from 'react';
import './Rodape.css';

  const Rodape = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
        <div className="rodape fixed-bottom justify-content-around row">
            <div className="container col-md">
                <ul className="navbar-nav d-flex flex-sm-row">
                <li className="nav-item mx-2">
                  <a className="nav-link d-flex flex-column text-center" href="#" id="letra">
                    Quem Somos
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link d-flex flex-column text-center" href="#" id="letra">
                    Produtos
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link d-flex flex-column text-center" href="/" id="letra">
                    Troca e Devolução
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link d-flex flex-column text-center" href="/" id="letra">
                    Contatos
                  </a>
                </li>
                </ul>
            </div>
          </div>
    );
  }

export default Rodape;