export interface TeslaModelS {
    length: number;
    width: number;
    wheelbase: number;
    seatingCapacity: number;
    getTyrePressure: () => number;
    getRemCharging: () => number;
}

export interface Pair<K, V> {
    key: K;
    value: V;
}

//export type as TeslaModelS
//export type as Pair<K, V> 
