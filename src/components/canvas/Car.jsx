import { Vector3, Object3D, Clock } from 'three'
import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, SpotLight, Environment, Outlines, useAnimations } from "@react-three/drei";
import { useControls } from 'leva'

import CanvasLoader from "../Loader";

const Car = ({ outlines, isMobile, spotLights, ...props }) => {
  const car = useGLTF("./free_bmw.glb");
  const ref = useRef();
  // useFrame((state, delta) => (ref.current.rotation.y += delta))

  const lightTargets = spotLights.map(() => new Object3D());

  return (
    <mesh castShadow receiveShadow ref={ref} {...props}>
      <hemisphereLight intensity={5} groundColor="black" />
      {outlines && <Outlines thickness={0.03} angle={0} />}
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
        scale={isMobile ? 1.5 : 2}
        position={isMobile ? [-1.6, -3.5, -2.2] : [0, -3.45, -1.5]}
        rotation={isMobile ?[-0.01, 6.2, -0.1] : [-0.01, 5.8, -0.1]}
      />
    </mesh>
  );
}

function CameraRig({ v = new Vector3() }) {
  return useFrame((state) => {
    const t = state.clock.elapsedTime;
    state.camera.position.lerp(v.set(Math.sin(t / 5), 0, 12 + Math.cos(t / 5) / 2), 0.05);
    state.camera.lookAt(-1.5, -1.8, 0);
  })
}

const CarCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  // const { outlines } = useControls({ outlines: true })

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
      color: "yellow",
      intensity: 300,
      target: new Object3D(),
    },
    {
      position: [2, 4, 12],
      color: "purple",
      intensity: 300,
      target: new Object3D(),
    },
    {
      position: [-3, 2, 13],
      color: "purple",
      intensity: 300,
      target: new Object3D(),
    },
    // Répétez ceci pour les autres lumières
  ]);

  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 15], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Car isMobile={isMobile} spotLights={spotLights} />
      <CameraRig />
      <ambientLight intensity={0.2} color='#ffcc88' />
      <Environment preset='night' />
      </Suspense>
      {/* <Preload all /> */}
    </Canvas>
  );
}

export default CarCanvas;