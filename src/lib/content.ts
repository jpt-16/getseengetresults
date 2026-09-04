export const APPLY_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdm_4PimAsE8ptI1rdrrz-5Acz2raxRucdKh-VCHzu46V5hpw/viewform";

export const INSTAGRAM_URL = "https://www.instagram.com/getseengetresults/";
export const INSTAGRAM_HANDLE = "@getseengetresults";

export const CONTACT_EMAIL = "getseengetresults101@gmail.com";
export const CONTACT_PHONE = "978-387-7699";
export const CONTACT_PHONE_HREF = "+19783877699";

export const SERVICES = [
  {
    title: "Film Evaluation",
    body: "Send your game film. You get an honest breakdown of what college coaches will see first — technique, motor, position fit, and the exact clips worth leading with.",
  },
  {
    title: "Exposure & Recruiting",
    body: "We put your name and your tape in front of college programs, and we walk you and your family through offers, camps, and what to do next.",
  },
  {
    title: "Personal Training",
    body: "One-on-one and small-group workouts built for your sport and your position. Speed, strength, footwork, hands, and contact prep — on turf, with cones, no gimmicks.",
  },
  {
    title: "Athlete Branding",
    body: "Highlight edits, reel captions, and a social presence coaches actually take seriously. If they search your name, we make sure they find the right thing.",
  },
] as const;

export type Coach = {
  name: string;
  role: string;
};

export const FOUNDER = {
  name: "Caden Chase",
  title: "D1 RB & Wrestler, Davidson College",
};

export const COACHES: Coach[] = [
  { name: "Manny Lizardo", role: "Bates College — Defensive End" },
  { name: "Dylan Brown", role: "Bowdoin College — Offensive Line" },
  { name: "Joe Irzyk", role: "Union College — Tight End" },
  { name: "Georgio Cherfane", role: "All-Conference — Defensive Line" },
];

export type PricingItem = {
  price: string;
  title: string;
  body: string;
};

export const IN_PERSON_PACKAGES: PricingItem[] = [
  {
    price: "$40",
    title: "Drop-In Session",
    body: "Mon–Fri 5:00–6:15pm, Sat–Sun 12:30–1:45pm at Methuen HS Lower Turf/Side Field (MA). Pick the day that works for you. Bring a friend and you both get $10 off.",
  },
  {
    price: "$120",
    title: "Silver Package",
    body: "4 sessions, one payment — $30/session, a $40 savings vs. booking individually. Same times as Drop-In; pick your own days.",
  },
  {
    price: "$200",
    title: "Gold Package",
    body: "8 sessions, one payment — $25/session, a $120 savings vs. booking individually. Same times as Drop-In; pick your own days.",
  },
];

export const ONLINE_SERVICES: PricingItem[] = [
  {
    price: "$15",
    title: "Full In-Depth Hudl / Film Eval",
    body: "Reviewed and broken down by our team, led by Caden Chase. You get an accurate level (D1, D2, D3, etc.) and a clear read on your strengths and weaknesses.",
  },
  {
    price: "$20",
    title: "The “Get Big” Workout Plan",
    body: "An elite 8-week plan built to show a dramatic boost in strength, explosiveness, and conditioning — designed by a college athlete.",
  },
  {
    price: "$35",
    title: "The “Get Bigger” Workout Plan",
    body: "A 16-week strength and speed program designed by a D1 athlete to build power and explosiveness. Comes with every drill included.",
  },
  {
    price: "$40",
    title: "1-on-1 Positional & Speed Training",
    body: "Run like an actual D1 workout, one hour, scheduled around your availability. Add a highlight video from the session to post online for $5.",
  },
  {
    price: "$40/mo",
    title: "X Account + Recruiting Management",
    body: "Direct coach outreach strategy across 75+ coach connections, bio rewrite, posting guidance, and weekly check-ins.",
  },
  {
    price: "$7.50",
    title: "Graphics, Resumes & Stats",
    body: "Limited-time offer — shareable graphics built to post straight to X.",
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
  placeholder?: boolean;
};

export const RESULTS: ResultCard[] = [
  {
    name: "Rob Feudo",
    meta: "St. John's Prep",
    quote: "Put in the work, got the tape, got the looks.",
  },
  {
    name: "Jimmy McGonigle",
    meta: "Lowell Catholic",
    quote: "Every session had a purpose. Film showed it.",
  },
  {
    name: "Athlete Name",
    meta: "School / Position",
    placeholder: true,
  },
  {
    name: "Athlete Name",
    meta: "School / Position",
    placeholder: true,
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
      "When I first started messaging college coaches using my own knowledge, I never got any responses. At the start of the winter, I struggled building relationships with any coaches. Fast forward to now, I have visited from all levels, and have learned so much from Caden.",
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
