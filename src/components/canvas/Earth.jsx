import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Environment, SpotLight } from "@react-three/drei";

import CanvasLoader from "../Loader";
import { reverseEasing } from "framer-motion";

const Pod = () => {
  const pod = useGLTF("./saiyajin_spacepod.glb");

  return (
    <primitive object={pod.scene} scale={2.5} position-y={-1} rotation-x={3} rotation-z={30}/>
  );
};

const PodCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='always'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [20, 3, 15,], fov: 25 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Pod />
      <Environment preset='dawn' />
      <pointLight intensity={200} />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default PodCanvas;