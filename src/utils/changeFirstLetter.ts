export const changeFirstLetter = (name:string) => {
 
  return name
    .toLowerCase()
    .split(" ")
    .map((item) => item[0].toUpperCase() + item.substring(1))
    .join(" ")
    .split("-")
    .map((item) => item[0].toUpperCase() + item.substring(1))
    .join("-");
};
