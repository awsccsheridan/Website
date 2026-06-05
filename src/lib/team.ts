export type TeamMember = {
  name: string;
  title: string;
  role: string;
  bio: string;
  linkedin: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Neel Patel",
    title: "SBG Lead",
    role: "President",
    bio: "Leads club strategy, partnerships, and major programs including workshops and Student Community Day.",
    linkedin: "https://www.linkedin.com/in/neelbuilds/",
  },
  {
    name: "Sohel Shekh",
    title: "Head of Experience",
    role: "Vice President",
    bio: "Shapes member experience across events, workshops, and the club’s overall programming.",
    linkedin: "https://www.linkedin.com/in/sohelshekh/",
  },
  {
    name: "Nayan Mapara",
    title: "Head of Technology",
    role: "Technical Director",
    bio: "Oversees workshop content, AWS labs, technical resources, and hands-on learning for members.",
    linkedin: "https://www.linkedin.com/in/nayanmapara/",
  },
  {
    name: "Alshifa Belim",
    title: "Head of Community",
    role: "Communications",
    bio: "Manages social channels, member outreach, and community engagement across Sheridan College.",
    linkedin: "https://www.linkedin.com/in/alshifa-belim/",
  },
];
