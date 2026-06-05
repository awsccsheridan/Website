export type Workshop = {
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

export const workshops: Workshop[] = [
  {
    title: "AWS Foundations: CLI Setup, IAM, and Secure EC2 Access",
    duration: "2 hours",
    schedule: "Friday, Jan 23 · 6:00 PM to 8:00 PM EST",
    tag: "Past",
    href: "https://www.meetup.com/aws-sbg-at-sheridan-college/events/312966043/",
    linkLabel: "View on Meetup",
    description:
      "Set up your AWS account, IAM user, and CLI, deploy an EC2 instance, and connect securely via SSH — beginner-friendly, industry-style workflows that build the base for future AWS sessions.",
    descriptionLong:
      "This hands-on workshop helps students build a strong foundation in AWS. We'll set up an AWS account, create an IAM user, install and configure the AWS CLI, deploy an EC2 instance using the CLI, and securely connect to it using SSH. The session focuses on real-world, industry-style workflows and is beginner friendly. The workshop will also set the base for future AWS sessions, with time reserved at the end for questions and troubleshooting.",
  },
  {
    title: "Overview of Architecture of RAG for Video",
    duration: "1 hour",
    schedule: "Tuesday, Feb 3 · 7:00 PM to 8:00 PM EST",
    tag: "Past",
    href: "https://www.meetup.com/aws-sbg-at-sheridan-college/events/313150592/",
    linkLabel: "View on Meetup",
    description:
      "An overview of how Retrieval-Augmented Generation (RAG) systems are architected for video — covering key components, data flow, and how retrieval and generation work together in real-world AI applications.",
    descriptionLong:
      "This session explored the architecture of RAG for video applications. We covered how retrieval and generation components connect, common design patterns for working with video data, and practical considerations for building scalable AI systems.",
  },
  {
    title: "AWS Foundations: Event-Driven Pipelines with S3, SQS, and Lambda",
    duration: "2 hours",
    schedule: "Friday, Feb 6 · 6:00 PM to 8:00 PM EST",
    tag: "Past",
    href: "https://www.meetup.com/aws-sbg-at-sheridan-college/events/313150839/",
    linkLabel: "View on Meetup",
    description:
      "Build a serverless image processing pipeline with S3, SQS, and Lambda — learn event-driven design, decoupled queues, and real-time processing. Builds on CLI and IAM skills from Session 1.",
    descriptionLong:
      "This hands-on workshop takes your cloud skills beyond the server. We'll transition from manual infrastructure to serverless architecture by building a fully automated image processing pipeline. You will learn how to create an SQS queue to decouple your application, configure S3 event notifications, and deploy a Python-based Lambda function to process data in real-time. The session focuses on event-driven design, an industry-standard practice for building scalable and resilient systems. This workshop builds directly on the CLI and IAM skills from Session 1, with time reserved at the end for debugging and architecture review.",
  },
  {
    title: "Overview of RAG Platform for Studying Using Nova Models",
    duration: "1 hour",
    schedule: "Tuesday, Feb 10 · 7:00 PM to 8:00 PM EST",
    tag: "Past",
    href: "https://www.meetup.com/aws-sbg-at-sheridan-college/events/313158209/",
    linkLabel: "View on Meetup",
    description:
      "An overview of a RAG platform built for studying with Amazon Nova models — covering platform architecture, retrieval workflows, and how AI-powered study tools are designed for students.",
    descriptionLong:
      "This session explored a RAG platform for studying using Amazon Nova models. We covered how the platform is architected, how retrieval and generation work together for learning use cases, and practical considerations for building AI study tools on AWS.",
  },
  {
    title: "Monthly Challenge: Architecting File Converter App",
    duration: "1 hour",
    schedule: "Tuesday, March 3 · 7:00 PM to 8:00 PM EST",
    tag: "Past",
    href: "https://app.notion.com/p/neelbuilds/AWS-File-Converter-App-Challenge-3-3-26-4-3-26-31726ed81c9280058c8ed24e004e05a2",
    linkLabel: "View Challenge",
    description:
      "Kickoff for our first monthly challenge — architect a production-grade serverless file converter app on AWS. Covers goals, architecture levels, tech stack, Free Tier tips, and submission details (deadline April 3, 2026).",
    descriptionLong:
      "Official kickoff of the AWS Student Builder Group monthly challenges. We welcomed new members, announced the AWS File Converter App Challenge, walked through challenge goals, architecture levels, tech stack, and submission details, shared tips to stay within the AWS Free Tier, and covered how to get help via Discord and office hours.",
  },
  {
    title: "Deploy & Auto-Update Your First Website on AWS with Amplify CI/CD",
    duration: "2 hours",
    schedule: "Friday, Mar 13 · 6:00 PM to 8:00 PM EDT",
    tag: "Past",
    href: "https://www.notion.so/neelbuilds/Workshops-Materials-2ea26ed81c9280dbb3bccab2deed9b8b",
    linkLabel: "Workshop Materials",
    description:
      "Deploy a Next.js site to AWS Amplify with GitHub-connected CI/CD — go from local code to a live, auto-updating portfolio site in one session. Beginner-friendly and builds on earlier CLI and serverless workshops.",
    descriptionLong:
      "Hands-on workshop covering the modern serverless way to deploy web apps on AWS. Build a simple Next.js site, push to GitHub, connect AWS Amplify, deploy instantly, and see CI/CD in action as code changes auto-update your live site. Includes Free Tier tips, troubleshooting, and next steps for auth, APIs, and custom domains.",
  },
  {
    title: "Docker on AWS: Containerize Your App & Deploy Serverlessly with ECS Fargate",
    duration: "2 hours",
    schedule: "Friday, Mar 27 · 6:30 PM to 8:30 PM EDT · In-person, J-102, Trafalgar Campus",
    tag: "Past",
    href: "https://www.meetup.com/aws-sbg-at-sheridan-college/events/313872107/",
    linkLabel: "View on Meetup",
    description:
      "Containerize a Python Flask app with Docker, push to Amazon ECR, and deploy on ECS Fargate with a live public URL — hands-on, in-person workshop at Sheridan Trafalgar Campus.",
    descriptionLong:
      "A fast-paced in-person session covering Docker basics, building and running containers locally, pushing images to Amazon ECR, and deploying serverlessly to ECS Fargate with an Application Load Balancer. Students left with a containerized app running publicly on AWS and portfolio-ready demo experience.",
  },
  {
    title: "Build Your First Streaming AI Personal Assistant",
    duration: "2 hours",
    schedule: "Wednesday, May 27 · 6:00 PM to 8:00 PM EDT · B-213, Davis Campus or Virtual",
    tag: "Past",
    href: "https://github.com/awsccsheridan/streaming-chatbot",
    linkLabel: "Starter Repo",
    description:
      "Build a real-time streaming AI assistant with Next.js, AWS CDK, Lambda Function URLs, and Amazon Bedrock Nova 2 Lite — deploy a live public HTTPS app in one hands-on session.",
    descriptionLong:
      "Hands-on workshop covering a Next.js frontend, Infrastructure as Code with AWS CDK, Lambda Function URLs with HTTP response streaming, and Amazon Bedrock with Nova 2 Lite. Students deployed a live, public AI assistant and gained experience building modern streaming generative AI applications on AWS.",
  },
];
