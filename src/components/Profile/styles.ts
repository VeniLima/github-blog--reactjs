import styled from "styled-components";

export const ProfileContainer = styled.div`
  position: absolute;
  width: 864px;
  height: 212px;
  left: calc(50% - 864px / 2);
  top: 208px;

  /* Base/Profile */

  background: ${(props) => props.theme["base-profile"]};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

export const Avatar = styled.img`
  position: absolute;
  width: 148px;
  height: 148px;
  left: 40px;
  top: calc(50% - 148px / 2);

  background: url(.png);
  border-radius: 8px;
`;

export const Name = styled.h1`
  position: absolute;
  width: 236px;
  height: 31px;
  left: 220px;
  top: calc(50% - 31px / 2 - 50.5px);

  /* Title/Title L */

  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 130%;
  /* or 31px */

  /* Base/Title */

  color: ${(props) => props.theme["base-title"]};
`;

export const Bio = styled.p`
  position: absolute;
  width: 612px;
  height: 52px;
  left: 220px;
  top: 79px;

  /* Text/Text M */

  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  /* or 26px */

  /* Base/Text */

  color: #afc2d4;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 24px;

  position: absolute;
  width: 393px;
  height: 26px;
  left: 220px;
  top: calc(50% - 26px / 2 + 62px);
`;

export const TextInfo = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;

  width: 111px;
  height: 26px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const TextInfoFollowers = styled.span`
  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;

  width: 190px;
  height: 26px;

  /* Inside auto layout */

  flex: none;
  order: 2;
  flex-grow: 0;
`;

export const TextInfoCompany = styled.span`
  /* company */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;

  width: 106px;
  height: 26px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const MyBlogLink = styled.a`
  /* github */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
  position: absolute;
  width: 67px;
  height: 19px;
  right: 32px;
  top: 40px;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 160%;
  /* or 19px */
  cursor: pointer;

  text-transform: uppercase;

  /* Brand/Blue */

  color: ${(props) => props.theme.blue};
`;

export const MyBlogText = styled.a`
  width: 80px;
  height: 19px;

  /* Components/Link */

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;
