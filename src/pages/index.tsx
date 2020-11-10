import { HeaderText, Header, Home, Container, HomeText } from '../styles/pages/Home';

export default function Dashboard() {
  return (
    <>
      <Header>
        <HeaderText>João Freitas</HeaderText>
      </Header>
      <Home>
        <Container>
          <HomeText>ReactJS Developer</HomeText>
          <HomeText>NodeJS Developer</HomeText>
          <HomeText>React Native Developer</HomeText>
        </Container>
      </Home>
    </>
  );
}
