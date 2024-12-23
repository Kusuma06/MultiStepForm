import { create } from "zustand";
import { PersonalInfoSlice } from "./slices/createPersonalInfoSlice";
import { AddressInfoSlice } from "./slices/createAddressInfoSlice";

import { PlanSlice } from "./slices/createPlanSlice";
import { AddOnSlice } from "./slices/createAddOnSlice";
import { ToggleSubcriptionPlanSlice } from "./slices/createToggleSubscriptionPlan";
import {
  createPersonalInfoSlice,
  createAddressInfoSlice,
  createPlanSlice,
  createAddOnSlice,
  createToggleSubscriptionPlan,
  createStepSlice,
  createSubmitFormSlice,
} from "./slices";
import { StepSlice } from "./slices/createStepSlice";
import { SubmitFormSlice } from "./slices/createSubmitFormSlice";

const useStore = create<
  PersonalInfoSlice &
  AddressInfoSlice&
    PlanSlice &
    AddOnSlice &
    ToggleSubcriptionPlanSlice &
    StepSlice &
    SubmitFormSlice
>()((...a) => ({
  ...createPersonalInfoSlice(...a),
  ...createAddressInfoSlice(...a),
  ...createPlanSlice(...a),
  ...createAddOnSlice(...a),
  ...createToggleSubscriptionPlan(...a),
  ...createStepSlice(...a),
  ...createSubmitFormSlice(...a),
}));

export default useStore;
