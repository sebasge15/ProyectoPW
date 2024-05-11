import React from "react";
import "./Footer.css";
import ig from '../assets/iconmonstr-instagram-11.svg';
import fb from '../assets/iconmonstr-facebook-5.svg';
import tw from '../assets/iconmonstr-twitter-5.svg';
import yt from '../assets/iconmonstr-youtube-10.svg';
function Footer(){
    return(
        <div className="footer">
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links_div">
                        <h3>La Tiendita del Abuelo</h3>
                        <a><p>©2020-2021</p></a>
                        <a><p>Privacy-Terms</p></a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Cuenta</h4>
                        <a><p>Log in</p></a>
                        <a><p>Registro</p></a>
                        <a><p>Carrito</p></a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Productos</h4>
                        <a><p>Más vendidos</p></a>
                        <a><p>Nuevos</p></a>
                        <a><p>Ofertas</p></a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Ayuda</h4>
                        <a><p>Acerca de nosotros</p></a>
                        <a><p>Política de envío</p></a>
                        <a><p>FAQ</p></a>
                    </div>
                    <div className="sb__footer-links_div">
                        <div className="socialMedia">
                            <p><img src={ig} alt=""/></p>
                            <p><img src={fb} alt=""/></p>
                            <p><img src={tw} alt=""/></p>
                            <p><img src={yt} alt=""/></p>
                        </div>

                    </div>
                </div>
            </div>

        <hr></hr>


        </div>

    )
}

export default Footer