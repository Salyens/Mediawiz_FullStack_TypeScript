import DisplayPage from "@components/AdminPage/DisplayPage";

interface SinglePageProps {
  params: {
    pageName: string; 
  };
}

const SinglePage = ({ params }:SinglePageProps) => {
  return <DisplayPage endPoint={params.pageName} />;
};

export default SinglePage;
