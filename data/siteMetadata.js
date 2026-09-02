/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'amanda southworth',
  author: 'Amanda Southworth',
  headerTitle: 'amanda southworth | trying to build software that can save your life',
  description: 'Trying to build software that can save your life.',
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://www.codingiswhyicry.com',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,
  email: 'amandaksouthworth@gmail.com',
  github: 'https://github.com/codingiswhyicry',
  youtube: 'https://www.youtube.com/@codingiswhyicryatnight',
  linkedin: 'https://www.linkedin.com/amandasouthworth',
  medium: 'https://medium.com/@codingiswhyicry',
  locale: 'en-US',
  // set to true if you want a navbar fixed to the top
  stickyNav: true,
  analytics: {
    googleAnalytics: {
      googleAnalyticsId: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || '', // e.g. G-XXXXXXX
    },
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus, beehive
    // Please add your .env file and modify it according to your selection
    provider: 'beehiiv',
  },
}

module.exports = siteMetadata
