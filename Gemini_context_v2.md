# Role
Act as a Senior Frontend Architect & UI/UX Designer specializing in "Calm Neo-SaaS" aesthetics.

# Task
Refactor the current Astro/React landing page project based on the "Komerze Manifesto".
You must EVOLVE the previous `Gemini_context.md` specification. Keep the technical stack and i18n logic, but completely pivot the Visual Identity and Layout to reflect "Controlled Freedom" and "Tranquility".

# 1. The Vibe Shift: "The Invisible Flow"
* **Previous Spec Override:** Ignore the "Deep Midnight Navy" background.
* **New Direction:** "Tranquil Neo-SaaS". [cite_start]The user wants to feel the "Sunday on the couch" ease[cite: 3].
* **Palette:**
    * **Base:** Soft Gray / Off-White (e.g., Slate-50 or Zinc-50). NOT pure white.
    * **Surfaces:** White cards with "Glassmorphism" borders (1px solid white/20) and heavy soft shadows (diffused).
    * **Accents:** Keep "Electric Indigo" and "Mint Teal" but use them sparingly for UI focus points (buttons, active states).
* **Typography:** Use `Satoshi` or `Inter` with slightly increased letter-spacing to create "air" and calmness.

# 2. Tech Stack & Architecture (Keep Strict)
* **Framework:** Astro (Latest).
* **Interactivity:** React Islands (`client:visible` for Bento Grid).
* **Animation:** Framer Motion (Crucial for the "Floating/Invisible" feel).
* **Styling:** Tailwind CSS.
* **Content/i18n:** YOU MUST USE the exact `ui.ts` dictionary provided in `Gemini_context.md` for ES, EN, PT. Do not change the text keys or values, just map them to the new design.

# 3. Component Breakdown (The Refactor)

## A. Hero Section: "Instant Peace"
* **Headline:** `ui.hero.headline` (animate in slowly).
* **Visual:** Instead of a complex dashboard screenshot, build a **React Component** depicting a stylized "Request Card".
    * *Animation:* The card floats up, a progress bar fills instantly, and a "Checkmark" appears with the text `ui.hero.notification`.
    * [cite_start]*Metaphor:* Show the system working as the "Invisible Referee"[cite: 9, 10]. It validates automatically without human friction.

## B. The Bento Grid (Centerpiece)
Implement a CSS Grid (Bento style) representing the Manifesto pillars. Use `framer-motion` for hover effects (scale 1.02, soft glow).
* **Card 1 (Large - The Stadium):** Map to `ui.bento.market_title`. Visual: A schematic minimal stadium/network connecting dots. [cite_start]Concept: "We are the infrastructure"[cite: 6].
* **Card 2 (Small - Speed):** Map to `ui.bento.speed_title`. Visual: A simple counter ticking down or a lightning bolt. [cite_start]Concept: "3 days to 3 minutes"[cite: 22].
* **Card 3 (Small - Transparency):** Map to `ui.bento.compliance_title`. Visual: An "eye" icon or a clean graph. [cite_start]Concept: "Radical Transparency"[cite: 18].
* **Card 4 (Medium - Smart Budget):** Map to `ui.bento.budget_title`. Visual: A wallet icon turning into a checkmark. [cite_start]Concept: "Funds available? Play continues"[cite: 10].

## C. The "How it Works" (Scroll-telling)
* [cite_start]Create a clean section showing the flow: `Homologated Supplier` + `Price Agreed` + `Budget OK` = `Auto Approval`[cite: 10].
* Use a vertical line connecting these steps that lights up as you scroll.

# 4. Execution Constraints
1.  **Performance:** Must score 100 on Lighthouse (Use Astro `<Image />`).
2.  **Responsiveness:** Bento grid must collapse gracefully to a single column on mobile.
3.  **Code Quality:** Use reusable Astro components for layout. Keep React components isolated in `src/components/react`.

GOAL: The user should feel that the software is "Invisible" and the process is "Fluid".