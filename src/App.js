import React, { useState } from 'react';
import Hero1 from './components/hero1'
import Hero2 from './components/hero2'
import Hero3 from './components/hero3'
import Hero4 from './components/hero4'
function App (){
    return (
      <section className="mainContainer">
          <Hero1/>
          <Hero2/>
          <Hero3/>
          <Hero4/>
      </section>
    )
  }

export default App;
