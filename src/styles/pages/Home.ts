import styled from 'styled-components';

export const Header = styled.div`
  height: 58px;
  background: #00CEA5;
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

`;

export const NavLogo = styled.div`

`;

export const LogoText = styled.p`
  color: #003E32;
  font-size: 23px;
  font-weight: bold;
`;

export const NavActions = styled.div`

`;

export const NavText = styled.a`
  color: #003E32;
  font-size: 17px;
  margin: 20px;
  text-decoration: none;
  font-weight: bold;

  :hover {
    color: #E80072;
  }
`;

