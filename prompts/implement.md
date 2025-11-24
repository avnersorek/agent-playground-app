# Contributing to Emoji Double - Code Consistency Guide

## Project Overview
Emoji Double is a React mini game built with Vite. This guide ensures consistency as the codebase evolves.

## Project Structure

```
agent-playground-app/
├── src/
│   ├── components/     # React UI components
│   ├── hooks/          # Custom React hooks for business logic
│   ├── utils/          # Pure utility functions and constants
│   ├── App.jsx         # Root component (only file with default export)
│   ├── App.css         # Global app styles
│   ├── index.css       # CSS reset and base styles
│   └── main.jsx        # Application entry point
├── prompts/            # AI agent prompts and guides
├── index.html          # HTML entry point
├── vite.config.js      # Vite configuration
└── package.json        # Dependencies and scripts
```

## Code Style Conventions

### Component Guidelines

**DO:**
- Use functional components exclusively (no class components)
- Export components as named exports: `export function ComponentName() {}`
- Use PascalCase for component names
- Destructure props in function parameters
- Keep components focused and single-purpose

**Example:**
```jsx
export function GameHeader({ round }) {
  return (
    <div className="header">
      <h1>Emoji Double</h1>
      <p className="round">Round: {round}</p>
    </div>
  )
}
```

**DON'T:**
- Use default exports (except for [App.jsx](src/App.jsx))
- Create class components
- Use PropTypes or TypeScript (this is a plain JS project)

### Custom Hooks

**DO:**
- Prefix all custom hooks with `use`
- Use camelCase naming: `useEmojiGame`, `useGameState`
- Export as named exports
- Keep game logic and state management in hooks
- Return objects with descriptive property names

**Example:**
```js
export function useEmojiGame() {
  const [round, setRound] = useState(1)
  // ... logic
  return {
    round,
    leftEmojis,
    rightEmojis,
    handleEmojiClick
  }
}
```

### Utility Functions

**DO:**
- Use camelCase for function names
- Export as named exports
- Keep functions pure (no side effects)
- Use UPPER_SNAKE_CASE for constants
- Document complex algorithms with brief comments

**Example:**
```js
export const EMOJI_POOL = [
  '😀', '😃', '😄', // ...
]

export function shuffleArray(array) {
  const newArray = [...array]
  // ... implementation
  return newArray
}
```

### Styling

**DO:**
- Use plain CSS (no CSS-in-JS, no Tailwind)
- Use kebab-case for class names: `emoji-grid`, `left-side`
- Import CSS directly in components/App
- Keep mobile-first responsive design in mind
- Use semantic class names describing purpose, not appearance

**Example:**
```jsx
<div className={`side ${side}-side`}>
  <div className="emoji-grid">
```

### File Naming

**DO:**
- Use PascalCase for component files: `GameHeader.jsx`, `EmojiGrid.jsx`
- Use camelCase for hooks: `useEmojiGame.js`
- Use camelCase for utilities: `emojiUtils.js`
- Use `.jsx` extension for files with JSX
- Use `.js` extension for plain JavaScript

## State Management

**DO:**
- Use React's built-in useState and useEffect
- Keep state as close to where it's used as possible
- Lift state only when needed by multiple components
- Use custom hooks to encapsulate complex state logic

**DON'T:**
- Add external state management libraries (Redux, Zustand, etc.)

## Code Organization

### When to Create New Files

**Create a new component when:**
- UI logic can be isolated and reused
- A component becomes too large (>100 lines)
- A section has distinct responsibilities

**Create a new hook when:**
- Business logic can be extracted and reused
- State management becomes complex
- Multiple components need the same stateful logic

**Create a new utility when:**
- You have pure functions that don't depend on React
- Logic needs to be shared across multiple components/hooks
- You're working with data transformations or calculations

### Import Organization

Order imports as follows:
1. React imports
2. Internal utilities/hooks
3. Internal components
4. CSS imports

**Example:**
```jsx
import { useState, useEffect } from 'react'
import { generateRound } from '../utils/emojiUtils'
import { GameHeader } from './components/GameHeader'
import './App.css'
```

## Mobile-First Approach

**Remember:**
- This app is designed for mobile devices
- Test on mobile viewports
- Keep touch targets appropriately sized
- Consider gesture interactions
- Maintain viewport meta tags in [index.html](index.html)

## Code Quality

**DO:**
- Write self-documenting code with clear variable/function names
- Keep functions small and focused
- Use meaningful variable names
- Add comments only when logic is non-obvious
- Avoid deep nesting (max 3 levels)

**DON'T:**
- Over-comment obvious code
- Create unnecessary abstractions
- Add features not explicitly needed
- Use abbreviations in names (except common ones like `pos`, `idx`)

## Testing Changes

Before committing:
1. Remove any used code

## Questions?

When in doubt:
- Look at existing similar code
- Follow the simplest approach
- Maintain consistency over cleverness
- Keep the mobile experience smooth
- Ask before adding new dependencies
