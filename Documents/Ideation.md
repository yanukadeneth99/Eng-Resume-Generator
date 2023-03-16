# **Ideation, MVP Scope and Tech Stack**

## Table of Contents

[Group Details](#_ap68i7win36b)

[Idea Specification](#_d4ntcc7gjduq)

[Target Audience](#_spi3s41r0lzp)

[MVP Scope](#_xjlzxfegtbrw)

[User Stories & Use-case Scenarios](#_5v96ngnjvdgo)

[User Stories](#_buzntb6mq6ky)

[Use Cases](#_pgn6s237ulwd)

[Use Case 01](#_mihv3ttt3eda)

[Use Case 02](#_s8qkk4vt95ly)

[Use Case 03](#_a78xz0uujacw)

[Use Case 04](#_fgacqnr58uei)

[Use Case 05](#_d5pkveby6wnl)

[Use Case 06](#_hx1bjxqdc28d)

[Use Case 07](#_dvh5daocwvqn)

[Use Case 08](#_162ah42w7v7k)

[Technology Stack](#_z1xt7bihjldv)


## Group Details

- MS23003132 - Akila Kasun Siriwardana
- MS23006966 - Malaka Silva
- MS23001602 - Yanuka Deneth
- MS23046320 - Tavish Perera
- MS23001534 - Eesha Wickramasinghe

## Idea Specification

We propose a CV Generator specifically for Engineers and Developers. This will be a Web-based application which builds a space for Engineers to show their portfolio of projects and skills in the hope of impressing a potential employer.

Most CVs that engineers use have generic formats that do not highlight the projects and skills that a developer should have. By Design, this makes the CVs used bring a disadvantage to the developer.

When the CV that a developer uses to apply for jobs does not highlight the necessary skills, it will be difficult landing one. Having a good portfolio not only brings in more job opportunities but inspires confidence within themselves.

There are several existing services and applications that allow similar capability, namely, NovoResume, CV Maker, Resume Help, Canva and more. However, these are catered towards general use and not for engineers in specific.

## Target Audience

Our primary audience targets engineers and developers who are starting out in their journey. However, this application can be used by any engineer having different levels of experience.

Since we are targeting beginner engineers, our main goal is to make sure they use the application as smoothly as possible. Furthermore, we want to ensure that we keep them on track throughout the journey by providing them with certain tips they can use for their benefit.

## MVP Scope

These are the main features that will exist in the application :

- Smooth and Efficient UI UX
- User Environment (Dashboards, Logins, Registrations)
- Multi Factor Authentication
- CV Templates
- Entering, Modifying and Managing Portfolio
- Exporting and Sharing generated information
- Security and Privacy
- Responsive Design
- GitHub Integration
- Single Sign-On
- Online Profiles

The **User Registration and Authentication** feature allows users to create an account using their email or social media accounts. Once registered, users can activate MFA for their account privacy. Once registration is done the users can log in to the web app using their email and password or social media accounts. If a user forgets their password, they can reset it with the "forgot password" feature. These functionalities aim to make the user registration process easy and accessible while ensuring the security and privacy of user information.

The **CV Templates/CV Generator** feature provides engineers and developers with a variety of pre-designed professional templates to choose from, covering various experience levels and roles within the engineering industry. Once a template is chosen, users can input their personal, educational, and professional information in a step-by-step process to create a personalized CV. This feature makes sure that users can create a CV that fits their needs and looks professional and attractive while highlighting their unique skills and experiences within the engineering field.

The **Editing and Customization** feature enables users to make modifications to their generated CV, such as adding, removing, or rearranging sections and content. If users decide to switch to a different template, they can do so without losing their content, ensuring that they can experiment with different formats until they find the perfect fit. This feature provides users with maximum flexibility and control over their CV creation process.

The **Exporting and Sharing** feature allows users to download their CV in multiple formats, such as PDF, Word, HTML, and JSON, giving them the flexibility to choose the most appropriate format for their needs. Users can also easily share their created CV link to anyone on the web.

The **User Dashboard** feature allows users to easily manage their CVs, as well as previous versions of their CVs. Additionally, users can delete or archive their CVs, providing them with full control over their CV creation process. In addition to the User Dashboard, the web app offers Email Notifications to keep users informed about their account status, CV creation status, and other relevant updates This feature is designed to keep users informed and engaged throughout the CV creation process, enhancing their user experience.

The **Security and Privacy** feature allows users to delete their data at any time if they want to so their data is only being stored as long as they want it to be.

The **Responsive Design** feature optimizes the platform for various devices such as desktops, tablets, and mobile phones. This allows users to access and use the web app with ease, without losing functionality or user experience. The web app is designed to adapt automatically to the device's screen size and resolution, making it easy to navigate and use. This feature enhances user experience and provides flexibility for users to create and manage their CVs on the go, from anywhere and at any time.

The **GitHub Integration** will enable the user to connect this application with Github. Once this connection has been established, information like Commits, Repositories and more in GitHub can be displayed on the CV.

Basic KPIs on the web application will be extracted out to decide the future of the application :

- Unique Website Visitors (Traffic)
- Search Engine Optimization
- Bounce Rate
- Total Created CVs
- Page Load time

## User Stories & Use-case Scenarios

### User Stories

1. As a CV generator user, I want to protect my personal information, therefore I can register and activate MFA inside the application.
2. As a new user, I want to be able to easily input my education information into the CV generator application, so that I can quickly create a professional-looking CV.
3. As an employer, I want to see the necessary information of a person quickly, so that I can make a decision more clearly.
4. As a CV generator user, I want the CV generator application to have a section where I can include a list of my professional references, so that potential employers can easily contact them for recommendations.
5. As a CV generator user,, I want the CV generator application to have a section where I can include a summary of my skills and accomplishments, so that potential employers can quickly understand my strengths and qualifications.
6. As a CV generator user,, I want the CV generator application to have a feature that allows me to include any coursework or academic projects that are relevant to the job position I'm applying for, so that I can showcase my skills and knowledge.
7. As a CV generator user, I want the CV generator application to have a feature that allows me to export my CV in PDF format so that I can easily share it with potential employers and recruiters.

### Use Cases

#### Use Case 01

| Use Case       | Create an account and activate the MFA                                 |
| -------------- | ---------------------------------------------------------------------- |
| Actor          | User                                                                   |
| Goal           | To protect the privacy of the actor's personal information and account |
| Pre-conditions |

- The User must have an account.
  |
  | Flow |
- The User opens the CV generator application and begins with the register screen.
- The User can select the option of registering by giving an email and password or registering by social media.
- At the end of the registration, the application loads the screen to activate MFA.
- The User can choose to add in the MFA option.
- Once the User verifies their MFA option, the user can use the CV generator application.
  |
  | Post-conditions |
- The User has successfully registered to the CV generator application and activated the MFA for the account.
- The User can protect their information.
  |

#### Use Case 02

| Use Case       | Inputting Education into CV Generator Application                                                          |
| -------------- | ---------------------------------------------------------------------------------------------------------- |
| Actor          | User                                                                                                       |
| Goal           | To easily input education information into a CV generator application to create a professional-looking CV. |
| Pre-conditions |

- The User must have an account.
  |
  | Flow |
- The User opens the CV generator application and navigates to the education section.
- The application prompts the undergraduate to input their education information, such as their degree, major, institution, and graduation date.
- The User then inputs their education information into the appropriate fields.
- The application automatically formats the information and adds it to the user's CV.
- The User can review the education information to ensure that it is accurate.
- The User finally saves the information and continues to input additional sections into the CV generator application, such as work experience and skills.
  |
  | Post-conditions |
- The user has successfully input their education information into the CV generator application.
- The education information is correctly formatted and displayed on the User's CV.
- The User can easily generate a professional-looking CV by using the application.
  |

#### Use Case 03

| Use Case       | Multiple Templates for CV Generator      |
| -------------- | ---------------------------------------- |
| Actor          | User                                     |
| Goal           | To generate a CV with multiple templates |
| Pre-conditions |

- The User must have an account.
- The User must have a CV created or pending.
  |
  | Flow |
- User logs into the CV generator application and selects the option to create a new CV or choose an existing CV.
- The application presents the user with multiple templates to choose from, each designed to suit different job positions.
- The application generates a CV document based on the chosen template and the user's input.
  |
  | Post-conditions |
- The User has successfully generated a CV with the decided theme.
  |


#### Use Case 04

| Use Case       | Highlighting Extracurricular Activities and Volunteer Work in CV Generator                                                                            |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Actor          | User                                                                                                                                                  |
| Goal           | To showcase leadership and teamwork skills through highlighting extracurricular activities and volunteer work in the CV generated by the application. |
| Pre-conditions |

- The User must have an account.
  |
  | Flow |
- The User opens the CV generator application and navigates to the Extracurricular Activities section.
- The User clicks on the "Add Extracurricular Activities" button.
- The User prompts the undergraduate to input their extracurricular activities, such as volunteer work.
- The User inputs the information into the appropriate fields.
- The application automatically formats the information and adds it to the User's CV.
- The User can review the information to ensure that it is accurate.
- The User saves the information and continues to input additional sections into the CV generator application, such as work experience and skills.
  |
  | Post-conditions |
- The User has successfully added their extracurricular activities and volunteer work to their CV using the CV generator application.
- The User's leadership and teamwork skills are showcased effectively in the updated CV.
  |


#### Use Case 05

| Use Case       | Include Professional References in CV Generator Application                             |
| -------------- | --------------------------------------------------------------------------------------- |
| Actor          | User                                                                                    |
| Goal           | To add a references section for easy access, when the CV is sent to potential employers |
| Pre-conditions |

- The User must have an account.
  |
  | Flow |
- The User opens the CV generator application and navigates to the "Professional References" section.
- The User enters the names, job titles, contact information, and a brief description of their relationship with each reference.
- The User saves the information and the application updates the CV to include the professional references section.
  |
  | Post-conditions |
- The User's CV includes a section for professional references that can be easily accessed by potential employers for recommendations.
  |


#### Use Case 06

| Use Case       | Adding Skills and Accomplishments in CV Generator                                   |
| -------------- | ----------------------------------------------------------------------------------- |
| Actor          | User                                                                                |
| Goal           | To include a summary of skills and accomplishments in the CV generator application. |
| Pre-conditions |

- The User must have an account.
  |
  | Flow |
- The User opens the CV generator application and logs in to their account.
- The User starts creating a CV, and selects the "Skills and Accomplishments" option.
- The User opens a new page with fields to fill in the summary of skills and accomplishments.
- The User enters their relevant skills and accomplishments, such as certifications, awards, relevant experience, and other important details.
- The User saves the summary by clicking the "Save" button.
- The User confirms that the summary has been successfully saved and updates the employee's CV with the added information.
- The User can view the updated CV and verify that the summary of skills and accomplishments has been included.
  |
  | Post-conditions |
- The User's CV includes a section for the summary of skills and accomplishments, allowing potential employers to quickly understand the employee's strengths and qualifications.
  |


#### Use Case 07

| Use Case       | Inclusion of Relevant Coursework and Academic Projects in CV Generator Application                                   |
| -------------- | -------------------------------------------------------------------------------------------------------------------- |
| Actor          | User                                                                                                                 |
| Goal           | To showcase their skills and knowledge to potential employers by adding course work and academic projects to the CV. |
| Pre-conditions |

- The User must have an account.
  |
  | Flow |
- The User opens the CV generator application.
- The User selects the "Academic Projects" feature.
- The application prompts the student to input the details of their relevant coursework or academic projects.
- The User inputs the necessary details such as course title, project description, skills acquired, etc.
- The application automatically generates a section for academic projects and coursework in the CV.
- The User submits the CV with the academic project and coursework section.
  |
  | Post-conditions |
- The User has successfully included their relevant academic projects and coursework in the CV and can showcase their skills and knowledge to potential employers.
  |


#### Use Case 08

| Use Case       | Export CV in PDF format                                                         |
| -------------- | ------------------------------------------------------------------------------- |
| Actor          | User                                                                            |
| Goal           | To export the CV in PDF format to share with potential employers and recruiters |
| Pre-conditions |

- The User must have an account.
- The User must have a CV created.
- The User has access to the internet and a device capable of exporting and sharing files
  |
  | Flow |
- The User opens the CV generator application and logs in.
- The User navigates to the "Export" feature.
- The User can review the exported PDF file to ensure all information is accurate and complete.
- The User shares the PDF file with potential employers and recruiters via email or other digital means.
  |
  | Post-conditions |
- The User has successfully exported and shared their CV in PDF format.
  |

## Technology Stack

For this project, the technology stack we are planning to use is the **MERN stack** as it provides an easier and efficient way to implement professional grade web applications.

MERN stands for Mongo, Express, React and Node. Each individual technology will be used for developing different parts of the application.

- MongoDB - Using a non-relational database allows the application to scale horizontally which we will need as more options get added eventually.

- Express JS - This allows us to handle I/O operations more efficiently, while having the capability to scale the backend if required.

- Next JS (React JS) - Having a wide scale of support and libraries for React enables us to bootstrap a professional grade frontend quickly while leaving the option of adding in complicated UI UX eventually.

- Node JS - Node enables us to build applications using JavaScript more efficiently while providing us the necessary services and tools (ex: Security, I/O, etc) required for this project.

Apart from the main stack, libraries and tools like TailwindCSS, Mongoose, Prettier, ESLint, and more will be used in this application.

Terminologies

- JS - JavaScript
- I/O - Input/Output
- UI - User Interface
- UX - User Experience
- HTML - Hypertext Markup Language
- PDF - Portable Document Format
- CV - Curriculum Vitae
- JSON - JavaScript Object Notation
- MFA - Multi Factor Authentication
