# QA Sanity Testing - Emoji Double

## Overview
This prompt guides automated QA sanity testing for the Emoji Double game using Chrome DevTools MCP.
Tests should be run against the local development server at `localhost:5173`.

## Prerequisites
- Development server is expected to be already running on `localhost:5173`. Do not start it.
- Chrome DevTools MCP available and configured. If it is not the user should run `claude mcp add chrome-devtools-mcp -- npx -y chrome-devtools-mcp@latest` in his terminal.
- Clear browser state (consider starting fresh)

## Testing Workflow

### 1. Initialize Browser Session
Use the Chrome DevTools MCP to navigate to the application:
- Navigate to `http://localhost:5173`
- Wait for page load completion
- Take an initial screenshot to document starting state

### 2. Basic Page Load Tests

#### 2.1 Verify Page Loads Successfully
- Confirm HTTP 200 response
- Check that no critical console errors are present
- Verify the page title or main heading is visible

#### 2.2 Check Core UI Elements
Verify the following elements are present and visible:
- [ ] Game title/header ("Emoji Double")
- [ ] Left and right emoji panels
- [ ] Round indicator
- [ ] Any scoring or game state displays
- [ ] All expected emojis are rendered (not missing or broken)

Take a screenshot after verification.

### 3. Basic Interaction Tests

#### 3.1 Click Interaction Test
- Identify a clickable emoji element
- Perform a click action using MCP click functionality
- Observe and verify expected behavior:
  - Visual feedback (selection, animation, etc.)
  - Game state update (if applicable)
  - No console errors

Take a screenshot after interaction.

#### 3.2 Mobile Viewport Test
- Resize viewport to mobile dimensions (375x667 or similar)
- Verify layout is responsive
- Check that touch targets are appropriately sized
- Confirm no layout overflow or breaking

Take a screenshot in mobile view.

**Note on resize_page limitations:**
The `resize_page` tool may fail with "Restore window to normal state" error if the browser is maximized/fullscreen. If this occurs, use JavaScript to simulate mobile viewport:

```javascript
// Use evaluate_script to create a mobile viewport simulator
() => {
  const originalRoot = document.getElementById('root');
  if (!originalRoot) return { error: 'Root not found' };

  const mobileSimulator = document.createElement('div');
  mobileSimulator.style.cssText = `
    width: 375px;
    height: 667px;
    margin: 0 auto;
    border: 2px solid #333;
    overflow: auto;
    position: relative;
    background: white;
  `;

  const parent = originalRoot.parentNode;
  parent.style.cssText = 'background: #ccc; padding: 20px;';

  const rootClone = originalRoot.cloneNode(true);
  mobileSimulator.appendChild(rootClone);
  originalRoot.replaceWith(mobileSimulator);

  return { success: true, simulatedWidth: 375, simulatedHeight: 667 };
}
```

This creates a 375x667px container that simulates a mobile viewport for testing purposes.

## Test Reporting Format

Document results in the following format:

```
✅ PASSED: [Test name] - [Brief description of success]
❌ FAILED: [Test name] - [Description of failure with details]
⚠️  WARNING: [Test name] - [Non-critical issue observed]
```

## Expansion Guidelines

As new features are added, expand this prompt with:
- Additional interaction tests for new game mechanics
- State management verification (scores, rounds, win/lose conditions)
- Performance checks (animation smoothness, response times)
- Accessibility tests (keyboard navigation, screen reader compatibility)
- Cross-browser testing steps

## Notes
- Keep test runs quick and focused on critical functionality
- Document any unexpected behavior even if tests pass
- Include screenshots for visual verification
- If the dev server isn't running, report it and skip tests
