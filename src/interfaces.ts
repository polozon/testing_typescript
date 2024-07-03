interface TeslaModelS {
    length: number;
    width: number;
    wheelbase: number;
    seatingCapacity: number;
    getTyrePressure: () => number;
    getRemCharging: () => number;
}

export default TeslaModelS;