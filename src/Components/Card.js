import React from 'react'

import { StyledCard } from '../styled/Card.styled'
export default function Card({item: {id,title,body,image}}) {    
    return (
    <StyledCard layout={id % 2 === 0 && 'row-reverse'}>
        {/* if id is even gimme row-reverse */}
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div>
     
            <img src={image} alt="desc" />

  
      </div>
    </StyledCard>
  )
}
