import './styles.css';
import HeaderFeed from '../../components/HeaderFeed';
import ProfileInformations from '../../components/ProfileInformations';


function FeedMessages() {
  return (
    <>
      <HeaderFeed />
    <div className='flex'>
    <section className='left'>
     <ProfileInformations />
    </section>

    <section className='right'>
      <h1>Messages</h1>

    </section>
    </div>
    </>
  );
}

export default FeedMessages;
