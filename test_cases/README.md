# Test Cases

### TestRail vs Zephyr/XRAY

I did use Test Rail for creating TC. Probably it would be better to use Zephyr or XRAy in Jira to have everything in one place, where we could link items together, but I prefer Test Rail as it is easier you cant set up everything faster.

### Description of Test Cases

Test cases cover the most crucial scenarios. Some of them could probably merged together, but it really depends in my opinion. For example I would prefer to split them if we could have some mocks with design. Also I have some doubts regarding what priority should be there.

### Goal of Test Cases

First goal is to use test cases as base for adding automation tests. Second goal is to use them for regression, where we will combine it with exploratory testing for lowering risk that we miss some bugs.

### Mocks with design

If we could have them it would be easier to create TC. I would prefer add them in the attachment instead describe everything in the expected results.

### Configuration

As the part of testing I did test only on Chrome as I didnt have system requirements. Nevertheless we should confirm which browsers are supported by web app and which system operation and version are supported on native app.

Based on that we could conduct Exploratory testing or regression using our manual TC in TestRail.

Possible configuration

WebApp:

-Opera

-Firefox

-Edge

-Internet Explore(if yes, that would be really bad)

-Chrome

-Safari

NativeApp:

-iOS min version 10

-Android min version 9

In addition to native app, we should analyze market, what possible mobile devices would be use, so we can physically buy them for testing purpose.
