export const personal = {
  name: "Advaith",
  lastName: "Kambhampati",
  fullName: "Kambhampati Advaith",
  title: "Software Engineer",
  roles: ["Full-Stack Developer", "ML Enthusiast", "AI/ML Engineer", "Blog Writer"],
  email: "kadvaith22@gmail.com",
  github: "https://github.com/KambhampatiAdvaith",
  linkedin: "https://linkedin.com/in/advaith-kambhampati",
  available: true
};

export const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    school: "Geethanjali College of Engineering and Technology",
    location: "Hyderabad, Telangana",
    period: "2023 – 2027",
  },
];

export const experience = [
  {
    role: "Research Intern",
    company: "IIIT Hyderabad",
    period: "Jun 2025 – Jul 2025",
    short: "Computer Vision & Real-Time Surveillance",
    bullets: [
      "Engineered a real-time surveillance system using YOLOv8, achieving 92%+ detection accuracy across 10+ object classes on live CCTV feeds.",
      "Built an optimized video processing pipeline using FFmpeg + OpenCV, increasing inference throughput to 30+ FPS and reducing latency by ~40%.",
      "Trained and fine-tuned custom object detection models on 5K+ annotated frames using PyTorch & Ultralytics, improving detection performance by ~18% over baseline.",
    ],
    tags: ["YOLOv8", "PyTorch", "OpenCV", "FFmpeg", "Computer Vision"],
  },
  {
    role: "R&D Intern",
    company: "IIIT Kottayam",
    period: "Apr 2025 – May 2025",
    short: "ML Pipeline for Clinical Data",
    bullets: [
      "Developed an end-to-end ML pipeline on 10K+ clinical records to predict infant cardiac arrest, achieving 87% F1-score.",
      "Applied preprocessing techniques including missing value imputation (KNN), SMOTE, and hyperparameter tuning (GridSearchCV) across 3+ models, boosting model performance by ~15%.",
      "Integrated SHAP-based explainability, improving interpretability and enabling feature-level insights for 20+ clinical parameters.",
    ],
    tags: ["scikit-learn", "SHAP", "SMOTE", "Python", "XGBoost"],
  },
  {
    role: "AIML Student Trainee",
    company: "IIIT Hyderabad",
    period: "Oct 2024 – Mar 2025",
    short: "6-Month Deep Learning Training",
    bullets: [
      "Completed a 6-month AIML training program, developing and evaluating 5+ ML & deep learning models on real-world datasets with up to 90% accuracy.",
    ],
    tags: ["Deep Learning", "ML", "Python", "Neural Networks"],
  },
];

export const projects = [
  {
    num: "01",
    title: "SmartHire",
    subtitle: "AI Voice Recruitment Assistant",
    desc: "A full-stack SaaS platform for AI-driven voice interviews. Integrated Grok API to dynamically generate personalized interview questions, reducing manual effort by ~60%. Supports real-time concurrent sessions with secure auth and PostgreSQL.",
    tags: ["Next.js", "Vapi.ai", "Supabase", "PostgreSQL", "Grok API"],
    period: "Oct 2025",
    featured: true,
    metrics: ["100+ candidates", "~60% less manual effort", "Real-time AI"],
    github: "https://github.com/KambhampatiAdvaith",
    live: null,
  },
  {
    num: "02",
    title: "Cardiac Arrest Prediction",
    subtitle: "ML Clinical Decision System",
    desc: "Built an ML pipeline using Python & scikit-learn on 10K+ patient records with class imbalance handled via SMOTE. Evaluated 4+ models (Random Forest, XGBoost), improving accuracy by ~12%. Deployed via Flask for real-time predictions with <2 sec response time.",
    tags: ["Python", "scikit-learn", "SHAP", "Flask", "XGBoost"],
    period: "May 2025",
    featured: false,
    metrics: ["87% F1-score", "10K+ records", "<2s response"],
    github: "https://github.com/KambhampatiAdvaith",
    live: null,
  },
];

export const skills = {
  Languages: ["Python", "JavaScript", "TypeScript", "Java", "C"],
  "Frontend": ["React.js", "Next.js", "HTML/CSS", "Tailwind CSS"],
  "Backend": ["Node.js", "Express.js", "Flask", "REST APIs"],
  "ML / AI": ["PyTorch", "scikit-learn", "YOLOv8", "SHAP", "OpenCV"],
  "Databases": ["PostgreSQL", "MySQL", "MongoDB"],
  "Tools": ["Git", "GitHub", "VS Code", "Docker", "FFmpeg"],
};

export const achievements = [
  {
    title: "Vice President",
    org: "GCET Open Source Foundation",
    period: "Sep 2025 – Present",
    desc: "Organized technical sessions, led a team of 10+ members, increasing student participation in open-source activities by ~40%.",
  },
  {
    title: "Research Intern × 2",
    org: "IIIT Hyderabad & IIIT Kottayam",
    period: "2025",
    desc: "Selected for competitive research internships at two premier IIITs, working on computer vision and clinical ML pipelines.",
  },
];
