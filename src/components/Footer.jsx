
function Footer() {
  return (
    <>
      <div style={FooterStyles.divBelowFooter}></div> {/* Linha acima do footer */}
      
      <footer style={FooterStyles.footer}>
        <div style={FooterStyles.content}>
          <p style={FooterStyles.text}>
            ProcureAki © {new Date().getFullYear()} - Todos os direitos reservados
          </p>
          <div style={FooterStyles.links}>
            <span style={FooterStyles.link}>Termos de uso</span>
            <span style={FooterStyles.link}>Política de privacidade</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

const FooterStyles = {
  footer: {
    backgroundColor: '#006D77',
    color: 'white',
    padding: '2rem 0',
    marginTop: '0', // Para garantir que não haja margem extra entre a linha e o footer
    textAlign: 'center',
  },
  divBelowFooter: {
    backgroundColor: '#001F2D', // Cor da linha
    width: '100%', // Largura da div (100% da largura do contêiner pai)
    height: '5px', // Altura da div (ajustada para ser uma linha fina)
    marginBottom: '0', // Para garantir que não tenha margem abaixo da linha
  },
  content: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  text: {
    margin: 0,
    fontSize: '18px',
  },
  links: {
    marginTop: '1rem',
  },
  link: {
    margin: '0 1rem',
  },
};
