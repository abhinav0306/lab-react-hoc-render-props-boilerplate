import './App.css';
import LikeimgHOC from './components/HOC/LikeimgHOC';
import LikepostHOC from './components/HOC/LikepostHOC';
import LikeImgRender from './components/RENDER/LikeImgRender';
import LikePostRender from './components/RENDER/LikePostRender';
import LikeImage from "./components/LikeImage"
import LikePost from "./components/LikePost"
function App() {
  return (
    <div>
      <h3>Original</h3>
      <LikeImage/>
      <LikePost/>
      <h3>Using HOC</h3>
      <div>
        <LikeimgHOC/>
        <LikepostHOC/>
      </div>
      <h3>Using Render</h3>
        <LikeImgRender/>
        <LikePostRender/>
    </div>

  );
}

export default App;
