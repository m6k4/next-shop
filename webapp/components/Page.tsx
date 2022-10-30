import Head from 'next/head';
import NavBar from './NavBar';
import Title from './Title';

type Props = {
  title: string,
  children: React.ReactNode
}

const Page = ({ title, children }: Props) => {
  return (
    <>
    <Head>
      <title>{title} - Next Shop</title>
   </Head>
   <header>
    <NavBar />
   </header>
   <main className='px-6 py-16'>
      <Title>{title}</Title>
      {children}
   </main>
    </>
  )
}

export default Page;