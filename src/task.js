export function Task() {
  let task = {
    title: "",
    description: "",
    dueDate: "",
    priority: "low",

    info: function () {
      return [task.title,
      task.description,
      task.dueDate,
      task.priority];
    }
  }

  return task;
}