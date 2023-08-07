import allTasksPng from "./img/alltasks.png"
import homePng from "./img/home.png"
import importantPng from "./img/important.png"
import plusGrayPng from "./img/plus-gray.png"
import todayPng from "./img/today.png"

export function initIcons() {
  document.querySelector('header img').src = homePng;
  document.querySelector('.side-bar .today img').src = todayPng;
  document.querySelector('.side-bar .all-tasks img').src = allTasksPng;
  document.querySelector('.side-bar .important img').src = importantPng;
  document.querySelector('.side-bar .add-project img').src = plusGrayPng;
}