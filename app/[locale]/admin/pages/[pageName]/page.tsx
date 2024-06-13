import DisplayPage from "@components/Pages/AdminPage/DisplayPage";
import { DisplayPageWrapper } from "@context/DisplayPageContext";
import { Endpoints } from "@myTypes/mainTypes";

interface SinglePageProps {
  params: {
    pageName: Endpoints;
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
