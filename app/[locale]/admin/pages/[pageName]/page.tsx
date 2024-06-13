import DisplayPage from "@components/Pages/AdminPage/DisplayPage";
import { DisplayPageWrapper } from "@context/DisplayPageContext";

interface SinglePageProps {
  params: {
    pageName: string;
  };
}

const SinglePage = ({ params: { pageName } }: SinglePageProps) => {
  return (
    <DisplayPageWrapper>
      <DisplayPage endPoint={pageName} />
    </DisplayPageWrapper>
  );
};

export default SinglePage;
