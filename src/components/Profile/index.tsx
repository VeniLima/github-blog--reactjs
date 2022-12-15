import {
  Avatar,
  Bio,
  Info,
  MyBlogLink,
  Name,
  ProfileContainer,
  TextInfo,
  TextInfoCompany,
  TextInfoFollowers,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { api } from "../../lib/axios";
import { useEffect, useState } from "react";

interface BlogDataProps {
  html_url: string;
  avatar_url: string;
  name: string;
  bio: string;
  login: string;
  company: string;
  followers: number;
}

export function Profile() {
  const [blogData, setBlogData] = useState<BlogDataProps>();

  async function fetchBlogData() {
    const response = await api.get("/users/venilima", {});

    setBlogData(response.data);
  }

  useEffect(() => {
    fetchBlogData();
  }, []);

  return (
    <ProfileContainer>
      <MyBlogLink href={blogData?.html_url}>
        Github
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
      </MyBlogLink>
      <Avatar src={blogData?.avatar_url} />
      <Name>{blogData?.name}</Name>
      <Bio>{blogData?.bio}</Bio>
      <Info>
        <TextInfo>
          {<FontAwesomeIcon icon={faGithub} />}
          {blogData?.login}
        </TextInfo>

        <TextInfoCompany>
          <FontAwesomeIcon icon={faBuilding} />
          {blogData?.company ? blogData?.company : "Nenhuma"}
        </TextInfoCompany>

        <TextInfoFollowers>
          <FontAwesomeIcon icon={faUserGroup} />
          {blogData?.followers} seguidores
        </TextInfoFollowers>
      </Info>
    </ProfileContainer>
  );
}
