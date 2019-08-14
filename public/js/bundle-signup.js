/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/signup.validator.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./scripts/signup.validator.js":
/*!*************************************!*\
  !*** ./scripts/signup.validator.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const nameInput = document.getElementById(\"form-name\");\nconst nameInputHelp = document.getElementById(\"form-name-help\");\nconst usernameInput = document.getElementById(\"form-username\");\nconst usernameInputHelp = document.getElementById(\"form-username-help\");\nconst emailInput = document.getElementById(\"form-email\");\nconst emailInputHelp = document.getElementById(\"form-email-help\");\nconst passwordInput = document.getElementById(\"form-password\");\nconst passwordInputHelp = document.getElementById(\"form-password-help\");\nconst rePasswordInputHelp = document.getElementById(\"form-repassword-help\");\nconst rePasswordInput = document.getElementById(\"form-repassword\");\nlet submitButton = document.getElementById(\"submit-button\");\nlet users = [];\nlet location = window.location;\nlet url = location.protocol + \"//\" + location.hostname + \":\" + location.port + \"/check-username-availability\";\nfetch(url)\n  .then(response => response.json())\n  .then(data => users = data);\nlet validator = {\n  name: false,\n  email: false,\n  username: false,\n  password: false,\n  rePassword: false\n};\n\nnameInput.addEventListener(\"blur\", () => {\n  let value = nameInput.value;\n  if (value === \"\") {\n    markNegative(nameInput);\n    markNegative(nameInputHelp);\n    nameInputHelp.hidden = false;\n    nameInputHelp.innerText = \"Enter your First Name\";\n    validator.name = false;\n  } else {\n    markPositive(nameInput);\n    markPositive(nameInputHelp);\n    nameInput.hidden = false;\n    nameInputHelp.innerText = `Hi ${value}, Welcome to Homework Hub`;\n    validator.name = true;\n    checkValidation();\n  }\n});\n\nusernameInput.addEventListener(\"blur\", () => {\n  let value = usernameInput.value;\n  if (value === \"\") {\n    markNegative(usernameInput);\n    markNegative(usernameInputHelp);\n    usernameInputHelp.hidden = false;\n    usernameInputHelp.innerText = \"Enter a username\";\n    validator.username = false;\n  } else {\n    if (userExists(value)) {\n      markNegative(usernameInput);\n      markNegative(usernameInputHelp);\n      usernameInputHelp.hidden = false;\n      usernameInputHelp.innerText = \"Someone already took that username sadly.\";\n      validator.username = false;\n    } else {\n      markPositive(usernameInput);\n      markPositive(usernameInputHelp);\n      usernameInputHelp.hidden = false;\n      usernameInputHelp.innerText = \"That's seems a good one!\";\n      validator.username = true;\n      checkValidation();\n    }\n  }\n});\n\nemailInput.addEventListener(\"blur\", () => {\n  let value = emailInput.value;\n  if (value === \"\") {\n    markNegative(emailInput);\n    markNegative(emailInputHelp);\n    emailInputHelp.hidden = false;\n    emailInputHelp.innerText = \"Enter an email\";\n    validator.email = false;\n  } else {\n    if (validateEmail(value)) {\n      markPositive(emailInput);\n      markPositive(emailInputHelp);\n      emailInputHelp.hidden = false;\n      emailInputHelp.innerText = \"All set!\";\n      validator.email = true;\n      checkValidation();\n    } else {\n      markNegative(emailInput);\n      markNegative(emailInputHelp);\n      emailInputHelp.hidden = false;\n      emailInputHelp.innerText = \"Invalid email! Did you miss something?\";\n      validator.email = false;\n    }\n  }\n});\n\npasswordInput.addEventListener(\"blur\", () => {\n  let value = passwordInput.value;\n  if (value === \"\") {\n    markNegative(passwordInput);\n    markNegative(passwordInputHelp);\n    passwordInputHelp.hidden = false;\n    passwordInputHelp.innerText = \"Enter a password\";\n    validator.password = false;\n  } else {\n    if (validatePassword(value)) {\n      markPositive(passwordInput);\n      markPositive(passwordInputHelp);\n      passwordInputHelp.hidden = false;\n      passwordInputHelp.innerText = \"Almost Done!\";\n      validator.password = true;\n      checkValidation();\n    } else {\n      markNegative(passwordInput);\n      markNegative(passwordInputHelp);\n      passwordInputHelp.hidden = false;\n      passwordInputHelp.innerText = \"Please make it 8 or more charecters and having atleast one number\";\n      validator.password = false;\n    }\n  }\n});\n\nrePasswordInput.addEventListener(\"change\", () => {\n  let value = rePasswordInput.value;\n  if (value != passwordInput.value) {\n    markNegative(rePasswordInput);\n    markNegative(rePasswordInputHelp);\n    rePasswordInputHelp.hidden = false;\n    rePasswordInputHelp.innerText = \"Uh Oh! Passwords don't match!\";\n    validator.rePassword = false;\n  } else {\n    markPositive(rePasswordInput);\n    markPositive(rePasswordInputHelp);\n    rePasswordInputHelp.hidden = false;\n    rePasswordInputHelp.innerText = \"Passwords match! Wohoo!\";\n    validator.rePassword = true;\n    checkValidation();\n  }\n});\n\nfunction checkValidation() {\n  for (const bool of Object.values(validator))\n    if (!bool)\n      return;\n  submitButton.removeAttribute(\"disabled\");\n}\n\nfunction markPositive(element) {\n  element.classList.add(\"is-success\");\n  element.classList.remove(\"is-danger\");\n}\n\nfunction markNegative(element) {\n  element.classList.add(\"is-danger\");\n  element.classList.remove(\"is-success\");\n}\n\nfunction validateEmail(email) {\n  const regex = /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\n  return regex.test(String(email).toLowerCase());\n}\n\nfunction validatePassword(password) {\n  const regex = /(?=.*[0-9])/;\n  return regex.test(String(password).toLowerCase()) && password.length > 7;\n}\n\nfunction userExists(username) {\n  return users.includes(username);\n}\n\n//# sourceURL=webpack:///./scripts/signup.validator.js?");

/***/ })

/******/ });