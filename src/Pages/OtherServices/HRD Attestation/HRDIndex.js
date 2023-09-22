import React from 'react'


import HRDattestation from './HRDattestation'
import WhatIsHRD from './WhatIsHRD';
import HRDservices from './HRDservices';
import ServicesMob from './ServicesMob';
import PurposesOfHRD from './PurposesOfHRD';
import ProcedureForHrd from './ProcedureForHrd';
import DocumentsRequired from './DocumentsRequired';

import WhyIsTrueway from '../../../Components/WhyisTrueway'
import OurClients from '../OurClients'

import FaqHRD from './FaqHRD';




function HRDIndex() {

  return (
    <div>
        <HRDattestation />
        <WhatIsHRD />
        <HRDservices />
        <ServicesMob /> {/*  countries in mobile screen size */}
        <PurposesOfHRD /> 
        <ProcedureForHrd />
        <DocumentsRequired />
        <WhyIsTrueway />
        <OurClients />
        <FaqHRD/>
    </div>
  )
  
}

export default HRDIndex;