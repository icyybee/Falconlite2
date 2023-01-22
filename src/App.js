import './App.scss';
import SignUp from './components/signup/signup.component';
import Verify from './components/verify/verify.component';

const App = () => {
  return (
    <div className='app'>
      <SignUp />
      <Verify />
    </div>
  );
}

export default App;
