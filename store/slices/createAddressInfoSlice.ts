import { count } from "console";
import { StateCreator } from "zustand";

type AddressInfo = {
  country: string;
  state: string;
  city: string;
  zipcode:string;
};

type AddressInfoSlice = {
  addressInfo: AddressInfo;
  setAddressInfo: (data: AddressInfo) => void;
};

const initialState = {
  country: "",
  state: "",
  city: "",
  zipcode:"",
};

const createAddressInfoSlice: StateCreator<AddressInfoSlice> = (set) => ({
  addressInfo: initialState,
  setAddressInfo: (data) =>
    set((state) => ({ addressInfo: { ...state.addressInfo, ...data } })),
});

export default createAddressInfoSlice;
export type { AddressInfo, AddressInfoSlice };
