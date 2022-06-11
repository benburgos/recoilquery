import { atom } from 'recoil';

// declare and export an atom
export const counterState = atom({
  // the key is used to track the state internally in recoil
  key: 'counterState',
  // default value is the value if no other value exists, the starting value
  default: 0,
});
