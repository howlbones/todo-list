export function Task() {
  return {
    title: "",
    description: "",
    dueDate: "",
    priority: "low",

    info: function () {
      return [this.title,
      this.description,
      this.dueDate,
      this.priority];
    }
  }
}