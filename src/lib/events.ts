import {
  getEventStatus,
  sortByEventDateDesc,
  type EventStatus,
} from "@/lib/event-status";

export type ClubEvent = {
  title: string;
  description: string;
  descriptionLong?: string;
  duration?: string;
  schedule?: string;
  meta?: string;
  eventDate: string;
  tag: EventStatus;
  href?: string;
  linkLabel?: string;
};

type ClubEventEntry = Omit<ClubEvent, "tag">;

function withEventStatus(event: ClubEventEntry): ClubEvent {
  return {
    ...event,
    tag: getEventStatus(event.eventDate),
  };
}

export const studentCommunityDay = {
  title: "AWS Student Community Day Toronto",
  shortTitle: "Student Community Day",
  tagline: "The first-ever AWS Student Community Day in North America",
  eventDate: "2026-09-26",
  date: "Saturday, September 26, 2026",
  time: "10:00 AM to 5:00 PM EDT",
  schedule:
    "Saturday, Sep 26, 2026 · 10:00 AM to 5:00 PM EDT · Hazel McCallion Campus, Mississauga",
  duration: "Full day",
  location: "Sheridan College — Hazel McCallion Campus",
  address: "4180 Duke of York Blvd, Mississauga, ON L5B 0H7, Canada",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=4180+Duke+of+York+Blvd,+Mississauga,+ON+L5B+0H7",
  rsvpDeadline: "September 12, 2026",
  rsvpUrl: "https://luma.com/11nchdym",
  rsvpLabel: "Request to Join",
  description:
    "Be part of history at the first AWS Student Community Day in North America — expert sessions, AWS Jam, workshops, intern panels, food, networking, and swag. RSVP required before September 12.",
  overview: [
    "Be part of history! Get ready for a high-energy day at AWS Student Community Day Toronto, the first-ever AWS Student Community Day in North America!",
    "Hosted by the AWS Student Builder Group at Sheridan College, this full-day event is packed with learning, fresh ideas, and plenty of chances to explore what you can build with cloud technology. Whether you want to pick up practical skills, hear from people working with AWS, or simply spend the day in a room buzzing with momentum, there will be something worth showing up for.",
    "Come ready to learn, meet people, and make the most of a day built for students who want a closer look at AWS and where it can take them.",
  ],
  highlights: [
    {
      title: "Expert Sessions",
      description:
        "Hear directly from industry leaders and experienced AWS practitioners.",
    },
    {
      title: "AWS Jam & Workshops",
      description:
        "Roll up your sleeves to build real-world cloud skills through hands-on technical workshop activities and an interactive, challenge-based AWS Jam.",
    },
    {
      title: "Intern Conversations",
      description:
        "Get actionable career advice and learn how to land your next role from students who have successfully navigated the intern hiring process.",
    },
    {
      title: "Food & Fun Atmosphere",
      description:
        "Settle in and enjoy the experience from start to finish with lunch and snacks provided to keep your energy up.",
    },
    {
      title: "Networking & Swag",
      description:
        "Connect with peers across the GTA and take home exclusive AWS giveaways and free swag!",
    },
  ],
};

const clubEventsChronological: ClubEventEntry[] = [
  {
    title: "Introduction to AWS Cloud Club",
    eventDate: "2026-01-16",
    duration: "2 hours",
    schedule:
      "Friday, Jan 16 · 6:00 PM to 8:00 PM EST · Sheridan College, Brampton Campus",
    href: "https://www.meetup.com/aws-sbg-at-sheridan-college/events/312811331/",
    linkLabel: "View on Meetup",
    description:
      "Our kickoff session introducing the club’s mission, cloud computing basics, core AWS services, planned activities, an interactive quiz, Q&A, and networking.",
    descriptionLong:
      "Introductory event for the AWS Cloud Club at Sheridan College. We introduced the club’s mission and goals, provided a brief overview of cloud computing and core AWS services, highlighted exciting activities and opportunities ahead, including a short interactive quiz, and concluded with a Q&A session and open networking discussion.",
  },
  {
    title: "Cloud Talk with an AWS Expert",
    eventDate: "2026-04-02",
    duration: "2 hours",
    schedule:
      "Thursday, Apr 2 · 6:30 PM to 8:30 PM EDT · Room A-145, Hazel McCallion Campus, Mississauga",
    href: "https://www.meetup.com/aws-sbg-at-sheridan-college/events/313818312/",
    linkLabel: "View on Meetup",
    description:
      "In-person talk with Sandipkumar Patel, Ph.D — AWS Community Builder and 6x certified Solutions Architect. Real-world AWS insights, load balancing concepts, live Q&A, and networking with Sheridan students.",
    descriptionLong:
      "Featuring Sandipkumar Patel, Ph.D — AWS Community Builder, multi-certified Cloud Engineer, Solutions Architect, and DevOps practitioner. The session included an insightful talk on real-world AWS expertise, best practices, and cloud architecture trends, hands-on elements focused on practical concepts including load balancing, live Q&A, and networking with fellow students and club members.",
  },
  {
    title: studentCommunityDay.title,
    eventDate: studentCommunityDay.eventDate,
    duration: studentCommunityDay.duration,
    schedule: studentCommunityDay.schedule,
    href: "/student-community-day",
    linkLabel: "Learn more",
    description: studentCommunityDay.description,
  },
];

const clubEvents = sortByEventDateDesc(clubEventsChronological.map(withEventStatus));

export const upcomingEvents = clubEvents.filter((event) => event.tag === "Upcoming");

export const pastEvents = clubEvents.filter((event) => event.tag === "Past");
