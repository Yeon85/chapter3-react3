import { useEffect, useState } from 'react';
import axios from 'axios';
import PostForm from './PostForm';
import PostItem from './PostItem';

function PostList() {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);
  const fetchPosts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/posts');
      setPosts(res.data);
    } catch (err) {
      console.error('게시글 가져오기 실패:', err);
    }
  };

  const handleAddOrUpdate = async (post) => {
    if (editingPost) {
      await axios.put(`http://localhost:5000/api/posts/${editingPost.id}`, post);
    } else {
      await axios.post('http://localhost:5000/api/posts', post);
    }
    fetchPosts();
    setEditingPost(null);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/posts/${id}`);
    fetchPosts();
  };

  const handleEdit = (post) => {
    setEditingPost(post);
  };

  const handleCancel = () => {
    setEditingPost(null);
  };
  const handleUpdate = async (id, title, content) => {
    await api.put(`/api/posts/${id}`, { title, content });
    fetchPosts();
  };

  return (
    <div>
      <PostForm onSubmit={handleAddOrUpdate} selectedPost={editingPost} onCancel={handleCancel} />
      {posts.map((post) => (
        <PostItem
        key={post.id}
        post={post}
        onDelete={handleDelete}
        onEdit={handleEdit}     // 선택된 post 넘길 때
        onUpdate={handleUpdate} // ✅ 인라인 수정용
      />
      ))}
    </div>
  );
}

export default PostList;
