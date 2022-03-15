# User stories and bugs

### User stories

I use Jira to set up simple project where we can better imagine entire process. I created US(User Stories) with specific task for each scenario, nevertheless it could be also good to create Epic with linked US for each scenario instead. I have some doubts regarding GIVEN, WHEN, THEN approach in US as some people use that template for US and other use that approach for BDD. I assume it is just template for US(normally I dont work based on assumption, but there is too many question regarding test).

#### Requirements clarification

Normally I would like US/EPIC to confluence with proper requirements, if they are any. Each organization has different approach with Agile, so maybe that would be unnecessary. In addition I would spend more time on grooming requirements and doing static testing and stuff like boundary value for password and login field were not define.

### Bugs

I reported to bugs in JIRA, nevertheless before I was normally doing that, I would first get in touch with developer. They are few reason behind that. There is a chance we already have some US, which would fix specific issue. Also in some company instead of creating bugs and linking them to US, it is enough to push back US and write comments in them, if plan is still to fix it in specific sprint. If not, they it should be reported through JIRA, to have item for that. Some example bugs, you can find in Jira and below some other issues, which I would like to point out.

Potential bugs:

Wrong credential to login. user1 instead pa55word. Maybe environment issue. Something to discus

Password complexity to clarify, if 8 characters is enough without additional special characters

User name complexity. Does 4 characters is not too short?

User name and password is validate dynamic, without clicking Login button. Something to disscus, if requirements allowa that.

After landing to news page, there is not “Log out” button

We can login without internet connect. I know we run locally app, but maybe it should be investigate

There is no back button after selecting image, by clicking VIEW button

Using browser back button takes us to login page from image view, instead News page

#### Test Data

Credential below in task description are wrong. I assume it is kind of test, if we can check code, but in other hand if no one check that we would have false positive bug . There is other option too that we should find root cause analysis what went wrong.

Login credentials:

user: pa55word

password: pa55word
