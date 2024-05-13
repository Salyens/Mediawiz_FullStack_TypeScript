import DisplayPage from "@components/Pages/AdminPage/DisplayPage";

interface SinglePageProps {
  params: {
    pageName: string;
  };
}

const SinglePage = ({ params: { pageName } }: SinglePageProps) => {
  return <DisplayPage endPoint={pageName} />;
};

export default SinglePage;
