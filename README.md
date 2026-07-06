# Campus Connect

Campus Connect is a responsive web dashboard that allows students to browse campus events and notices in one place. The project provides an intuitive interface for viewing upcoming events, reading important notices, searching content, and filtering by category.

---
This is netlify deployed link #https://campusconnect-kgp.netlify.app/
## Features

### Event Feed
- Displays upcoming campus events
- Shows event title, venue, date, and category
- "Read More" button opens a detailed modal

### Notice Feed
- Displays important campus notices
- Shows notice title, category, and posted date
- Detailed notice popup using a modal

### Search & Filtering
- Keyword search for events and notices
- Category-based filtering
- Search and category filters work together

### Responsive Design
- Mobile-friendly layout
- Responsive event and notice cards
- Adaptive navigation

### Dark Mode
- Toggle between Light and Dark themes
- Theme preference is saved using Local Storage

### Loading & Error States
- Simulated loading indicator
- Error message display for failed loading scenarios

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)

---

## Project Structure

```
Campus_Connect/
│
├── index.html
├── events.html
├── notices.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── data.js
│   ├── app.js
│   ├── events.js
│   ├── notices.js
│   ├── modal.js
│   ├── noticeModal.js
│   └── theme.js
│
├── images/
│
└── README.md
```

---

## Setup & Run Instructions

1. Download or clone the project.

2. Open the project folder in Visual Studio Code.

3. Install the **Live Server** extension (recommended).

4. Right-click `index.html`.

5. Select **Open with Live Server**.

Alternatively, you can directly open `index.html` in any modern web browser.

---

## Challenges Faced

### 1. Dynamic Event Rendering

Initially, the event cards were static. This was solved by storing all event data in JavaScript objects and dynamically generating the cards using DOM manipulation.

### 2. Modal Functionality

The modal initially did not open correctly after filtering because newly created buttons lost their event listeners. This was resolved by reattaching event listeners every time the event list was re-rendered.

### 3. Search and Category Filtering

Combining keyword search with category filtering required applying both conditions simultaneously. A single filtering function was implemented to ensure both features worked together.

### 4. Dark Mode Styling

Some text became unreadable after enabling Dark Mode because only the background colors changed. This was fixed by adding separate Dark Mode styles for cards, forms, and modal components.

### 5. Responsive Layout

The layout initially looked good only on desktop. CSS Grid, Flexbox, and media queries were used to make the website responsive on different screen sizes.

---

## Future Improvements

- Backend integration with a database
- Real-time notices using an API
- User authentication
- Event registration
- React-based implementation
- Pagination and infinite scrolling
- changing to React Vite

---

## Author

Developed by **Sai Srujan**
