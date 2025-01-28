import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const ProfileCard = () => {
  return (
    <section className="profilelist">
      <Profile />
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
};

const age = 'Age: 33';

const Profile = () => {
  const name = 'Lana Turner';
  return (
    <article className="profile">
      <img
        src="./images/Lana_Turner.png"
        alt="Profile"
        style={{ width: '300px', height: '300px', borderRadius: '5%' }}
      />
      <h2>{name}</h2>
      <h3>{age}</h3>
      <h4>Detailed description of the individual</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<ProfileCard />);
