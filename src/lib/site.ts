export const siteConfig = {
  name: "AWS Student Builder Group",
  shortName: "AWS SBG",
  college: "Sheridan College",
  tagline: "Build. Learn. Connect on AWS.",
  description:
    "The AWS Student Builder Group at Sheridan College helps students learn cloud computing, build real projects, and connect with the AWS community.",
};

export const navLinks = [
  { label: "About Us", href: "/about" },
  { label: "Workshops", href: "/workshops" },
  { label: "Events", href: "/events" },
  { label: "Team", href: "/team" },
  {
    label: "Student Community Day",
    shortLabel: "Community Day",
    href: "/student-community-day",
  },
] as const;

export const clubStats = [
  { value: "7+", label: "Workshops" },
  { value: "135+", label: "Members" },
  { value: "2+", label: "Events" },
  { value: "20+", label: "AWS Services Covered" },
] as const;

export const socialLinks = [
  { label: "Discord", href: "https://discord.com/invite/TfzbXUCp3y" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/aws-cloud-club-sc" },
  { label: "Instagram", href: "https://www.instagram.com/awssbg.sheridan/" },
] as const;
