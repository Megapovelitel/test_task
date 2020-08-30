const reformDate = () => {
  let date = new Date();
  let options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  return (
    "последние изменения " +
    date.toLocaleString("ru", options).replace("г.,", "в")
  );
};

export default reformDate;
