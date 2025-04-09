import { useEffect, useState } from 'react';
import axios from 'axios';
import PostForm from './PostForm';
import PostItem from './PostItem';
<<<<<<< HEAD
=======
import api from './api';
>>>>>>> 91fa7ff (new commit)

function PostList() {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);
  const fetchPosts = async () => {
<<<<<<< HEAD
=======
   
>>>>>>> 91fa7ff (new commit)
    try {
      const res = await axios.get('http://localhost:5000/api/posts');
      setPosts(res.data);
    } catch (err) {
      console.error('게시글 가져오기 실패:', err);
    }
  };

<<<<<<< HEAD
  const handleAddOrUpdate = async (post) => {
    if (editingPost) {
      await axios.put(`http://localhost:5000/api/posts/${editingPost.id}`, post);
=======


  const handleAddOrUpdate = async (post) => {
    if (editingPost) {
      await axios.put('http://localhost:5000/api/posts/${editingPost.id}', post);
>>>>>>> 91fa7ff (new commit)
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
<<<<<<< HEAD
    await api.put(`/api/posts/${id}`, { title, content });
    fetchPosts();
=======
    console.log('Updating post:', id, title, content);
    try {
      const response = await api.put(`http://localhost:5000/api/posts/${id}`, { title, content });
      console.log('Update response:', response);
      fetchPosts();
    } catch (error) {
      console.error('Update failed:', error);
    }
>>>>>>> 91fa7ff (new commit)
  };

  return (
    <div>
      <PostForm onSubmit={handleAddOrUpdate} selectedPost={editingPost} onCancel={handleCancel} />
      {posts.map((post) => (
        <PostItem
        key={post.id}
        post={post}
<<<<<<< HEAD
        onDelete={handleDelete}
        onEdit={handleEdit}     // 선택된 post 넘길 때
        onUpdate={handleUpdate} // ✅ 인라인 수정용
=======
        onUpdate={handleUpdate} 
        onDelete={handleDelete}
        onEdit={handleEdit}     // 선택된 post 넘길 때
>>>>>>> 91fa7ff (new commit)
      />
      ))}
    </div>
  );
}

export default PostList;
