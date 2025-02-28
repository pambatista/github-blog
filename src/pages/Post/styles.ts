import { styled } from "styled-components";

export const PostContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  margin-top: -5rem;
  margin-bottom: 5rem;
`;

export const PostContent = styled.div`
  padding: 2.5rem 2rem;
  font-family: Nunito;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
  color: ${(props) => props.theme["gray-200"]};
`;
