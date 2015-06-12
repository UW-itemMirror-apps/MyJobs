# MyJobs

## Getting Started
Please create a folder named "MyJobs" directly under your dropbox account.

### Overview

MyJobs is a single page application for users to track, organize and manage their job applications and career advancement. It centralizes all the information related to user's’ job application and provides a convenient way to add metadata about a job application to record some invaluable information generated in the process. The physical folder for each job application will be stored in dropbox while the users can view the content of the folder and manage the folder through MyJobs app. Actions on this app will be synchronized through itemMirror. (for details about itemMirror, please visit https://github.com/KeepingFoundThingsFound/item-mirror-angular-demo)

### Why does people need to use it?
1. Sometimes people need to go through a lot of job applications until they land a job. I believe no one wants to apply for the same job twice so keeping track of every application in a centralized place is a good practice. 
2. Also there is some invaluable experience in the job application process a person can later visit back, like interview questions, interview quizzes etc.
3. During job search, you may come across with a lot of people and they could become your great network resource afterwards. Those information can be recorded through the app using namespace attributes.
4. People can also mark down their accomplishments on a job so later on they can easily apply those into their annual performance review document or to prepare them for a promotion.


### Targeted users

Students looking for internships, jobs;
Professionals who love to manage their job achievements and prapare for promotions.


### Features
1. two layer of the data structure. Each application is a folder, 
short notes ( such as HR contact, interview time) can be saved in 
namespace attributes “tags” and all related files (Job Descriptions,
Cover Letter, Offer Letter, performance review etc) are saved 
as phantom association; 
2. color-coding of the folder and phantom associations to set priority;
3. re-ordering of the application folders and persistence of the new order; 4. handles to indicate this function;
5. new folder on the top;
6. delete popup alert;
7. status tracking using namespace attribute;

### itemMirror's role
1. Talking to Dropbox API to create mirror objects for file folders
2. Using XML in order to associate metadata with ordinary file folders
3. Providing synchronization between individual app and Dropbox through persistence of their “mirrors” in XML fragments 
4. Customizing and supporting unlimited functions through namespace attributes
