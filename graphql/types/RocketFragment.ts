/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: RocketFragment
// ====================================================

export interface RocketFragment_diameter {
  __typename: "Distance";
  feet: number | null;
  meters: number | null;
}

export interface RocketFragment_engines_thrust_sea_level {
  __typename: "Force";
  lbf: number | null;
  kN: number | null;
}

export interface RocketFragment_engines_thrust_vacuum {
  __typename: "Force";
  lbf: number | null;
  kN: number | null;
}

export interface RocketFragment_engines {
  __typename: "RocketEngines";
  number: number | null;
  propellant_1: string | null;
  propellant_2: string | null;
  thrust_sea_level: RocketFragment_engines_thrust_sea_level | null;
  thrust_vacuum: RocketFragment_engines_thrust_vacuum | null;
  thrust_to_weight: number | null;
}

export interface RocketFragment {
  __typename: "Rocket";
  id: string | null;
  cost_per_launch: number | null;
  description: string | null;
  active: boolean | null;
  boosters: number | null;
  diameter: RocketFragment_diameter | null;
  engines: RocketFragment_engines | null;
}
