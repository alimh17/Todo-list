import moment from "jalali-moment";

export const getNowDate = () => {
  const m = moment();

  const weekDays = [
    "یکشنبه",
    "دوشنبه",
    "سه شنبه",
    "چهارشنبه",
    "پنج شنبه",
    "جمعه",
    "شنبه",
  ];

  const months = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ];

  const week = weekDays[m.local("fa").weekday()];
  const day = m.locale("fa").format("D");
  const month = months[m.local("fa").jMonth()];

  return [week, day, month];
};
