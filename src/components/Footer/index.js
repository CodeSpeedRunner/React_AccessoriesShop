import React from 'react';
import * as S from './style';
import { FaInstagram, FaCreditCard, FaTruck, FaWhatsapp, FaLinkedinIn, FaPaperPlane, FaConnectdevelop } from 'react-icons/fa'

export default function Footer() {
  return (
    <>
      <S.Container>

        <S.ServicesFooter>
          <S.Service>
            <FaTruck />
            <S.TextService>
              <h1>Serviço de Entrega</h1>
              <p>Entregamos em todo país.</p>
            </S.TextService>
          </S.Service>

          <S.Service>
            <FaCreditCard />
            <S.TextService>
              <h1>Pagamento  facilitado</h1>
              <p>Paypal ou Cartão de Crédito.</p>
            </S.TextService>
          </S.Service>

          <S.Service>
            <FaWhatsapp />
            <S.TextService>
              <h1>Compre pelo Whatsapp</h1>
              <p>Estamos sempre prontos para te atender!</p>
            </S.TextService>
          </S.Service>
        </S.ServicesFooter>

        <S.MainFooter>
          <S.MFBox>
            <S.TitleMainFooter>Redes sociais</S.TitleMainFooter>
            <div className="iconInstaFooter"><FaInstagram /> </div>
            <div className="inputEmailFooter">
              <input placeholder="E-mail" type="email" />
              <div className="iconInputEmailFooter">
                <FaPaperPlane />
              </div>
            </div>
          </S.MFBox>
        </S.MainFooter>
      </S.Container>
    </>
  )
}