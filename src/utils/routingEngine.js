import agencies from "../data/agencies.json";
import rules from "../data/routingRules.json";

export function routeCase(incidentType) {
  const agencyIds = rules[incidentType] || ["POLICE"];
  return agencyIds.map((id) => agencies.find((a) => a.id === id)).filter(Boolean);
}

export function generateCaseId() {
  const year = new Date().getFullYear();
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `NCMP-${year}-${rand}`;
}