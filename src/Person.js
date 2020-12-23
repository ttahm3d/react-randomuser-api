import React from "react";

const Person = (props) => {
  return (
    <div className="user-card">
      <img src={props.user.picture.large} alt={props.user.name.first} />
      <div>
        <h2 className="user-name">
          {props.user.name.title} {props.user.name.first} {props.user.name.last}
        </h2>
        <p>{props.user.location.city}</p>
        <p>{props.user.location.state}</p>
        {/* <p>
          {props.user.location.country} - {props.user.location.postcode}
        </p> */}
      </div>
    </div>
  );
};

export default Person;
