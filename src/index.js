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
    id: 1, // Unique identifier for the profile
    img: './images/Lana_Turner.png', // Path to the profile image
    fullName: 'Lana Turner', // Person's full name
    age: 'Age: 33', // Person's age
    description: 'Hollywood actress known for her roles in classic films.', // Brief description of the person
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
const Profile = (props) => {
  // Destructuring props to extract img, name, age, and description
  const { img, name, age, description } = props;

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
    // Wrapper that contains all profile cards
    <section className="profilelist">
      {/* Loop through each card in the array and create a Profile component */}
      {cards.map((card) => {
        console.log(card); // Logs each card object to the console (for debugging)

        // 🔹 Using the **spread operator (`...card`)**
        // Instead of writing `img={card.img} name={card.fullName} age={card.age} description={card.description}`
        // The spread operator (`...card`) automatically expands the properties and passes them as props.
        return (
          <Profile
            {...card} // Expands all properties inside `card` and passes them as separate props
            key={card.id} // Assigning a unique key for React to track each component
          />
        );
      })}
    </section>
  );
}

// 🔹 React Root Rendering
// Creating a root reference to the 'root' element in the HTML file
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the 'ProfileCard' component inside the root DOM node
root.render(<ProfileCard />);
