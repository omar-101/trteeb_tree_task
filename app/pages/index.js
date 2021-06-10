import dynamic from 'next/dynamic';

const TreeEditor = dynamic(
	() =>  import('../components/TreeEditor')   ,
	{ ssr: false }
);


function Home() {
  return <TreeEditor />

}
export default Home;