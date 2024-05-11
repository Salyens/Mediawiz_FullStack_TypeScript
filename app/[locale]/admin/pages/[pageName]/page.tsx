import DisplayPage from "@components/AdminPage/DisplayPage";

interface SinglePageProps {
  params: {
    pageName: string;
  };
}

const SinglePage = ({ params: { pageName } }: SinglePageProps) => {
  return <DisplayPage endPoint={pageName} />;
};

export default SinglePage;
