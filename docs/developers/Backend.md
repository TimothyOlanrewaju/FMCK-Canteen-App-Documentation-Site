---
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 5
---

The backend of the application is the core that powers its functionality. It is responsible for managing business logic, handling database operations, and rendering HTML pages that users interact with. In this Python-Django-based project, the backend architecture follows the Model-View-Template (MVT) design pattern, a robust and intuitive framework for building dynamic web applications.

## Technology Stack

The following backend technologies were used in the development of this application:

- Python
- Django
- SQLite (_database_)

## Architecture

### How MVT works

The MVT model is central to Django’s backend operations. Here’s how it works:

- **Model**: Represents the data layer, defining the structure of your database and providing a Pythonic interface for querying and managing data.
- **View**: Acts as the intermediary between the `Model` and the `Template`. It processes requests, fetches the necessary data, and sends it to the Template.
- **Template**: Handles the presentation layer, rendering the dynamic data from the `View` into HTML for the user interface.

By following this structured pattern, the Django backend ensures clarity, scalability, and ease of collaboration among developers.

## Database Schema and Management
