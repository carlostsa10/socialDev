import './styles.css';
import Avatar from '../../assets/avatar-cover.png';
import ProfilePicture from '../../assets/profilepicture.svg';
import Lupa from '../../assets/lupa.svg';


function ProfileInformations() {

  return (
    <section className='profileinformation'>
        <div className='profile-avatar'>
            <img src={Avatar} alt="Avatar" className='avatar' />
            <div className='profile-stuff flex'>
                <img src={ProfilePicture} alt="Imagem do usuário" className='profile-picture' />
                <h1 className='size14 margintop5'>User Testing</h1>
                <h3 className='size10'>Developer</h3>
            </div>

            </div>
        <div className='profile-content'>
            <div className='left-content'>
            <h2 className='size12'>My projects</h2>
            <h2 className='size12'>My articles</h2>
            <h2 className='size12'>My connections</h2>
            </div>
            <div className='right-content'>
            <h2 className='size12'>2</h2>
            <h2 className='size12'>2</h2>
            <h2 className='size12'>2</h2>
            </div>
            </div>
        <div className='profile-people'>
            <div className='header-search'>
                <img src={Lupa} alt="Lupa de pesquisa" className='marginright5' />
                <input type="text" id="search" placeholder='Search'/>
            </div>

            <div className='people-list'>
              <div className='people-item'>
                <img src={ProfilePicture} alt="Imagem do usuário" className='profile-picture' />
                  <div className='people-stuff'>
                    <h1 className='size14 margintop5'>User Testing</h1>
                    <h3 className='size10 '>Developer</h3>
                  </div>
                  <span>+ Follow</span>
              </div>

              <div className='people-item'>
                <img src={ProfilePicture} alt="Imagem do usuário" className='profile-picture' />
                  <div className='people-stuff'>
                    <h1 className='size14 margintop5'>User Testing</h1>
                    <h3 className='size10 '>Developer</h3>
                  </div>
                  <span>+ Follow</span>
              </div>
            </div>
        </div>
    </section>
  );
}

export default ProfileInformations;
