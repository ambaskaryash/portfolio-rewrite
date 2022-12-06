/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useMemo, useRef } from 'react';
import { LettersMaterial } from './shaders';
import { useControls } from 'leva';
import { useFrame, useThree } from '@react-three/fiber';
import { BufferAttribute } from 'three';
import { useSpring, config } from '@react-spring/three';
import attribs from '@/assets/data/letters/attribs.json';
import { useHomeStore } from '@/store';

export function Constellation(props) {
  const viewport = useThree((s) => s.viewport);
  const size = useThree((s) => s.size);
  const ref = useRef();
  const converged = useHomeStore((s) => s.converged);

  const { starSize, color1, color2, color3 } = useControls('stars', {
    color1: '#fffbd7',
    color2: '#dcf7ff',
    color3: '#d9d9ff',
    starSize: { value: 17.5, min: 1, max: 45, step: 0.1 },
  });

  const { displacementFactor, scale } = useSpring({
    displacementFactor: converged ? 0 : 1,
    scale: converged ? 2 : 1,
    config: config.molasses,
  });

  const pos = useMemo(() => {
    let arr = attribs['position'];

    return new BufferAttribute(new Float32Array(arr), 3);
  }, []);

  const pos2 = useMemo(() => {
    let count = attribs['position'].length;

    let positions = [];

    // uniform spherical distribution of points with random radii
    for (let i = 0; i < count; i++) {
      let theta = Math.random() * 2 * Math.PI;
      let phi = Math.acos(2 * Math.random() - 1);
      let radius = Math.random() * 1.25 + 0.25;

      let x = radius * Math.sin(phi) * Math.cos(theta);
      let y = radius * Math.sin(phi) * Math.sin(theta);
      let z = radius * Math.cos(phi);

      positions.push(x, y, z);
    }

    return new BufferAttribute(new Float32Array(positions), 3);
  }, []);

  const sizes = useMemo(() => {
    let count = Math.floor(attribs['position'].length / 3);

    let sz = [];

    for (let i = 0; i < count; i++) {
      sz.push(Math.random() * 0.5 + 0.5);
    }

    return new BufferAttribute(new Float32Array(sz), 1);
  }, []);

  const transitionPos = useMemo(() => {
    let arr = attribs['transitionPosition'];

    return new BufferAttribute(new Float32Array(arr), 3);
  }, []);

  useFrame(({ clock }) => {
    ref.current.material.uTime = clock.elapsedTime;
  });

  return (
    <group {...props} dispose={null}>
      <points ref={ref} position={[-0.0, -0.0, 0]}>
        <bufferGeometry>
          <bufferAttribute attach={'attributes-position'} {...pos} />
          <bufferAttribute attach={'attributes-position2'} {...pos2} />
          <bufferAttribute attach={'attributes-size'} {...sizes} />
          <bufferAttribute
            attach={'attributes-transitionPosition'}
            {...transitionPos}
          />
        </bufferGeometry>

        <LettersMaterial
          uPointSize={Math.max(
            starSize * viewport.dpr * (size.height / 600),
            15.0
          )}
          uDisplacementFactor={displacementFactor}
          uColor1={color1}
          uColor2={color2}
          uColor3={color3}
        />
      </points>
    </group>
  );
}