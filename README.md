# BYU-Pathway Worldwide Online
## WDD 330 - Web Frontend Development II

### ⛺ My Book Project

This repository is for a personal book wishlist web application project for WDD 330.

### Features & Technologies

**Core JavaScript & Architecture:**
- ES6 modules for code organization.
- Class instantiation for creating objects.
- `async/await` for handling asynchronous operations.
- Event listeners for user interactions.

**APIs & Data:**
- Static class methods and `fetch` for API requests.
- `.map()` to transform API data.
- `.json()` to parse API responses.
- APIs Used:
    - dbooks.org API (`https://www.dbooks.org/api/recent`)
    - Open Library API
    - Google Books API
    - Wikipedia API

**State Management:**
- `localStorage` for persisting data.
- `JSON.parse()` and `JSON.stringify()` for handling data in `localStorage`.
- `localStorage.getItem('wishlist')` loads saved data on application start.
- `localStorage.setItem()` persists the wishlist.

**Styling & UX:**
- Grid layout for displaying book information.
- Transitions for smooth UI animations.
- Button states for clear user feedback.
- Responsive design for different screen sizes.
- `.book-card:hover` transform animation for visual feedback.
- `.wishlist-btn` with an `.added` state for wishlist items.

**Routing & Navigation:**
- Nav link click handlers with `preventDefault()` for client-side routing.
- `popstate` and `DOMContentLoaded` listeners for handling browser history and initial page load.

### Prerequisites

- You must have Node installed to run the following commands.
[WDD 330 Setup Environment](https://byui-cse.github.io/wdd330-ww-course/intro/)

### Common Workflow Commands

- `npm run lint` to run ESLint against your code to find errors.
- `npm run format` to run Prettier to automatically format your code.
- `npm run start` starts up a local server and updates on any JS or CSS/SCSS
- `npm run build` to build final files when you are ready to turn in.


---
_BYU-Pathway Worldwide improves lives through access to spiritually based, online affordable higher education. Its mission is to develop disciples of Jesus Christ who are leaders in their homes, the Church, and their communities._