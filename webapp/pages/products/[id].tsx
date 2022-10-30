import Image from 'next/image';
import { getProducts, getProduct } from "../../lib/products";
import { ApiError } from '../../lib/api';
import Page from "../../components/Page";
import { Product } from '../../types';
import { useUser } from '../../hooks/user';
import AddToCartButton from '../../components/ShoppingCart/AddToCartButton';

export const getStaticPaths = async () => {
  const products = await getProducts();
  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));
  return {
    paths,
    fallback: 'blocking',

  };
};

export const getStaticProps = async ({ params: { id } }) => {
  try {
    const product = await getProduct(id);
    return {
      props: { product },
      revalidate: parseInt(process.env.REVALIDATE_SECONDS),
    };
  } catch (err ) {
    if(err instanceof ApiError && err.status === 404) {
      return {
        notFound: true,
      };
    } 
  }
};

type Props = {
  product: Product
}

const ProductPage = ({ product }: Props) => {
  const user = useUser();
  
  return (
    <Page title={product.title}>
    <section className="p-6">
      <h1 className="text-3xl font-bold mb-6">{product.title}</h1>
      <div className="flex flex-col gap-4 md:flex md:flex-row">
        <div className="w-full md:w-2/4">
          <Image src={product.pictureUrl} alt={product.title} width={900} height={700} />
        </div>
        <div className="w-full mt-6 text-slate-600 text-xl md:w-2/4 md:m-0 ">
          <p>{product.description}</p>
          <p className="text-2xl font-bold mt-2">
            $ {product.price}
          </p>
          { user && <AddToCartButton product={product} /> }
        </div>
      </div>
    </section>
    </Page>
  );
}

export default ProductPage;