import React, { useEffect, useState } from "react";

function CoordinatesInstrument({ selectedObject }) {
  const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    if (selectedObject) {
      // Obtenez la position de l'objet sélectionné
      const { x, y, z } = selectedObject.position;
      setPosition({ x, y, z });
    } else {
      // Si aucun objet n'est sélectionné, réinitialisez les coordonnées à (0, 0, 0)
      setPosition({ x: 0, y: 0, z: 0 });
    }
  }, [selectedObject]);

  return (
    <div>
      <h2>Coordonnées de l'objet sélectionné:</h2>
      <p>X: {position.x.toFixed(2)}</p>
      <p>Y: {position.y.toFixed(2)}</p>
      <p>Z: {position.z.toFixed(2)}</p>
    </div>
  );
}

export default CoordinatesInstrument;
