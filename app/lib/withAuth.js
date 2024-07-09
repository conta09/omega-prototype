import { useRouter } from 'next/router';
import { useEffect } from 'react';
import netlifyIdentity from 'netlify-identity-widget';

const withAuth = (WrappedComponent) => {
  const AuthComponent = (props) => {
    const router = useRouter();

    useEffect(() => {
      const user = netlifyIdentity.currentUser();
      if (!user) {
        router.replace('/'); // Redirect to login page if not authenticated
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };

  return AuthComponent;
};

export default withAuth;
