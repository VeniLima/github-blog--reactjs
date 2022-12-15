import styled from "styled-components";

export const PostContainer = styled.div`
  position: relative;
  width: 416px;
  height: 260px;
  left: calc(50% - 416px / 2 - 224px);
  top: 631px;
  /*  display: grid;
  grid-template-rows: repeat(3, 1fr); */
  /* display: flex; */
  /* margin-right: 32px; */

  /* Base/Post */

  background: ${(props) => props.theme["base-post"]};
  border-radius: 10px;
`;

export const PostTitle = styled.h1`
  position: absolute;
  height: 64px;
  left: 32px;
  right: 101px;
  top: 32px;

  overflow: hidden;

  /* Title/Title M */

  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 160%;
  /* or 32px */

  /* Base/Title */

  color: ${(props) => props.theme["base-title"]};
`;

export const PostDate = styled.span`
  position: absolute;
  width: 100px;
  height: 22px;
  right: 20px;
  top: 37px;
  text-transform: capitalize;
  /* Text/Text S */

  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  /* or 22px */

  /* Base/Span */

  color: ${(props) => props.theme["base-span"]};
`;

export const PostContent = styled.p`
  position: absolute;
  left: 32px;
  right: 32px;
  top: 116px;
  bottom: 32px;

  overflow: hidden;

  /* Text/Text M */

  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  /* or 26px */

  /* Base/Text */

  color: ${(props) => props.theme["base-text"]};
`;
