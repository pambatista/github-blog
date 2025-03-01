import { useNavigate } from "react-router-dom";
import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";

import { CardContainer, CardHeader } from "./styles";

interface CardProps {
  id: number;
  title: string;
  body: string;
  created_at: string;
}
export function Card({ id, title, body, created_at }: CardProps) {
  const navigate = useNavigate();

  function handleRedirectPost() {
    navigate(`/post/${id}`);
  }

  function truncateText(text: string, lines: number) {
    const words = text && text.split(" ");
    if (words && words.length > lines * 10) {
      return words.slice(0, lines * 10).join(" ") + "...";
    }
    return text;
  }

  return (
    <CardContainer onClick={handleRedirectPost}>
      <CardHeader>
        <strong>{title}</strong>
        <span>
          {formatDistance(new Date(created_at), new Date(), {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
      </CardHeader>

      <p style={{ whiteSpace: "pre-line" }}>{truncateText(body, 4)}</p>
    </CardContainer>
  );
}
