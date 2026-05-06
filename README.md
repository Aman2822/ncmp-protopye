# NCMP — National Case Management Platform

A centralized digital platform for reporting and managing Sexual and Gender-Based Violence (SGBV) and Technology-Facilitated Gender-Based Violence (TFGBV) cases in Sri Lanka.

Built as part of a Business Analyst case study for Loons Lab.

---

## Problem Statement

Victims of SGBV/TFGBV in Sri Lanka are frequently redirected between 6 government agencies, leading to repeated trauma, loss of evidence, and case drop-off. This platform solves that by providing a single entry point that automatically routes cases to the correct agency.

---

## Features

### Public Portal
- Report an incident in 4 steps
- Anonymous reporting option
- Evidence upload
- Auto case routing to correct agency
- Case reference ID generation
- Case status tracker

### Internal Portal (Agency Officers)
- Dashboard with live case stats
- Full case list with status filters
- Detailed case view with evidence files and officer notes
- Inter-agency support requests
- Analytics — cases by agency and type

---

## Agencies Covered
- Police Children & Women Bureau
- Cyber Crimes Investigation Division (CCID)
- National Child Protection Authority (NCPA)
- Ministry of Women & Child Affairs (MoWCA)
- Sri Lanka CERT (SLCERT)

---

## Tech Stack
- React (Vite)
- React Router DOM
- Tailwind CSS
- JSON mock data
- Custom routing engine

---

## How to Run

```bash
git clone https://github.com/Aman2822/ncmp-protopye.git
cd ncmp-protopye
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## Project Structure