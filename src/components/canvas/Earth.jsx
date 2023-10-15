import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Environment, SpotLight } from "@react-three/drei";

import CanvasLoader from "../Loader";
import { reverseEasing } from "framer-motion";

const Pod = () => {
  const pod = useGLTF("./saiyajin_spacepod.glb");

  return (
    <primitive object={pod.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const PodCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [3, -8, 3],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Pod />
      <Environment preset='city' />
      <pointLight intensity={200} />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default PodCanvas;