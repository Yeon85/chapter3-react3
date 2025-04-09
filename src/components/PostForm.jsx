import { useState, useEffect } from 'react';

function PostForm({ onSubmit, selectedPost, onCancel }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (selectedPost) {
      setTitle(selectedPost.title);
      setContent(selectedPost.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [selectedPost]);

  const handleSubmit = () => {
    if (!title || !content) return;
    onSubmit({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <div className="form-wrapper">
      <input
        className="input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="제목을 입력하세요"
      />
      <textarea
        className="textarea"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="내용을 입력하세요"
      />
      <div className="button-group">
        <button className="btn btn-submit" onClick={handleSubmit}>
          {selectedPost ? '수정' : '등록'}
        </button>
        {selectedPost && (
          <button className="btn btn-cancel" onClick={onCancel}>
            취소
          </button>
        )}
      </div>
      <br></br>
    </div>
  );
}

export default PostForm;
