import { Link } from 'react-router-dom';
import PictureIcon from '../../assets/picture.svg';
import ProfilePicture from '../../assets/profilepicture.svg';
import PublishIcon from '../../assets/publish.svg';
import VideoIcon from '../../assets/video.svg';
import './styles.css';




function PostBar() {

  return (
    <section className='profile-post'>
      <img src={ProfilePicture} alt="Imagem do usuário" className='profile-picture' />
      <input type="text" id="post" placeholder='What are you working on?'/>
            
        
          <a className='header-buttons'>
            <Link to={'/'}>
            <img src={PictureIcon} alt="Ícone de imagem" /> picture</Link></a>

          <a className='header-buttons'>
            <Link to={'/'}>
            <img src={VideoIcon} alt="Ícone de vídeo" />
                video</Link></a>

          <a className='header-buttons'>
            <Link to={'/'}>
            <img src={PublishIcon} alt="Ícone de envio de arquivos" />
                publish</Link></a>
    
    </section>
  );
}

export default PostBar;
