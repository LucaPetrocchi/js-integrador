import React from 'react'

export default function UML(props) {

  const { CLASS_UML } = props

  // DECLARO CONSTANTES PARA EL ESPACIADO DEPENDIENDO LA CANTIDAD DE ELEMENTOS
  const attributeSpacing = 57;
  const methodSpacing = 50;

  const heightRectAttribute = 150 + CLASS_UML.attributes.length * 60;
  const heightRectMethod = 100 + CLASS_UML.methods.length * 50;
  const svgHeight = heightRectAttribute + heightRectMethod


  const palabraMasLarga = (attributes, methods, name) => {
    let palabras = attributes.concat(methods, name);
    let longitudes = palabras.map(palabra => palabra.length);
    let maxLongitud = Math.max(...longitudes);
    return maxLongitud
  }

  const svgWidth = palabraMasLarga(CLASS_UML.attributes, CLASS_UML.methods, CLASS_UML.name)
  
  return (
    <>    
      <svg width={`${svgWidth * 11.5 + 250}px`} height={svgHeight} viewBox={`0 0 ${svgWidth * 10 + 250} ${svgHeight}`}>
        
        
        
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
          <rect x="0px" y="100px" width="100%" height={`${heightRectAttribute}px`} />
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
          <rect x="0px" y={`${heightRectAttribute}px`} width="100%" height={`${heightRectMethod}px`} />
          {
            CLASS_UML.methods.map((method, index) => (
              <text key={method} x="50%" y={`${75 + heightRectAttribute + index * methodSpacing}px`} fontSize="25px" alignmentBaseline="middle" textAnchor="middle" fill={CLASS_UML.textColor} stroke="none">
                {method}
              </text>
            ))
          }
        </g>

      </svg>
    </>
  )
}