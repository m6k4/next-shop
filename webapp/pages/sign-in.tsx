import { useRef } from "react";
import { useRouter } from "next/router";
import Button from "../components/common/Button";
import FormField from "../components/common/FormField";
import Input from "../components/common/Input";
import Page from "../components/Page";
import { useLogin } from "../hooks/user";


const SignInPage = () => {
  const router = useRouter();
  const emailRef = useRef<(HTMLInputElement | null)>(null);
  const passwordRef = useRef<(HTMLInputElement | null)>(null );
  const { login, loginError, loginLoading } = useLogin();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const valid = await login({email: emailRef.current.value, password: passwordRef.current.value});
      valid && router.push("/");
    } catch (err) {
    }
  };
  
  return (
    <Page title="Sign In">
      <div className="flex justify-center h-full py-16">
        <div className="p-6 w-96 bg-white rounded-lg border border-gray-200 shadow-md transition duration-200 ease-out hover:shadow-lg h-64">
          <form onSubmit={handleSubmit}>
            <FormField label="email">
              <Input
                inputRef={emailRef}
                required
                type="email"
              />
            </FormField>
            <FormField label="password">
              <Input
                inputRef={passwordRef}
                required
                type="password"
              />
            </FormField>
            { loginError && <p className="text-red-500 pb-4">Invalid email or password</p> }
            <div className="flex items-center justify-between">
              {loginLoading ? (
                <p>Signing in...</p>
              ) : (
                <Button type="submit">Sign In</Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </Page>
  )
}

export default SignInPage;