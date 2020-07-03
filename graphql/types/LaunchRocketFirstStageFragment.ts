/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: LaunchRocketFirstStageFragment
// ====================================================

export interface LaunchRocketFirstStageFragment_cores {
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

export interface LaunchRocketFirstStageFragment {
  __typename: "LaunchRocketFirstStage";
  cores: (LaunchRocketFirstStageFragment_cores | null)[] | null;
}
