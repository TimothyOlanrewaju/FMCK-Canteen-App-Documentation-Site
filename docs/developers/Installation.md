---
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

To get the application running locally on your system, follow these instructions:

## 1. Install Python

If you don't have Python installed, download the latest version [here](https://www.python.org/downloads/).

_Required Versions_: Python 3.8 or later.

Note sure if you have Python installed on your machine, run `python --version` in your terminal or command prompt.

## 2. Clone the Repository

Vist the projects' [repository](https://github.com/TimothyOlanrewaju/TastyBitesApp) on Github. Click on the **Code** button and then **Download ZIP**.

Alternatively, you can enter this on the command line :

```
git clone https://github.com/TimothyOlanrewaju/TastyBitesApp
```

:::info
Make sure you have git installed on your local machine to use the git command
:::

Navigate into the project directory:

```
cd <project-name>
```

## 3. Create and Activate a Virtual Environment

Next, we'll need to set up a virtual environment for our project. This is important because it creates an isolated Python environment for our project (we don't want Python project versions overriding each other).

Create the virtual environment by running this command :

```
python -m venv venv
```

Activate the virtual environment :

<Tabs>
  <TabItem value="windows" label="Windows" default>
    ```
    venv\Scripts\activate
    ```
  </TabItem>
  <TabItem value="mac/linux" label="MacOS/Linux">
    ```
    source venv/bin/activate
    ```
  </TabItem>
</Tabs>

## 4. Apply Database Migration

Run migrations to create database schema:

```
python manage.py migrate
```

## 5. Collect Static Files

The project uses static files (CSS, JS, etc.), run this command to collect them:

```
python manage.py collectstatic
```

## 6. Run the Development Server

Start the server to test the application locally:

```
python manage.py runserver
```

Access the application in your browser at: `http://127.0.0.1:8000`
