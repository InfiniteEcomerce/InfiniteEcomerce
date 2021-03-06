import React, { useState } from 'react'
import NavBar from '../../components/NavBar';
import Rodape from '../../components/Rodape';
import Carousel from '../../components/Carousel';
import './home.css'

function Home() {
    return (
        <>
            <NavBar></NavBar>
            <Carousel></Carousel>
            <div className="promo container-fluid text-center p-1">
                <h3>Promoções</h3>
            </div>
            <div className="d-flex flex-row container-fluid bg-light">
                <div className="card text-center mt-1 mx-1">
                    <img className="card-img-top" src="images/capa.jpg" alt="Imagem de capa do card"/>
                    <div className="card-body">
                      <h5 className="card-title">50% OFF</h5>

                      <a href="#" className="btn btn-light">Comprar</a>
                    </div>
                </div>
                <div className="card text-center mt-1 mx-1">
                    <img className="card-img-top" src="images/A fundação.png" alt="Imagem de capa do card"/>
                    <div className="card-body">
                      <h5 className="card-title">30% OFF</h5>

                      <a href="#" className="btn btn-light">Comprar</a>
                    </div>
                </div>
                <div className="card text-center mt-1 mx-1">
                    <img className="card-img-top" src="images/conto de aia.jpg" alt="Imagem de capa do card"/>
                    <div className="card-body">
                      <h5 className="card-title">50% OFF</h5>

                      <a href="#" className="btn btn-light">Comprar</a>
                    </div>
                </div>
                <div className="card text-center mt-1 mx-1">
                    <img className="card-img-top" src="images/Duna.jpg" alt="Imagem de capa do card"/>
                    <div className="card-body">
                      <h5 className="card-title">70% OFF</h5>

                      <a href="#" className="btn btn-light">Comprar</a>
                    </div>
                </div>
                <div className="card text-center mt-1 mx-1">
                  <img className="card-img-top" src="images/Fahrenheit 451.jpg" alt="Imagem de capa do card"/>
                  <div className="card-body">
                    <h5 className="card-title">60% OFF</h5>
                    <a href="#" className="btn btn-light">Comprar</a>
                </div>
                </div>
                <div className="card text-center mt-1 mx-1">
                  <img className="card-img-top" src="images/Flores para Algernon.jpg" alt="Imagem de capa do card"/>
                  <div className="card-body">
                    <h5 className="card-title">20% OFF</h5>
                    <a href="#" className="btn btn-light">Comprar</a>
                </div>
                </div>
                <div className="card text-center mt-1 mx-1">
                  <img className="card-img-top" src="images/Leve-me com você.jpg" alt="Imagem de capa do card"/>
                  <div className="card-body">
                    <h5 className="card-title">10% OFF</h5>
                    <a href="#" className="btn btn-light">Comprar</a>
                </div>
                </div>
            </div>
            <div className="d-flex flex-row container-fluid bg-light ultima">
                <div className="card text-center mt-1 mx-1">
                    <img className="card-img-top" src="images/O ceifador.jpg" alt="Imagem de capa do card"/>
                    <div className="card-body">
                      <h5 className="card-title">30% OFF</h5>

                      <a href="#" className="btn btn-light">Comprar</a>
                    </div>
                </div>
                <div className="card text-center mt-1 mx-1">
                    <img className="card-img-top" src="images/O conde de monte cristo.jpg" alt="Imagem de capa do card"/>
                    <div className="card-body">
                      <h5 className="card-title">50% OFF</h5>

                      <a href="#" className="btn btn-light">Comprar</a>
                    </div>
                </div>
                <div className="card text-center mt-1 mx-1">
                    <img className="card-img-top" src="images/O fim da infância.jpg" alt="Imagem de capa do card"/>
                    <div className="card-body">
                      <h5 className="card-title">35% OFF</h5>

                      <a href="#" className="btn btn-light">Comprar</a>
                    </div>
                </div>
                <div className="card text-center mt-1 mx-1">
                    <img className="card-img-top" src="images/O hobbit.jpg" alt="Imagem de capa do card"/>
                    <div className="card-body">
                      <h5 className="card-title">25% OFF</h5>

                      <a href="#" className="btn btn-light">Comprar</a>
                    </div>
                </div>
                <div className="card text-center mt-1 mx-1">
                  <img className="card-img-top" src="images/o homem do castelo alto.jpg" alt="Imagem de capa do card"/>
                  <div className="card-body">
                    <h5 className="card-title">33% OFF</h5>
                    <a href="#" className="btn btn-light">Comprar</a>
                </div>
                </div>
                <div className="card text-center mt-1 mx-1">
                  <img className="card-img-top" src="images/O iluminado.jpg" alt="Imagem de capa do card"/>
                  <div className="card-body">
                    <h5 className="card-title">47% OFF</h5>
                    <a href="#" className="btn btn-light">Comprar</a>
                </div>
                </div>
                <div className="card text-center mt-1 mx-1">
                  <img className="card-img-top" src="images/os miseráveis.jpg" alt="Imagem de capa do card"/>
                  <div className="card-body">
                    <h5 className="card-title">62% OFF</h5>
                    <a href="#" className="btn btn-light">Comprar</a>
                </div>
                </div>
            </div>
   
            <Rodape></Rodape>
                     
        </>
    )
}

export default Home;