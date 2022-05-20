import './styles.css';
import LogoSocialDev from '../../assets/logo-socialdev.svg';
import Lupa from '../../assets/lupa.svg';
import Home from '../../assets/home.svg';
import Messages from '../../assets/messages.svg';
import Arrowdown from '../../assets/arrowdown.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function HeaderFeed() {
    const [showUserModal, setShowUserModal] = useState(false);

  return (
    <div className='content-header'>

        <div className='header-logo-content'>
      <img className='header-logo-image' src={LogoSocialDev} alt="Na imagem contém alguns monitores com códigos escritos e um celular com rádio aberta." />

            <div className='header-search'>
                <label htmlFor="search">
                    <img src={Lupa} alt="Lupa de pesquisa" />
                     Search</label>
                     <input type="text" id="search"/>
            </div>
    
                
            <a className='header-buttons'><Link to={'/feed'}><img src={Home} alt="Ícone de home" />
                Home</Link></a>
            <a className='header-buttons'><Link to={'/feed/messages'}><img src={Messages} alt="Ícone de mensagens" />
                Messages</Link></a>

        </div>

        <div className='header-user-content' 
        onClick={()=> showUserModal ? setShowUserModal(false) : setShowUserModal(true)}>
            <img className='user-avatar' src='https://avatars0.githubusercontent.com/u/6643122?s=460&u=1c9e1f04b76fb5cef9c4f67d5b2582d008c3c374&v=4' alt="Foto de perfil" />
            <span className='me'>me</span>
            <img className='arrowdown' 
            src={Arrowdown} 
            alt="Ícone de seta" 
            />

            {showUserModal && <div className='header-user-modal'>
                <p>Configurations</p>
                <p>Logout</p>
            </div>}
        </div>
    </div>
  );
}

export default HeaderFeed;
