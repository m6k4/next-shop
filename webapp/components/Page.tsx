import Head from 'next/head';
import Footer from './Footer';
import NavBar from './NavBar';

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
      <section className="pt-14 flex-1">
        {children}
      </section>
      <Footer />
    </>
  )
}

export default Page;