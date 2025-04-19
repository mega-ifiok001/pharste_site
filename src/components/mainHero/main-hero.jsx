import React, { useEffect, useState } from "react";
import "./main-hero.css";

const MainHero = () => {
  const [active, setActive] = useState(1);
  const [other1, setOther1] = useState(null);
  const [other2, setOther2] = useState(null);

  const items = [
    {
      id: 0,
      title: "Caffe Latte, a new product",
      price: "$20",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores labore animi voluptatibus sequi illo, earum molestias explicabo officiis iste neque? Quis quod eligendi fugit, dolore nam itaque modi exercitationem voluptatem corrupti aut aspernatur. Quos non in sed ratione tenetur harum.",
      image: "images/1.png",
      bgColor: "#9c4d2f",
    },
    {
      id: 1,
      title: "Strawberry mocha, a new product",
      price: "$20",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores labore animi voluptatibus sequi illo, earum molestias explicabo officiis iste neque? Quis quod eligendi fugit, dolore nam itaque modi exercitationem voluptatem corrupti aut aspernatur. Quos non in sed ratione tenetur harum.",
      image: "images/2.png",
      bgColor: "#f5bfaf",
    },
    {
      id: 2,
      title: "Doppio espresso, a new product",
      price: "$20",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores labore animi voluptatibus sequi illo, earum molestias explicabo officiis iste neque? Quis quod eligendi fugit, dolore nam itaque modi exercitationem voluptatem corrupti aut aspernatur. Quos non in sed ratione tenetur harum.",
      image: "images/3.png",
      bgColor: "#dedfe1",
    },
    {
      id: 3,
      title: "Matcha latte macchiato, a new product",
      price: "$20",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores labore animi voluptatibus sequi illo, earum molestias explicabo officiis iste neque? Quis quod eligendi fugit, dolore nam itaque modi exercitationem voluptatem corrupti aut aspernatur. Quos non in sed ratione tenetur harum.",
      image: "images/4.png",
      bgColor: "#7eb63d",
    },
  ];

  const changeSlider = (newActive) => {
    const countItem = items.length;
    const other1 = newActive - 1 < 0 ? countItem - 1 : newActive - 1;
    const other2 = newActive + 1 >= countItem ? 0 : newActive + 1;

    setActive(newActive);
    setOther1(other1);
    setOther2(other2);
  };

  const handleNext = () => {
    const newActive = active + 1 >= items.length ? 0 : active + 1;
    changeSlider(newActive);
  };

  const handlePrev = () => {
    const newActive = active - 1 < 0 ? items.length - 1 : active - 1;
    changeSlider(newActive);
  };

  useEffect(() => {
    const autoPlay = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(autoPlay);
  }, [active]);

  return (
    <div className="carousel">
      <div className="list">
        {items.map((item, index) => (
          <article
            key={index}
            className={`item ${
              index === active
                ? "active"
                : index === other1
                ? "other_1"
                : index === other2
                ? "other_2"
                : ""
            }`}
          >
            <div
              className="main-content"
              style={{ backgroundColor: item.bgColor }}
            >
              <div className="content">
                <h2>{item.title}</h2>
                <p className="price">{item.price}</p>
                <p className="description">{item.description}</p>
                <button className="addToCard">Add To Cart</button>
              </div>
            </div>
            <figure className="image">
              <img src={item.image} alt={item.title} />
              <figcaption>{item.title}</figcaption>
            </figure>
          </article>
        ))}
      </div>
      <div className="arrows">
        <button id="prev" onClick={handlePrev}>
          &lt;
        </button>
        <button id="next" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default MainHero;