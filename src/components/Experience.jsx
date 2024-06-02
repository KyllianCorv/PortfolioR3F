import React from 'react';

import { Environment, OrbitControls, Sparkles,} from '@react-three/drei';
import { Fraise } from './Fraise';

const RotatingBox = () => {
  const totalFraises = 10;
  const distanceTotale = 40; 
  const ecartEntreFraises = distanceTotale / (totalFraises - 1);
  
  return (
    <>
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      <mesh>
        <ambientLight intensity={0.7} />
        <pointLight position={[1, 0, 1]} intensity={1} color="white" />
        <directionalLight position={[10, 10, 0]} intensity={8} />
          {[-10, -5, 0, 5, 10].map(y => 
          Array.from({ length: 10 }).map((_, index) => (
            <mesh key={index} position={[-20 + index * ecartEntreFraises, y, 0]}>
              <Fraise scale={8} />
              
              <Sparkles count={10} scale={8} size={5} speed={0.8} />
            </mesh>
          ))
        )}

        
      </mesh>
      <Environment preset="studio" />
    </>
  );
};

export default RotatingBox;
