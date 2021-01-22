import GlobalStyle from '../styles/GlobalStyle'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <title>JFreitas</title>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
