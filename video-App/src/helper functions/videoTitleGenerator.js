// Array of possible video title components
const adjectives = [
  "Trending",
  "Viral",
  "Spectacular",
  "Dazzling",
  "Insane",
  "Hilarious",
  "Mind-blowing",
  "Epic",
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
];
const topics = [
  "TikTok",
  "ForYouPage",
  "Famous",
  "Creators",
  "Influencers",
  "TikTokLife",
  "TikTokVibes",
  "TikTokFame",
];

// Function to generate a random title
export const generateRandomTitle = () => {
  const randomAdjective =
    adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  const randomTopic = topics[Math.floor(Math.random() * topics.length)];

  return `${randomAdjective} ${randomNoun} on ${randomTopic}`;
};
