import Page from '../components/Page';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../lib/products';
import { Product } from '../types';

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
      <ul className='flex mb-4 gap-2 flex-wrap justify-start'>
       {products.map((product) => (
         <li key={product.id}>
           <ProductCard product={product} />
         </li>
        ))}
      </ul>
   </Page>
  )
}

export default HomePage;
