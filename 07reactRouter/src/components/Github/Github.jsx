
import { useLoaderData } from 'react-router-dom';

function Github() {
  const followers = useLoaderData();

  return (
    <div className='text-center m-4 bg-red-700 text-white p-4 text-3xl'>
      Github Followers: {followers}
    </div>
  );
}

export default Github;
