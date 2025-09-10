import React from 'react';
import styles from './PostList.module.css';
import Spinner from '@/components/Spinner';
import { usePosts } from '@/contexts/PostContext';

export function PostList() {
  const { posts, isLoading, error } = usePosts();

  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    return <div className={styles.errorMessage}>에러: {error}</div>;
  }
  if (posts.length === 0) {
    return <div className={styles.noPostsMessage}>게시물이 없습니다.</div>;
  }

  return (
    <div className={styles.postListContainer}>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className={styles.postItem}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
