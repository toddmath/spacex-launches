/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: RocketEnginesFragment
// ====================================================

export interface RocketEnginesFragment_thrust_sea_level {
  __typename: "Force";
  lbf: number | null;
  kN: number | null;
}

export interface RocketEnginesFragment_thrust_vacuum {
  __typename: "Force";
  lbf: number | null;
  kN: number | null;
}

export interface RocketEnginesFragment {
  __typename: "RocketEngines";
  number: number | null;
  propellant_1: string | null;
  propellant_2: string | null;
  thrust_sea_level: RocketEnginesFragment_thrust_sea_level | null;
  thrust_vacuum: RocketEnginesFragment_thrust_vacuum | null;
  thrust_to_weight: number | null;
}
