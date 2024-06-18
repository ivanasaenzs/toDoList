export const getTasks = () => {
  return JSON.parse(localStorage.getItem("tasks"));
};

export const setTasksArray = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
