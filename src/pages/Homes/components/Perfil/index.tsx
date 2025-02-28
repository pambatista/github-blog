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
import { Link } from "react-router-dom";
import { api } from "../../../../lib/axios";
import { useEffect, useState } from "react";

type User = {
  login: string;
  name: string;
  bio: string;
  followers: number;
  url: string;
};

export function Perfil() {
  const [user, setUser] = useState<User>();

  async function fetchPerfil() {
    // const response = await api.get("/users/pambatista")
    const response = {
      data: {
        login: "pambatista",
        name: "Pamela Batista",
        bio: "Desenvolvedora ",
        followers: 24,
        html_url: "https://github.com/pambatista",
      },
    };
    setUser({
      login: response.data.login,
      name: response.data.name,
      bio: response.data.bio,
      followers: response.data.followers,
      url: response.data.html_url,
    });
  }

  useEffect(() => {
    fetchPerfil();
  }, []);

  return (
    <PerfilContainer>
      <img src="https://github.com/pambatista.png " alt="" />

      <PerfilContent>
        <PerfilTitle>
          <h1>{user?.name}</h1>
          <Link to={user?.url}>
            Github
            <ArrowSquareOut size={18} />
          </Link>
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
