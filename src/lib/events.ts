export type ClubEvent = {
  title: string;
  description: string;
  descriptionLong?: string;
  duration?: string;
  schedule?: string;
  meta?: string;
  tag?: string;
  href?: string;
  linkLabel?: string;
};

export const pastEvents: ClubEvent[] = [
  {
    title: "Introduction to AWS Cloud Club",
    duration: "2 hours",
    schedule:
      "Friday, Jan 16 · 6:00 PM to 8:00 PM EST · Sheridan College, Brampton Campus",
    tag: "Past",
    href: "https://www.meetup.com/aws-sbg-at-sheridan-college/events/312811331/",
    linkLabel: "View on Meetup",
    description:
      "Our kickoff session introducing the club’s mission, cloud computing basics, core AWS services, planned activities, an interactive quiz, Q&A, and networking.",
    descriptionLong:
      "Introductory event for the AWS Cloud Club at Sheridan College. We introduced the club’s mission and goals, provided a brief overview of cloud computing and core AWS services, highlighted exciting activities and opportunities ahead, including a short interactive quiz, and concluded with a Q&A session and open networking discussion.",
  },
  {
    title: "Cloud Talk with an AWS Expert",
    duration: "2 hours",
    schedule:
      "Thursday, Apr 2 · 6:30 PM to 8:30 PM EDT · Room A-145, Hazel McCallion Campus, Mississauga",
    tag: "Past",
    href: "https://www.meetup.com/aws-sbg-at-sheridan-college/events/313818312/",
    linkLabel: "View on Meetup",
    description:
      "In-person talk with Sandipkumar Patel, Ph.D — AWS Community Builder and 6x certified Solutions Architect. Real-world AWS insights, load balancing concepts, live Q&A, and networking with Sheridan students.",
    descriptionLong:
      "Featuring Sandipkumar Patel, Ph.D — AWS Community Builder, multi-certified Cloud Engineer, Solutions Architect, and DevOps practitioner. The session included an insightful talk on real-world AWS expertise, best practices, and cloud architecture trends, hands-on elements focused on practical concepts including load balancing, live Q&A, and networking with fellow students and club members.",
  },
];
