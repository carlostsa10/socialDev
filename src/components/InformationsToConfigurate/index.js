import Avatar from '../../assets/avatar-cover.png';
import ProfilePicture from '../../assets/profilepicture.svg';
import './styles.css';


function InformationsToConfigurate() {

  return (
    <section className='profile-configurate'>
        <div className='profile-avatar'>
            <img src={Avatar} alt="Avatar" className='avatar' />
            <div className='profile-stuff flex'>
                <img src={ProfilePicture} alt="Imagem do usuário" className='profile-picture' />
            </div>
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
          
              <div className='company'>
                <label htmlFor="company">Company</label>
                <input type="text" id="company"/>

              </div>
              <div className='position'>
                <label htmlFor="position">Position</label>
                <input type="text" id="position"/>
              </div>
          </div>
              </form>
            </div>
        
    </section>
  );
}

export default InformationsToConfigurate;
