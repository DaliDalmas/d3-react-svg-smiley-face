import Eye from "./Eye";
import { arc } from "d3";

export default function Face(props){
    const faceRadius=200;
    const eyeOffsetX=90;
    const eyeOffsetY=50;
    const frameRadius = 60;

    const mouthArc = arc()
                    .innerRadius(100)
                    .outerRadius(0)
                    .startAngle(Math.PI/2)
                    .endAngle(Math.PI*3/2)
    const noseArc = arc()
                    .innerRadius(20)
                    .outerRadius(20)
                    .startAngle(Math.PI)
                    .endAngle(2*Math.PI)
    return(
        <g transform={`translate(${props.canvasWidth/2}, ${props.canvasHeight/2})`}>
            <defs>
                <linearGradient id="faceGradient" x2="0%" y2="100%">
                    <stop offset={`0%`} stopColor="orange"/>
                    <stop offset={`100%`} stopColor="yellow"/>
                    
                </linearGradient>
            </defs>
            <circle
                r={faceRadius}
                fill="url(#faceGradient)"
                stroke="black"
                
                >
            </circle>

            <Eye
                eyeOffsetX={-eyeOffsetX}
                eyeOffsetY={-eyeOffsetY}
                frameRadius={frameRadius}
            />
            
            <Eye
                eyeOffsetX={eyeOffsetX}
                eyeOffsetY={-eyeOffsetY}
                frameRadius={frameRadius}
            />

            <line
                x1={-eyeOffsetX+frameRadius}
                y1={-eyeOffsetY}
                x2={eyeOffsetX-frameRadius}
                y2={-eyeOffsetY}
                stroke="black"
                stroke-width={4}
            />

            <line 
                x1={-eyeOffsetX-frameRadius}
                y1={-eyeOffsetY}
                x2={-faceRadius+13}
                y2={-eyeOffsetY-20}
                stroke="black"
                stroke-width={4}

            />

            <line 
                x1={eyeOffsetX+frameRadius}
                y1={-eyeOffsetY}
                x2={faceRadius-13}
                y2={-eyeOffsetY-20}
                stroke="black"
                stroke-width={4}

            />

            <path d={noseArc()}
                stroke="black"
                stroke-width={4}
                />

            <path
                d={mouthArc()}
                fill="white"
                stroke="black"
                stroke-width={2}
                transform={`translate(0,${40})`}
            />

        </g>
    )
}