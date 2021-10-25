Feature: JBk offline website

Scenario Outline: login Test

Given  user should on login page
When   user enters "<uname>" and "<pass>"
And   user click on login button
Then  user will be on home page

Examples:
|uname|pass|
|kiran@gmail.com|123456|
|Ramesh|asdfg|
|Pinky|qwert123|

Scenario: JBK Logo Test

Given user should on login page
Then   user should see a logo