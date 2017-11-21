# quickstrap
![bootstrap](https://img.shields.io/badge/bootstrap-4.0.0--beta.2-green.svg)

In need of making a website prototype? Have to quickly develop a website for a hackathon? Worry not! **quickstrap** is here to save the day!

**Features:**
* Install and use Bootstrap, painlessly.
* Use a templating language to assemble your website in no time.
* Automatically run and refresh your website when you make any changes.

*Inspired by [foundation-sites](https://github.com/zurb/foundation-sites).*

<hr>

**Table of Contents**

* [What's Inside](#what-s-inside)
* [Install](#install)
* [Usage](#usage)
* [Develop](#develop)
  * [Layout](#layout)
  * [Style](#style)

<hr>

## What's Inside

* [Bootstrap](http://getbootstrap.com) - Most popular front-end framework.
* [Panini](https://foundation.zurb.com/sites/docs/panini.html) - Super simple flat file generator.
* [SASS](http://sass-lang.com/) - Write awesome stylesheets.
* [Browsersync](https://www.browsersync.io/) - Test your website immediately.

## Install

This project uses [node](http://nodejs.org) and [npm](http://npmjs.com). Install them first before downloading this project.

To install this template:
1. Download and copy this repo, or use `git clone https://github.com/nadyafebi/quickstrap.git`.
2. Open a command line/terminal inside the project folder and enter `npm install`.

## Usage

Open a command line/terminal inside the project folder and enter `gulp` to make your website and automatically run it at `localhost:8000`.

You can also enter:
* `gulp build` - To make your website without running it.
* `gulp clean` - To clean the project folder of the website created (for clean repo).

**Warning:** Any of these commands will delete any `.html` files in the root of the project folder and will delete the `/css` folder. If you add additional HTML or CSS files, you will have to modify the `clean` function in  `gulpfile.js` to ignore these new files.

## Develop

### Layout

To make a new HTML page, modify the files inside these folders in `/panini`:
* **pages** <br>
  This is where the body of your pages live. Any HTML files here will be compiled with their chosen layout to a finished HTML files in the root of the project folder.
* **layouts** <br>
  The default layout is `default.html`. If you make another layout, add `layout: your-layout-name` on top of your page file (after `title`).
* **partials** <br>
  Any HTML files here can be injected anywhere in a page or layout using `{{> partial-name}}`. Useful to make something consistent across your website, such as navigation bar or footer.

For more information, see [Panini](https://foundation.zurb.com/sites/docs/panini.html).


### Style

To style your website, modify the files inside `/sass`:

* **main.scss** <br>
  This is where you should put your custom style in CSS or SASS format.
* **_var.scss** <br>
  Customize the default Bootstrap template by modifying the variables in this file.
