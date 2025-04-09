import { useState } from 'react';

<<<<<<< HEAD
function PostItem({ post, onDelete, onEdit, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(post.title);
  const [editedContent, setEditedContent] = useState(post.content);

  const handleUpdate = () => {
=======
function PostItem({ post, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(post.title);
  const [editedContent, setEditedContent] = useState(post.content);
  
  const handleUpdate = () => {
    console.log('Updating:', post.id, editedTitle, editedContent);
>>>>>>> 91fa7ff (new commit)
    onUpdate(post.id, editedTitle, editedContent);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedTitle(post.title);
    setEditedContent(post.content);
  };

  return (
<<<<<<< HEAD

    <div className="post-card">
   
      {isEditing ? (
        <>
          <input
            className="input"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea
            className="textarea"
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
          <div className="button-group">
            <button className="btn btn-submit" onClick={handleUpdate}>💾 저장</button>
            <button className="btn btn-cancel" onClick={handleCancel}>취소</button>
          </div>
        </>
      ) : (
       
        <>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <div className="button-group">
            <button className="btn btn-edit" onClick={() => setIsEditing(true)}>✏️ 수정</button>
            <button className="btn btn-delete" onClick={() => onDelete(post.id)}>🗑️ 삭제</button>
          </div>
        </>
      )}
=======
    <div className="post-card">
      <div className="post-info">
        <span>Post ID: {post.id}</span> {/* 게시글 ID 표시 */}
        {isEditing ? (
          <>
            <input
              className="input"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
            <textarea
              className="textarea"
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
            />
            <div className="button-group">
              <button className="btn btn-submit" onClick={handleUpdate}>💾 저장</button>
              <button className="btn btn-cancel" onClick={handleCancel}>취소</button>
            </div>
          </>
        ) : (
          <>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <div className="button-group">
              <button className="btn btn-edit" onClick={() => setIsEditing(true)}>✏️ 수정</button>
              <button className="btn btn-delete" onClick={() => onDelete(post.id)}>🗑️ 삭제</button>
            </div>
          </>
        )}
      </div>
>>>>>>> 91fa7ff (new commit)
    </div>
  );
}

export default PostItem;
