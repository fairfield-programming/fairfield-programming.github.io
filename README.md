<p align="center">
<img width="200" src="https://raw.githubusercontent.com/fairfield-programming/backend-server/d84cd53499177b9069d3a0a72c80701627190c18/.github/media/logo-full.svg">
</p>

# Fairfield Programming Association Frontend [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Check%20out%20the%20FPA%20homepage,%20built%20with%20Gatsby%20and%20Tailwind.&url=https://github.com/fairfield-programming/fairfield-programming.github.io)

<p align="left">
<img src="https://img.shields.io/github/contributors/fairfield-programming/fairfield-programming.github.io" alt="GitHub contributors">
<img src="https://img.shields.io/github/commit-activity/w/fairfield-programming/fairfield-programming.github.io" alt="GitHub commit activity">
<img src="https://img.shields.io/website?down_color=lightgrey&down_message=offline&up_color=blue&up_message=online&url=https%3A%2F%2Ffairfieldprogramming.org" alt="Website">
<img src="https://img.shields.io/github/issues/fairfield-programming/fairfield-programming.github.io" alt="GitHub issues">
<img src="https://img.shields.io/github/stars/fairfield-programming/fairfield-programming.github.io" alt="GitHub Org's stars">
<img src="https://img.shields.io/github/languages/top/fairfield-programming/fairfield-programming.github.io" alt="GitHub top language">
</p>

The new Fairfield Programming Association website is built in Gatsby and uses Tailwind CSS for the styling. This enables us to keep down server costs while also providing an excellent user and developer experience. All of our pages are DSG ([Deferred Static Generation](https://www.gatsbyjs.com/docs/how-to/rendering-options/using-deferred-static-generation/)), which means that most of the information on the website can be changed by modifying the information inside of the data folder. 

## Features

### Team Member System - [Example](https://about.fairfieldprogramming.org/team/william-mcgonagle)

Every volunteer on the FPA Team has their own individual pages. This means that if you want to volunteer, you get a miniture resume explaining what you have done for the FPA, and how it has impacted others around you. Our hope is that these personal pages can help you in the future by showing how much you have helped us on our mission. 

### Project Listings - [Example](https://about.fairfieldprogramming.org/programs/)

One of the great things about the FPA is how many projects we run. From programming languages to Nasdaq-listed partnerships to in-person learning at underserved schools, the FPA does it all. But, we needed a way to show the world all of the cool and neat things we were working on. So, we added project listings that allow us to customize all the right information for each project page while still keeping consistent design and principals. 

## Setup

1. Download the project from Github.

2. Have Node, NPM, and Gatsby installed.

3. Run the below command to install the packages.

```bash
npm install
```

4. Run the below command to start the website.

```bash
gatsby develop
```

**Note:** It can take anywhere from a few seconds to a few minutes to start the website, but once the website is live, it does [hot reloading](https://www.gatsbyjs.com/docs/reference/local-development/fast-refresh/).

## Contribute

To contribute to this project, please see the [issues tab](https://github.com/fairfield-programming/fairfield-programming.github.io/issues). This will contain all of the things that we currently need help working on. 

### How to Add Team Members

Adding team members is quite simple– inside of the data folder we have a file named, [`data/team.json`](https://github.com/fairfield-programming/fairfield-programming.github.io/blob/master/data/team.json), which contains all of the team member information. To add a team member, just duplicate another team members data from the file and change the data inside of it. *Please add the new team member to the bottom of the file because we don't want problems with indexing and whatnot*. Once you've added in this new team member, submit your changes as a pull request and you are done!

One confusing thing about team member objects might be the `email` and `works` parameters. The email is always formatted `[last name][first initial]@fairfieldprogramming.org`. The works is an array of numbers– each number is the index of a project (in the [`data/programs.json`](https://github.com/fairfield-programming/fairfield-programming.github.io/blob/master/data/programs.json) file).

### How to Add a Project

Projects are all stored inside of the [`data/programs.json`](https://github.com/fairfield-programming/fairfield-programming.github.io/blob/master/data/programs.json) file. To add a new project, just add a new item **_at the bottom of the array_** that has slug, title, description, and since parameters.

If you are looking to add more complex information to the project, just look at examples from other projects in the array or down below at the defintion of a program object.

```javascript
class Program {
  slug = "example"; // The URL slug of the project- ex: https://fairfieldprogramming.org/programs/example
  title = "Example Project";
  description = "This is an example project"; // Just a short description (20-25 words)
  since = "04-17-22"; // Follows ISO Date Format
  joining = "To join, email John!"; // A paragraph on how to join, with requirements (80-120 words)
  
  // An array of sub-pages
  pages = [
    {
      "slug": "sub-page", // The URL slug of the project- ex: https://fairfieldprogramming.org/programs/example/sub-page
      "title": "This is a sub-page", // Page title
      
      // The description shows up in the banner (optional) and the OpenGraph data of the page
      "description": "The FPA General Code License was originally created as a way to permissively license our software for all without having to deal with commercial entities 'asset-ripping' code from our open projects.",
      
      // An array of the sections of the page (vertically laid out)
      "content": [
          {
              "type": "banner|markdown|code" // can be either banner, markdown, or code
              
              // Banner makes a giant banner explaining the page
              // Markdown allows you to put markdown onto the page
              // Code allows you to embed a code example in the page
          },
      ]
    }
  ];
}
```
