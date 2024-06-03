class Task {
  id: string;
  text: string;

  constructor(taskText: string) {
    this.id = new Date().toISOString();
    this.text = taskText;
  }
}
export default Task;
