import { MainPageData } from "@interfaces";

const PageHeader = ({ data }: { data: MainPageData }) => {
  return (
    <h2 className="text-center text-3xl">
      Редактирование страницы "{data.languages.ru.pageName}"
    </h2>
  );
};

export default PageHeader;
