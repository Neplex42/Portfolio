import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  // Utilisation de "useProgress()" pour obtenir l'état de progression du chargement.

  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {/* Crée un élément HTML div centré verticalement et horizontalement. */}
      <span className='canvas-loader'></span>
      {/* Affiche un élément avec la classe CSS "canvas-loader", probablement une animation de chargement. */}
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {/* Affiche le pourcentage de progression du chargement arrondi à deux décimales. */}
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};


export default Loader