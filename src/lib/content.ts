export const APPLY_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdm_4PimAsE8ptI1rdrrz-5Acz2raxRucdKh-VCHzu46V5hpw/viewform";

export const INSTAGRAM_URL = "https://www.instagram.com/getseengetresults/";
export const INSTAGRAM_HANDLE = "@getseengetresults";

export const SERVICES = [
  {
    number: "01",
    title: "Film Evaluation",
    body: "Send your game film. You get an honest breakdown of what college coaches will see first — technique, motor, position fit, and the exact clips worth leading with.",
  },
  {
    number: "02",
    title: "Exposure & Recruiting",
    body: "We put your name and your tape in front of college programs, and we walk you and your family through offers, camps, and what to do next.",
  },
  {
    number: "03",
    title: "Personal Training",
    body: "One-on-one and small-group workouts built for your sport and your position. Speed, strength, footwork, hands, and contact prep — on turf, with cones, no gimmicks.",
  },
  {
    number: "04",
    title: "Athlete Branding",
    body: "Highlight edits, reel captions, and a social presence coaches actually take seriously. If they search your name, we make sure they find the right thing.",
  },
] as const;

export const WHY_STATS = [
  { value: "D1 Football & Wrestling", label: "Who coaches you" },
  { value: "Youth through High School", label: "Who we train" },
  { value: "MA · NH · NC", label: "Where we work" },
] as const;

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
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "[ parent testimonial — 2 to 3 sentences on what changed for their kid ]",
    name: "Parent Name",
    role: "Parent of athlete, Town MA",
  },
  {
    quote:
      "[ athlete testimonial — what the training and film work did for them ]",
    name: "Athlete Name",
    role: "Position, School",
  },
  {
    quote:
      "[ parent or coach testimonial — recruiting outcome, exposure, offers ]",
    name: "Name",
    role: "Role, State",
  },
];

export const SERVICE_AREAS = [
  { abbr: "MA", name: "Massachusetts" },
  { abbr: "NH", name: "New Hampshire" },
  { abbr: "NC", name: "North Carolina" },
] as const;
