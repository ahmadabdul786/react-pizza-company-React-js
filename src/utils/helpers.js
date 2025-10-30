export function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "EUR",
  }).format(value);
}

export function formatDate(dateStr) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(dateStr));
}

export function calcMinutesLeft(dateStr) {
  const d1 = new Date().getTime();
  const d2 = new Date(dateStr).getTime();
  console.log((d2 - d1) / 60000)
  let min = (d2 - d1) / 60000;
   const days = Math.round(min/1440) ; 
   const hours = Math.round((min-(days*1440))/60);

   const obj = {
    days: days,
    hour:hours
   }
   return obj;


}
