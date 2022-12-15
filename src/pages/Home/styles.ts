import styled from "styled-components";

export const Publishes = styled.strong`
  position: absolute;
  width: 99px;
  height: 29px;
  left: 530px;
  top: 492px;

  /* Title / Title S */

  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 160%;
  /* identical to box height, or 29px */

  /* Base/Subtitle */

  color: #c4d4e3;
`;

export const PostCount = styled.span`
  position: absolute;
  width: 86px;
  height: 22px;
  right: 530px;
  top: 496px;

  /* Text/Text S */

  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  /* or 22px */

  text-align: right;

  /* Base/Span */

  color: #7b96b2;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 0.1fr);

  gap: 20px;
  margin-left: 740px;
`;
