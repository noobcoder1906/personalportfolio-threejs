import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../Components/Loader';

const Home = () => (
  <section className="flex flex-col items-center justify-center min-h-screen text-center py-10 px-4 w-full h-screen relative">
    
     {/* < div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center text-lg text-gray-700 max-w-xl">
    Welcome to my Portfolio!<br></br>
      You've stumbled upon my portfolio. It’s here to impress, or at least mildly entertain. 
      Dive in to see what I've been up to—whether you’re here for the showcase or just passing through.
    </div> */}

    {/* 3d component */}

    <Canvas className='w-full h-screen bg-transparent' 
    camera={{near:0.1 , far:1000}}>
      <Suspense fallback={<Loader />}></Suspense>
      <directionalLight/>
      <ambientLight/>
      <pointLight/>
      <spotLight/>
      <hemisphereLight/>
    </Canvas>
    
  </section>
);

export default Home;
