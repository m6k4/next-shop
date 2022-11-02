import Link from "next/link"

export enum CheckoutResult {
  SUCCESS = 'success',
  ERROR = 'error',
}

export type CheckoutResultCardProps = {
  type: CheckoutResult
}

export const CheckoutResultCard = ({type}: CheckoutResultCardProps) => {
  const content = {
    [CheckoutResult.SUCCESS]: {
      title: 'Thank you for your order!',
      description: 'We will send you an email with the details of your order.',
    },
    [CheckoutResult.ERROR]: {
      title: 'Something went wrong',
      description: 'We are sorry, but something went wrong with your order. Please try again later.',
    }
  }
  return (
   <section className="flex flex-col items-center justify-center w-full h-screen">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-center">{content[type].title}</h1>
        <p className="text-center">{content[type].description}</p>
        <button className="mt-8 bg-stone-400 hover:bg-stone-500 transition-all text-white rounded-lg font-bold py-2 px-4 w-3/4">
          <Link href="/">
            <p>Go back to the home page</p>
          </Link>
        </button>
      </div>
    </section>
  )
}