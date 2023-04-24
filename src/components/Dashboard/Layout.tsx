import { Amplify } from "aws-amplify";

import {
  withAuthenticator,
  WithAuthenticatorProps,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import awsExports from "@/aws-exports";
Amplify.configure(awsExports);

interface Props extends WithAuthenticatorProps {
  isPassedToWithAuthenticator: boolean;
  children: React.ReactNode;
}

function Layout({
  children,
  isPassedToWithAuthenticator,
  signOut,
  user,
}: Props) {
  if (!isPassedToWithAuthenticator) {
    throw new Error(`isPassedToWithAuthenticator was not provided`);
  }

  return (
    <>
      {/* <h1>Hello {user?.username}</h1>
      <button onClick={signOut}>Sign out</button> */}
      {children}
    </>
  );
}

export default withAuthenticator(Layout);

export async function getStaticProps() {
  return {
    props: {
      isPassedToWithAuthenticator: true,
    },
  };
}
