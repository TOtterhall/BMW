============================================================
Hur bygger man koden?
============================================================
=> I Terminalen instalera det du behöver
npm create vite@latest
npm install

npm install three
npm install @react-three/fiber
npm install @react-three/drei

Ta bort ikoner/städa upp och testkör med
npm run dev i terminalen
Ladda ner glb som ska outas i projektet. Jag tog en BMW.
Sen kan man börja bygga funktionerna.

<!-- import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import Car from "./components/Car/Car";

// function APP definerar  min rotkomponent
function App() {
  return (
    <>
    {/* // <Canvas är en komponent som kommer från react-three-fiber, skapar WebGL för att rita ut och styla 3D scenen */}
      <Canvas
       {/* // dpr hanterar skuggor */}
        dpr={[1, 2]}
        shadows
        camera={{ fov: 45 }}
        style={{ position: "absolute" }}
      >
        {/* // sätter bakgrundsfärgen */}
        <color attach="background" args={["#101010"]} />
        {/* // <presentationsControls är en komponent från drei här ställs egenskaper in så som hastighet, zoom, kordinater */}
        <PresentationControls
          speed={1.5}
          global
          zoom={0.5}
          polar={[-0.1, Math.PI / 4]}
        >
          {/* // Stage- här sätts miljön för scenen */}
          <Stage enviroment={null}>
          {/* // Min bil komponent som ligger i Canvas */}
            <Car scale={0.01} />
          </Stage>
        </PresentationControls>
      </Canvas>
    </>
  );
}

export default App; -->

============================================================
Hur kör man koden?
============================================================
I terminalen slkriver du => npm run dev
============================================================

============================================================
[Car](/src/components/Car/Car.jsx)
[App](/src/App.jsx)
