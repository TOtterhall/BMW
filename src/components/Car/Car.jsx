import { useGLTF } from "@react-three/drei";

export default function Car(props) {
  const { scene } = useGLTF("/bmw.glb");
  return <primitive object={scene} {...props} />;
}
