export function Task() {
  return {
    id: 0,
    title: "",
    description: "",
    dueDate: "",
    dateCreated: "",
    priority: "",
    status: "",

    info: function () {
      return [this.title,
      this.description,
      this.dueDate,
      this.priority,
      this.status];
    }
  }
}