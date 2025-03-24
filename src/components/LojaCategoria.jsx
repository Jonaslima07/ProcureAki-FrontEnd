import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const LojaCategoria = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.h2}>Lojas correspondentes a categoria "Varejo"</h2>

      <div style={styles.listGroup}>
        <div style={styles.listGroupItem}>
          <div style={styles.storeWrapper}>
            <div style={styles.listItemDiv}>
              <img src="/img/imagemcasaveia.png" alt="Ícone 1" style={styles.listItemImage} />
              <h5 style={styles.mundoBike}>Mundo Bike</h5>
            </div>
            <div style={styles.storeDetails}>
              <div style={styles.addressWrapper}>
                <img src="/img/locationwhite2.png" alt="Ícone localização" style={styles.locationIcon} />
                <p style={styles.p}>Avenida Luiz Gonzaga, Centro, Campina Grande</p>
              </div>
              <div style={styles.contactWrapper}>
                <img src="/img/tel.png" alt="Ícone telefone" style={styles.icontel} />
                <p style={styles.pnum}>83 98967-0000</p>
              </div>
              <div style={styles.contactWrapper}>
                <img src="/img/relogio.png" alt="Ícone horário" style={styles.iconrelogio} />
                <p style={styles.ptempo}>08:00 - 17:00</p>
              </div>
              <a href="https://www.lojamundobike.com" style={styles.storeLink}>
                <img src="/img/setadebarra.png" alt="Ícone loja" style={styles.iconloja} />
                  {/* <p style={styles.lojap}>Acessar Loja</p> */}
                  <button style={styles.button}>Acessar Loja</button>
              </a>
            </div>
          </div>
        </div>

        <div style={styles.listGroupItem}>
          <div style={styles.storeWrapper}>
            <div style={styles.listItemDiv}>
              <img src="/img/imagemcasaveia.png" alt="Ícone 1" style={styles.listItemImage} />
              <h5 style={styles.mundoBike}>Mundo Bike</h5>
            </div>
            <div style={styles.storeDetails}>
              <div style={styles.addressWrapper}>
                <img src="/img/locationwhite2.png" alt="Ícone localização" style={styles.locationIcon} />
                <p style={styles.p}>Avenida Luiz Gonzaga, Centro, Campina Grande</p>
              </div>
              <div style={styles.contactWrapper}>
                <img src="/img/tel.png" alt="Ícone telefone" style={styles.icontel} />
                <p style={styles.pnum}>83 98967-0000</p>
              </div>
              <div style={styles.contactWrapper}>
                <img src="/img/relogio.png" alt="Ícone horário" style={styles.iconrelogio} />
                <p style={styles.ptempo}>08:00 - 17:00</p>
              </div>
              <a href="https://www.lojamundobike.com" style={styles.storeLink}>
                <img src="/img/setadebarra.png" alt="Ícone loja" style={styles.iconloja} />
                    {/* <p style={styles.lojap}>Acessar Loja</p> */}
                    <button style={styles.button}>Acessar Loja</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Constante de Estilos
const styles = {
  container: {
    // padding: '20px', antes testem
    // backgroundColor: '#f8f9fa',
    // minHeight: '100vh'
      padding: '20px',
      backgroundColor: '#f8f9fa',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',  // Centraliza verticalmente
      
    
  },
  pnum: {
    marginBottom: '5px',
    fontSize: '20px',
    fontWeight: '400',
    lineHeight: '100%',
    color: '#ffffff',
    position: 'relative',
    marginLeft: '1px', // Espaçamento entre o ícone e o texto
    top: '10px',
  },
  icontel: {
    width: '24px',
    height: '24px',
    marginRight: '10px', // Espaço entre o ícone e o texto
    position: 'relative',
    left: '0',
    top: '7px',
    marginLeft: '3px', // Espaçamento entre o ícone e o texto
  },
  iconloja: {
    width: '30',
    height: '24px',
    marginRight: '10px', // Espaço entre o ícone e o texto
    position: 'relative',
    left: '10',
    top: '-72px',
    marginLeft: '-460px',

  },
  // lojap:{
  //   marginBottom: '5px',
  //   fontSize: '20px',
  //   fontWeight: '400',
  //   lineHeight: '100%',
  //   color: '#ffffff',
  //   position: 'relative',
  //   marginLeft: '1px', // Espaçamento entre o ícone e o texto
  //   top: '-70px',

  // },

  h2: {
    textAlign: 'center',
    marginBottom: '30px',
    position: 'relative',
    fontWeight: 'bold',
    top: '-46px',
    color: '#006D77',

  },
  listGroup: {
    listStyleType: 'none',
    padding: '0'
  },
  listGroupItem: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '15px',
    marginBottom: '15px',
    backgroundColor: '#ffffff',
    border: '1px solid #ddd',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)'
  },
  storeWrapper: {
    display: 'flex',
    backgroundColor: '#006D77',  // Cor verde para toda a div
    padding: '15px',
    borderRadius: '5px',
    width: '100%'
  },
  listItemDiv: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '15px'
  },
  listItemImage: {
    width: '36px',
    height: '36px',
    marginRight: '15px',
    borderRadius: '5px',
    position: 'relative',
    top: '-55px',
  },
  mundoBike: {
    fontWeight: '400',
    fontSize: '24px',
    lineHeight: '100%',
    letterSpacing: '0%',
    position: 'relative',
    top: '-52px',
    color: 'white'
  },
  iconrelogio: {
    width: '30px',
    height: '30px',
    marginRight: '10px', // Espaço entre o ícone e o texto
    position: 'relative',
    left: '-190px',
    top: '-30px',
  },
  storeDetails: {
    flex: 1,
    color: 'white' // Cor do texto para contraste com o fundo verde
  },
  addressWrapper: {
    display: 'flex',
    alignItems: 'center', // Alinha a imagem e o texto verticalmente
    marginBottom: '10px'
  },
  contactWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px'
  },
  p: {
    marginBottom: '5px',
    fontSize: '20px',
    fontFamily: 'Inter',
    fontWeight: '400',
    lineHeight: '100%',
    letterSpacing: '0%',
    color: '#ffffff' // Texto em branco para melhor contraste
  },
  ptempo: {
    marginBottom: '5px',
    position: 'relative',
    left:'-190px',
    top: '-26px',
    fontSize: '20px',
    fontWeight: '400',
    lineHeight: '100%',
    color: '#ffffff', // Texto em branco para melhor contraste
    marginLeft: '10px', // Espaçamento entre o ícone e o texto
  },
  locationIcon: {
    width: '28px',
    height: '28px',
    marginRight: '10px', // Espaço entre o ícone e o parágrafo
    alignSelf: 'center', // Centraliza o ícone com o texto
  },
  icon: {
    width: '24px',
    height: '24px',
    marginRight: '10px',
  },
  storeLink: {
    display: 'inline-block',
    color: '#ffffff',
    textDecoration: 'none',
    marginTop: '10px',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
  },
  button: {
    backgroundColor: '#099D77',
    color: 'white',
    border: 'none',
    position:'relative',
    top: '-72px',
    padding: '3px 2px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    textAlign: 'center',
    textDecoration: 'none',
  },
};

export default LojaCategoria;