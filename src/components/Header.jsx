import { Navbar, Container } from 'react-bootstrap';
// import { Search } from 'react-bootstrap-icons';

function Header() {
  return (
    <>
        <Navbar style={headerStyles.navbar} expand="lg">
        <Container style={headerStyles.container}>
            <Navbar.Brand href="#" style={headerStyles.brand}>
            ProcureAki
            <img
              src="https://s3-alpha-sig.figma.com/img/7b45/e801/23d69355f89fd96e98ec547f1403c355?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZNrcIcaupXBVoPXJ91dD2FW0Phzv2VAp70R965dag39~f~v6OD0-6jSpM8wQmuk09y3c6De6IV7ZKuMvQD8J14HFJsv6jbRz7owHR2FeHDeJmvPZiNOKmCvlUSzXh4tSRQstKgyMkog7aga4mmKMWI-ESRIMYDNWqmgWUA2RaPypYfd2a~6GsDjnnHvfRW7dhu42qacyGmWRBMa2r~Q-1571ajlq15oa7y17s9mowzsI2btLCaccCV~okTXcBxcaLZT~vrNxqQ1xORLCET8UMh5fj337~9R~p9WcR72L3bXsqI26eFuA6mf8qMhxrVOLNvH8Gg6OeSsXtSqhEMRdSA__"
              alt="Logo"
              style={headerStyles.logo}
            />
            </Navbar.Brand>
            
            {/* <Form style={headerStyles.form}>
            <FormControl 
                type="search" 
                placeholder="Busque por uma loja" 
                style={headerStyles.formControl}
            />
            <Button style={headerStyles.button}>
                <Search style={headerStyles.searchIcon} /> {/* Ícone de pesquisa */}
            {/* </Button>
            </Form> */} 
        </Container>
        </Navbar>
     <div style={headerStyles.divBelowHeader}></div>
   </>
  );
}

export default Header;

const headerStyles = {
  navbar: {
    backgroundColor: '#006D77',
    padding: '1rem 0',
   

  },
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    padding: '0',
    marginRight: '10rem',
    
    
  },
  brand: {
    color: 'white',
    fontSize: '24px',
    fontWeight: 'bold',
    marginRight: '1rem',
    fontFamily: 'Ubuntu, sans-serif', 
    bottom:'30px',
    top:'20px'
  },
  logo: {
    width: '30px',
    height: '30px',
    marginRight: '10px',
    borderRadius: '50%',
  },
  form: {
    flex: 1,
    maxWidth: '600px',
    display: 'flex',
    gap: '0px',
    justifyContent: 'flex-start',
    
    
  },
  formControl: {
    borderRadius: '5px',
    padding: '10px 20px',
    //border: '1px solid #ddd',
    border: '5px solid #FFFFFF',               
   
    width: '480px', 
  },
  button: {
    backgroundColor: '#001F2D',
    color: '#006D77', 
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    
  },
  searchIcon: {
    color: '#219EBC', 
    fontSize: '1.2rem', 
  },
   divBelowHeader: {
    backgroundColor: '#001F2D', 
    width: '100%', 
    height: '5px', 
    marginTop: '0', 
   }
};
