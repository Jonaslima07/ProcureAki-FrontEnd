// Footer.jsx
import React from 'react';

function FooterLimpo() {
  return (
    <> 
      <footer style={FooterStyles.footer}>
        <div style={FooterStyles.content}>   
        </div>
      </footer>
    </>
  );
}

export default FooterLimpo;


const FooterStyles = {
  footer: {
    backgroundColor: '#006D77',
    color: 'white',
    padding: '2rem 0',
    marginTop: '0',
    textAlign: 'center',
    width: '6335px',       // Largura definida como na imagem
    height: '75px',        // Altura definida como na imagem
    position: 'absolute',  // Posicionamento absoluto para controlar a posição na página
    top: '1028px',          // Ajusta a posição vertical conforme a imagem
    left: '-31px',          // Ajusta a posição horizontal conforme a imagem
  },

  content: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
};