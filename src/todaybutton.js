import { displayToday } from "./displaytoday";

export function activateTodayButton() {
  const button = document.querySelector('button.today');
  button.addEventListener('click', displayToday);

}
