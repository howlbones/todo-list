import BlackCircleImport from "./img/iconpack/blackcircle.png"
import BlueCircleImport from "./img/iconpack/bluecircle.png"
import GreenCircleImport from "./img/iconpack/greencircle.png"
import RedCircleImport from "./img/iconpack/redcircle.png"
import YellowCircleImport from "./img/iconpack/yellowcircle.png"
import BookmarkIconImport from "./img/iconpack/bookmark.png"
import ClockIconImport from "./img/iconpack/clock.png"
import ImportantIconImport from "./img/iconpack/important.png"
import PersonLogoImport from "./img/iconpack/person.png"
import PersonCheckLogoImport from "./img/iconpack/personcheckmark.png"
// import allTasksPng from "./img/alltasks.png"
// import checkCircelPng from "./img/alltasks.png"
// import homePng from "./img/home.png"
// import importantPng from "./img/important.png"
// import plusGrayPng from "./img/plus-gray.png"
// import plusPng from "./img/plus.png"
// import todayPng from "./img/today.png"
// import viewPng from "./img/view.png"

export let IconPack = function () {
  const BlackCircle = BlackCircleImport;
  const BlueCircle = BlueCircleImport;
  const GreenCircle = GreenCircleImport;
  const RedCircle = RedCircleImport;
  const YellowCircle = YellowCircleImport;
  const BookmarkIcon = BookmarkIconImport;
  const ClockIcon = ClockIconImport;
  const ImportantIcon = ImportantIconImport;
  const PersonCheckLogo = PersonCheckLogoImport;
  const PersonLogo = PersonLogoImport; 

  return [ 
    BlackCircle,
    BlueCircle,
    GreenCircle,
    RedCircle,
    YellowCircle,
    BookmarkIcon,
    ClockIcon,
    ImportantIcon,
    PersonCheckLogo,
    PersonLogo
  ]
  
}();