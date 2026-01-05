<!-- 
Created with prompt: 
Read the project and analyze the way the app is built. Write a guide in prompts/implement.md that will explain how the app works and general guidelines for extending and maintaining the app. Keep the file under 200 lines.
 -->


# Emoji Double - Implementation Guide

## Tech Stack

- **React 18** with Vite for fast development
- **PropTypes** for runtime type checking
- **CSS** with BEM-like naming convention
- **Custom Hooks** pattern for stateful logic

## Project Structure

```
src/
├── App.jsx              # Main app component
├── App.css              # App-specific styles
├── main.jsx             # React entry point
├── index.css            # Global styles & reset
├── components/          # Reusable UI components
│   ├── GameHeader.jsx   # Game title & round counter
│   └── EmojiGrid.jsx    # 5x5 emoji grid display
├── hooks/               # Custom React hooks
│   └── useEmojiGame.js  # Game logic & state management
└── utils/               # Pure utility functions
    └── emojiUtils.js    # Game generation logic
```

## Architecture Patterns

### 1. Custom Hook Pattern

Game logic lives in `hooks/useEmojiGame.js`. This hook:
- Manages game state (round, emoji grids)
- Handles user interactions (clicks)
- Returns clean interface for components

**When adding features:**
- Add new game state to the hook
- Return new state values or handlers
- Keep components presentational only

### 2. Component Architecture

**Presentational Components** (`components/`):
- Receive data via props
- No business logic
- Use PropTypes for validation

**Container Component** ([App.jsx](src/App.jsx)):
- Uses custom hooks
- Composes presentational components
- Minimal JSX - focused on composition

### 3. Utility Functions

Pure functions in `utils/emojiUtils.js`:
- No side effects
- Easy to test
- Exported for reuse

## Adding Features

### Adding a New Game Mechanic

1. **Update the hook** ([hooks/useEmojiGame.js](src/hooks/useEmojiGame.js:4)):
   ```javascript
   const [newFeature, setNewFeature] = useState(initialValue)
   // Add logic to manage feature
   return { ..., newFeature, handleNewFeature }
   ```

2. **Update utility functions** if needed ([utils/emojiUtils.js](src/utils/emojiUtils.js:34))

3. **Pass to components** via props in [App.jsx](src/App.jsx:6)

### Adding a New Component

1. Create in `components/` directory
2. Use PropTypes for prop validation
3. Keep it presentational (no hooks with complex logic)
4. Import and use in parent component

### Modifying Game Logic

- Edit `generateRound()` in [utils/emojiUtils.js](src/utils/emojiUtils.js:34)
- Constants at top of file (GRID_SIZE, EMOJIS_PER_SIDE)
- EMOJI_POOL can be extended with more emojis

## Styling Guidelines

- **Global styles**: [index.css](src/index.css:1) - reset, body, root
- **Component styles**: Co-located CSS files (e.g., [App.css](src/App.css:1))
- **Naming**: BEM-inspired (`emoji-button`, `emoji-button.empty`, `left-side`)
- **Responsive**: Mobile-first with `@media (max-width: 768px)` breakpoints

## State Management

Currently uses React's built-in `useState`. For more complex state:
- Consider extracting additional hooks
- Keep state close to where it's used
- Use lazy initialization for expensive computations

## Testing Considerations

- Utility functions are pure - easy to unit test
- Custom hooks can be tested with @testing-library/react-hooks
- Components use PropTypes - catch type errors early

## Common Tasks

**Change emoji pool**: Edit `EMOJI_POOL` in [utils/emojiUtils.js](src/utils/emojiUtils.js:1)
**Adjust grid size**: Modify `GRID_SIZE` constant
**Change difficulty**: Adjust `EMOJIS_PER_SIDE` count
**Add sound effects**: Create `utils/audioUtils.js`, hook into `handleEmojiClick`
**Persist high score**: Add localStorage in `useEmojiGame` hook
**Add animations**: Extend CSS with `@keyframes`, apply via className

## Development

```bash
npm run dev    # Start dev server
npm run build  # Production build
npm run lint   # ESLint checks
```

## Key Design Decisions

- **Vite over CRA**: Faster dev startup, optimized builds
- **PropTypes over TypeScript**: Lighter weight for this mini-game
- **CSS over CSS-in-JS**: Simpler, no runtime overhead
- **Custom hooks over Context**: Game state is local, no need for global state
