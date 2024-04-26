
import DisplayPage from "@components/AdminPage/DisplayPage";

const Page = ({ params }) => {
  return <DisplayPage endPoint={params.pageName} />;
};

export default Page;
