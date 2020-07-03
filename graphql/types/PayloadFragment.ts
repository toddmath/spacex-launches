/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PayloadFragment
// ====================================================

export interface PayloadFragment {
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
