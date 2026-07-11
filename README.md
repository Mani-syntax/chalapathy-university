# CiTY Chalapathi University — Official Web Platform

Welcome to the **CiTY Chalapathi University** web platform repository (`https://cityuniversity.edu.in`). Built with cutting-edge technologies (**Next.js 16**, **React 19**, **TypeScript 5**, **Tailwind CSS 4**, and **Framer Motion 12**), this platform provides a world-class, pixel-perfect, responsive digital experience for students, faculty, recruiters, and international applicants.

🔗 **GitHub Repository**: [Mani-syntax/chalapathy-university](https://github.com/Mani-syntax/chalapathy-university)

---

## 🏛️ Repository Architecture & Clean Directory Structure

Our codebase strictly follows domain-driven feature separation under `src/`:

```
src/
├── app/                  # Next.js 16 App Router Routes (/about, /admissions, /contact, /erp, /schools/[slug])
├── components/           # Shared & Layout Components
│   ├── layout/           # Sticky Header (40px top bar + 85px nav) & 6-column Footer
│   └── features/         # Global widgets (VirtualTour, AIAssistant, ProgramFinder)
├── features/             # Domain-Specific Feature Modules
│   ├── admissions/       # Admissions open card, application wizard steps
│   ├── academics/        # Stats bar, curriculum highlights
│   ├── schools/          # School card grids, school detail headers
│   ├── research/         # News bulletins, events, accreditation badges
│   ├── placements/       # Feature strip, top recruiters display
│   └── contact/          # Quick contact summary card & maps
├── data/                 # Static content modules (schools, stats, news, badges, navigation)
├── services/             # API data access layer (REST/GraphQL integration points)
├── hooks/                # Custom React hooks (useCountUp, useScrollPosition)
├── lib/                  # Utilities & centralized Framer Motion animation variants
├── types/                # TypeScript interfaces (School, Stat, NewsItem, etc.)
└── constants/            # App-wide constants (COLORS, LAYOUT, ROUTES, CONTACT)
```

---

## 🌳 Team Git Workflow & Branch Strategy

We use a strict two-branch model to ensure production stability:

```
main    (Protected / Production)   ──────●────────────────────────●────→ (Live Website)
                                          ▲                        ▲
                                          │ Merge PR               │ Merge PR
develop (Active Team Development)  ──●────┴────●────●────●────●────┴────→ (Daily Collaboration)
                                     │         ▲    ▲    ▲    ▲
                                     │         │    │    │    │
Team Collaborators                   └─── Hitaishi  │    │  Academic Team
                                                  Mani   └── Others
```

### Permanent Branches:
1. **`main`**: Production-ready, stable code. Deployed automatically to live servers. **No direct pushes allowed.**
2. **`develop`**: The active collaboration branch. All daily commits, features, and content updates land here first.

### Team Flow Roles:
- **Hitaishi**: Pulls from `develop` → builds features/pages → pushes/merges to `develop`.
- **Mani**: Pulls from `develop` → designs layouts & structural components → pushes/merges to `develop`.
- **Academic Team**: Pulls from `develop` → updates data modules (`src/data/`) → pushes to `develop`.
- **When Stable**: The team opens a Pull Request (`develop` → `main`) to ship the milestone to production.

---

## ⚡ Quick-Start Git Commands for New Collaborators

### 1. Initial Clone & Setup
```bash
# Clone the repository
git clone https://github.com/Mani-syntax/chalapathy-university.git
cd "chalapathy-university"

# Install dependencies
npm install

# Check out the active development branch
git checkout develop
git pull origin develop

# Start the local dev server
npm run dev
```

### 2. Daily Coding Routine
```bash
# 1. ALWAYS sync before writing code
git checkout develop
git pull origin develop

# 2. Make your code changes in your favorite editor...

# 3. Check modified files & run build verification
git status
npm run build

# 4. Stage and commit using Conventional Commits
git add .
git commit -m "feat(schools): update program list and eligibility requirements"

# 5. Push your work to the shared develop branch
git push origin develop
```

For detailed contributing guidelines, branch protection rules, and conflict avoidance tips, see [CONTRIBUTING.md](./CONTRIBUTING.md).

---

## 📋 Project Development Guidelines

1. **Pixel-Perfect Alignment**: All pages must follow our **Poppins (headings)** + **Inter (body)** typography rules and maintain consistent padding/margins (`max-w-[1340px]` containers).
2. **Never Hardcode Data**: Always put news, school descriptions, tuition fees, or stats into `src/data/` or `src/constants/`. This allows non-developers on the Academic Team to easily update content without touching React JSX components.
3. **Responsive by Default**: Every component must look stunning on mobile (`<640px`), tablet (`640px–1024px`), and desktop (`>1024px`).
4. **Clean Animations**: Use our pre-built Framer Motion variants from `src/lib/animations.ts` (`fadeUp`, `stagger`, `fadeIn`) to maintain smooth 60fps animations across all pages without bloating bundle size.
5. **No Direct `main` Pushes**: If you attempt to push directly to `main`, GitHub branch protection will reject your push. Always target `develop`.
