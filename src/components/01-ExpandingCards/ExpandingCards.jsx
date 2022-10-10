import React, { useState, useEffect } from "react";
import SingleCard from "./SingleCard";
import { useExpandedCards } from "../../queries";
import "./style.css";

const ExpandingCards = () => {
  const { data, isLoading, isSuccess } = useExpandedCards();
  const [activeIndex, useActiveIndex] = useState(1);
  function handleClick(id) {
    useActiveIndex(id);
  }
  return (
    <>
      {isLoading && <h1>Loading....</h1>}
      {isSuccess && (
        <div className='container'>
          {data.map((d) => {
            return (
              <SingleCard
                id={d.id}
                name={d.name}
                url={d.url}
                key={d.id}
                ac={activeIndex}
                active={d.id === activeIndex && true}
                handleClick={handleClick}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default ExpandingCards;
