export const APP_CONFIG = {
  name: "Drop Countdown Lite",
  shortName: "Drop Countdown",
  slug: "drop-countdown-lite",
  tagline: "Upcoming release grids and countdowns for non-Plus product drops.",
  problem: "Merchants want Launchpad-like upcoming release experiences without full Plus campaign tooling.",
  persona: "Brand owner running limited drops, pre-release announcements or seasonal collection launches.",
  value: "A small drop planning app that turns scheduled publish dates into clean upcoming-drop screens.",
  primaryFlow: "Select upcoming products/collections, confirm publish timing, preview countdown cards and publish storefront block later.",
  color: "#0369a1",
  mainObject: "Drop campaign",
  workspaceLabel: "Drop planner",
  settingsLabel: "Countdowns",
  requiredScopes: ["read_products","read_publications","write_publications"],
  doNotRequestScopes: ["read_orders","read_customers","write_products"],
  integrations: [
  "publishablePublish can schedule future publication to a publication with write_publications.",
  "Product/collection reads power upcoming grid and countdown previews.",
  "Theme app extension later renders countdown blocks on storefront."
],
  mvpFeatures: [
  "Dashboard of upcoming, live and expired drops.",
  "Drop planner with timing, product list and countdown preview.",
  "Settings for time zone, sold-out message and publish readiness.",
  "Empty state for stores without scheduled releases."
],
  outOfScope: [
  "Email/SMS notify-me capture.",
  "Full Launchpad campaign orchestration.",
  "Automatic inventory hold or queueing."
],
  futureFeatures: [
  "Theme block for upcoming product grid.",
  "Notify-me capture with consent logging.",
  "Automatic state switch on publish time."
],
  screens: [
  "Dashboard: upcoming and live drop health.",
  "Drop planner: launch timing and product cards.",
  "Countdowns: display settings.",
  "Help/QA: publication and storefront timing tests."
],
  sampleRows: [
  [
    "May capsule",
    "2026-05-18 10:00",
    "High",
    "Scheduled"
  ],
  [
    "Sneaker restock",
    "2026-05-25 09:00",
    "Medium",
    "Needs products"
  ],
  [
    "Archive drop",
    "Live",
    "Low",
    "Monitor"
  ]
],
  metrics: [
  [
    "Upcoming drops",
    "3"
  ],
  [
    "Products staged",
    "41"
  ],
  [
    "Countdown blocks",
    "2"
  ]
],
  settingsFields: {
  "workflowName": "Friday capsule drop",
  "thresholdLabel": "Notify threshold minutes",
  "thresholdDefault": "60",
  "ownerEmail": "launch@example.com"
},
  risks: [
  "Scheduled publication applies only where Shopify supports it.",
  "Countdown accuracy depends on storefront caching and client clock."
],
} as const;

export type AppConfig = typeof APP_CONFIG;

export function requiredScopesText() {
  return APP_CONFIG.requiredScopes.join(",");
}
