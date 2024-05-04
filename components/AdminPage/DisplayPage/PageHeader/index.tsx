import {MainPageData } from "@interfaces";

interface PageHeaderProps {
  data: MainPageData;
}

const PageHeader = ({ data }:PageHeaderProps ) => {
  return (
    <h2 className="text-center text-3xl">
      Редактирование страницы "{data.languages.ru.pageName}"
    </h2>
  );
};

export default PageHeader;
