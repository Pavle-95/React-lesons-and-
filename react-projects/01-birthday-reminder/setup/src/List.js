import React from 'react';

const List = ({people}) => {
  return (
    <>
      {people.map((person) => {
        const {image, id, name, age} = person;
        return <article key={id}>
          <img src={image} alt={name} />
          <h2>{name}</h2>
          <h3>{age}</h3>
        </article>
      })}
    </>
  );
};

export default List;
