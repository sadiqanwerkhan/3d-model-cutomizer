export interface Measurement {
  min: number;
  max: number;
  value: number;
}

export interface ModelApiResponse {
  model: string;
  measurements: {
    x: Measurement;
    y: Measurement;
    z: Measurement;
  };
}
