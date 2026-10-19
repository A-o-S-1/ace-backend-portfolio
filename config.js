/*
  Portfolio configuration
  -----------------------
  Replace null values only with URLs you have confirmed and can open.
  Do not use placeholder URLs as if they were live destinations.
*/
window.PORTFOLIO_CONFIG = {
  githubProfile: null, // Example format: "https://github.com/YOUR-REAL-USERNAME"
  projects: [
    {
      id: "property-records-api",
      name: "Property Records API",
      status: "Portfolio project",
      problem: "A backend foundation for organising property records through a structured API, with an emphasis on consistent data handling.",
      features: [
        "Create and manage property record data",
        "Structured API routes and request validation",
        "Automated checks and local development workflow"
      ],
      technologies: ["Python", "FastAPI", "SQLAlchemy", "pytest"],
      repositoryUrl: null,
      liveApiUrl: null,
      docsUrl: null
    },
    {
      id: "secureops-incident-tracker-api",
      name: "SecureOps Incident Tracker API",
      status: "Portfolio project",
      problem: "A backend prototype for recording and tracking security incidents in a consistent, auditable workflow.",
      features: [
        "Incident records and status-oriented workflows",
        "Validated API requests and structured responses",
        "Test suite for core application behaviour"
      ],
      technologies: ["Python", "FastAPI", "SQLAlchemy", "pytest"],
      repositoryUrl: null,
      liveApiUrl: null,
      docsUrl: null
    },
    {
      id: "nigerian-property-valuation-api",
      name: "Nigerian Property Valuation API",
      status: "Portfolio project",
      problem: "A prototype exploring how property comparables and valuation inputs can be represented in an API for the Nigerian context.",
      features: [
        "Represent comparable property data",
        "API-based valuation workflow prototype",
        "Tests and documentation for local use"
      ],
      technologies: ["Python", "FastAPI", "pytest"],
      repositoryUrl: null,
      liveApiUrl: null,
      docsUrl: null
    }
  ],
  technicalNotes: [
    // Add only public, working URLs, for example:
    // { title: "How I tested my first FastAPI project", url: "https://github.com/REAL-USERNAME/REAL-REPO/blob/main/README.md" }
  ]
};
