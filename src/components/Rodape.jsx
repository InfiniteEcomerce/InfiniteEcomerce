import React, {useState}  from 'react';
import './Rodape.css';

  const Rodape = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
        <div class="container-fluid fixed-bottom d-flex justify-content-around">
            <div class="container">
                <p class="mt-1 mb-0">Links Úteis</p>
                <ul class="navbar-nav d-flex flex-row">
                <li class="nav-item mx-2">
                  <a class="nav-link d-flex flex-column text-center" href="#" id="letra">
                    Quem Somos
                  </a>
                </li>
                <li class="nav-item mx-2">
                  <a class="nav-link d-flex flex-column text-center" href="#" id="letra">
                    Produtos
                  </a>
                </li>
                <li class="nav-item mx-2">
                  <a class="nav-link d-flex flex-column text-center" href="/" id="letra">
                    Troca e Devolução
                  </a>
                </li>
                </ul>
            </div>
            <div class="container">
                <p class="mt-1 mb-0">Contatos</p>
                <ul class="navbar-nav d-flex flex-row">
                  <li class="nav-item mx-2">
                    <a class="nav-link d-flex flex-column text-center" href="#" id="letra">
                      WhasApp
                    </a>
                  </li>
                  <li class="nav-item mx-2">
                    <a class="nav-link d-flex flex-column text-center" href="#" id="letra">
                      Telefone
                    </a>
                  </li>
                  <li class="nav-item mx-2">
                    <a class="nav-link d-flex flex-column text-center" href="/" id="letra">
                      Email
                    </a>
                  </li>
                </ul>
            </div>
        </div>
    );
  }

export default Rodape;