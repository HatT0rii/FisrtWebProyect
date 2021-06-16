import React from 'react';
import Img from './asset/Img';
import './Footer.css'

function Footer() {
    return (
        <div className='main-footer'>
            <div className='container-roww'>
                {/* Cuadro 1 */}
                <div className='box'>
                    <i class="fas fa-shipping-fast"/>
                    <h1>Entrega Segura</h1>
                    <p>Tracking de seguimiento</p>
                </div>
                {/* Cuadro 2 */}
                <div className='box'>
                    <i class="fas fa-user-lock"></i>
                    <h1>Pago Seguro</h1>
                    <p>Tecnologia de pago SSL</p>
                </div>
                {/* Cuadro 3 */}
                <div className='box'>
                    <i class="fas fa-coins"></i>
                    <h1>Devolución Segura</h1>
                    <p>Garantiza el 100% de la devolución</p>
                </div>
            </div>
            <div className='container-row'>
                {/* Column 1*/}
                <div className='col col-img'>
                    <img loading='lazy' src={Img[0].id} />
                </div>
                {/* Column 2*/}
                <div className='col'>
                    <h1 className='col-title'>Contactanos</h1>
                    <ul className='col-list'>
                        <li><i class="fab fa-whatsapp"/>+51 932 687 138</li>
                        <li><i class="fab fas fa-at"/>ventasplavalle@gmail.com</li>
                        <li><i class="fas fa-store"/>Abierto de L-S de 9 a 16:30</li>
                    </ul>
                </div>
                {/* Column 3*/}
                <div className='col'>
                    <h1 className='col-title'>Siguenos</h1>
                    <ul className='col-list'>
                        <li>
                            <a href='https://www.facebook.com/PALVALLE.PE'target='_blank'><i class="fab fa-facebook"/></a>
                            <a href='https://www.facebook.com/PALVALLE.PE'target='_blank'>Facebook</a>
                        </li>
                        <li>
                            <a href='https://www.instagram.com/palvalle.pe'target='_blank'><i class="fab fa-instagram"/></a>
                            <a href='https://www.instagram.com/palvalle.pe'target='_blank'>Instagram</a>
                        </li>
                    </ul>
                </div>
                {/* Column 4*/}
                <div className='col'>
                    <h1 className='col-title'>Metodos de Pago</h1>
                    <ul className='col-list'>
                        <li><i class="fab fa-cc-visa"/>Visa</li>
                        <li><i class="fab fa-cc-mastercard"/>Marstercard</li>
                        <li><i class="fab fa-cc-amex"/>America Express</li>
                        <li><i class="fab fa-cc-diners-club"/>Dinner Club</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Footer