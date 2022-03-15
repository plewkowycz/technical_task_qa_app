# Solution for Sliie QA technical test

# In folder test_cases we can find exported test cases created in Test Rail. In folder us_and bugs we can find exported bugs and US status from JIRA. In folder mobile you can find APK file to mobile app. Access to JIRA: laxoy19276@votooe.com/test1234

## Feature Scenerioss

### 1 - As a user I want to log in to the web site

#### Scenario 1 - User access the web site for first time (when not logged in yet)

Given - the user opens web site for the first time (when not logged in yet)

Then - login screen with user name and password entries and login button is displayed

#### Scenario 2 - User login failed

Given - the user provides wrong user name and/or password

When - sign in button is clicked

Then - error markers are displayed by user name and/or password entries

#### Scenario 3 - User login succeed (credentials provided below)

Given - the user provided right user name and password

When - sign in button is clicked

Then - user is taken to the news page

#### Scenario 4 - User opens web site next time (when previously logged in)

Given - the user opens web site next time (when previously logged in)

Then - user is taken straight to the news page

##

### 2 - As a user I want to see my news

#### Scenario 1 - News cards are loaded

Given - there is internet connection

When - the user successfully signs in to the app

Then - news cards are displayed in rows and each card contains an image, text and a view button (cards can have one or more images scrollable horizontally)

#### Scenario 2 - Failed to load news

Given - there is no internet connection

When - the user successfully signs in to the app

Then - “failed to load news” error message and a Retry button are displayed

#### Scenario 3 - News view button is clicked

Given - the news cards are successfully loaded on the screen

When - the user clicks on the view button of the card

Then - user is navigated to the image of the card
