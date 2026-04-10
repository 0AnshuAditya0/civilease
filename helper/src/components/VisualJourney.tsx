import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Text, Float, PerspectiveCamera, Environment, Stars, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import { SceneStep, SceneData } from '../types';
import { motion } from 'motion/react';

const StepNode = ({ step, isCurrent, isCompleted }: { step: SceneStep, isCurrent: boolean, isCompleted: boolean }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      if (isCurrent) {
        meshRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.1);
      }
    }
  });

  const getColor = () => {
    if (isCompleted) return '#22c55e';
    if (isCurrent) return '#3b82f6';
    return '#94a3b8';
  };

  const getIcon = () => {
    switch (step.type) {
      case 'start': return '📍';
      case 'document': return '📄';
      case 'office': return '🏢';
      case 'payment': return '💰';
      case 'success': return '✅';
      default: return '●';
    }
  };

  return (
    <group position={step.position}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh ref={meshRef}>
          <octahedronGeometry args={[0.5, 0]} />
          <meshStandardMaterial color={getColor()} emissive={getColor()} emissiveIntensity={isCurrent ? 2 : 0.5} />
        </mesh>
      </Float>
      
      <Text
        position={[0, 1.2, 0]}
        fontSize={0.3}
        color="white"
        anchorX="center"
        anchorY="middle"
        font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZhrib2Bg-4.ttf"
      >
        {step.title}
      </Text>
      
      <Text
        position={[0, 0.8, 0]}
        fontSize={0.5}
        anchorX="center"
        anchorY="middle"
      >
        {getIcon()}
      </Text>

      {isCurrent && (
        <mesh position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.6, 0.8, 32]} />
          <meshBasicMaterial color="#3b82f6" transparent opacity={0.5} side={THREE.DoubleSide} />
        </mesh>
      )}
    </group>
  );
};

const Path = ({ steps }: { steps: SceneStep[] }) => {
  const points = steps.map(s => new THREE.Vector3(...s.position));
  const curve = new THREE.CatmullRomCurve3(points);
  const pathPoints = curve.getPoints(100);
  
  return (
    <line>
      <bufferGeometry attach="geometry" onUpdate={self => self.setFromPoints(pathPoints)} />
      <lineBasicMaterial attach="material" color="#475569" linewidth={2} transparent opacity={0.5} />
    </line>
  );
};

const Scene = ({ data, currentStepIndex }: { data: SceneData, currentStepIndex: number }) => {
  const { camera } = useThree();
  const targetPos = useRef(new THREE.Vector3(0, 5, 10));

  useEffect(() => {
    if (data.steps[currentStepIndex]) {
      const stepPos = data.steps[currentStepIndex].position;
      targetPos.current.set(stepPos[0], stepPos[1] + 3, stepPos[2] + 5);
    }
  }, [currentStepIndex, data.steps]);

  useFrame(() => {
    camera.position.lerp(targetPos.current, 0.05);
    if (data.steps[currentStepIndex]) {
      const stepPos = new THREE.Vector3(...data.steps[currentStepIndex].position);
      camera.lookAt(stepPos);
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <Environment preset="city" />
      
      <Path steps={data.steps} />
      
      {data.steps.map((step, index) => (
        <StepNode 
          key={step.id} 
          step={step} 
          isCurrent={index === currentStepIndex}
          isCompleted={index < currentStepIndex}
        />
      ))}
      
      <ContactShadows position={[0, -1, 0]} opacity={0.4} scale={20} blur={2} far={4.5} />
    </>
  );
};

export const VisualJourney = ({ data }: { data: SceneData }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  return (
    <div className="relative w-full h-[500px] bg-slate-950 rounded-xl overflow-hidden border border-slate-800">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 5, 10]} fov={50} />
        <Scene data={data} currentStepIndex={currentStepIndex} />
        <OrbitControls enablePan={false} enableZoom={true} maxPolarAngle={Math.PI / 2.1} />
      </Canvas>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-slate-900/80 backdrop-blur-md px-6 py-3 rounded-full border border-slate-700">
        <button 
          onClick={() => setCurrentStepIndex(Math.max(0, currentStepIndex - 1))}
          disabled={currentStepIndex === 0}
          className="p-2 hover:bg-slate-800 rounded-full disabled:opacity-30 transition-colors"
        >
          <span className="text-white">←</span>
        </button>
        
        <div className="flex flex-col items-center min-w-[200px]">
          <span className="text-xs text-slate-400 uppercase tracking-widest font-bold">
            Step {currentStepIndex + 1} of {data.steps.length}
          </span>
          <span className="text-sm text-white font-medium truncate max-w-[180px]">
            {data.steps[currentStepIndex]?.title}
          </span>
        </div>

        <button 
          onClick={() => setCurrentStepIndex(Math.min(data.steps.length - 1, currentStepIndex + 1))}
          disabled={currentStepIndex === data.steps.length - 1}
          className="p-2 hover:bg-slate-800 rounded-full disabled:opacity-30 transition-colors"
        >
          <span className="text-white">→</span>
        </button>
      </div>

      <div className="absolute top-6 left-6 max-w-xs">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          key={currentStepIndex}
          className="bg-slate-900/80 backdrop-blur-md p-4 rounded-lg border border-slate-700 shadow-xl"
        >
          <h3 className="text-blue-400 font-bold mb-1">{data.steps[currentStepIndex]?.title}</h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            {data.steps[currentStepIndex]?.description}
          </p>
        </motion.div>
      </div>
    </div>
  );
};
