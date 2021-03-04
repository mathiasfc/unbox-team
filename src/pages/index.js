import HomeTemplate from "templates/Home";
import { initializeApollo, addApolloState } from "../lib/apolloClient";
import { MEMBERS_QUERY } from "../graphql/queries.gql";

const Home = ({ members }) => {
  return <HomeTemplate members={members} />;
};

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: MEMBERS_QUERY,
  });

  return addApolloState(apolloClient, {
    props: {
      members: data?.members,
    },
  });
}

export default Home;
