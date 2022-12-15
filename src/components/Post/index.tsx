import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { PostContainer, PostContent, PostDate, PostTitle } from "./styles";

interface PostProps {
  title: string;
  body: string;
  created_at: string;
}

export function Post(props: PostProps) {
  const dateFormatted = formatDistanceToNow(new Date(props.created_at), {
    addSuffix: true,
    locale: ptBR,
  });
  return (
    <PostContainer>
      <PostTitle>{props.title}</PostTitle>
      <PostDate>{dateFormatted}</PostDate>
      <PostContent>{props.body}</PostContent>
    </PostContainer>
  );
}
