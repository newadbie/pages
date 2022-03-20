import { GetStaticProps } from "next";

const Revalidated = () => {
  return (
    <div>
      <h1>Strona która generuje się co 10 sekund</h1>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      anyData: "My prepared string",
    },
    revalidate: 10,
    notFound: true,
  };
};

export default Revalidated;
