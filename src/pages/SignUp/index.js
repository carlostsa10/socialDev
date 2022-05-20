import './styles.css';
import Logo from '../../assets/logo.svg';
import GitHubLogo from '../../assets/githubicon.svg';
import GoogleLogo from '../../assets/googleicon.svg';


function SingUp() {

  return (
    <div className='container'>
      
        <div className='content'>
          <img src={Logo} alt="Logomarca" className='logosocialdev' />

            <div className='social-media'>
            <a className='border-buttons flex padding-socialmedia'><img src={GoogleLogo} /> Login with Google</a>
            <a className='border-buttons flex padding-socialmedia'><img src={GitHubLogo} />Login with GitHub</a>
            </div>

            <span>OR</span>
          <form className='forms margintop20'>
            <div className='forms-name'> 
              <div className='firstname'>
                <label htmlFor="firstname">First name</label>
                <input type="text" id="firstname"/>

              </div>
              <div className='lastname'>
                <label htmlFor="lastname">Last name</label>
                <input type="text" id="lastname"/>
              </div>
          </div>
  
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email"/>
            <label htmlFor="username">Username (only letters, numbers, and underscores)</label>
              <input type="text" id="username"/>
          
            <label htmlFor="password">Password (min. 8 char)</label>
            <input type="password" id="password"/>
          </form>
            <a className='border-buttons'>Create</a>
            <span className='size12'>By joining, you agree to the <span className='underline'>Terms</span> and <span className='underline'>Privacy Policy.</span></span>
        </div>
      
    </div>
  );
}

export default SingUp;