export const getTasks = () => {
  return JSON.parse(localStorage.getItem("tasks"));
};

export const updateLocalStorage = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
