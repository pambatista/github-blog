import { useContextSelector } from "use-context-selector";

import { PostsContext } from "../../context/Posts";

import { Card } from "./components/Card";
import { Perfil } from "./components/Perfil";
import { Search } from "./components/Search";

import { HomeContainer, HomeList } from "./styles";

export function Home() {
  const { posts } = useContextSelector(PostsContext, (context) => {
    return {
      posts: context.posts.items,
    };
  });

  return (
    <HomeContainer>
      <Perfil />
      <Search />
      <HomeList>
        {posts &&
          posts.map((post) => {
            return (
              <Card
                key={post.id}
                id={post.number || post.id}
                title={post.title}
                body={post.body}
                created_at={post.created_at}
              />
            );
          })}
      </HomeList>
    </HomeContainer>
  );
}
