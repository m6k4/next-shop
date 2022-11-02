import { CheckoutResultCard, CheckoutResult} from "../../components/pages/checkout/CheckoutResultCard";

const SuccessPage = () => {
  return (
    <>
      <CheckoutResultCard type={CheckoutResult.SUCCESS} />
    </>
  );
}

export default SuccessPage;