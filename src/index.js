import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const firstCard = {
  img: './images/Lana_Turner.png',
  fullName: 'Lana Turner',
  age: 'Age: 33',
  description: 'Hollywood actress known for her roles in classic films.',
};

const secondCard = {
  img: './images/John_White.png',
  fullName: 'John White',
  age: 'Age: 68',
  description: 'Vietnam war veteran who served his country honorably.',
};

const ProfileCard = () => {
  return (
    <section className="profilelist">
      <Profile
        img={firstCard.img}
        name={firstCard.fullName}
        age={firstCard.age}
        description={firstCard.description}
      />
      <Profile
        img={secondCard.img}
        name={secondCard.fullName}
        age={secondCard.age}
        description={secondCard.description}
      />
    </section>
  );
};

const Profile = (props) => {
  console.log(props);
  return (
    <article className="profile">
      <img src={props.img} alt={props.name} />
      <h2>{props.name}</h2>
      <h3>{props.age}</h3>
      <h4>{props.description}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<ProfileCard />);
