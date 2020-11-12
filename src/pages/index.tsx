import {  Header, NavLogo, LogoText, NavActions, Main, Container, MainText } from '../styles/pages/Home';

export default function Home() {
  return (
    <>
      <Header>
        <NavLogo>
          <LogoText>João Freitas</LogoText>
        </NavLogo>
        <NavActions>

        </NavActions>
      </Header>
      <Main>
        <Container>
          <MainText>NodeJS Developer</MainText>
          <MainText>ReactJS Developer</MainText>
          <MainText>React Native Developer</MainText>
        </Container>
      </Main>
    </>
  );
}
