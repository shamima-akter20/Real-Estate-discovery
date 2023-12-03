# Live link

# Project Title

A assignment concerning Real Estate for buying and selling land, house.

## Table of Contents

- Description
- Technologies Used
- Installation
- Usage
- Feature

## Description

A assignment of Real Estate website making using HTMl, CSS framework, React, firebase, MongoDB, JWT. First of all I made a react file and install all needed packages. I added Home page, All properties, Dashboard and Dashboard has agent, user, admin route. Navbar, banner,Advertisement,What are you looking for , user review, popular places, footer section added to home page.In advertisement section there are card of property added by agent . We can see details by clicking detail button in card .In detail route there are add to wishlist button and add review button.Through clicking add review button user can add their review and by add to wishlist user add this property to wishlist.User can go their own profile by Dasboard .

## Technologies Used

**HTML**

**Tailwind CSS**

**Material Tailwind**

**React Flowbite**

**Element Tailwind**

**React Lottie**

**React Tab**

**React Loader**

**React Swipwer Js**

**React AOS**

**React hot toast**

**React-dom**

**React tostify**

**React Helmet**

**Javascript**

**React**

**DaisyUI**

**Firebase**

**MongoDB**

**Material Tailwind**

**React Flowbite**

**SweetAler2**

**Marquee**

**JWT**

**Axios**

## Installation

- Install my-project with npm

```bash
npm create vite@latest my-project -- --template react

cd my-project
npm install
npm run dev
```

- Install tailwind css

```bash
npm install -D tailwindcss
npx tailwindcss init
```

- Install DaisyUI

```bash
npm i -D daisyui@latest
```

- Install SweetAlet

```bash
npm install sweetalert --save
```

- Install ReChart

```bash
npm install recharts
```

- Install React Router

```bash
npm install react-router-dom localforage match-sorter sort-by
```

- React Marquee

```bash
npm install react-fast-marquee --save
```

- React Flowbite

```bash
npm install -D tailwindcss postcss
npx tailwindcss init -p
```

- Material Tailwind

```bash
npm i @material-tailwind/react
```

- React AOS

```bash
npm install --save aos@next
```

- Swiper Js

```bash
 npm i swiper
```

- Element tailwind

```bash
npm install tw-elements
```

- React tab

```bash
npm install --save react-tabs
```

## Usage

Create needed all pages what I want to work better and add all page to main.jsx . Create header section from Header. Add to Tailwind CSS className to decorate as needed. DaisyUI for framework of CSS. Sweetalert for different type of alert adding. Marquee for slider, Firebase for authentication. React tab for tab system, react toast for showing toast, react swiper fot auto image slider, MongoDB for database .

## Feature

- This will help to find Luxerious Property and also help to sell property. .
- In addition we can see peoperty Details, Add to wishlist , offer for reasonable price ,
  add review (user).
- We can get property of our desire location.
- we can add Property ,update, delete (agent).
- Admin can manage all user. They can make user admin or agent. Also can delete
  user, delete review of user.
- Also we can log in and sign in here .
- Best authentication system.
- User Friendly.
- Best Online payment system.

## Discussion of manage the state in my assignment project.

### Local Component State (useState):

- For managing simple and component-specific state, you can use the useState hook provided by React.
- This hook allows you to declare and update state variables within a functional component.

### hook provided by React (ussEffect):

useEffect is a crucial hook in React that allows you to perform side effects in your functional components. It's commonly used for tasks like data fetching, DOM manipulation, and subscribing to external data sources.

### Firebase Authentication:

```bash
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/Firebase.config";
```

### Private route

```bash
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

```

```bash

```
