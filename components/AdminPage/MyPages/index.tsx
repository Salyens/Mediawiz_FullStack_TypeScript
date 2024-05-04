import Link from "next/link";

const MyPages = () => {
  const pages = [
    { pageName: "ГЛАВНАЯ СТРАНИЦА", endPoint: "mainPage" },
    { pageName: "РАЗРАБОТКА САЙТОВ", endPoint: "webPage" },
    { pageName: "ПРОДВИЖЕНИЕ САЙТОВ", endPoint: "webAdPage" },
    { pageName: "ВВЕДЕНИЕ СОЦСЕТЕЙ", endPoint: "smm" },
    { pageName: "ПРОДВИЖЕНИЕ СОЦСЕТЕЙ", endPoint: "smmAds" },
  ];

  return (
    <>
      <h2 className="text-center text-2xl mt-2 mb-2">МОИ КЛИЕНТЫ</h2>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
        {pages.map((page, index) => (
          <Link
            key={page.endPoint}
            href={`/admin/pages/${page.endPoint}`}
            passHref
          >
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded min-h-32 w-full">
              {page.pageName}
            </button>
          </Link>
        ))}
      </div>
    </>
  );
};

export default MyPages;
