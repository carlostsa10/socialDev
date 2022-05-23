import Logo from '../../assets/logo.svg';
import GitHubLogo from '../../assets/githubicon.svg';
import GoogleLogo from '../../assets/googleicon.svg';
import './styles.css';
import { Link } from 'react-router-dom';

function Login() {

  return (
    <div className='container'>
      
        <div className='content'>
          <img src={Logo} alt="Logomarca" className='logosocialdev' />
          <form className='forms'>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email"/>
              <div className='fgpass'>
                 <label htmlFor="password">Password</label>
                    <a href="/" className='underline size14'><Link to={'/forgotpassword'}>   Forgot a Password </Link></a> 
              </div>
            <input type="password" id="password"/>
          </form>
              
           
            <div className='social-media'>
            <a className='border-buttons flex padding-socialmedia'><img src={GoogleLogo} /> Login with Google</a>
            <a className='border-buttons flex padding-socialmedia'><img src={GitHubLogo} />Login with GitHub</a>
            </div>

            <a className='border-buttons'><Link to={'/feed'}>Login</Link></a>

            <a className='border-buttons margin74 pading18 removeunderline'><Link to={'/signup'}>Create your account</Link> </a>
            
        </div>
      
    </div>
  );
}

export default Login;