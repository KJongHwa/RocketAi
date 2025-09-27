const parseDate = (dateString: string) => {
  const date = new Date(dateString);

  const fullYear = date.getFullYear();
  const shortYear = String(fullYear).slice(2);
  const month = String(date.getMonth() + 1);
  const day = String(date.getDate());
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return { fullYear, shortYear, month, day, hours, minutes };
};

// Ex) 2025년 9월26일 08:10
export const koreaYearMonthDay = (dateString: string) => {
  const { fullYear, month, day, hours, minutes } = parseDate(dateString);
  return `${fullYear}년 ${month}월${day}일 ${hours}:${minutes}`;
};
