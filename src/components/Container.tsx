import React from 'react'
import { StyleSheet } from 'src/utils'

interface Props {
    children: React.ReactNode
    style?: React.CSSProperties
}

export const Container = ({ children, style }: Props) => {
    return (
        <div
            style={{...styles.container, ...style}}>
            {children}
        </div>
    )
}

const styles: StyleSheet = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: 'calc(100vh - 128px)',
        padding: '40px 20px',
        // 
        width: '100%'
    }
}