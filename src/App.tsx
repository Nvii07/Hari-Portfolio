import MarginaliaPortfolioTemplate from "@/components/ui/marginalia-portfolio-template"

const B = import.meta.env.BASE_URL
const W = (file: string) => B + "works/" + file

export default function App() {
  return (
    <MarginaliaPortfolioTemplate
      name="Hariharan Sekar"
      role="Sports Graphic Designer"
      year="2026"
      location="Bengaluru, India"
      title="Portfolio"
      docLabel="Curriculum Vitae"
      portrait={B + "hariharan.jpg"}
      traits={[
        "matchday visuals",
        "brand-led",
        "football & cricket",
        "fast-paced",
        "retouching",
        "storyteller",
      ]}
      greeting="Hello."
      bio="Sports-focused Graphic Designer with professional experience creating *matchday visuals*, social media content and marketing campaign creatives across [football and cricket]. Currently working with Bengaluru FC and BFC Soccer Schools, developing *brand-led visuals* for club communications and football programme promotions. Experienced in fast-paced sports content workflows, visual storytelling and maintaining consistency across digital and print assets."
      educationIntro="Experience across football, cricket, and commercial retouching — backed by an engineering degree."
      education={[
        {
          title: "Graphic Designer — Bengaluru FC | JSW Sports",
          place: "Bengaluru",
          period: "Jan 2025 – Present",
          circled: true,
        },
        {
          title: "Graphic Designer — BFC Soccer Schools | JSW Sports",
          place: "Bengaluru",
          period: "Jan 2025 – Present",
        },
        {
          title: "Sports Graphic Designer — CricTracker Pvt. Ltd.",
          place: "Bengaluru",
          period: "Dec 2023 – Dec 2024",
        },
        {
          title: "Junior Graphic Designer — SBL Knowledge Services Ltd.",
          place: "Madurai",
          period: "Nov 2021 – Dec 2023",
        },
        {
          title: "B.E. Electrical & Electronics Engineering",
          place: "NPR College Of Engineering And Technology",
          period: "2017 – 2021",
          circled: true,
        },
      ]}
      cvUrl="https://nvii07.github.io/Hari-Portfolio/"
      cvNote="scan to open live CV"
      languages={[
        { name: "Adobe Photoshop", level: "expert", value: 0.96 },
        { name: "Adobe Lightroom", level: "expert", value: 0.94 },
        { name: "Brand Consistency", level: "core", value: 0.92 },
      ]}
      tools={[
        {
          name: "Photoshop",
          mark: "Ps",
          bg: "#001e36",
          fg: "#31a8ff",
          note: "matchday graphics, manipulation & retouching",
        },
        {
          name: "Lightroom",
          mark: "Lr",
          bg: "#001e36",
          fg: "#31a8ff",
          note: "colour correction & skin tone grading",
        },
        {
          name: "Brand",
          mark: "Br",
          bg: "#1c1b19",
          fg: "#ffffff",
          note: "club guidelines across digital & print",
        },
        {
          name: "Social",
          mark: "Sm",
          bg: "#264de4",
          fg: "#ffffff",
          note: "pre-match, in-game & post-match creatives",
        },
        {
          name: "Print",
          mark: "Pr",
          bg: "#e34f26",
          fg: "#ffffff",
          note: "posters, enrolments & campaign touchpoints",
        },
      ]}
      toolNote="hover a tool"
      skillsIntro="Core creative capabilities across matchday, campaign, and post-production workflows."
      skills={[
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
      ]}
      books={[
        { title: "Matchday Visual Systems", color: "#0b3b8c" },
        { title: "Grow With The Game", color: "#3d57d9" },
        { title: "Live Cricket Coverage", color: "#1c1b19" },
        { title: "Skin & Colour Grading", color: "#c8452c" },
      ]}
      booksNote="in daily rotation"
      projectsNote="four chapters of my work"
      projects={[
        {
          name: "Bengaluru FC",
          tagline: "Pre-match, in-game & post-match.",
          kind: "JSW Sports · Jan 2025 – Present · Bengaluru",
          year: "2025–",
          summary:
            "Creating *matchday graphics* and social media creatives for club communications, including [pre-match, in-game and post-match] content. Developing promotional visuals for club announcements, events and marketing initiatives while collaborating with media, content and marketing teams.",
          challenge:
            "Maintain visual consistency and deliver time-sensitive creative assets in a fast-paced professional football environment.",
          note: "matchday turnaround under live kick-off clocks",
          stats: [
            { value: 3, label: "matchday phases covered" },
            { value: 100, suffix: "%", label: "brand guideline fidelity" },
          ],
          images: [
            W("bengalurufc_1771513848_3836058638914548636_482918115.jpg"),
            W("bengalurufc_1772016551_3840274851970526018_482918115.jpg"),
            W("bengalurufc_1774665653_3862497289131076040_482918115.jpg"),
          ],
          screens: ["cover", "feed", "detail"],
          accent: "#0b3b8c",
          tag: "current role",
        },
        {
          name: "BFC Soccer Schools",
          tagline: "Grow With The Game.",
          kind: "JSW Sports · Jan 2025 – Present · Bengaluru",
          year: "2025–",
          summary:
            "Designing marketing campaign creatives promoting *football programmes*, seasonal initiatives and enrolments. Creating campaign-led social media content, [posters, digital advertisements] and promotional materials for parents and young players.",
          challenge:
            "Translate campaign objectives and the Grow With The Game message into engaging visuals across digital and print touchpoints.",
          note: "built for both parents and young players",
          stats: [
            { value: 2, label: "touchpoints: digital & print" },
          ],
          images: [
            W("bengalurufc_1775719810_3871335550200929936_482918115.jpg"),
            W("bengalurufc_1775753748_3871625497335866065_482918115.jpg"),
            W("bengalurufc_1776842099_3880755244557206159_482918115.jpg"),
          ],
          screens: ["detail", "cover", "feed"],
          accent: "#1f5fa8",
          tag: "campaigns",
        },
        {
          name: "CricTracker",
          tagline: "Live cricket coverage at speed.",
          kind: "CricTracker Pvt. Ltd. · Dec 2023 – Dec 2024",
          year: "2024",
          summary:
            "Designed sports-focused graphics for social media, *promotional campaigns*, events and [live match coverage]. Created visual assets and branding materials for sports teams and digital content initiatives.",
          challenge:
            "Work with editorial and marketing teams to deliver engaging content within tight matchday and publishing deadlines.",
          note: "ball-by-ball publishing cadence",
          images: [
            W("bengalurufc_1780988694_3915538893356997805_482918115.jpg"),
            W("bengalurufc_1782014799_3924146998202566241_482918115.jpg"),
            W("bengalurufc_1784285063_3943190533446610775_482918115.jpg"),
          ],
          screens: ["feed", "detail", "cover"],
          accent: "#166534",
          tag: "cricket",
        },
        {
          name: "SBL Knowledge",
          tagline: "Precision retouching & colour.",
          kind: "SBL Knowledge Services Ltd. · Nov 2021 – Dec 2023",
          year: "2023",
          summary:
            "Retouched and enhanced images for *fashion, e-commerce and photography* clients in Madurai. Handled [colour correction, skin retouching] and image manipulation using Adobe Photoshop and Lightroom.",
          challenge:
            "Deliver accurate, high-quality image outputs in line with client requirements and deadlines.",
          note: "two years of pixel-level craft",
          images: [
            W("bengalurufc_1790866609_3998400891388003442_482918115.jpg"),
            W("bengalurufc_1793287936_4018711001364543596_482918115.jpg"),
            W("bengalurufc_1793981863_4024533509984625234_482918115.jpg"),
          ],
          screens: ["stats", "cover", "detail"],
          accent: "#7c2d12",
          tag: "retouching",
        },
      ]}
      factsNote="off the pitch"
      facts={[
        { doodle: "camera", text: "Adobe Photoshop & Lightroom daily driver" },
        { doodle: "globe", text: "Football & cricket matchday content workflows" },
        { doodle: "pencil", text: "Digital + print brand consistency" },
        { doodle: "book", text: "B.E. Electrical & Electronics (2017–2021)" },
      ]}
      thanks="Thank you"
      email="harivijay0077@gmail.com"
      links={[
        { label: "+91 9003821751", href: "tel:+919003821751" },
        { label: "GitHub", href: "https://github.com/Nvii07/Hari-Portfolio" },
      ]}
      letter={
        "Thanks for looking through my portfolio.\n\nFrom matchday visuals at Bengaluru FC and campaign creatives for BFC Soccer Schools to live cricket coverage at CricTracker and commercial retouching at SBL Knowledge Services, I care about sharp storytelling that holds up under deadline.\n\nReferees are available on request — reach me anytime at harivijay0077@gmail.com or +91 9003821751."
      }
      signature="Hariharan Sekar"
      colors={{
        paper: "#f4f3ef",
        night: "#111111",
        ink: "#111111",
        pen: "#eb5939",
      }}
      fonts={{
        href: "https://fonts.googleapis.com/css2?family=Caveat:wght@500;600&family=DM+Sans:ital,opsz,wght@0,9..40,400..700;1,9..40,400..700&family=Syne:wght@600;700;800&display=swap",
        display: "'Syne', ui-sans-serif, system-ui, sans-serif",
        hand: "Caveat, 'Bradley Hand', cursive",
        body: "'DM Sans', ui-sans-serif, system-ui, sans-serif",
      }}
    />
  )
}
