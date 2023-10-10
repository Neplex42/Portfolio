import { Vector3, Object3D  } from 'three'
import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, SpotLight, Environment } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Car = ({ isMobile, spotLights }) => {
  const car = useGLTF("./bmwCar/scene.gltf");

  const lightTargets = spotLights.map(() => new Object3D());

  return (
    <mesh>
      <hemisphereLight intensity={5} groundColor="black" />
      {spotLights.map((light, index) => (
        <SpotLight
          key={index}
          position={light.position}
          angle={Math.PI / 2}
          penumbra={0.1}
          intensity={light.intensity}
          distance={50}
          castShadow
          shadow-mapSize={1024}
          target={lightTargets[index]} // Utilisez la cible correspondante
          color={light.color}
        />
      ))}
      <pointLight intensity={30} />
      <primitive
        object={car.scene}
        scale={isMobile ? 0.7 : 3.5}
        position={isMobile ? [0, -3, -2.2] : [0, -3.45, -1.5]}
        rotation={[-0.01, 0.1, -0.1]}
      />
    </mesh>
  );
}

const CarCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  const [spotLights, setSpotLights] = useState([
    {
      position: [15, 3, 5],
      color: 'white',
      intensity: 300,
      target: new Object3D(), // Créez un objet 3D pour chaque cible
    },
    {
      position: [10, 5, -5],
      color: "yellow",
      intensity: 300,
      target: new Object3D(),
    },
    {
      position: [2, 4, 12],
      color: "#6a5acd",
      intensity: 300,
      target: new Object3D(),
    },
    {
      position: [2, 4, 12],
      color: "#6a5acd",
      intensity: 300,
      target: new Object3D(),
    },
    {
      position: [-3, 2, 13],
      color: "red",
      intensity: 300,
      target: new Object3D(),
    },
    // Répétez ceci pour les autres lumières
  ]);

  // Fonction pour faire clignoter aléatoirement les lumières
  const randomizeSpotLightIntensity = () => {
    const newSpotLights = [...spotLights];
    newSpotLights.forEach((light) => {
      light.intensity = Math.random() < 0.5 ? 10 : 300; // Valeurs d'intensité aléatoires
    });
    setSpotLights(newSpotLights);
  };

  const setRandomInterval = () => {
    const intervalValues = [2000, 500, 1000, 700, 4000, 300];
    const randomIndex = Math.floor(Math.random() * intervalValues.length);
    const randomInterval = intervalValues[randomIndex];
    
    const interval = setInterval(randomizeSpotLightIntensity, randomInterval);
  };

  useEffect(() => {
    // Utilisez un intervalle pour changer l'intensité des lumières toutes les 2 secondes
    setRandomInterval();
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 15], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Car isMobile={isMobile} spotLights={spotLights} />
      <ambientLight intensity={0.2} color='#ffcc88' />
      <Environment preset='night' />
      <Preload all />
    </Canvas>
  );
}


export default CarCanvas;