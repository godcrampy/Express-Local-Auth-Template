# Express Local Auth Template

Starter template for local authentication using passport, express, node and mongodb. The template includes eslint, webpack, node-sass, passport etc. All bundled with config files as well. Some decisions like the use of sass as preprocessor, ejs as template engine, mongoose for odm, eslint for linting have been made to reduce the initial setup time but you can use alternatives as well by changing a few lines of code.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- node `v10+`
- npm `v6+`

### Installing

1. Clone this repsitory
   `git clone https://github.com/godcrampy/express-local-auth-template.git`

2. Install the dependencies
   `npm install`

3. Start the server
   `npm start`

## Directory Structure

1. `config`
   This directory contains config for the mongodb and passport

2. `models`
   Contains the user model and any other future model

3. `public`
   webpack and sass will bundle their files in this directory

4. `routes`
   All the routes for the project

5. `sass`
   Write your sass here

6. `scripts`
   Write your frontend js logic here. See `webpack.config.js`

7. `views`
   Templete files

## Customising

The following components can be replaced with your favorite ones by making minimal code changes:

1. **CSS Preprocessing:**

- Current: SASS
- Alternatives: SCSS, no preprocessor

2. **CSS Framework:**

- Current: Bulma
- Alternatives: Bootstrap, Semantic UI, Foundation, no framework

3. **Bundling:**

- Current: webpack
- Alternatives: Parcel, rollup.js, no bundlers

4. **Template Engine:**

- Current: ejs
- Alternatives: Pug, Moustache

## Built With

- [Express](https://expressjs.com/) - Web framework
- [Bulma](https://bulma.io/) - CSS framework
- [Sass](https://sass-lang.com/) - CSS preprocessor
- [Webpack](https://webpack.js.org/) - Bundler
- [ejs](https://ejs.co/) - Template Engine
- [Mongoose](https://mongoosejs.com/) - Mongodb Object Modelling
- [Passport](http://www.passportjs.org/) - Authentication
- [Eslint](https://eslint.org/) - Linter

## Authors

- **Sahil Bondre** - [godcrampy](https://github.com/godcrampy)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
