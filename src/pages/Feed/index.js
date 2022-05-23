import './styles.css';
import HeaderFeed from '../../components/HeaderFeed';
import ProfileInformations from '../../components/ProfileInformations';
import PostBar from '../../components/PostBar';
import PostsArea from '../../components/PostsArea';


function Feed() {
  return (
    <>
      <HeaderFeed />
    <div className='flex height'>
    <section className='left'>
     <ProfileInformations />
    </section>

    <section className='right'>
      <PostBar />
      <PostsArea />

    </section>
    </div>
    </>
  );
}

export default Feed;
