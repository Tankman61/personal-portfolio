import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function AirbusModel() {
  const { scene } = useGLTF("/models/airbus_a350.glb");
  const modelRef = useRef();

  return (
    <primitive
      ref={modelRef}
      object={scene}
      position={[0, 0, 0]}
      scale={5} // Increased scale significantly
    />
  );
}

export default function App() {
  return (
    <Canvas
      className="w-full h-screen"
      camera={{
        position: [0, 20, 50], // Centered and closer
        fov: 50,
        near: 0.1,
        far: 10000
      }}
    >
      <ambientLight intensity={0.7} />
      <spotLight
        position={[100, 100, 100]}
        intensity={1.5}
        angle={0.3}
        penumbra={1}
      />
      <directionalLight
        position={[-100, 100, -100]}
        intensity={0.5}
      />
      <AirbusModel />
      <OrbitControls
        enablePan={true}
        enableZoom={true}
        target={[0, 0, 0]} // Centered target
      />
    </Canvas>
  );
}