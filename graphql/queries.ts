import { gql } from '@apollo/client'

import {
  LAUNCH_LINKS_FRAGMENT,
  LAUNCH_SITE_FRAGMENT,
  LAUNCH_ROCKET_FRAGMENT,
} from './fragments'

export const LAUNCHES = gql`
  query Launches($limit: Int) {
    launches(limit: $limit) {
      id
      mission_name
      mission_id
      launch_date_local
      launch_success
      details
      links {
        ...LaunchLinksFragment
      }
    }
  }
  ${LAUNCH_LINKS_FRAGMENT}
`

export const LAUNCH = gql`
  query Launch($id: ID!) {
    launch(id: $id) {
      id
      mission_name
      launch_year
      launch_date_local
      launch_success
      details
      rocket {
        ...LaunchRocketFragment
      }
      links {
        ...LaunchLinksFragment
      }
      launch_site {
        ...LaunchSiteFragment
      }
    }
  }
  ${LAUNCH_ROCKET_FRAGMENT}
  ${LAUNCH_LINKS_FRAGMENT}
  ${LAUNCH_SITE_FRAGMENT}
`

export const LAUNCH_LATEST = gql`
  query launchLatest {
    launchLatest {
      id
      mission_id
      mission_name
      launch_year
      launch_date_local
      launch_success
      tentative_max_precision
      details
      links {
        ...LaunchLinksFragment
      }
      rocket {
        ...LaunchRocketFragment
      }
      launch_site {
        ...LaunchSiteFragment
      }
    }
  }
  ${LAUNCH_ROCKET_FRAGMENT}
  ${LAUNCH_LINKS_FRAGMENT}
  ${LAUNCH_SITE_FRAGMENT}
`
