---
sidebar_position: 1
toc_min_heading_level: 2
toc_max_heading_level: 4
---

## Introduction

### Overview

The frontend of this application is built as a Multi-Page Application (MPA), providing a traditional, server-rendered experience with multiple distinct pages and navigation flows. This approach ensures that each page is independently loaded and rendered.

### Technology Stack

The frontend technologies used in this application are:

- HTML5
- CSS
- Bootstrap
- JavaScript
- JQuery

### User Interface and Experience (UI/UX)

While MPAs often result in more page refreshes, we focus on providing a smooth, intuitive navigation experience with clear calls to action and content organization.
Each page is designed with accessibility and user-centric design principles to ensure that all users, regardless of device or ability, can interact with the application effectively.
The entire application is fully responsive and adjusts to different screen sizes. From the navigation menu to the responsive tables, users with
different screen sizes can access and enjoy the experience while on the application.

## Architecture

### Frontend Structure

Application Structure

    Pages: The application is divided into several pages, each representing a distinct view of the system. Examples include the homepage, user profile page, settings page, and more. These pages are accessible through navigation links that trigger full page reloads, providing a traditional browsing experience.
    Routing: Routing is managed by the backend, where the server responds with a different HTML page based on the URL requested. This routing structure ensures that each page has its own URL, making the app more accessible and shareable.
    State Management: While MPAs generally have less need for sophisticated client-side state management than SPAs, we still leverage client-side JavaScript for managing the state of interactive elements (such as forms, modals, and notifications) that are local to each page.

Performance Considerations

MPAs traditionally have longer load times due to full page reloads with each navigation. However, we mitigate this by implementing strategies such as:

    Lazy Loading: Non-critical JavaScript and assets are loaded only when needed to ensure that the initial load time is minimized.
    Optimized Asset Delivery: Assets such as images, scripts, and styles are optimized and served via a Content Delivery Network (CDN) to reduce load times for users across different geographical regions.
