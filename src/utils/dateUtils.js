// Checks whether today's date is within 15 days of QR scan date

export function isWithin15Days(scanDate) {
  const today = new Date();
  const scanned = new Date(scanDate);

  const diff =
    (today.getTime() - scanned.getTime()) /
    (1000 * 60 * 60 * 24);

  return diff <= 15;
}
