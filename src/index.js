// Importing the React library to create components and use React features
import React from 'react';
// Importing the ReactDOM library for rendering React components into the DOM
import ReactDOM from 'react-dom/client';

// Importing global styles (assumed to be in the same directory as this file)
import './index.css';

// 🔹 cards (Array) - Represents data that will be passed as props
// This array holds a list of profile card objects, each containing an image, full name, age, and description.
// These objects are used as **props** in the Profile component inside ProfileCard.
const cards = [
  {
    img: './images/Lana_Turner.png', // Path to the profile image
    fullName: 'Lana Turner', // Person's full name
    age: 'Age: 33', // Person's age
    description: 'Hollywood actress known for her roles in classic films.', // Brief description
  },
  {
    img: './images/John_White.png',
    fullName: 'John White',
    age: 'Age: 68',
    description: 'Vietnam war veteran who served his country honorably.',
  },
];

// 🔹 ProfileCard (Parent Component)
// This component is responsible for displaying a list of profile cards.
// It loops through the `cards` array and passes each object as **props** to the `Profile` component.
function ProfileCard() {
  return (
    <section className="profilelist">
      {/* Loop through each card in the array and create a Profile component */}
      {cards.map((card, index) => {
        console.log(card, index); // Logs each card object and its index to the console (for debugging)

        // Extracts properties from the card object
        const { img, fullName, age, description } = card;

        // Passing profile details (props) to the `Profile` component (child)
        return (
          <Profile
            key={index} // Assigning a unique key for React to track each component
            img={img}
            name={fullName} // Passing `fullName` as `name` prop to match Profile component
            age={age}
            description={description}
          />
        );
      })}
    </section>
  );
}

// 🔹 Profile (Child Component)
// This component receives profile details (props) from `ProfileCard` and displays them.
const Profile = ({ img, name, age, description }) => {
  return (
    <article className="profile">
      {' '}
      {/* Wrapper for each profile card */}
      {/* Displays the profile image */}
      <img src={img} alt={name} />
      {/* Displays the person's full name */}
      <h2>{name}</h2>
      {/* Displays the person's age */}
      <h3>{age}</h3>
      {/* Displays a short description */}
      <h4>{description}</h4>
    </article>
  );
};

// 🔹 React Root Rendering
const root = ReactDOM.createRoot(document.getElementById('root')); // Gets reference to the root DOM node

// Rendering the 'ProfileCard' component inside the root DOM node
root.render(<ProfileCard />);
