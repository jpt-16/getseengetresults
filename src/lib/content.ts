export const APPLY_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdm_4PimAsE8ptI1rdrrz-5Acz2raxRucdKh-VCHzu46V5hpw/viewform";

export const INSTAGRAM_URL = "https://www.instagram.com/getseengetresults/";
export const INSTAGRAM_HANDLE = "@getseengetresults";

export const CONTACT_EMAIL = "getseengetresults@gmail.com";

export const PROOF_POINTS = [
  "30+ Athletes Trained",
  "Multiple College Commitments",
  "Former & Current College Athletes",
  "Real Recruiting Experience",
] as const;

export const PROBLEM_POINTS = [
  "Getting their film noticed",
  "Knowing which schools to target",
  "Reaching the right coaches",
  "Knowing how to navigate recruiting",
  "Presenting themselves professionally",
] as const;

export type ProcessStep = {
  step: string;
  title: string;
  body: string;
};

export const SYSTEM_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Train",
    body: "Build the athletic ability to compete at the next level.",
  },
  {
    step: "02",
    title: "Build Your Profile",
    body: "Improve film, highlights, branding, and your overall recruiting profile.",
  },
  {
    step: "03",
    title: "Get Seen",
    body: "Develop an outreach strategy and put your profile in front of the right programs.",
  },
  {
    step: "04",
    title: "Get Recruited",
    body: "Navigate communication, opportunities, and the recruiting process with experienced guidance.",
  },
];

export type ServiceItem = {
  title: string;
  body: string;
  price?: string;
};

export type ServiceCategory = {
  label: string;
  items: ServiceItem[];
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    label: "Train",
    items: [
      {
        title: "Personal Training",
        price: "From $40",
        body: "One-on-one and small-group workouts built for your sport and position — speed, strength, footwork, hands, and contact prep, on turf in Methuen, MA. $40 drop-in (bring a friend, both get $10 off), or save with a 4- or 8-session package ($120 / $200).",
      },
      {
        title: "Workout Plans",
        price: "$20–$35",
        body: "8-week (\"Get Big\") or 16-week (\"Get Bigger\") strength, speed, and conditioning plans designed by our college athletes — built to show a real jump in explosiveness and power.",
      },
      {
        title: "Positional & Speed Training",
        price: "$40",
        body: "Run like an actual D1 workout, one hour, scheduled around your availability — positional work and speed development together. Add a highlight video from the session for $5.",
      },
    ],
  },
  {
    label: "Get Seen",
    items: [
      {
        title: "Athlete Branding & Highlights",
        body: "Highlight edits, reel captions, and a social presence coaches actually take seriously. If they search your name, we make sure they find the right thing.",
      },
      {
        title: "Graphics, Resumes & Stats",
        price: "$7.50",
        body: "Shareable graphics and a clean athlete resume built to post straight to X and share with coaches.",
      },
    ],
  },
  {
    label: "Get Recruited",
    items: [
      {
        title: "Exposure & Recruiting",
        body: "We put your name and your tape in front of college programs, and we walk you and your family through offers, camps, and what to do next.",
      },
      {
        title: "Recruiting Management & Coach Outreach",
        price: "$40/mo",
        body: "Direct coach outreach strategy across 75+ coach connections, bio rewrite, posting guidance, and weekly check-ins.",
      },
    ],
  },
];

export const FILM_EVAL_OFFER = {
  price: "$15",
  title: "Full Film Evaluation",
  body: "Send your Hudl or game film. It's reviewed and broken down by our team, led by Caden Chase.",
  benefits: [
    "Position-specific breakdown — technique, motor, and fit",
    "A clear read on your strengths and weaknesses",
    "The exact clips worth leading with",
    "An honest read on your level — D1, D2, D3, and beyond",
  ],
};

export const FOUNDER = {
  name: "Caden Chase",
  title: "D1 RB, Davidson College",
};

export type TeamMember = {
  name: string;
  role: string;
  description: string;
  photo: string;
};

export const TEAM: TeamMember[] = [
  {
    name: "Caden Chase",
    role: "Founder — Davidson College",
    description:
      "D1 running back at Davidson College. All-State wrestling champion in high school with 200+ career wins, First Team All-Conference, and an Eagle Tribune / Boston Globe / Boston Herald All-Star who held 17 total offers, including multiple D1s.",
    photo: "/photos/hero-night-action.jpg",
  },
  {
    name: "Georgio Cherfane",
    role: "Managing Partner",
    description:
      "Founding father of GSGR, running content creation and editing. All-Conference interior defensive lineman, 3-year varsity player and 2-year starter, 2-year varsity wrestling starter, and Eagle Tribune All-Star Honorable Mention who held multiple collegiate offers — not currently playing at the college level.",
    photo: "/photos/methuen-lineman.jpg",
  },
  {
    name: "Manny Lizardo",
    role: "Bates College",
    description:
      "Defensive end at Bates College. All-Conference DL/DE, 2x MVC All-Conference selection, and Eagle Tribune All-Star who captained Central Catholic to a Final Four appearance. Held multiple collegiate offers.",
    photo: "/photos/manny-raiders.jpg",
  },
  {
    name: "Will Volk",
    role: "DL/OL Coach — Davidson College",
    description:
      "Current defensive lineman at D1 FCS Davidson College. All-NEPSAC selection who helped lead BB&N to an ISL Championship and held multiple D1 offers — now trains GSGR's DL/OL athletes and manages recruitment consulting.",
    photo: "/photos/will-volk-davidson.jpg",
  },
  {
    name: "Dylan Brown",
    role: "Bowdoin College",
    description:
      "Offensive line signee at Bowdoin College. Two-year varsity starter who held multiple collegiate offers — now helps run GSGR's recruiting consulting.",
    photo: "/photos/dylan-brown-central.jpg",
  },
  {
    name: "Joe Irzyk",
    role: "Union College",
    description: "Tight end at Union College.",
    photo: "/photos/joe-irzyk-stjohns.jpg",
  },
];

export const REFERRAL = {
  headline: "Refer. Reward. Repeat.",
  body: "Love what we do? Refer a friend — you both get $5 off.",
  cta: "$5 off",
};

export type ResultCard = {
  name: string;
  meta: string;
  quote?: string;
  photo?: string;
};

export const RESULTS: ResultCard[] = [
  {
    name: "Ali Kalle",
    meta: "Worcester State — RB",
    photo: "/photos/commit-ali-kalle.jpg",
  },
  {
    name: "Drew O'Keefe",
    meta: "Williams College — WR/K",
    photo: "/photos/commit-drew-okeefe.jpg",
  },
  {
    name: "Abraham Temple",
    meta: "Kent State Tuscarawas — Baseball, Outfield/First Base",
    photo: "/photos/commit-abraham-temple.jpg",
  },
  {
    name: "Caden Chase",
    meta: "Davidson College — RB",
    photo: "/photos/commit-caden-chase.jpg",
  },
  {
    name: "Manny Lizardo",
    meta: "Bates College — DE",
    photo: "/photos/commit-manny-lizardo.jpg",
  },
  {
    name: "Will Volk",
    meta: "Davidson College — DL",
    photo: "/photos/commit-will-volk.jpg",
  },
  {
    name: "Dylan Brown",
    meta: "Bowdoin College — OL",
    photo: "/photos/commit-dylan-brown.jpg",
  },
  {
    name: "Joe Irzyk",
    meta: "Union College — TE",
    photo: "/photos/commit-joe-irzyk.jpg",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  rating: number;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "The spring has been a hectic time of year for me with baseball and school. I have trusted Caden with my recruitment, and it has paid off. I have been on many visits and phone calls. I don't have to worry about anything on the recruitment side of things.",
    name: "Abraham Temple",
    role: "Athlete",
    rating: 5,
  },
  {
    quote:
      "When I first started messaging college coaches using my own knowledge, I never got any responses. At the start of the winter, I struggled building relationships with any coaches. Fast forward to now, I have visited schools from all levels, and have learned so much from Caden.",
    name: "Jacob Hays",
    role: "Athlete",
    rating: 5,
  },
  {
    quote:
      "I never thought playing college football at the next level was possible until I started working with Caden. He made me realize that I could use football as a tool to set myself up for success in the future. Within 2 months of working with him, I received my first collegiate offer.",
    name: "Dylan Brown",
    role: "Athlete",
    rating: 5,
  },
];

export const SERVICE_AREAS = [
  { abbr: "MA", name: "Massachusetts" },
  { abbr: "NH", name: "New Hampshire" },
  { abbr: "NC", name: "North Carolina" },
] as const;

export type Faq = {
  myth: string;
  fact: string;
};

export const FAQS: Faq[] = [
  {
    myth: "You have to be a 4 or 5 star recruit to play college football.",
    fact: "There are over 700 college football programs across all divisions looking for players.",
  },
  {
    myth: "If you don't get recruited early, it's too late.",
    fact: "Recruiting happens later than most people think. Many athletes get their first real interest during their JR or SR year.",
  },
  {
    myth: "Posting highlights is enough to get recruited.",
    fact: "Film alone rarely gets athletes recruited. You also need measurables, academic info, and direct communication with coaches.",
  },
  {
    myth: "You have to go D1 to have a successful career.",
    fact: "There are amazing opportunities at D2, D3, NAIA, and JUCO programs.",
  },
];
