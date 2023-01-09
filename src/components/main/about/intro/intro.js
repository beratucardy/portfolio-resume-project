import React from "react";
import "./intro.css";

const Intro = () => {
  return (
    <div className="intro">
      <p>
        Hello, My name is Berat UÇAR. Lorem ipsum dolor sit amet, usu sumo
        dicant vulputate in. Quando fabellas adipiscing nam an. An vis congue
        oporteat, no eros facer suavitate eos. An debet affert aliquid ius.
        Veritus placerat est ea, est ne nominavi suscipit maluisset.
      </p>

      <ul className="info">
        <li>
          <strong>Birthday:</strong> December 10, 1998
        </li>
        <li>
          <strong>Location:</strong> Ankara, Turkey
        </li>
        <li>
          <strong>Email:</strong> ownertr55@gmail.com
        </li>
        <li>
          <strong>Phone:</strong> +111 1234-1234
        </li>
      </ul>
    </div>
  );
};

export default Intro;
