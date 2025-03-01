import {
  ArrowSquareOut,
  BuildingOffice,
  GithubLogo,
  Users,
} from "@phosphor-icons/react";
import {
  LinkInfo,
  LinksContent,
  PerfilContainer,
  PerfilContent,
  PerfilTitle,
} from "./styles";
import { api } from "../../../../lib/axios";
import { useCallback, useEffect, useState, memo } from "react";

type User = {
  login: string;
  name: string;
  bio: string;
  followers: number;
  url: string;
};
function PerfilComponent() {
  const [user, setUser] = useState<User>();

  const fetchPerfil = useCallback(async () => {
    const response = await api.get("/users/pambatista");

    setUser({
      login: response.data.login,
      name: response.data.name,
      bio: response.data.bio,
      followers: response.data.followers,
      url: response.data.html_url,
    });
  }, []);

  useEffect(() => {
    fetchPerfil();
  }, [fetchPerfil]);

  return (
    <PerfilContainer>
      <img src="https://github.com/pambatista.png" alt="" />

      <PerfilContent>
        <PerfilTitle>
          <h1>{user?.name}</h1>
          <a href={user?.url} target="_blank">
            Github
            <ArrowSquareOut size={18} />
          </a>
        </PerfilTitle>
        <p>{user?.bio}</p>
        <LinksContent>
          <LinkInfo>
            <GithubLogo size={18} />
            {user?.login}
          </LinkInfo>
          <LinkInfo>
            <BuildingOffice size={18} />
            Sixchains
          </LinkInfo>
          <LinkInfo>
            <Users size={18} />
            {user?.followers} seguidores
          </LinkInfo>
        </LinksContent>
      </PerfilContent>
    </PerfilContainer>
  );
}

export const Perfil = memo(PerfilComponent);
