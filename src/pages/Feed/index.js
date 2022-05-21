import './styles.css';
import HeaderFeed from '../../components/HeaderFeed';
import ProfileInformations from '../../components/ProfileInformations';

function Feed() {
  return (
    <>
      <HeaderFeed />
    <div className='flex'>
    <section className='left'>
     <ProfileInformations />
    </section>

    <section className='right'>

    </section>
    </div>
    </>
  );
}

export default Feed;
