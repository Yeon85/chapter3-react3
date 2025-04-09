import './App.css';
import PostList from './components/PostList';

function App() {
  return (
    <div className="app-container">
      <div className="board">
        <h2>📚 게시판 (MySQL 연동)</h2>
        <PostList />
      </div>
    </div>
  );
}

export default App;
