/*
  Edit this file to customize your website.
  Leave a contact link empty ("") to hide it automatically.
  Add your own image at assets/profile.jpg and change photo below.
*/
window.SITE_DATA = {
  name: "Sanghyeon Nam",
  highlightName: "Sanghyeon",
  remainingName: "Nam",
  role: "Robotics & Control Engineer",
  affiliation: "Texas A&M University",
  department: "Department of Mechanical Engineering",
  laboratory: "Adaptive Robotics & Technology Lab",
  location: ["College Station, Texas", "United States"],
  photo: "assets/dd.jpeg",
  introduction: [
    "Hello, I’m Sanghyeon Nam. I’m a robotics researcher at Texas A&M University, working on autonomous navigation and decision-making for mobile robots in challenging real-world environments.",
    "My research focuses on reliable perception, planning, and control under sensing uncertainty."
  ],
  researchInterests: [
    "Autonomous mobile robots and field robotics",
    "LiDAR–IMU perception and localization",
    "Robust motion planning and model predictive control",
    "Uncertainty-aware decision-making and multi-robot systems"
  ],
  advisor: "Dr. Kiju Lee", // Optional: e.g., "Prof. Example Name"
  advisorUrl: "", // Optional: full https:// URL
  links: {
    email: "snam@tamu.edu", // e.g., "you@tamu.edu"
    googleScholar: "https://scholar.google.com/citations?user=uCxN_g0AAAAJ&hl=ko", // Full URL
    github: "", // Full URL
    linkedin: "https://www.linkedin.com/in/snam01", // Full URL
    cv: "" // e.g., "assets/CV.pdf"
  },
  // ========================================================
  // 1. Editable news posts, thumbnails and photo galleries
  // ========================================================
  // News post editor:
  // id: unique short URL identifier (do not change after sharing the link)
  // title: headline shown on the news list and in the post
  // image: small news thumbnail and large cover image; "" means no image
  // content: full article, with one paragraph per array item
  // gallery: optional additional photos, each with src, alt, and caption
  // The two entries below are EXAMPLES — replace their text and SVG images.
  news: [
    {
      id: "website-launch",
      date: "Oct 2026",
      title: "A home for my robotics research",
      excerpt: "A place to share ongoing projects, research notes, publications, and lab updates.",
      image: "assets/news-website-demo.svg", // Example: "assets/news-conference.jpg"
      imageAlt: "Illustrative website interface, demo image",
      imageCaption: "Demo illustration — replace with your own event or project photo.",
      content: [
        "I’m putting together a personal website to document my research in autonomous robotics and share updates in one place.",
        "The news section will include research milestones, conference trips, experiments, and project releases. Clickable thumbnails lead to dedicated posts where I can explain the details and attach multiple photos.",
        "This is demonstration content. I’ll replace it with my own posts and pictures as the website develops."
      ],
      gallery: []
    },
    {
      id: "field-robotics-notes",
      date: "Sep 2026",
      title: "Field robotics research notes",
      excerpt: "Exploring robust LiDAR–IMU navigation and uncertainty-aware control in agricultural settings.",
      image: "assets/news-robot-demo.svg", // Example: "assets/corn-robot.jpg"
      imageAlt: "Stylized field robot between crop rows, demo illustration",
      imageCaption: "Demo illustration, not an actual experiment photo.",
      content: [
        "My research interests include navigation in environments where visibility, geometry, and sensor reliability can change substantially.",
        "A long-form post can describe a field test, the research motivation, experimental setup, and findings. You can add as many paragraphs as needed in the content array.",
        "The gallery below demonstrates how several images can be included in one post. Replace the sample illustrations with photos of your own experiments."
      ],
      gallery: [
        {
          src: "assets/news-robot-demo.svg",
          alt: "Demo field robot illustration",
          caption: "Gallery photo 1 — replace with an experiment image."
        },
        {
          src: "assets/news-website-demo.svg",
          alt: "Demo layout illustration",
          caption: "Gallery photo 2 — replace with another image."
        }
      ]
    }
  ],
  publications: [
    {
      title: "Learning When to Trust Geometry: Reliability-Aware MPC for LiDAR-IMU Under-Canopy Navigation",
      authors: "Sanghyeon Nam",
      venue: "Research manuscript",
      year: "2026",
      type: "Manuscript",
      description: "Reliable agricultural robot navigation with geometry-based perception and uncertainty-aware model predictive control.",
      paperUrl: "", // Add a link only when a paper is publicly available
      codeUrl: "", // Optional
      projectUrl: "" // Optional
    }
  ],
  footer: "© 2026 Sanghyeon Nam"
};
