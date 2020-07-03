/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: LaunchRocketSecondStageFragment
// ====================================================

export interface LaunchRocketSecondStageFragment_payloads {
  __typename: "Payload";
  customers: (string | null)[] | null;
  id: string | null;
  manufacturer: string | null;
  nationality: string | null;
  norad_id: (number | null)[] | null;
  orbit: string | null;
  payload_mass_kg: number | null;
  payload_mass_lbs: number | null;
  payload_type: string | null;
  reused: boolean | null;
}

export interface LaunchRocketSecondStageFragment {
  __typename: "LaunchRocketSecondStage";
  block: number | null;
  payloads: (LaunchRocketSecondStageFragment_payloads | null)[] | null;
}
