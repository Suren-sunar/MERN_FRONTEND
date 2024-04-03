import React from "react";
import { data } from "../restApi.json";

export const Menu = () => {
  return (
    <section className="menu" id="menu">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">Popular Dishes</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt,
            dolorum temporibus aspernatur, nulla nam culpa impedit placeat
            voluptas similique dignissimos numquam tempora officiis. Odio
            maiores at recusandae, voluptates soluta delectus. Praesentium,
            officia blanditiis. Repudiandae ad quasi rerum adipisci deleniti
            atque optio neque. Ab itaque optio consequuntur odit reiciendis,
            enim nulla dolorum minima nemo natus. Iusto pariatur et fugiat saepe
            repellat! Expedita ducimus vero fugiat? Sequi consequatur odit
            quibusdam aliquam illum quas, iste optio unde esse, perspiciatis
            impedit fugiat earum ab nisi dignissimos provident? Rerum magni
            nulla sequi, cumque ut earum.
          </p>
        </div>
        <div className="dishes_container">
          {data[0].dishes.map((element) => (
            <div className="card" key={element.id}>
              <img src={element.image} alt={element.title} />
              <h3>{element.title}</h3>
              <button>{element.category}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
