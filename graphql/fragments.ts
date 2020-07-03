import { gql } from '@apollo/client'

export const LAUNCH_LINKS_FRAGMENT = gql`
  fragment LaunchLinksFragment on LaunchLinks {
    mission_patch_small
    presskit
    article_link
    wikipedia
    video_link
    flickr_images
  }
`

export const LAUNCH_SITE_FRAGMENT = gql`
  fragment LaunchSiteFragment on LaunchSite {
    site_id
    site_name
    site_name_long
  }
`

export const DIAMETER_FRAGMENT = gql`
  fragment DiameterFragment on Distance {
    feet
    meters
  }
`

export const FORCE_FRAGMENT = gql`
  fragment ForceFragment on Force {
    lbf
    kN
  }
`

export const ROCKET_ENGINES_FRAGMENT = gql`
  fragment RocketEnginesFragment on RocketEngines {
    number
    propellant_1
    propellant_2
    thrust_sea_level {
      ...ForceFragment
    }
    thrust_vacuum {
      ...ForceFragment
    }
    thrust_to_weight
  }
  ${FORCE_FRAGMENT}
`

export const ROCKET_FAIRINGS_FRAGMENT = gql`
  fragment RocketFairingsFragment on LaunchRocketFairings {
    recovered
    recovery_attempt
    reused
    ship
  }
`

export const ROCKET_FRAGMENT = gql`
  fragment RocketFragment on Rocket {
    id
    cost_per_launch
    description
    active
    boosters
    description
    diameter {
      ...DiameterFragment
    }
    engines {
      ...RocketEnginesFragment
    }
  }
  ${DIAMETER_FRAGMENT}
  ${ROCKET_ENGINES_FRAGMENT}
`

export const LAUNCH_ROCKET_FIRST_STAGE_FRAGMENT = gql`
  fragment LaunchRocketFirstStageFragment on LaunchRocketFirstStage {
    cores {
      block
      flight
      gridfins
      land_success
      landing_intent
      landing_type
      landing_vehicle
      legs
      reused
    }
  }
`

export const PAYLOAD_FRAGMENT = gql`
  fragment PayloadFragment on Payload {
    customers
    id
    manufacturer
    nationality
    norad_id
    orbit
    payload_mass_kg
    payload_mass_lbs
    payload_type
    reused
  }
`

export const LAUNCH_ROCKET_SECOND_STAGE_FRAGMENT = gql`
  fragment LaunchRocketSecondStageFragment on LaunchRocketSecondStage {
    block
    payloads {
      ...PayloadFragment
    }
  }
  ${PAYLOAD_FRAGMENT}
`

export const LAUNCH_ROCKET_FRAGMENT = gql`
  fragment LaunchRocketFragment on LaunchRocket {
    rocket_name
    rocket_type
    rocket {
      ...RocketFragment
    }
    fairings {
      ...RocketFairingsFragment
    }
    first_stage {
      ...LaunchRocketFirstStageFragment
    }
    second_stage {
      ...LaunchRocketSecondStageFragment
    }
  }
  ${ROCKET_FRAGMENT}
  ${ROCKET_FAIRINGS_FRAGMENT}
  ${LAUNCH_ROCKET_FIRST_STAGE_FRAGMENT}
  ${LAUNCH_ROCKET_SECOND_STAGE_FRAGMENT}
`
