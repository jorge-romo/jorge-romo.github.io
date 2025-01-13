import isValidDate from './isValidDate';

export default function getYears(from: string, now?: string): number {
  const fromDate = new Date(from);
  let nowDate = now ? new Date(now) : new Date();

  if (!isValidDate(fromDate)) {
    return -1;
  }

  if (!isValidDate(nowDate)) {
    nowDate = new Date();
  }

  let years = nowDate.getFullYear() - fromDate.getFullYear();

  if (
    nowDate.getMonth() < fromDate.getMonth() ||
    (nowDate.getMonth() == fromDate.getMonth() &&
      nowDate.getDate() < fromDate.getDate())
  ) {
    years--;
  }

  if (years <= 0) {
    return 1;
  }

  return years;
}
