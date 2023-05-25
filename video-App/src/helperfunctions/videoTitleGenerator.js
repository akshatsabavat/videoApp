const adjectives = [
  "Trending",
  "Viral",
  "Spectacular",
  "Dazzling",
  "Insane",
  "Hilarious",
  "Mind-blowing",
  "Epic",
  "Unforgettable",
  "Incredible",
  "Awesome",
  "Crazy",
  "Genius",
  "Jaw-dropping",
];

const nouns = [
  "Challenges",
  "Dances",
  "Moments",
  "Trends",
  "Reactions",
  "Stunts",
  "Comedy",
  "Entertainment",
  "Laughs",
  "Sensation",
  "Magic",
  "Adventures",
  "Gems",
  "Gags",
];

const topics = [
  "TikTok",
  "ForYouPage",
  "Famous",
  "Creators",
  "Influencers",
  "TikTokLife",
  "TikTok",
  "TikTokFame",
  "ViralVideos",
  "Explore",
  "Popular",
  "Discover",
  "TrendingNow",
  "Buzz",
  "Phenomenon",
];

// Function to generate a random title
export const videoTitleGenerator = () => {
  const randomAdjective =
    adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  const randomTopic = topics[Math.floor(Math.random() * topics.length)];

  return `${randomAdjective} ${randomNoun} on ${randomTopic}`;
};
