import styled from "styled-components";

export const PerfilContainer = styled.div`
  display: flex;
  gap: 2rem;
  border-radius: 0.625rem;
  background: ${(props) => props.theme["gray-800"]};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  padding: 2rem;

  & > img {
    width: 9rem;
    height: 9rem;
    border-radius: 0.5rem;
  }
`;

export const PerfilContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & > p {
    flex: 1;
    color: ${(props) => props.theme["gray-200"]};
    margin-bottom: 1.5rem;
  }
`;

export const PerfilTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  margin-bottom: 0.5rem;

  & > h1 {
    font-family: Nunito;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    margin: 0;

    color: ${(props) => props.theme["gray-50"]};
  }

  & > a {
    display: flex;
    align-items: flex-end;
    gap: 0.5rem;
    padding: 0.2rem;
    text-decoration: none;

    font-family: Nunito;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 700;
    text-transform: uppercase;

    color: ${(props) => props.theme["blue-500"]};
    background: transparent;
    border: none;
    cursor: pointer;
    border-bottom: 1px solid transparent;

    transition: all 0.5s;

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme["blue-500"]};
    }
  }
`;

export const LinksContent = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 1.5rem;
`;

export const LinkInfo = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
