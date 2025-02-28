import { useNavigate } from "react-router-dom";
import { CardContainer, CardHeader } from "./styles";

export function Card() {
  const navigate = useNavigate();

  function handleRedirectPost() {
    navigate("/post");
  }

  return (
    <CardContainer onClick={handleRedirectPost}>
      <CardHeader>
        <strong>JavaScript data types and data structures</strong>
        <span>Há 1 dia</span>
      </CardHeader>

      <p>
        rogramming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in
      </p>
    </CardContainer>
  );
}
