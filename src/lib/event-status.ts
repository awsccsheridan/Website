const CLUB_TIME_ZONE = "America/Toronto";

export type EventStatus = "Past" | "Upcoming";

export function getTodayInClubTimeZone(referenceDate = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: CLUB_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(referenceDate);
}

export function getEventStatus(
  eventDate: string,
  referenceDate = new Date(),
): EventStatus {
  const today = getTodayInClubTimeZone(referenceDate);
  return eventDate >= today ? "Upcoming" : "Past";
}

export function sortByEventDateDesc<T extends { eventDate: string }>(items: T[]): T[] {
  return [...items].sort((a, b) => b.eventDate.localeCompare(a.eventDate));
}

export function sortByEventDateAsc<T extends { eventDate: string }>(items: T[]): T[] {
  return [...items].sort((a, b) => a.eventDate.localeCompare(b.eventDate));
}
