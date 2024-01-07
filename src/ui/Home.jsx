import AppLayout from './AppLayout';
import CreateUser from '../features/user/CreateUser';
import { useSelector } from 'react-redux';
import Button from './Button';

function Home() {
  const userName = useSelector((state) => state.user.userName);
  return (
    <div className="my-10 text-center sm:my-16">
      <h1 className="mb-8 px-4 text-xl font-semibold text-stone-700 md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {userName ? (
        <Button to="/menu" type="primary">
          Continue Ordering, {userName}
        </Button>
      ) : (
        <CreateUser />
      )}
    </div>
  );
}

export default Home;
