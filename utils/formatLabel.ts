const capitalizeFirstLetter = (text:string):string => {
  return text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const formatLabel = (path:string):string => {
    const formattedPath = path.replace(/\./g, " > ").replace(/\[\d+\]/g, "");
    return capitalizeFirstLetter(formattedPath);
  };
export default formatLabel