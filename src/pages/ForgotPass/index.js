import './styles.css';
import Logo from '../../assets/logo.svg';


function ForgotPass() {

  return (
    <div className='container'>
      
        <div className='content'>
          <img src={Logo} alt="Logomarca" className='logosocialdev' />
  
            <span className='size14'>Enter the email address associated with your account and we’ll send you a link to reset your password.</span>

            <form className='forms'>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email"/>
            </form>
            <a className='border-buttons'>Send password reset instructions</a>
        </div>
      
    </div>
  );
}

export default ForgotPass;