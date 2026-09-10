import { studentCommunityDay } from "@/lib/events";

const tickerText = `Applications are open for ${studentCommunityDay.title}`;

export function CommunityDayTicker() {
  const items = Array.from({ length: 6 }, (_, index) => index);

  return (
    <a
      href={studentCommunityDay.rsvpUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="club-ticker"
      aria-label={tickerText}
    >
      <div className="club-ticker-track" aria-hidden="true">
        {items.map((index) => (
          <span key={index} className="club-ticker-item">
            {tickerText}
          </span>
        ))}
      </div>
    </a>
  );
}
