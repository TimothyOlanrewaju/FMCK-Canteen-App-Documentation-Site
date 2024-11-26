---
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 5
---

The backend of the application is the core that powers its functionality. It is responsible for managing business logic, handling database operations, and rendering HTML pages that users interact with. In this Python-Django-based project, the backend architecture follows the **Model-View-Template (MVT)** design pattern, a robust and intuitive framework for building dynamic web applications.

## Backend Stack

The following backend technologies were used in the development of this application:

- Python
- Django
- SQLite (_database_)

## Architecture

### How MVT works

The MVT model is central to Django’s backend operations.

- **Model**: Represents the data layer, defining the structure of your database and providing a Pythonic interface for querying and managing data.
- **View**: Acts as the intermediary between the `Model` and the `Template`. It processes requests, fetches the necessary data, and sends it to the Template.
- **Template**: Handles the presentation layer, rendering the dynamic data from the `View` into HTML for the user interface.
- **URLs**: Route requests to the appropriate views.

By following this structured pattern, the Django backend ensures clarity, scalability, and ease of collaboration among developers.

### MVT Workflow in the Canteen App

The model is defined and implemented through the following processes within the application:

1. **User Interaction**: A user interacts with the frontend, such as clicking a button to submit a meal request.
2. **HTTP Request**: This action sends an HTTP request to the Django server.
3. **URL Routing**: Django's URL dispatcher routes the request to the appropriate view function based on the URL pattern.
4. **View Processing**: The view function executes, performing tasks such as validating input, querying the database via the `Model`, and preparing data for the `Template`.
5. **Template Rendering**: The `View` passes data to a `Template`, which renders the HTML content with dynamic data.
6. **HTTP Response**: The rendered HTML is sent back to the user's browser as an HTTP response, displaying the requested page or result.

## Database Schema and Management

The database is managed using Django's Object Relational Mapping (ORM), with SQLite as the default database engine.

### Entities and their Relationships

The database consists of six (6) entities namely: User, Meal, UserGroup, Category, Request and RequestDetails.

1. **User**

- **Attributes**: id, username, password, email, group_id
- **Relationships**:
  - **UserGroup**: Each User belongs to a UserGroup. This is represented by the **group_id** in the `User` table, which is a foreign key referencing the `UserGroup` table.
  - **Request**: A User can make multiple Requests. This is represented by the **user_id** in the `Request` table, which is a foreign key referencing the `User` table.

2. **UserGroup**

- **Attributes**: id, title
- **Relationships**:
  - **User**: A UserGroup can have multiple Users. This is a **one-to-many relationship** where the `User` table references the `UserGroup` table.

3. **Meal**

- **Attributes**: id, name, category_id, price
- **Relationships**:
  - **Category**: Each Meal belongs to a Category. This is represented by the **category_id** in the `Meal` table, which is a foreign key referencing the `Category` table.
  - **RequestDetails**: A Meal can be part of multiple RequestDetails. This is represented by the **meal_id** in the `RequestDetails` table, which is a foreign key referencing the `Meal` table.

4. **Category**

- **Attributes**: id, name
- **Relationships**:
  - **Meal**: A Category can have multiple Meals. This is a **one-to-many relationship** where the `Meal` table references the `Category` table.

5. **Request**

- **Attributes**: id, user_id, status, date_created
- **Relationships**:
  - **User**: Each Request is made by a User. This is represented by the **user_id** in the `Request` table, which is a foreign key referencing the `User` table.
  - **RequestDetails**: A Request can have multiple RequestDetails. This is a **one-to-many relationship** where the `RequestDetails` table references the `Request` table.

6. **RequestDetails**

- **Attributes**: id, request_id, meal_id, quantity
- **Relationships**:
  - **Request**: Each RequestDetails entry is associated with a Request. This is represented by the **request_id** in the `RequestDetails` table, which is a foreign key referencing the `Request` table.
  - **Meal**: Each RequestDetails entry includes a Meal. This is represented by the **meal_id** in the `RequestDetails` table, which is a foreign key referencing the `Meal` table.

### Entity Relationship Diagram

This is the diagrammatic representation of the key entities and their relationships.
