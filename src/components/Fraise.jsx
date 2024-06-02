import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

export function Fraise(props) {
  const { nodes } = useGLTF('/models/fraise.glb');
  const [isOrange, setIsOrange] = useState(false);
  const fraiseRef = useRef(); 

  useEffect(() => {
    const randomNumber = Math.random();
    setIsOrange(randomNumber < 0.1);
  }, []);

  // Animation pour la fraise
  useFrame(() => {
    if (fraiseRef.current) {
      fraiseRef.current.rotation.y += 0.01;
    }
  });

  const handleClick = () => {
    setIsOrange(!isOrange);
  };

  return (
    <group {...props} dispose={null} onClick={handleClick}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" position={[0, -0.003, -0.107]} rotation={[-1.38, 0, 0]} scale={0.084}>
          <group name="166b9143dffb435bbcb1a7eda8b478f4fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Texture_Group" />
                <group name="Mesh" ref={fraiseRef}>
                  <mesh name="Object_6" geometry={nodes.Object_6.geometry} material={new THREE.MeshStandardMaterial({ color: isOrange ? '#e77b00' : 'white' })} />
                  <mesh geometry={nodes.Object_7.geometry} material={new THREE.MeshStandardMaterial({ color: isOrange ? '#e77b00' : 'white' })} />
                  <mesh geometry={nodes.Object_8.geometry} material={new THREE.MeshStandardMaterial({ color: isOrange ? '#e77b00' : 'white' })} />
                </group>
                <group name="Camera" position={[0.776, 5.066, 13.409]} rotation={[2.981, 1.509, 2.975]}>
                  <group name="Object_10" />
                </group>
                <group name="Texture_Group_(2)" />
                <group name="Directional_Light" position={[-200, 200, 200]} rotation={[1.183, -0.361, 0.714]}>
                  <group name="Object_13" rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Object_14" />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/models/fraise.glb');
