/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: launchLatest
// ====================================================

export interface launchLatest_launchLatest_links {
  __typename: "LaunchLinks";
  mission_patch_small: string | null;
  presskit: string | null;
  article_link: string | null;
  wikipedia: string | null;
  video_link: string | null;
  flickr_images: (string | null)[] | null;
}

export interface launchLatest_launchLatest_rocket_rocket_diameter {
  __typename: "Distance";
  feet: number | null;
  meters: number | null;
}

export interface launchLatest_launchLatest_rocket_rocket_engines_thrust_sea_level {
  __typename: "Force";
  lbf: number | null;
  kN: number | null;
}

export interface launchLatest_launchLatest_rocket_rocket_engines_thrust_vacuum {
  __typename: "Force";
  lbf: number | null;
  kN: number | null;
}

export interface launchLatest_launchLatest_rocket_rocket_engines {
  __typename: "RocketEngines";
  number: number | null;
  propellant_1: string | null;
  propellant_2: string | null;
  thrust_sea_level: launchLatest_launchLatest_rocket_rocket_engines_thrust_sea_level | null;
  thrust_vacuum: launchLatest_launchLatest_rocket_rocket_engines_thrust_vacuum | null;
  thrust_to_weight: number | null;
}

export interface launchLatest_launchLatest_rocket_rocket {
  __typename: "Rocket";
  id: string | null;
  cost_per_launch: number | null;
  description: string | null;
  active: boolean | null;
  boosters: number | null;
  diameter: launchLatest_launchLatest_rocket_rocket_diameter | null;
  engines: launchLatest_launchLatest_rocket_rocket_engines | null;
}

export interface launchLatest_launchLatest_rocket_fairings {
  __typename: "LaunchRocketFairings";
  recovered: boolean | null;
  recovery_attempt: boolean | null;
  reused: boolean | null;
  ship: string | null;
}

export interface launchLatest_launchLatest_rocket_first_stage_cores {
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

export interface launchLatest_launchLatest_rocket_first_stage {
  __typename: "LaunchRocketFirstStage";
  cores: (launchLatest_launchLatest_rocket_first_stage_cores | null)[] | null;
}

export interface launchLatest_launchLatest_rocket_second_stage_payloads {
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

export interface launchLatest_launchLatest_rocket_second_stage {
  __typename: "LaunchRocketSecondStage";
  block: number | null;
  payloads: (launchLatest_launchLatest_rocket_second_stage_payloads | null)[] | null;
}

export interface launchLatest_launchLatest_rocket {
  __typename: "LaunchRocket";
  rocket_name: string | null;
  rocket_type: string | null;
  rocket: launchLatest_launchLatest_rocket_rocket | null;
  fairings: launchLatest_launchLatest_rocket_fairings | null;
  first_stage: launchLatest_launchLatest_rocket_first_stage | null;
  second_stage: launchLatest_launchLatest_rocket_second_stage | null;
}

export interface launchLatest_launchLatest_launch_site {
  __typename: "LaunchSite";
  site_id: string | null;
  site_name: string | null;
  site_name_long: string | null;
}

export interface launchLatest_launchLatest {
  __typename: "Launch";
  id: string | null;
  mission_id: (string | null)[] | null;
  mission_name: string | null;
  launch_year: string | null;
  launch_date_local: any | null;
  launch_success: boolean | null;
  tentative_max_precision: string | null;
  details: string | null;
  links: launchLatest_launchLatest_links | null;
  rocket: launchLatest_launchLatest_rocket | null;
  launch_site: launchLatest_launchLatest_launch_site | null;
}

export interface launchLatest {
  launchLatest: launchLatest_launchLatest | null;
}
