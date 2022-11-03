import Page from 'components/Page';
import ProductCard from 'components/ProductCard';
import TitleSection from 'components/pages/homepage/TitleSection';
import { getProducts } from 'lib/products';
import { Product } from 'types';

export async function getStaticProps() {
  const products: Product[] = await getProducts();
  return {
    props: { products },
    revalidate: parseInt(process.env.REVALIDATE_SECONDS),
  }
}

type Props = {
  products: Product[]
}

const HomePage = ({ products }: Props) => {
  return (
   <Page title="Plants">
    <TitleSection />
    <div className="flex justify-center px-32 mt-8">
      <ul className='flex mb-4 gap-2 flex-wrap'>
       {products.map((product) => (
         <li key={product.id}>
           <ProductCard product={product} />
         </li>
        ))}
      </ul>
    </div>
   </Page>
  )
}

export default HomePage;
