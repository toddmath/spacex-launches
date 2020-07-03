import { Launches_launches } from 'graphql/types/Launches'
// import { Launch_launch } from 'graphql/types/Launch'

export type LaunchLinks = {
  article_link?: string
  flickr_images: string[]
  mission_patch_small?: string
  mission_patch?: string
  presskit?: string
  reddit_campaign?: string
  reddit_launch?: string
  reddit_media?: string
  reddit_recovery?: string
  video_link?: string
  wikipedia?: string
}

interface Launch extends Launches_launches {
  mission_id: (string | null)[] | null
}
export interface LaunchProps {
  data: Launch
}

// export interface LaunchProps {
//   data: {
//     id: number
//     mission_name: string
//     mission_id: string | number
//     launch_date_local: string
//     launch_success: string | boolean
//     details: string
//     links: LaunchLinks
//   }
// }
