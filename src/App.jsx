import { PostProvider } from '@/providers/PostProvider';
import { Spinner } from './components/Spinner';

function App() {
  return (
    <PostProvider>
      <Spinner />
    </PostProvider>
  );
}

export default App;
