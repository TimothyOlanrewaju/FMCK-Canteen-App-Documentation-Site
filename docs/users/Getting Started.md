---
sidebar_position: 1
toc_min_heading_level: 2
toc_max_heading_level: 5
---

## Quick Start

To start using the **FMCK Canteen Application**, you must go through a registration process that would require some
personal and job-related information - like your staff credentials and department/unit. This is a straight-forward process which you can get done in less than a minute!

### Roles

On registration, there is an option of `Role` - which is a required field to choose. There are two role options available - `Staff` and `Intern`. A `Staff` in this context, is a clinician who is permanently employed by the institution while, an `Intern` is a temporal staff whose appointment spans over a short period of time.

#### Why Choose a Role

The choice of role is important as the application automatically deletes the data of an `Intern` that has completed his/her internship after **3 months**. Specifying role on registration helps the application track **active** and **inactive** status of interns.

> Deletion of _inactive_ interns data is to ensure that the database is not cumbered with redundant data.

### Departments and Units

The center consists of many departments, units and even sub-units. These departments include both clinicals and non-clinicals. With the application being clinical-inclined, non-clinical departments are exempted from using this application. The `Department` dropdown options on the registration page includes only clinical departments, same as the `Unit` option.

> It is important to note that not all departments have units or sub-units. So, while filling the registration form, the `Department` option is the most important one to choose.

#### Why is Department So Important

The application uses the `Department` you choose as your location on the application. Meaning, if you registered as a `Staff` working in **General Out Patient Department (Gopd)**, the application places your location as **Gopd**. You might have units and sub-units under your department **Gopd**, but the key metric used is your department.

#### Change Department

In situations in which a wrong department was chosen during registration or there was a change of your department, you can change your department in the application by following these steps:

- Go to your **Profile Menu**.
- Choose the **Change Department** option.
- Select your department from the drop-down options.
- Click on **Update**.

### Call Roster

**Admin Officers** stationed in various clinical departments are responsible for adding individual clinicians' dates to the Call Roster. Only users who have call dates inputted by the Admin Officers in the application will be able to request meals.

#### View Call Roster

You can view your call dates by following these steps:

- On the navigation bar, click **Call Info**.
- From the resulting drop-down menu, select the **My Roster** option.

#### Uploading Call Roster (Admin Officer)

Admin Officers will be able to view all users registered under their `Department` on their **Admin Page**. Each user's `First name`, `Last name` and `Department` would be displayed in a table. Each user will also have an **Action** column with a button attached.

The **Action button** allows the Admin Officers to:

- Select call dates for a particular user.
- Add dates to an existing selection of call dates if there are any.
- Remove a date or dates from an existing selection of call dates.

To select call dates for a user:

- Click **Select Dates** button.
- From the resulting calendar pop-up, select the dates.
- Click **Confirm Selection**.

:::warning NOTE THAT
Call dates cannot be backdated. Only current and future dates can be selected on the calendar.
:::

When call dates have been selected for a user, two buttons - **Add Dates** and **Remove Dates** replaces the **Select Dates** button.

To add call dates:

- Click the **Add Dates** button.
- Select dates from the calendar.
- Click **Confirm Selection**

> You cannot select an already existing call date for a user.

To remove call date(s):

- Click the **Remove Dates** button.
- Click the **Remove** icon attached to each individual call date.

### Meal Request

After call dates have been captured in the Call Roster, every user would land on the **Meal Request** page whenever they log into the application. The Meal Request page is where users can select their preferred meal items, and place an order.

:::note TAKE NOTE
Only one meal request can be made per day, except on weekends.
:::

#### Meal Categories

Meal items on the **Meal Request** page are divided into categories namely:

- Food.
- Proteins.
- Drinks.

#### Price Limit

There is a **Price Limit** restriction placed on meal requests in the application. Only meal requests whose total is below or equal to the price limit, would lead to a **Successful Meal Request**. The user interface automatically denies a meal request if the request total exceeds the price limit.

:::info BE INFORMED
The price limit is set as directed by the hospital's management to ensure that the expenditure does not exceed the allocated budget.
:::

#### Request Details

After a meal request has been successfully made, you can view the details of the order. To do this:

- Click **Call Info** on the navigation bar.
- Select the **My Request Details** option from the resulting drop-down.

#### Request Approval

After a successful meal request has been made, the request is sent to the **Canteen Manager**. The Canteen Manager who is stationed at the canteen, is responsible for approving and declining meal requests. Each meal request would carry the name of the user, meal items, total price and Action buttons of `Approve` and `Decline`.

> The Canteen Manager may decline a request if the meal items are unavailable at a particular time.

#### Request on Weekends

Clinicians on duty during the weekends are allowed to make two meal requests.

### Meals Management (Canteen Manager)

The **Canteen Manager** is solely in charge of managing meal request approvals, availability of meals, creating new meals, editing existing meal(s) and deleting meal(s).

#### Create Meal

To add a new meal to the menu,

- Click **Manage Meals** on the navigation bar.
- Select **Update Meals** from the drop-down options.
- Click **Add Meal** button located within the _**Available Meal**_ at the top-right position.
- Input a **Meal Name**, **Price** and select a **Category** from the resulting pop-up.
- Click **Create**.

#### Edit Meal

To update an already existing meal,

- Click **Manage Meals** on the navigation bar.
- Select **Update Meals** from the drop-down options.
- Click the **Edit** button under the _**Action**_ column of a meal.
- Enter new values for either **Meal name**, **Price** or **Category** fields.
- Click **Update Meal**.

#### Delete Meal

To remove a meal,

- Click **Manage Meals** on the navigation bar.
- Select **Update Meals** from the drop-down options.
- Click the **Delete** button under the _**Action**_ column of a meal.
- Confirm the Delete action by clicking **OK** on the resulting pop-up.

#### Meals Availability

To make one or more meals either available or unavailable to users on the menu,

- Click **Manage Meals** on the navigation bar.
- Select **Update Meals** from the drop-down options.
- Toggle the button under the _**Available**_ column of a meal. **True** for Available and **False** for Unavailable.
