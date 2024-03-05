# MSAL Authentication in Nuxt 3

## Overview
This guide explains how to set up authentication using Microsoft Authentication Library (MSAL) in a Nuxt 3 project.

## Prerequisites
- Node.js installed on your machine
- A Microsoft Azure account
- Basic understanding of Nuxt.js

## Installation
- Install Nuxt 3 and create a new project.
- Install MSAL using npm or yarn:

```bash
npm install @azure/msal-browser
```
or 
```bash
yarn add @azure/msal-browser
```
## Configuration

Define your MSAL configuration in a `plugins/msal.js` file.

## Usage

- Create an authentication service to encapsulate MSAL functionality.
- Use the authentication service in your Nuxt 3 application where authentication is required.


## Build Setup
```bash
 # install dependencies
  npm install

  # serve with hot reload
  npm run dev
```

## Documentation

- [MSAL Documentation](https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-overview)
- [Nuxt 3 Documentation](https://v3.nuxtjs.org/)

## Live Link

You can see the demo here : [MSAL Nuxt3](https://msal-nuxt3.netlify.app/)
