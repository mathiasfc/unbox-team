import HomeTemplate from "templates/Home";
import { NextSeo } from "next-seo";
import { initializeApollo, addApolloState } from "../lib/apolloClient";
import { MEMBERS_QUERY } from "../graphql/queries.gql";

const Home = ({ members }) => {
  const title = "Time Unbox";
  const description = "Site com todos os integrantes do time da unbox :)";

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical="https://unbox-team.vercel.app/"
        openGraph={{
          type: "website",
          locale: "pt_BR",
          url: "https://unbox-team.vercel.app/",
          site_name: title,
          title,
          description,
          images: [
            {
              url: "/images/icons/unbox.png",
              width: 256,
              height: 256,
              alt: "Logo da Unbox",
            },
          ],
        }}
      />
      <HomeTemplate members={members} />
    </>
  );
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
