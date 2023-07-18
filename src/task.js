export function Task() {
  return {
    id: 0,
    title: "",
    description: "",
    dueDate: "",
    dateCreated: "",
    priority: "",

    info: function () {
      return [this.title,
      this.description,
      this.dueDate,
      this.priority];
    }
  }
}