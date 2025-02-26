// Importing the React library to create components and use React features
import React from 'react';
// Importing the ReactDOM library for rendering React components into the DOM
import ReactDOM from 'react-dom/client';

// Importing global styles (assumed to be in the same directory as this file)
import './index.css';

// 🔹 cards (Array) - Represents data that will be passed as props
// This array holds a list of profile card objects, each containing an id, image, full name, age, and description.
// These objects are used as **props** in the Profile component inside ProfileCard.
const cards = [
  {
    id: 1,
    img: './images/Lana_Turner.png', // Path to the profile image
    fullName: 'Lana Turner', // Person's full name
    age: 'Age: 33', // Person's age
    description: 'Hollywood actress known for her roles in classic films.', // Brief description
  },
  {
    id: 2,
    img: './images/John_White.png',
    fullName: 'John White',
    age: 'Age: 68',
    description: 'Vietnam war veteran who served his country honorably.',
  },
];

// 🔹 Profile (Child Component)
// This component receives profile details (props) from `ProfileCard` and displays them.
const Profile = ({ img, name, age, description }) => {
  return (
    // Wrapper for each individual profile card
    <article className="profile">
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

// 🔹 ProfileCard (Parent Component)
// This component is responsible for displaying a list of profile cards.
// It loops through the `cards` array and passes each object as **props** to the `Profile` component.
function ProfileCard() {
  return (
    <section className="profilelist">
      {/* Loop through each card in the array and create a Profile component */}
      {cards.map((card) => {
        console.log(card); // Logs each card object and its index to the console (for debugging)

        // Extracts properties from the card object
        const { id, img, fullName, age, description } = card;

        // Passing profile details (props) to the `Profile` component (child)
        return (
          <Profile
            key={id} // Assigning a unique key for React to track each component
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

// 🔹 React Root Rendering
const root = ReactDOM.createRoot(document.getElementById('root')); // Gets reference to the root DOM node

// Rendering the 'ProfileCard' component inside the root DOM node
root.render(<ProfileCard />);
