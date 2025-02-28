import { styled } from "styled-components";

export const CardContainer = styled.div`
  border-radius: 0.625rem;
  background: ${(props) => props.theme["gray-800"]};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  cursor: pointer;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

  border: 2px solid transparent;

  transition: all 0.5s;

  &:hover {
    border: 2px solid ${(props) => props.theme["gray-400"]};
  }

  & > p {
    color: ${(props) => props.theme["gray-200"]};
    font-family: Nunito;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;

  & > strong {
    color: ${(props) => props.theme["gray-50"]};
    font-family: Nunito;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 160%;
  }

  & > span {
    color: ${(props) => props.theme["gray-300"]};
    font-family: Nunito;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    word-break: keep-all;
    white-space: pre;
  }
`;
