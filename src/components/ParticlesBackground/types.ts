export enum Color {
    DARK = '#051632',
    MEDIUM = '#0b223a',
    LIGHT = '#143545',
}

export type Range = [number, number];

export interface StyleOptions {
    animationDurationRange: Range;
    animationDelayRange: Range;
}

export interface CompleteStyle {
    height: string,
    width: string,
    top: string,
    left: string,
    backgroundColor: Color,
    animationDuration: string,
    animationIterationCount: string,
    animationTimingFunction: string,
    animationDelay:string,
}
