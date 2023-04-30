import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "context/SessionContext";

const Transfer = () => {
  const router = useRouter();
  const _session = useSession();

  useEffect(() => {
    const allowedOrigins = [

    ];
    const supRoute = (search, record) => {
      const query = {
        name: `${search.firstName} ${search.lastName}`,
        age: record?.age || search?.age || 88,
        state: record?.state || search?.state || 'Florida',
        id: record?.id || 'dGhpbm1hdGNo',
      }
      if (record) {
        query.name = `${record.firstName} ${record.lastName}`;
      }
      return {
        pathname: '/signup',
        query,
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('message', (event) => {
        if (allowedOrigins.indexOf(event.origin) === -1) {
          return;
        }
        const { data } = event;
        if (data && data.type === 'transfer') {
          const { search, record, session, history, destination } = data;
          _session.load(search, record, session, history);
          let route = null;

          if (destination) {
            router.push(destination);
          }

          if ((session && session.thinMatchEnabled) || (record && record?.id)) {
            route = supRoute(search, record);
          }

          if (route === null) {
            route = {
              pathname: '/',
              query: {
                firstName: search.firstName,
                lastName: search.lastName,
                state: search.state,
              }
            };
          }

          // alternatively could push a message to the parent window with the new route too
          router.push(route);
        }
      });
    }
  });

  return (
    <></>
  )
}

export default Transfer;