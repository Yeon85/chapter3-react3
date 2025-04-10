import { useEffect, useState } from 'react';
import axios from 'axios';
import PostForm from './PostForm';
import PostItem from './PostItem';
import api from './api';

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
    console.log('Updating post:', id, title, content);
    try {
      const response = await api.put(`http://localhost:5000/api/posts/${id}`, { title, content });
      console.log('Update response:', response);
      fetchPosts();
    } catch (error) {
      console.error('Update failed:', error);
    }
  };

  return (
    <div>
      <PostForm onSubmit={handleAddOrUpdate} selectedPost={editingPost} onCancel={handleCancel} />
      {posts.map((post) => (
        <PostItem
        key={post.id}
        post={post}
        onUpdate={handleUpdate} 
        onDelete={handleDelete}
        onEdit={handleEdit}     // 선택된 post 넘길 때
      />
      ))}
    </div>
  );
}

export default PostList;
