import React from 'react';
import * as Progress from 'expo-progress';

interface props {
    progress?: number;
    color?: string;
    trackColor?: string;
    indeterminate?: boolean;
    animated?: boolean;
}

export default function ProgressBar({progress, color="black", trackColor="#ededed", indeterminate=false, animated=true}: props){
    return <Progress.Bar style={{marginBottom: 4}} color={color} trackColor={trackColor} height={5} progress={progress} isIndeterminate={indeterminate} isAnimated={animated}  /> 
}