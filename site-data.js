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
  photo: "assets/Profile.jpeg",
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
      id: "james-cain-award-2026",
      date: "Oct 2026",
      title: "Selected as a Recipient of the James J. Cain ’51 Graduate Student Award!",
      excerpt: "Honored to receive the James J. Cain ’51 Graduate Student Award from Texas A&M University in recognition of my graduate achievements.",

      image: "assets/award.jpeg",
      imageAlt: "James J. Cain ’51 Graduate Student Award",
      imageCaption: "James J. Cain ’51 Graduate Student Award at Texas A&M University.",

      content: [
        "I am honored to have been selected as a recipient of the James J. Cain ’51 Graduate Student Award at Texas A&M University.",

        "Receiving this award is a meaningful milestone in my Ph.D. journey. It is especially encouraging to have my efforts and contributions recognized as I continue pursuing research in autonomous robotics, perception, and intelligent navigation systems.",

        "I sincerely appreciate the guidance and support of my advisor, collaborators, and colleagues throughout my research journey. This recognition further motivates me to continue advancing robotics research and contributing to the field."
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

    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // 1. 2026
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

    {
      title: "Offline Robust Model Predictive Control for Autonomous Vehicle Steering Systems Using LMI-Based Optimization",
      authors: "Nguyen Ngoc Nam, Sanghyeon Nam, Hung Duy Nguyen, Sooyoung Kim, Kyoungseok Han",
      venue: "International Journal of Robust and Nonlinear Control",
      year: "2026",
      type: "Journal",
      description: "An offline robust MPC approach using LMI-based optimization to improve autonomous vehicle steering performance under model uncertainties while reducing online computational requirements.",
      paperUrl: "https://doi.org/10.1002/rnc.70422",
      codeUrl: "",
      projectUrl: ""
    },

    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // 2. 2025
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

    {
      title: "Safety-Aware Robust Model Predictive Control for Robotic Arms in Dynamic Environments",
      authors: "Sanghyeon Nam, Dongmin Kim, Seung-Hwan Choi, Chang-Hyun Kim, Hyoeun Kwon, Hiroaki Kawamoto, Suwoong Lee",
      venue: "2025 IEEE International Conference on Automation Science and Engineering (CASE)",
      year: "2025",
      type: "Conference",
      description: "A safety-aware robust MPC framework for robotic manipulators operating around dynamic obstacles, integrating nominal motion control with robust safety constraints.",
      paperUrl: "https://doi.org/10.1109/CASE58245.2025.11164040",
      codeUrl: "",
      projectUrl: ""
    },

    {
      title: "Hierarchical Climate Control Framework for Electric Vehicles Considering Door-Opening Event",
      authors: "Sanghyeon Nam, Hyejin Lee, Youngki Kim, Kyoung Hyun Kwak, Kyoungseok Han",
      venue: "IEEE Transactions on Intelligent Vehicles",
      year: "2025",
      type: "Journal",
      description: "A hierarchical nonlinear MPC framework for electric vehicle thermal management that accounts for door-opening disturbances and improves cabin temperature regulation and passenger comfort.",
      paperUrl: "https://doi.org/10.1109/TIV.2024.3512476",
      codeUrl: "",
      projectUrl: ""
    },

    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // 3. 2024
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

    {
      title: "Hierarchical Climate Control Strategy for Electric Vehicles with Door-Opening Consideration",
      authors: "Sanghyeon Nam, Hyejin Lee, Youngki Kim, Kyoung Hyun Kwak, Kyoungseok Han",
      venue: "2024 IEEE Intelligent Vehicles Symposium (IV)",
      year: "2024",
      type: "Conference",
      description: "A hierarchical nonlinear MPC strategy for electric vehicle climate control, incorporating door-opening disturbances to reduce cabin temperature variations and improve thermal recovery.",
      paperUrl: "https://doi.org/10.1109/IV55156.2024.10588432",
      codeUrl: "",
      projectUrl: ""
    },

    {
      title: "Design and Implementation of Comprehensive Thermal Management Verification Model for Electric Vehicles Operating in Cold Climates",
      authors: "Sanghyeon Nam, Chulwoo Moon, Suyong Park, Byeongtae Lee, Kyoungseok Han",
      venue: "International Journal of Automotive Technology",
      year: "2024",
      type: "Journal",
      description: "Development and experimental validation of an integrated electric vehicle thermal management simulation model for evaluating heating and battery thermal control strategies under cold-weather conditions.",
      paperUrl: "https://doi.org/10.1007/s12239-024-00009-7",
      codeUrl: "",
      projectUrl: ""
    },

    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // 4. 2022
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

    {
      title: "Evaluating the Efficiency of Connected and Automated Buses Platooning in Mixed Traffic Environment",
      authors: "Suyong Park, Sanghyeon Nam, Gokul S. Sankar, Kyoungseok Han",
      venue: "Electronics",
      year: "2022",
      type: "Journal",
      description: "An MPC-based speed planning approach for connected and automated electric bus platoons, evaluating energy efficiency under mixed traffic conditions involving human-driven vehicles.",
      paperUrl: "https://doi.org/10.3390/electronics11193231",
      codeUrl: "",
      projectUrl: ""
    }

  ],

  footer: "© 2026 Sanghyeon Nam"
};
