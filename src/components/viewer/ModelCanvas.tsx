import { useGLTF, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useModelData } from "../../hooks/useModelData";

export default function ModelCanvas() {
  const { data, isLoading, error } = useModelData();

  const Model = ({ url }: { url: string }) => {
    const gltf = useGLTF(url);
    return <primitive object={gltf.scene} />;
  };

  if (isLoading) return <p>Loading model...</p>;
  if (error) return <p>Error loading model</p>;
  if (!data) return null;

  return (
    <div className="w-full h-[500px] border rounded">
      <Canvas camera={{ position: [2, 2, 2], fov: 45 }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Model url={data.model} />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
