import React from 'react';
import { SparkLines, SparkLinesLine } from 'react-sparkLines';

export default (props) => {
    return (
        <div>
            <SparkLines height={120} width={180} data={props.data}>
                <SparklinesLine color={props.color} />
            </SparkLines>
        </div>
    )
}
