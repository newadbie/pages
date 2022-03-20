import { GetStaticProps } from "next";

const StaticPage = () => {
  return <div>Strona która generuje się tylko raz</div>;
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};

export default StaticPage;
