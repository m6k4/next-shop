import { CheckoutResultCard, CheckoutResult} from "components/pages/checkout/CheckoutResultCard";

const ErrorPage = () => {
  return (
    <>
       <CheckoutResultCard type={CheckoutResult.ERROR} />
    </>
  )
}

export default ErrorPage;