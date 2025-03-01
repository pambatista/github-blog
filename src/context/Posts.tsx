import { useCallback, useEffect, useState } from "react";
import { createContext } from "use-context-selector";
import { api } from "../lib/axios";

export interface Post {
  id: number;
  number?: number;
  title: string;
  body: string;
  created_at: string;
  comments: number;
  html_url: string;
  user: {
    login: string;
  };
}

interface Posts {
  total: number;
  items: Post[];
}

interface PostsContextData {
  posts: Posts;
  fetchPosts: (query?: string) => Promise<void>;
}

export const PostsContext = createContext({} as PostsContextData);

interface PostsProviderProps {
  children: React.ReactNode;
}

export function PostsProvider({ children }: PostsProviderProps) {
  const [posts, setPosts] = useState<Posts>({
    total: 0,
    items: [],
  });

  const fetchPosts = useCallback(async (query?: string) => {
    const response = await api.get(
      `/search/issues?q=${
        query ? query + "%20" : ""
      }repo:pambatista/github-blog`
    );

    setPosts({
      total: response.data.total_count,
      items: response.data.items.map((post: Post) => {
        return {
          id: post.id,
          number: post.number,
          title: post.title,
          body: post.body,
          created_at: post.created_at,
          comments: post.comments,
          html_url: post.html_url,
          user: {
            login: post.user.login,
          },
        };
      }),
    });
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <PostsContext.Provider value={{ posts, fetchPosts }}>
      {children}
    </PostsContext.Provider>
  );
}
