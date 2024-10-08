"use client";
import DisplayPage from "@components/Pages/AdminPage/DisplayPage";
import { store } from "@lib/store";
import { Provider } from "react-redux";


interface SinglePageProps {
  params: {
    pageName: string;
  };
}

const SinglePage = ({
  params: { pageName },
}: SinglePageProps) => {
  return (
    <Provider store={store}>
      <DisplayPage endPoint={pageName} />
    </Provider>
  );
};

export default SinglePage;
