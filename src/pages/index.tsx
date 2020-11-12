import { HeaderText, Header, Home, HomeText } from '../styles/pages/Home';

export default function Dashboard() {
  return (
    <>
      <Header>
        <HeaderText>João Freitas</HeaderText>
      </Header>
      <Home>
        <HomeText>ReactJS Developer</HomeText>
        <HomeText>NodeJS Developer</HomeText>
        <HomeText>React Native Developer</HomeText>
      </Home>
    </>
  );
}
