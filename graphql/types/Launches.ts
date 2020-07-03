/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Launches
// ====================================================

export interface Launches_launches_links {
  __typename: "LaunchLinks";
  mission_patch_small: string | null;
  presskit: string | null;
  article_link: string | null;
  wikipedia: string | null;
  video_link: string | null;
  flickr_images: (string | null)[] | null;
}

export interface Launches_launches {
  __typename: "Launch";
  id: string | null;
  mission_name: string | null;
  mission_id: (string | null)[] | null;
  launch_date_local: any | null;
  launch_success: boolean | null;
  details: string | null;
  links: Launches_launches_links | null;
}

export interface Launches {
  launches: (Launches_launches | null)[] | null;
}

export interface LaunchesVariables {
  limit?: number | null;
}
