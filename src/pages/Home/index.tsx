import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Post } from "../../components/Post";
import { Profile } from "../../components/Profile";
import { SearchForm } from "../../components/SearchForm";
import { api } from "../../lib/axios";
import { PostCount, Publishes, Wrapper } from "./styles";

interface PostDataProps {
  title: string;
  created_at: string;
  body: string;
  id: number;
}

export function Home() {
  const [postData, setPostData] = useState<PostDataProps[]>([]);

  async function fetchPostData() {
    const response = await api.get(
      "/repos/venilima/github-blog-reactjs/issues",
      {}
    );

    setPostData(response.data);

  }

  useEffect(() => {
    fetchPostData();
  }, []);
  
  return (
    <div>
      <Header />
      <Profile />

      <Publishes>Publicações</Publishes>
      <PostCount>
        {postData.length} {postData.length > 1 ? "publicações" : "publicação"}
      </PostCount>

      <SearchForm />
      <Wrapper>
        {postData.map((data) => {
          return (
            <Post
              key={data.id}
              title={data.title}
              body={data.body}
              created_at={data.created_at}
            />
          );
        })}
      </Wrapper>
    </div>
  );
}
