import logo from '../../assets/img/logo.svg';

import './styles.css';

function Header() {
    return(
      <header>
      <div className="dsmeta-logo-container">
            <img src={logo} alt="Logo DSMeta" />
            <h1>DSMeta</h1>
            <p>Desenvolvido por <a href="https://www.instagram.com/biel_adelungue" target="_blank">@biel_adelungue</a></p>    
        </div>
      </header>
    )
  }
  
export default Header;
  