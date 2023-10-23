import { ICar, NewCar } from './car.model';

export const sampleWithRequiredData: ICar = {
  id: 29016,
};

export const sampleWithPartialData: ICar = {
  id: 19564,
  color: 'saumon',
};

export const sampleWithFullData: ICar = {
  id: 23696,
  model: 'pschitt au dépens de plic',
  color: 'blanc lunaire',
};

export const sampleWithNewData: NewCar = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
