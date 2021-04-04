import React, {useState}  from 'react';
import './Navbar.css';

  const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <nav class="navbar navbar-expand-lg navbar-light d-flex flex-column">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse d-flex justify-content-between container-fluid" id="conteudoNavbarSuportado">
          <a class="navbar-brand" href="/pageHome">
            <img src="images/LogoParaFundoEscuro.png" width="200" height="80" alt=""/>
          </a>
          <form class="form-inline w-50 justify-content-center">
            <input class="form-control form-control-sm mr-sm-2 w-75" type="search" placeholder="Pesquisar" aria-label="Pesquisar"/>
            <button class="btn btn-sm my-2 my-sm-0" type="submit">Busca</button>
          </form>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link d-flex flex-column text-center" href="#" id="letra">
                <img class="rounded mx-auto d-block img-fluid mb-3" src="images/chat.png" width="60" height="60" alt=""/>
                <p>Atendimento</p>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link d-flex flex-column text-center" href="#" id="letra">
                <img class="rounded mx-auto d-block img-fluid mb-2" src="images/carrinho-compra.png" width="60" height="60" alt=""/>
                Carrinho
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link d-flex flex-column text-center" href="/" id="letra">
                <img class="rounded mx-auto d-block img-fluid mb-2" src="images/user.png" width="60" height="60" alt=""/>
                Acesso
              </a>
            </li>
          </ul>
        </div>
        <div class="inf justify-content-center container collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/pageHome" id="letra">Início <span class="sr-only">(Página atual)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="letra">Produtos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="letra">Quem Somos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="letra">Contato</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

export default NavBar;