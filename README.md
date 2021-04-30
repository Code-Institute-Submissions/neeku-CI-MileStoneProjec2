# Idle Square Factory

* [Link to deployed website](https://neeku.github.io/CI-MileStoneProjec2/)
* [Link to github repository](https://github.com/neeku/CI-MileStoneProjec2)

# Contents

1. UX
2. The Website
3. Testing the Site
4. Deployment
5. Credits

# UX

## The Project- Purpose and Goals

The purpose of this website was to create a quiz game. The webpage provides a fun multiple choice questions game where users can test their general knowledge about Ireland, and see their scores in the end.

The website is simple enough to use for new users, while still offering enough content and variety for returning users. 

## User Stories
As a user to the site, I want:
1. To be able to take part in the quiz easily
2. Easily accessed buttons
3. A nice look with relevant colors
4. A way to contact the creator of the game to report any issues or submit any ideas for improvement

## Design Choices

The overall feel of the quiz should be fun. The game is simple, so the design is kept minimal with nice colors and easy to interact design.

### Font

The font used on the game is Sans Serif that's a simple and easy-on-the-eyes font.

### Styling

The overall look of the game page is fairly simple with some styling for the buttons and the navigation bar. 

## Wireframe Designs
Since the website is quite simple, the wireframes were created manually in a notebook.

# Features
* Each page has the Quiz name at the top of the page as well as the Navbar.
* On smaller screens, the elements will stack on top of each other.

### The Homepage
* The quiz consists of 10 multiple choice questions. The user progresses to the next question as they answer each question. 
* Below the choices, there is a progress indicator displaying which question is being answered at the moment.


### The Contact Page
* When the page loads, the form is loaded.
* There are multiple input boxes for users to enter their name and email address into the form, as well as a box for written comments.
* There is a submit button for the user to use to send their message to the website. 
* The submit button is linked to EmailJS and sends an Auto-Reply to the sender of the email to the email address that they provide.

# Testing the Site


All HTML pages and CSS files were tested using the HTML and CSS Validator from W3.
* Link to the [HTML Validator](https://validator.w3.org./) used
* Link to the [CSS Validator](https://jigsaw.w3.org/css-validator/) used

## Manual Testing

Using the Chrome Inspect tool, the following aspects of the website were tested:
* All of the contents of the page collaped and stack on top of each other when viewed on smaller screens.
* The text on the page and the overlay are easily read on all screen sizes. 

The EmailJS extenstion was tested using a sample email address and sample message.
* The result of this test was that the EmailJS service sent an email to the connected email address saying that a message was submitted.
* Unfortunately this section is not completed yet and I have to submit my project before the deadline. I am willing to work on this to improve it later.

# Deployment
The Website was created in Gitpod, version controlled with Git and hosted on Github. 

This website has been deployed to GitHub Pages- [link to website](https://neeku.github.io/CI-MileStoneProjec2/)

Steps to publish website to GitHub Pages:
1. On the main page of the repository, click settings.
2. Go to the GitHub Pages section on the menu bar to the left.
3. In the Source section, click "None" and change the selected branch to "main". 
4. Leave the following option as (root), and click "Save"
5. Once the repository is published, a link to the website will be shown in the GitHub Pages section. 



# Credits

Created by Neeku Shamekhi

The content of this website was created by Neeku Shamekhi, with the exception of the following:
* [Bootstrap](https://getbootstrap.com/)
  * Used to create the Buttons
  * Used to create the navigation bar
  * Used to help create elements of the contact form 
* [jQuery](https://jquery.com/)
  * Uses jQuery for quiz buttons.
* Code Institute's Love Maths Project
  * Used to figure out how to display and calculate the score.
* [StackOverflow](https://stackoverflow.com/)
  * Used to debug code issues. 
* [Emailjs](https://www.emailjs.com/)
  * Used to connect the contact form to an email service.
* Several JQuery quiz tutorials were studied and adapted to fit the needs of this website.


   All of the content that was taken from other sources was altered to fit the use of this website where necessary.

A special thank you to Spencer Barriball, my very supportive mentor for being patient with me, helping me though the project, and pointing out my mistakes. 