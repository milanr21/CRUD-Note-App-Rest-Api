import Note from '../components/Note';

import AddUpdate from './AddUpdate';

const Home = () => {
  return (
    <div className='Home notes'>
      <Note />
      <AddUpdate />
    </div>
  );
};

export default Home;
