# 🚀 Project Name: Dev Stack – Developer Stack Selector

## 📖 Description of the Project

Dev Stack is a new-age React application which enables developers to discover trending web development technologies and create their own developer stacks. Users can view technologies, add them to their stack, delete them and get real-time notifications in form of toast alerts.

---

## 🛠️ Technologies Used

1. React.js
2. TypeScript
3. Tailwind CSS
4. DaisyUI
5. React Toastify
6. React Icons

---

## ✨ Features

1. **Add Technologies to Your Stack** – Developers can add their preferred technologies to a custom developer stack with just one click.

2. **Prevent Duplicates with Toast Alerts** – Same technologies cannot be added multiple times. In case the user tries to do so, an alert will appear.

3. **Remove Technologies from Your Stack** – User can easily remove any technology from his/her stack or can also clear the stack completely with the help of the **Remove All** button.

---

# ❓ Q/A

## 1. What is JSX, and why is it used in React?

**Answer:** JSX stands for Java Script XML. It helps us to write HTML within JavaScript.

---

## 2. What is the difference between props and state?

**Answer:** Props are properties passed from parent components to children. State is data stored within a component and changes over time.

---

## 3. What does the `useState` hook do, and where did you use it in this project?

**Answer:** The `useState` hook allows creating and updating state in React components. I used it for changing the state of the `selectedTech` array upon adding/removing technologies.

---

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

**Answer:** `useEffect` allows running some code after the component is rendered. I used it to load the technology JSON file once the application is loaded.

---

## 5. Why does every item in a `.map()` list need a unique `key` prop?

**Answer:** Having a unique key allows React to recognize an element within a list. It improves performance by making updates more efficient.

---

## 6. What is conditional rendering? Show one place you used it (example: the empty stack message).

**Answer:** Conditional rendering means changing the UI based on a specific condition. I used it to display **"Your stack is empty"** when `selectedTech.length === 0`.

---

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

**Answer:** The parent passes the data to the child using props, while the child returns some data back using a callback function passed from the parent, like `setSelectedTech()`.