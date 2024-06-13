export const getSortedKeys = (dataToRender: any) => {
  return Object.keys(dataToRender).sort((a, b) => {
    if (a === "en" && b === "ru") return -1;
    if (a === "ru" && b === "en") return 1;
    return 0;
  });
};
