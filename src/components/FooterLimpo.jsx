import React from 'react';

function FooterLimpo() {
  return (
    <> 
      <footer style={FooterStyles.footer}>
        <div style={FooterStyles.content}>   
          {/* Conteúdo do footer */}
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
    textAlign: 'center',
    width: '100%',          
    height: '75px',         
    position: 'sticky',     // Posicionamento sticky para ficar no final do conteúdo
    bottom: '0',            // Fixa o footer na parte inferior do conteúdo
    left: '0',              
    zIndex: '1000',
    marginTop: '70px',         // Garante que o footer fique acima de outros elementos
  },

  content: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
};