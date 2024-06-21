import { pages } from "@constants";
import { Link } from "@navigation";

const MyPages = () => {

  return (
    <>
      <h2 className="text-center text-2xl mt-2 mb-2">MY PAGES</h2>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
        {pages.map((page) => (
          <Link
            key={page.endPoint}
            href={`/admin/pages/${page.endPoint}`}
            passHref
            prefetch={true}
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
