import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useTexture } from "@react-three/drei";

function AirbusModel() {
  const { scene } = useGLTF("/models/Sketchfab_Scene.gltf"); // Load .gltf
  const texture = useTexture("/models/base.jpg"); // Load texture
  texture.flipY = false;

  const modelRef = useRef();

  scene.traverse((child) => {
    if (child.isMesh) {
      if (Array.isArray(child.material)) {
        child.material.forEach((mat) => {
          if (mat.map) mat.map = texture;
        });
      } else {
        if (child.material.map) child.material.map = texture;
      }
      child.material.needsUpdate = true;
    }
  });

  return <primitive ref={modelRef} object={scene} position={[0, 0, 0]} scale={5} />;
}

export default function App() {
  return (
    <div className="fixed inset-0 overflow-hidden">
      <h1 className="absolute z-10 text-white text-4xl top-10 left-10">
        This is a test text!
      </h1>

      <Canvas
        className="w-full h-full"
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
        camera={{ position: [0, 1000, 2000], fov: 60, near: 0.1, far: 50000 }}
      >
        <ambientLight intensity={0.7} />
        <spotLight position={[100, 100, 100]} intensity={1.5} angle={0.3} penumbra={1} />
        <directionalLight position={[-100, 100, -100]} intensity={0.5} />
        <AirbusModel />
        <OrbitControls enablePan={true} enableZoom={true} target={[0, 0, 0]} />
      </Canvas>
    </div>
  );
}
