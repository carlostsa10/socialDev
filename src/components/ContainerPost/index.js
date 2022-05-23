import './styles.css';
import ProfilePicture from '../../assets/profilepicture.svg';
import ShareIcon from '../../assets/share.svg';
import LikeIcon from '../../assets/like.svg';
import CommentIcon from '../../assets/messages.svg';
import { Link } from 'react-router-dom';


function ContainerPost() {

  return (
    <section className='container-post'>
        <div className='people-post'>
                <img src={ProfilePicture} alt="Imagem do usuário" className='profile-picture' />
                  <div className='people-stuff'>
                    <h1 className='size14 margintop5'>User Testing</h1>
                    <h3 className='size10 '>Developer</h3>
                  </div>
                  <span>+ Follow</span>
        </div>

        <span className='post-content'>I started working on a new project.

        </span>

        <div className='post-footer'>
        <a className='header-buttons'><Link to={'/'}><img src={LikeIcon} alt="Ícone de curtida." />
        i liked it</Link></a>
        <a className='header-buttons'><Link to={'/'}><img src={CommentIcon} alt="Ícone de comentário." />comment</Link></a>
        <a className='header-buttons'><Link to={'/'}><img src={ShareIcon} alt="Ícone de compartilhamento." />share</Link></a>
            </div>
    </section>
  );
}

export default ContainerPost;
