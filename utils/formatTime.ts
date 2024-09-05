const formatTime = (timeStamp: number): string => {
  const date = new Date(timeStamp);

  return date.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};
export default formatTime;
