# Third-Party APIs: Work Day Scheduler

<img src="Assets/Screen Shot 2020-04-04 at 11.50.38 PM.png" alt="Scheduler Screenshot">

## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## Features
* Bootstrap powered container and grid layout with responsive abilities
* Also powered by multiple moment.js components
* Save button/icon will store event to local storage so that it will display upon refresh or revist to site
* CSS powered styling to visibly show current time vs scheduled time in event hour blocks

## Challenges
* Vertical alignment of textArea
* General borders/margins of rows and elemnts within rows
* Applying local storage

### To View This
You can visit https://86hemphill.github.io/hw-week5/

### Licensing
The code in this project is licensed under MIT license.