import { Vector3 } from 'three'
import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, SpotLight, Environment } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Car = ({ isMobile }) => {
  const car = useGLTF("./bmwCar/scene.gltf");
  
  return (
    <mesh>
      <hemisphereLight intensity={5} groundColor='black' />
      <SpotLight
        position={[15, 3, 5]}
        angle={Math.PI / 2}
        penumbra={0.1}
        intensity={300}
        distance={40}
        castShadow
        shadow-mapSize={1024}
        target={car.scene}
      />
      <SpotLight
        position={[2, 4, 12]}
        angle={Math.PI / 2}
        penumbra={0.1}
        intensity={300}
        distance={40}
        castShadow
        shadow-mapSize={1024}
        target={car.scene}
      />
      <pointLight intensity={30} />
      <primitive
        object={car.scene}
        scale={isMobile ? 0.7 : 3.5}
        position={isMobile ? [0, -3, -2.2] : [0, -3.45, -1.5]}
        rotation={[-0.01, .1, -0.1]}
      />
    </mesh>
  );
};

const CarCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 15], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Car isMobile={isMobile} />
        <ambientLight intensity={0.2} color="#ffcc88" />
        <Environment preset="night" />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default CarCanvas;
