import {
  Header,
  ContainerHeader,
  LogoText,
  NavActions,
  NavText
} from '../styles/pages/Home';

export default function Home() {
  return (
    <>
      <Header>
        <ContainerHeader>
          <div id="NavLogo">
            <LogoText>João Freitas</LogoText>
          </div>
          <NavActions>
            <NavText href="#NavLogo">Home</NavText>
            <NavText href="#About">About</NavText>
            <NavText href="#Projects">Projects</NavText>
            <NavText href="#Contact">Contact</NavText>
          </NavActions>
        </ContainerHeader>
      </Header>
      <div className="About">
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

      </div>
      <div className="Projects">
      <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
      <div className="Contact">

      </div>
    </>
  );
}
