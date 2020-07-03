/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: LaunchRocketFragment
// ====================================================

export interface LaunchRocketFragment_rocket_diameter {
  __typename: "Distance";
  feet: number | null;
  meters: number | null;
}

export interface LaunchRocketFragment_rocket_engines_thrust_sea_level {
  __typename: "Force";
  lbf: number | null;
  kN: number | null;
}

export interface LaunchRocketFragment_rocket_engines_thrust_vacuum {
  __typename: "Force";
  lbf: number | null;
  kN: number | null;
}

export interface LaunchRocketFragment_rocket_engines {
  __typename: "RocketEngines";
  number: number | null;
  propellant_1: string | null;
  propellant_2: string | null;
  thrust_sea_level: LaunchRocketFragment_rocket_engines_thrust_sea_level | null;
  thrust_vacuum: LaunchRocketFragment_rocket_engines_thrust_vacuum | null;
  thrust_to_weight: number | null;
}

export interface LaunchRocketFragment_rocket {
  __typename: "Rocket";
  id: string | null;
  cost_per_launch: number | null;
  description: string | null;
  active: boolean | null;
  boosters: number | null;
  diameter: LaunchRocketFragment_rocket_diameter | null;
  engines: LaunchRocketFragment_rocket_engines | null;
}

export interface LaunchRocketFragment_fairings {
  __typename: "LaunchRocketFairings";
  recovered: boolean | null;
  recovery_attempt: boolean | null;
  reused: boolean | null;
  ship: string | null;
}

export interface LaunchRocketFragment_first_stage_cores {
  __typename: "LaunchRocketFirstStageCore";
  block: number | null;
  flight: number | null;
  gridfins: boolean | null;
  land_success: boolean | null;
  landing_intent: boolean | null;
  landing_type: string | null;
  landing_vehicle: string | null;
  legs: boolean | null;
  reused: boolean | null;
}

export interface LaunchRocketFragment_first_stage {
  __typename: "LaunchRocketFirstStage";
  cores: (LaunchRocketFragment_first_stage_cores | null)[] | null;
}

export interface LaunchRocketFragment_second_stage_payloads {
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

export interface LaunchRocketFragment_second_stage {
  __typename: "LaunchRocketSecondStage";
  block: number | null;
  payloads: (LaunchRocketFragment_second_stage_payloads | null)[] | null;
}

export interface LaunchRocketFragment {
  __typename: "LaunchRocket";
  rocket_name: string | null;
  rocket_type: string | null;
  rocket: LaunchRocketFragment_rocket | null;
  fairings: LaunchRocketFragment_fairings | null;
  first_stage: LaunchRocketFragment_first_stage | null;
  second_stage: LaunchRocketFragment_second_stage | null;
}
