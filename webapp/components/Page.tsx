import Head from 'next/head';
import Footer from './Footer';
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
        <h1 className="my-20"> HEDER </h1> TEST
      </header>
      <main className='px-6 py-16'>
          <Title>{title}</Title>
          {children}
      </main>
      <Footer />
    </>
  )
}

export default Page;