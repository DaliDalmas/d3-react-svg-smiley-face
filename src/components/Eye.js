export default function Eye(props){

    const eyeRadius = 25;
    const pupilRadius = 10;

    return(
        <g transform={`translate(${props.eyeOffsetX}, ${props.eyeOffsetY})`}>
            <circle
                r={props.frameRadius}
                fill="white"
                stroke="black"
                fillOpacity={"30%"}
                >
            </circle>
            <circle
                r={eyeRadius}
                fill="white"
                stroke="black"
                fillOpacity={"60%"}
                >
            </circle>
            <defs>
                <radialGradient id="pupilGradient">
                    <stop offset={`0%`} stopColor="black"/>
                    <stop offset={`100%`} stopColor="blue"/>
                    
                </radialGradient>
            </defs>
            <circle
                r={pupilRadius}
                fill="url(#pupilGradient)"
                // stroke="black"
                />
            
            <line 
                x1={-50}
                x2={50}
                y1={-70}
                y2={-70}
                stroke="black"
                stroke-width={15}
            />
        </g>
    )
}