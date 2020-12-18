import styled from 'styled-components';

export const Header = styled.div`
  height: 58px;

  background-color: #e3e3e3;
`;

export const ContainerHeader = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  height: 100%;
  padding: 0 27px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media(max-width: 768px) {
    flex-direction: row;
  }

`;

export const LogoText = styled.p`
  color: #003E32;
  font-size: 23px;
  font-weight: bold;
`;

export const NavActions = styled.div`
  @media(max-width: 768px) {
    background-color: #e3e3e3;
    display: flex;
    flex-flow: column nowrap;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 200px;
    padding-top: 3.5rem;
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

  @media(max-width: 768px) {
    margin: 6px;
  }
`;

