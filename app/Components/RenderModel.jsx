"use client"
import React, { Suspense } from 'react'
import {Canvas} from '@react-three/fiber'
import clsx from 'clsx'
import { Environment } from '@react-three/drei'


export const RenderModel = ({children,className}) => {
  return (
    <Canvas
      className={clsx("w-screen h-screen -z-10 relative", className)}
      shadows={false}
      dpr={[1, 2]}
    >
      <Suspense fallback={null}>{children}</Suspense>
      <Environment preset="sunset" />
    </Canvas>
  );
}
