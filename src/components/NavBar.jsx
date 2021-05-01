import React, {useState}  from 'react';
import './Navbar.css';

  const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      /*Navbar inicio*/
      <nav className="navbar navbar-expand-lg navbar-dark px-1">
        <div className="w-100">
          {/*botao responsivo*/}
          <button className="navbar-toggler float-left mt-2" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="nav-link float-right d-lg-none px-0" href="/" id="letra">
            <img className="rounded  d-block img-fluid" src="images/user.png" width="40" height="40" alt=""/>
          </a>
          <a className="nav-link float-right d-lg-none px-1" href="/" id="letra">
            <img className="rounded  d-block img-fluid" src="images/carrinho-compra.png" width="40" height="40" alt=""/>
          </a>
          {/*div superior: tem uma dentro da outra pois o d-none nao funciona com d-flex*/}
          <div className="d-none d-lg-block d-xl-block d-xxl-block">
            <div className="d-flex justify-content-between container-fluid">
              <a className="navbar-brand" href="/pageHome">
                <img src="images/LogoParaFundoEscuro.png" width="200" height="80" alt=""/>
              </a>
              <form className="form-inline w-50 justify-content-center">
                <input className="form-control form-control-sm mr-sm-2 w-75" type="search" placeholder="Pesquisar" aria-label="Pesquisar"/>
                <button className="btn btn-sm my-2 my-sm-0" type="submit">Busca</button>
              </form>
              <ul className="navbar-nav">
                <li className="nav-item align-self-end text-center">
                  <a className="nav-link d-flex flex-column" href="#" id="letra">
                    <img className="rounded mx-auto d-block img-fluid" src="images/chat.png" width="60" height="60" alt=""/>
                    <p>Atendimento</p>
                  </a>
                </li>
                <li className="nav-item align-self-end text-center">
                  <a className="nav-link d-flex flex-column" href="#" id="letra">
                    <img className="rounded mx-auto d-block img-fluid" src="images/carrinho-compra.png" width="60" height="60" alt=""/>
                    <p>Carrinho</p>
                  </a>
                </li>
                <li className="nav-item align-self-end text-center">
                  <a className="nav-link d-flex flex-column" href="/" id="letra">
                    <img className="rounded mx-auto d-block img-fluid" src="images/user.png" width="70" height="60" alt=""/>
                    <p>Acesso</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/*Div inferior: tem duas pois o collapse tem que estar sozinho*/}
          <div className="divInfRes row">
            <a className="imgRes1 rounded mx-auto d-lg-none mb-2" href="/pageHome">
                <img src="images/LogoParaFundoEscuro.png" width="150" height="50" alt=""/>
            </a>
            <div className="collapse navbar-collapse" id="conteudoNavbarSuportado">
              <div className="guiaNav col d-flex justify-content-center">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link text-center" href="/pageHome" id="letra">Início <span className="sr-only">(Página atual)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-center" href="#" id="letra">Produtos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-center" href="#" id="letra">Quem Somos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-center" href="#" id="letra">Contato</a>
                </li>
              </ul>
              </div>
              </div>              

            {/*
            <ul className="navbar-nav d-lg-none">
                <li className="nav-item">
                  <a className="nav-link" href="#" id="letra">
                    <img className="rounded mx-auto d-block img-fluid" src="images/chat.png" width="40" height="40" alt=""/>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" id="letra">
                    <img className="rounded mx-auto d-block img-fluid" src="images/carrinho-compra.png" width="40" height="40" alt=""/>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/" id="letra">
                    <img className="rounded mx-auto d-block img-fluid" src="images/user.png" width="50" height="40" alt=""/>
                  </a>
                </li>
              </ul>
              */}
          </div>

        </div>
        
      </nav>
    );
  }

export default NavBar;


