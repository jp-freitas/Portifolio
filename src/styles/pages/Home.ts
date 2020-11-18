import styled from 'styled-components';

export const Header = styled.div`
  height: 58px;
`;

export const ContainerHeader = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  height: 100%;
  padding: 0 27px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media(max-width: 780px) {
    flex-direction: column;
  }

`;

export const NavLogo = styled.div`

`;

export const LogoText = styled.p`
  color: #003E32;
  font-size: 23px;
  font-weight: bold;
`;

export const NavActions = styled.div`
  @media(max-width: 780px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const NavText = styled.a`
  color: #003E32;
  font-size: 17px;
  margin: 20px;
  text-decoration: none;

  :hover {
    color: #E80072;
  }

  @media(max-width: 780px) {
    margin: 6px;
  }
`;

