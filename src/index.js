import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const img = './images/Lana_Turner.png';
const name = 'Lana Turner';
const age = 'Age: 33';
const description = 'Detailed description of the individual';

const ProfileCard = () => {
  return (
    <section className="profilelist">
      <Profile img={img} name={name} age={age} description={description} />
      <Profile img={img} name={name} age={age} description={description} />
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
