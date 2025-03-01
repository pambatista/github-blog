import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "./components/Header";
import { PostContainer, PostContent } from "./styles";

import { type Post } from "../../context/Posts";
import { api } from "../../lib/axios";

export function Post() {
  const postId = useParams().id;
  const [post, setPost] = useState<Post>();

  const fetchPost = useCallback(async () => {
    const response = await api.get(
      `/repos/pambatista/github-blog/issues/${postId}`
    );

    setPost({
      id: response.data.id,
      title: response.data.title,
      body: response.data.body,
      created_at: response.data.created_at,
      comments: response.data.comments,
      html_url: response.data.html_url,
      user: {
        login: response.data.user.login,
      },
    });
  }, [postId]);

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  if (!post) {
    return (
      <PostContainer>
        <PostContent>
          <h1>Carregando...</h1>
        </PostContent>
      </PostContainer>
    );
  }
  return (
    <PostContainer>
      <Header
        title={post?.title}
        user={post?.user}
        html_url={post?.html_url}
        comments={post?.comments}
      />
      <PostContent>
        <p style={{ whiteSpace: "pre-line" }}>{post?.body}</p>
      </PostContent>
    </PostContainer>
  );
}
