import styled from '@emotion/styled'
import { Skeleton } from '@mui/material'
import React from 'react'

export const ProfileMessageSkeleton = () =>{
    return <ProfileWrapper>
        <Skeleton variant="circular" width={50} height={50} />
        <Skeleton variant="rectangular" height={60} width={"100%"} />
    </ProfileWrapper>
}

const ProfileWrapper = styled.div({
    display: "flex",
    justifyContent:"space-between",
    alignItems:"flex-start",
    gap:"1rem",
    padding:"1rem"
})
