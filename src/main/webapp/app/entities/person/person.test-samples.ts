import { IPerson, NewPerson } from './person.model';

export const sampleWithRequiredData: IPerson = {
  id: 2622,
};

export const sampleWithPartialData: IPerson = {
  id: 16899,
  surname: 'au-dehors réparer',
};

export const sampleWithFullData: IPerson = {
  id: 11282,
  name: 'hier',
  surname: 'ah dring',
  gender: 'MALE',
};

export const sampleWithNewData: NewPerson = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
