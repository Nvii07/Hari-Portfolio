export type WorkItem = {
  id: string
  src: string
  title: string
  category: "Matchday & Club" | "Campaign & Wide"
  aspect: "portrait" | "landscape"
}

const B = import.meta.env.BASE_URL

const PORTRAIT_FILES = [
  "bengalurufc_1771513848_3836058638914548636_482918115.jpg",
  "bengalurufc_1772016551_3840274851970526018_482918115.jpg",
  "bengalurufc_1774665653_3862497289131076040_482918115.jpg",
  "bengalurufc_1775719810_3871335550200929936_482918115.jpg",
  "bengalurufc_1775753748_3871625497335866065_482918115.jpg",
  "bengalurufc_1776842099_3880755244557206159_482918115.jpg",
  "bengalurufc_1780988694_3915538893356997805_482918115.jpg",
  "bengalurufc_1782014799_3924146998202566241_482918115.jpg",
  "bengalurufc_1784285063_3943190533446610775_482918115.jpg",
  "bengalurufc_1789358649_3985751667659679719_482918115.jpg",
  "bengalurufc_1790866609_3998400891388003442_482918115.jpg",
  "bengalurufc_1790866609_3998400902863647558_482918115.jpg",
  "bengalurufc_1790866609_3998400921117171612_482918115.jpg",
  "bengalurufc_1790866609_3998400927534629997_482918115.jpg",
  "bengalurufc_1790866609_3998400929832998998_482918115.jpg",
  "bengalurufc_1790866609_3998400932525846778_482918115.jpg",
  "bengalurufc_1790921120_3998858242884400204_482918115.jpg",
  "bengalurufc_1791208238_4001265762651637513_482918115.jpg",
  "bengalurufc_1791632124_4004822800786848777_482918115.jpg",
  "bengalurufc_1793287936_4018711001364543596_482918115.jpg",
  "bengalurufc_1793332347_4019084515913136785_482918115.jpg",
  "bengalurufc_1793363232_4019342957936699968_482918115.jpg",
  "bengalurufc_1793981863_4024533509984625234_482918115.jpg",
  "bengalurufc_1794324604_4027407533035084151_482918115.jpg",
  "bengalurufc_1795189562_4034663877119282203_482918115.jpg",
]

const LANDSCAPE_FILES = [
  "913275529_1014488324351052_4980553691149968753_n.jpg",
  "914417645_2352167095576745_2233617917826306006_n.jpg",
  "914417675_4517275481750085_7985396314146452653_n.jpg",
  "917260307_1140366671737581_7253534282980749858_n.jpg",
  "917722987_1745353183682184_5327921744736893014_n.jpg",
  "918786464_2183859465553428_8850963789879272554_n.jpg",
  "919343319_1133819942584523_6020048162806447492_n.jpg",
  "922507690_1034183886385701_1076177727667693578_n.jpg",
]

export const PORTRAIT_URL = B + "hariharan.jpg"

export const WORKS: WorkItem[] = [
  ...PORTRAIT_FILES.map((file, i) => ({
    id: `club-${i + 1}`,
    src: `${B}works/${file}`,
    title: `Bengaluru FC · Creative ${String(i + 1).padStart(2, "0")}`,
    category: "Matchday & Club" as const,
    aspect: "portrait" as const,
  })),
  ...LANDSCAPE_FILES.map((file, i) => ({
    id: `campaign-${i + 1}`,
    src: `${B}works/${file}`,
    title: `Campaign & Matchday · Frame ${String(i + 1).padStart(2, "0")}`,
    category: "Campaign & Wide" as const,
    aspect: "landscape" as const,
  })),
]

export const PROFILE = {
  name: "Hariharan Sekar",
  title: "Graphic Designer",
  phone: "+91 9003821751",
  email: "harivijay0077@gmail.com",
  location: "Bengaluru, India",
  summary:
    "Sports-focused Graphic Designer with professional experience creating matchday visuals, social media content and marketing campaign creatives across football and cricket. Currently working with Bengaluru FC and BFC Soccer Schools, developing brand-led visuals for club communications and football programme promotions. Experienced in fast-paced sports content workflows, visual storytelling and maintaining consistency across digital and print assets.",
}

export const EXPERIENCE = [
  {
    role: "Graphic Designer",
    company: "Bengaluru FC | JSW Sports",
    location: "Bengaluru",
    period: "Jan 2025 – Present",
    bullets: [
      "Create matchday graphics and social media creatives for club communications, including pre-match, in-game and post-match content.",
      "Develop promotional visuals for club announcements, events and marketing initiatives while following established brand guidelines.",
      "Collaborate with media, content and marketing teams to translate briefs into engaging visual assets across digital platforms.",
      "Maintain visual consistency and deliver time-sensitive creative assets in a fast-paced professional football environment.",
    ],
  },
  {
    role: "Graphic Designer",
    company: "BFC Soccer Schools | JSW Sports",
    location: "Bengaluru",
    period: "Jan 2025 – Present",
    bullets: [
      "Design marketing campaign creatives promoting football programmes, seasonal initiatives and enrolments.",
      "Create campaign-led social media content, posters, digital advertisements and promotional materials for parents and young players.",
      "Translate campaign objectives and the “Grow With The Game” message into engaging visuals that build awareness and programme interest.",
      "Coordinate with the marketing team to deliver consistent campaign assets across digital and print touchpoints.",
    ],
  },
  {
    role: "Sports Graphic Designer",
    company: "CricTracker Pvt. Ltd.",
    location: "Bengaluru",
    period: "Dec 2023 – Dec 2024",
    bullets: [
      "Designed sports-focused graphics for social media, promotional campaigns, events and live match coverage.",
      "Created visual assets and branding materials for sports teams and digital content initiatives.",
      "Worked with editorial and marketing teams to deliver engaging content within tight matchday and publishing deadlines.",
    ],
  },
  {
    role: "Junior Graphic Designer",
    company: "SBL Knowledge Services Ltd.",
    location: "Madurai",
    period: "Nov 2021 – Dec 2023",
    bullets: [
      "Retouched and enhanced images for fashion, e-commerce and photography clients.",
      "Handled colour correction, skin retouching and image manipulation using Adobe Photoshop and Lightroom.",
      "Delivered accurate, high-quality image outputs in line with client requirements and deadlines.",
    ],
  },
]

export const SKILLS = [
  "Sports & Matchday Graphics",
  "Marketing Campaign Design",
  "Social Media Creatives",
  "Poster & Promotional Design",
  "Brand Consistency",
  "Photo Manipulation",
  "Image Retouching",
  "Colour Correction",
  "Adobe Photoshop",
  "Adobe Lightroom",
]

export const EDUCATION = {
  institution: "NPR College Of Engineering And Technology",
  degree: "Bachelor Of Engineering (Electrical And Electronics Engineering)",
  period: "2017 – 2021",
}
