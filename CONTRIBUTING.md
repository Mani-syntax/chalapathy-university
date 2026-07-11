# Contributing to Chalapathi University Website

Welcome to the **CiTY Chalapathi University** official web platform repository! To maintain high code quality, enterprise-grade stability, and smooth collaboration across all team members (**Hitaishi**, **Mani**, **Academic Team**, and other contributors), we strictly adhere to the Git workflow outlined below.

---

## 🌳 1. Branch Strategy

We maintain two permanent branches:

| Branch | Description | Direct Pushes Allowed? |
| :--- | :--- | :---: |
| **`main`** | **Production / Stable Code**. This branch directly powers the live university website (`https://cityuniversity.edu.in`). It must *always* be deployable and bug-free. | ❌ **No** (Protected) |
| **`develop`** | **Active Development Branch**. All active feature development, updates, and daily commits land here. Once tested and stabilized, `develop` is merged into `main`. | ✅ **Yes** (For collaborators) / PRs |

### Golden Rule:
> **NEVER push directly to `main`.** All day-to-day work must be done on or merged into `develop`.

---

## 🔄 2. Daily Workflow

### Before Starting Work Every Day
Always make sure you are on the `develop` branch and have pulled the latest code from remote:
```bash
git checkout develop
git pull origin develop
```

*(Optional but Recommended for Large Features)*: Create a feature branch off `develop`:
```bash
git checkout -b feature/your-feature-name
```

### Making Changes & Committing
After making your pixel-perfect code changes:
```bash
# Check modified files
git status

# Stage changes
git add .

# Commit with a descriptive conventional commit message
git commit -m "feat(schools): add AI & Data Science dynamic program list"

# Push changes to the develop branch (or your feature branch)
git push origin develop
```

---

## 📝 3. Commit Message Conventions

We follow **Conventional Commits** (`type(scope): description`) to ensure clean history and automated release notes.

### Valid Types:
- **`feat`**: A new feature or section (e.g., `feat(admissions): implement 5-step application wizard`)
- **`fix`**: A bug fix (e.g., `fix(header): resolve mobile drawer scroll lock`)
- **`style`**: Styling, UI polish, or CSS formatting changes (e.g., `style(hero): adjust gradient opacity on campus background`)
- **`refactor`**: Code restructuring without altering functionality (e.g., `refactor(components): extract stats array to data module`)
- **`docs`**: Documentation changes (e.g., `docs(readme): update environment setup guide`)
- **`chore`**: Maintenance tasks, dependencies, build settings (e.g., `chore(package): upgrade lucide-react`)

### Examples:
✅ `feat(schools): add overlapping circular colored badges to school cards`  
✅ `fix(footer): correct contact phone number alignment on mobile`  
❌ `updated stuff` or `fixed bugs`

---

## 📥 4. How to Sync the Latest Code

If another team member (e.g., Hitaishi or Mani) pushed changes to `develop` while you were working:

1. **Stash your uncommitted local changes** (if any):
   ```bash
   git stash
   ```
2. **Pull the latest `develop` commits with rebase**:
   ```bash
   git checkout develop
   git pull --rebase origin develop
   ```
3. **Re-apply your local changes**:
   ```bash
   git stash pop
   ```

---

## 🛡️ 5. Rules to Avoid Merge Conflicts

To prevent painful conflicts when multiple team members touch the same repository:

1. **Pull frequently**: Always run `git pull origin develop` right before starting a coding session and right before creating a commit or pull request.
2. **Work on separate files/components**:
   - **Hitaishi**: Focuses on specific sections (e.g., `src/features/admissions/`, `src/app/admissions/`).
   - **Mani**: Focuses on structural layouts or UI (`src/components/layout/`, `src/features/schools/`).
   - **Academic Team**: Focuses on data/content (`src/data/schools.ts`, `src/data/news.ts`).
3. **Use data modules for content updates**: If changing text, numbers, or news bulletins, edit files inside `src/data/` or `src/constants/` instead of hardcoding edits across UI layout components.
4. **No long-lived branches**: If you create a feature branch, merge it back into `develop` within 24–48 hours so it doesn't drift far behind `develop`.
5. **Format code automatically**: Ensure ESLint and Prettier formatting checks pass before pushing so formatting differences don't trigger false git conflicts:
   ```bash
   npm run lint
   ```

---

## 🏁 6. Releasing to Production (`develop` → `main`)

When `develop` reaches a stable milestone (e.g., end of sprint, verified QA):

1. A Pull Request (PR) is opened from `develop` → `main` on GitHub.
2. At least one team lead reviews the build (`npm run build`).
3. Upon approval, `develop` is merged into `main`.
4. Vercel automatically deploys the updated `main` branch to production!
