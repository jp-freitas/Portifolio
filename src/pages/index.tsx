import {
  Header,
  ContainerHeader,
  NavLogo,
  LogoText,
  NavActions,
  NavText
} from '../styles/pages/Home';

export default function Home() {
  return (
    <>
      <Header>
        <ContainerHeader>
          <NavLogo>
            <LogoText>João Freitas</LogoText>
          </NavLogo>
          <NavActions>
            <NavText href="#">About</NavText>
            <NavText href="#">Projects</NavText>
            <NavText href="#">Contact</NavText>
          </NavActions>
        </ContainerHeader>
      </Header>

    </>
  );
}
