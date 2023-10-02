import React from 'react'

export default function UML(props) {

  const { CLASS_UML } = props

  // DECLARO CONSTANTES PARA EL ESPACIADO DEPENDIENDO LA CANTIDAD DE ELEMENTOS
  const attributeSpacing = 57;
  const methodSpacing = 50;

  const height_rect_attribute = 150 + CLASS_UML.attributes.length * 60;
  const height_rect_method = 100 + CLASS_UML.methods.length * 50;
  const svg_height = height_rect_attribute + height_rect_method
  
  return (
    <>    
      <svg width="500" height={svg_height} viewBox={`0 0 500 ${svg_height}`}>
        
        
        
        <g stroke={CLASS_UML.borderColor} strokeWidth="1px" fill={CLASS_UML.headColor}>
          
          {/* RECTANGULO TITULO */}
          <rect x="0px" y="0px" width="100%" height="100px" />
          <text x="50%" y="60px" fontSize="35px" alignmentBaseline="middle" textAnchor="middle" fontWeight="bold" fill={CLASS_UML.textColor} stroke="none">
            {
              CLASS_UML.name
            }
          </text>
        </g>

        <g stroke={CLASS_UML.borderColor} strokeWidth="2px" fill="white">
          
          {/* RECTANGULO ATRIBUTOS */}
          <rect x="0px" y="100px" width="100%" height={`${height_rect_attribute}px`} />
          {
            CLASS_UML.attributes.map((attribute, index) => (
              <text key={attribute} x="50%" y={`${150 + index * attributeSpacing}px`} fontSize="25px" alignmentBaseline="middle" textAnchor="middle" fill={CLASS_UML.textColor} stroke="none">
                {attribute}
              </text>
            ))
          }
        </g>

        <g stroke={CLASS_UML.borderColor} strokeWidth="2px" fill="white">
          
          {/* RECTANGULO METODOS */}
          <rect x="0px" y={`${height_rect_attribute}px`} width="100%" height={`${height_rect_method}px`} />
          {
            CLASS_UML.methods.map((method, index) => (
              <text key={method} x="50%" y={`${75 + height_rect_attribute + index * methodSpacing}px`} fontSize="25px" alignmentBaseline="middle" textAnchor="middle" fill={CLASS_UML.textColor} stroke="none">
                {method}
              </text>
            ))
          }
        </g>

      </svg>
    </>
  )
}