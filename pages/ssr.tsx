import { GetServerSideProps } from "next";

const SSRPage = () => {
  return (
    <div>
      <h1>Strona wygenerowana po stronie serwera</h1>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: { myProp: "MyPreparedProp" } };
};

export default SSRPage;
