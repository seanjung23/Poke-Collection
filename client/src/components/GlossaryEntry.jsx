import React, { useState } from "react";
import Details from "./Details.jsx";

export default function GlossaryEntry({ card }) {
  const [clickedPokemon, setClickedPokemon] = useState(false);

  const low = () => {
    if (card.tcgplayer.prices === undefined) {
      return "N/A";
    } else if (
      card.tcgplayer.prices.normal &&
      card.tcgplayer.prices.holofoil === undefined
    ) {
      return "$" + card.tcgplayer.prices.normal.low;
    } else if (
      card.tcgplayer.prices.normal === undefined &&
      card.tcgplayer.prices.holofoil
    ) {
      return "$" + card.tcgplayer.prices.holofoil.low;
    }
  };

  const market = () => {
    if (card.tcgplayer.prices === undefined) {
      return "N/A";
    } else if (
      card.tcgplayer.prices.normal &&
      card.tcgplayer.prices.holofoil === undefined
    ) {
      return "$" + card.tcgplayer.prices.normal.market;
    } else if (
      card.tcgplayer.prices.normal === undefined &&
      card.tcgplayer.prices.holofoil
    ) {
      return "$" + card.tcgplayer.prices.holofoil.market;
    }
  };

  return (
    <div
      className="poke-card"
      onClick={() => setClickedPokemon(!clickedPokemon)}
    >
      <img className="poke-image" src={card.images.large}></img>
      <div>
        <h5 className="poke-title">{card.name}</h5>
        <p>Set: {card.set.name} Set</p>
        <p>Rarity: {card.rarity || "Common"}</p>
        <p>Low: {low()}</p>
        <p>Market Price: {market()}</p>
      </div>
      {clickedPokemon && (
        <Details
          card={card}
          clickedPokemon={clickedPokemon}
          setClickedPokemon={setClickedPokemon}
        />
      )}
    </div>
  );
}
