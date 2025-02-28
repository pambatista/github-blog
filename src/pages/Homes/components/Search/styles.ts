import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 4.5rem;
  margin-bottom: 3rem;
`;

export const SearchHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > h3 {
    color: ${(props) => props.theme["gray-100"]};
    font-family: Nunito;
    font-size: 1.125rem;
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
  }
`;

export const SearchInput = styled.input`
  padding: 0.75rem 1rem;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.375rem;
  border: 1px solid ${(props) => props.theme["gray-500"]};
  background: ${(props) => props.theme["gray-900"]};

  font-family: Nunito;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  color: ${(props) => props.theme["gray-100"]};

  &::placeholder {
    color: ${(props) => props.theme["gray-400"]};
  }
`;
