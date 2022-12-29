import React from 'react';
import { Skeleton } from './SkeletonElement.styles';

const SkeletonElement = ({ width, height, margin, border }) => {
    return (
        <Skeleton width={width} height={height} margin={margin} border={border}></Skeleton>
    )
}

export default SkeletonElement;