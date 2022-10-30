import Link from "next/link";
import Image from 'next/image';

const ProductCard = ({ product }) => {
  return (
    <div className="border my-4 w-full shadow hover:shadow-xl md:w-80 p-2 flex justify-center">
      <Link href={`/products/${product.id}`}>
        <Image src={product.pictureUrl} alt={product.title} width={320} height={240} />
        <div className="p-2 flex justify-between items-baseline">
          <h2 className="text-lg font-bold">
            {product.title}
          </h2>
          <span>
            $ {product.price.toFixed(2)}
          </span>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard;