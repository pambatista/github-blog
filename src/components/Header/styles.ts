import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 18.5rem;
  position: relative;
  background: ${(props) => props.theme["gray-700"]};
  z-index: -1;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 350px;
    height: 10rem;
    background-image: url("/assets/effect.svg");
    background-size: contain;
    background-repeat: no-repeat;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 350px;
    height: 18rem;
    background-image: url("/assets/effect.svg");
    background-size: contain;
  }
`;

export const HeaderContent = styled.div`
  width: 100%;
  height: 18.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
