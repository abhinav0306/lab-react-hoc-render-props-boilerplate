import './App.css';
import LikeimgHOC from './components/HOC/likeimgHOC';
import LikepostHOC from './components/HOC/likepostHOC';
import likepostHOC from './components/HOC/likepostHOC';
function App() {
  return (
    <div>
      <h3>Some Blog</h3>
      <div className='buttons'>
        <LikeimgHOC/>
        <LikepostHOC/>
      </div>
    </div>
  );
}

export default App;
