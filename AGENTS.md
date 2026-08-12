# AGENTS.md

# Repository AI Instructions

These instructions apply to every AI-generated code change in this repository.

The objective is to build and maintain a **production-quality static website** that is:

- Fast
- Accessible
- SEO optimized
- Responsive
- Secure
- Maintainable
- Consistent
- Easy to extend

The AI should prioritize improving the existing project rather than rewriting it.

---

# Decision Framework

When multiple valid solutions exist, choose them in this order:

1. Accessibility
2. Correctness
3. Maintainability
4. Performance
5. SEO
6. Simplicity
7. Visual polish

Never improve performance at the expense of accessibility or correctness.

Whenever a trade-off is required, explain it.

---

# Before Writing Any Code

Always perform these steps first:

- Read surrounding code.
- Understand the existing architecture.
- Search for reusable HTML patterns.
- Search for reusable Tailwind utility patterns.
- Search for reusable JavaScript modules.
- Search for existing components before creating new ones.
- Extend existing implementations whenever possible.
- Keep changes as small as practical.

Never rewrite a file simply because you prefer another implementation.

---

# Project Goals

Every code change should preserve or improve:

- Accessibility (WCAG 2.2 AA)
- Performance
- SEO
- Maintainability
- Reusability
- Consistency
- Readability

---

# Tech Stack

- HTML5
- Tailwind CSS
- Vanilla JavaScript (ES2023)
- No frontend frameworks
- No build tools unless explicitly requested

---

# General Principles

Always:

- Prefer semantic HTML.
- Prefer progressive enhancement.
- Keep JavaScript modular.
- Write self-documenting code.
- Preserve existing functionality.
- Follow the project's conventions.
- Keep code easy to understand.
- Reuse existing utilities and components.

Never:

- Add dependencies without approval.
- Rewrite working code unnecessarily.
- Rename files or folders without reason.
- Introduce duplicate components.
- Duplicate utility classes unnecessarily.
- Leave commented-out code.
- Leave TODO comments.
- Use inline CSS.
- Use inline JavaScript.
- Use deprecated APIs.

---

# Design Language

The website should feel:

- Modern
- Professional
- Clean
- Minimal
- Trustworthy
- Fast

Avoid:

- Visual clutter
- Excessive gradients
- Inconsistent spacing
- Random border radii
- Inconsistent shadows
- Multiple design styles

Maintain visual consistency across every page.

---

# Layout System

Use a mobile-first approach.

Preferred layout tools:

- Flexbox
- CSS Grid
- Responsive Tailwind utilities

Avoid:

- Fixed-width layouts
- Absolute positioning unless required
- Pixel-perfect positioning
- Deeply nested containers

Design should work well on:

- 320px mobile
- Tablet
- Laptop
- Desktop
- Ultra-wide screens

---

# Spacing Guidelines

Use consistent spacing.

Preferred spacing scale:

- 4
- 8
- 12
- 16
- 24
- 32
- 48
- 64

Prefer Tailwind spacing utilities over arbitrary values.

Avoid values like:

```
w-[347px]
mt-[13px]
```

unless absolutely necessary.

---

# Typography

Always maintain a consistent typography hierarchy.

Rules:

- One H1 per page.
- Never skip heading hierarchy without reason.
- Paragraphs should remain readable.
- Prefer left-aligned body text.
- Maintain consistent line heights.
- Use consistent font weights.
- Avoid oversized headings on mobile.

---

# HTML Guidelines

Always use semantic HTML.

Prefer:

- header
- nav
- main
- section
- article
- aside
- footer
- figure
- figcaption

Avoid generic div wrappers unless necessary.

Every page should contain:

- One H1
- Logical heading hierarchy
- Semantic landmarks
- Valid HTML
- Meaningful labels

---

# Accessibility

Accessibility is mandatory.

Target:

WCAG 2.2 AA minimum.

Every feature should support:

- Keyboard navigation
- Screen readers
- Reduced motion
- Proper focus management
- High contrast
- Semantic markup

## Images

Every informative image requires meaningful alt text.

Decorative images should use:

```
alt=""
```

## Forms

Every field must have:

- label
- id
- name
- autocomplete
- validation message

Never rely only on placeholders.

## Keyboard

Everything must be operable without a mouse.

Dialogs:

- Trap focus
- Close with Escape
- Restore focus when closed

Navigation:

- Visible focus states
- Skip to content link

## ARIA

Use ARIA only when semantic HTML cannot provide the required meaning.

---

# SEO

Every page should include:

- Unique title
- Meta description
- Canonical URL
- Open Graph tags
- Twitter Card
- Robots directives where appropriate
- Structured data (JSON-LD) when applicable

Maintain:

- Logical heading hierarchy
- Descriptive URLs
- Internal linking
- Descriptive anchor text

Never use:

"Click here"

Use descriptive link text.

---

# Images

Prefer:

- AVIF
- WebP

Always specify:

- width
- height

Hero images should include:

- fetchpriority="high"
- decoding="async"

Lazy load:

- Below-the-fold images only

Never lazy load:

- Logo
- Hero image
- Largest Contentful Paint image

---

# Performance

Optimize for Core Web Vitals.

Targets:

- Lighthouse Performance ≥ 95
- Accessibility = 100
- Best Practices = 100
- SEO = 100
- CLS < 0.1
- LCP < 2.5 seconds
- INP < 200 ms

Always:

- Use defer or module scripts
- Minimize DOM size
- Avoid layout shifts
- Minimize JavaScript
- Remove unused CSS
- Lazy load non-critical assets

Avoid:

- Large animation libraries
- Heavy DOM manipulation
- Blocking JavaScript

---

# Tailwind CSS

Prefer Tailwind utilities over custom CSS.

Reuse existing utility patterns.

Prefer:

- container
- mx-auto
- max-w-*
- flex
- grid
- gap
- space-x
- space-y

Avoid:

- Excessive arbitrary values
- Duplicate utility combinations
- Custom CSS when Tailwind already provides a utility

---

# JavaScript

Use modern JavaScript.

Prefer:

- const
- let
- async/await
- modules
- event delegation
- descriptive names
- pure functions where practical

Avoid:

- var
- jQuery
- global variables
- deeply nested callbacks

Separate:

- UI logic
- Business logic
- Utilities

Never mix unrelated responsibilities.

---

# Progressive Enhancement

The website should remain usable if JavaScript fails.

Critical content must render in HTML.

JavaScript should enhance the experience rather than provide the only way to access content.

---

# Components

Before creating:

- Button
- Card
- Hero
- Navigation
- Footer
- Modal
- Accordion
- CTA

Search the project first.

Reuse existing implementations whenever possible.

Only create new patterns when necessary.

---

# Forms

Forms should:

- Validate inline
- Preserve entered values
- Display clear error messages
- Support keyboard submission
- Prevent duplicate submissions
- Show loading states where appropriate

---

# Navigation

Navigation must:

- Support keyboard navigation
- Include aria-current
- Support screen readers
- Provide visible focus indicators

---

# Animations

Animations should:

- Be subtle
- Improve usability
- Respect prefers-reduced-motion

Never rely on animation to communicate important information.

---

# Security

Never:

- Use eval()
- Inject unsanitized HTML
- Trust user input

Always:

- Escape dynamic content
- Validate input
- Use rel="noopener noreferrer" for external links

---

# Browser Support

Support latest stable versions of:

- Chrome
- Firefox
- Safari
- Edge

Gracefully degrade unsupported features.

---

# Comments

Comment only when explaining:

- Why
- Trade-offs
- Complex logic

Do not comment obvious code.

Remove outdated comments.

---

# Code Style

Prefer:

- Early returns
- Small functions
- Descriptive names
- Single responsibility

Remove:

- Dead code
- Unused variables
- Duplicate logic

---

# Content Guidelines

Content should be:

- Clear
- Professional
- Friendly
- Concise

Avoid:

- Marketing buzzwords
- Filler text
- Overly technical language for general audiences

Use action-oriented CTAs.

---

# Testing Checklist

Before considering a task complete, verify:

- No console errors
- No accessibility violations
- No duplicate IDs
- Valid HTML
- Responsive from 320px to desktop
- Keyboard navigation works
- Screen reader compatibility maintained
- No broken links
- No horizontal scrolling
- Images load correctly
- Focus order is logical
- Lighthouse goals remain satisfied

---

# Expected AI Output

Every completed task should include a concise summary containing:

1. What changed
2. Why the change was made
3. Accessibility improvements
4. SEO improvements
5. Performance impact
6. Any assumptions made
7. Manual testing recommendations

---

# If Requirements Are Unclear

Do not guess.

Instead:

- Explain assumptions.
- Ask concise clarification questions.
- Present alternatives when appropriate.

Prefer correctness over speed.
