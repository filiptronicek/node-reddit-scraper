const pkg = require('./package.json');
require('dotenv').config();

module.exports = {
  concurrents: 10,
  reddit: {
    rateLimit: 3500,
    url: 'https://ssl.reddit.com',
    userAgent: `scraperBot/${pkg.version} by ndboost`
  },
  gfycat: {
    enabled: true,
    url: 'http://gfycat.com/cajax/get',
    domains: ['gfycat.com', 'zippy.gfycat.com', 'giant.gfycat.com'],
    rateLimit: 2000
  },
  redditmedia: {
    enabled: true,
    urls: [
      'https://i.redd.it'
    ],
    domains: [
      'i.redd.it'
    ]
  },
  imgur: {
    enabled: true,
    domains: ['i.imgur.com', 'imgur.com', 'm.imgur.com'],
    rateLimit: 2000,
    auth: {
      clientId: process.env.CID,
      clientSecret: process.env.CS
    },
    urls: {
      hash: 'https://api.imgur.com/3/image',
      album: 'https://api.imgur.com/3/album'
    }
  },
  log: {
    level: 'info',
    handleExceptions: true,
    colorize: true,
    prettyPrint: true
  },
  subreddits: [
    {
      storeByUser: false,
      name: 'dankmemes',
      sortBy: 'best',
      paging: true,
      nsfw: true,
      pages: 5, // grab x pages if paging: true
      limit: 100 //default is 25, max is 100 per reddit api
    },
    {
      storeByUser: false,
      name: 'memes',
      sortBy: 'best',
      paging: true,
      nsfw: true,
      pages: 5, // grab x pages if paging: true
      limit: 100 //default is 25, max is 100 per reddit api
    },
    {
      storeByUser: false,
      name: 'okbuddyretard',
      sortBy: 'best',
      paging: true,
      nsfw: true,
      pages: 5, // grab x pages if paging: true
      limit: 100 //default is 25, max is 100 per reddit api
    },
    {
      storeByUser: false,
      name: 'okbrudimongo',
      sortBy: 'best',
      paging: true,
      nsfw: true,
      pages: 5, // grab x pages if paging: true
      limit: 100 //default is 25, max is 100 per reddit api
    },
    {
      storeByUser: false,
      name: 'okmatewanker',
      sortBy: 'best',
      paging: true,
      nsfw: true,
      pages: 5, // grab x pages if paging: true
      limit: 100 //default is 25, max is 100 per reddit api
    },
    {
      storeByUser: false,
      name: 'starterpacks',
      sortBy: 'best',
      paging: true,
      nsfw: true,
      pages: 5, // grab x pages if paging: true
      limit: 100 //default is 25, max is 100 per reddit api
    },
    {
      storeByUser: false,
      name: 'Memes_Of_The_Dank',
      sortBy: 'best',
      paging: true,
      nsfw: true,
      pages: 5, // grab x pages if paging: true
      limit: 100 //default is 25, max is 100 per reddit api
    },
    {
      storeByUser: false,
      name: 'historymemes',
      sortBy: 'best',
      paging: true,
      nsfw: true,
      pages: 5, // grab x pages if paging: true
      limit: 100 //default is 25, max is 100 per reddit api
    },
    {
      storeByUser: false,
      name: '4panelcringe',
      sortBy: 'best',
      paging: true,
      nsfw: true,
      pages: 5, // grab x pages if paging: true
      limit: 100 //default is 25, max is 100 per reddit api
    }
  ]
};
