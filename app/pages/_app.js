import '../styles/globals.css';
import 'react-sortable-tree/style.css';
import dynamic from 'next/dynamic';

const Layout = dynamic(
	() =>  import('../layout')   ,
	{ ssr: false }
);


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </ Layout>
  )

}

export default MyApp
