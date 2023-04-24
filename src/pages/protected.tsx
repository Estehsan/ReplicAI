import { Auth, withSSRContext } from "aws-amplify";
import { GetServerSideProps } from "next";

function Protected(authenticated: boolean, user: any) {
  if (!authenticated) {
    return <h1>You are not authenticated</h1>;
  } else {
    return <h1>Hello {user?.username} from SSr</h1>;
  }
}

const getServerSideProps: GetServerSideProps = async (context) => {
  const auth = withSSRContext(context).Auth as typeof Auth;
  try {
    const user = await auth.currentAuthenticatedUser();
    return {
      props: {
        authenticated: true,
        user: user,
      },
    };
  } catch (err) {
    return {
      props: {
        authenticated: false,
      },
    };
  }
};
