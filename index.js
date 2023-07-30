// Import the necessary modules from nlp.js
const { NlpManager } = require('node-nlp');

// Create a new instance of the NlpManager
const manager = new NlpManager({ languages: ['en'] });

// Add training data for sentiment analysis
manager.addDocument('en', 'I love this product', 'positive');
manager.addDocument('en', 'This is great', 'positive');
manager.addDocument('en', 'I hate this product', 'negative');
manager.addDocument('en', 'This is terrible', 'negative');

// Train the NlpManager
(async () => {
  await manager.train();
  manager.save();
  console.log('Training completed.');
})();

// Function to perform sentiment analysis
async function performSentimentAnalysis(text) {
  const response = await manager.process('en', text);
  const sentiment = response.sentiment;
  return sentiment;
}

// Sample usage
const sampleText1 = 'This movie is awesome!';
const sampleText2 = 'I feel sad about the news.';

performSentimentAnalysis(sampleText1).then((result) => {
  console.log(`Sentiment analysis for "${sampleText1}":`, result);
});

performSentimentAnalysis(sampleText2).then((result) => {
  console.log(`Sentiment analysis for "${sampleText2}":`, result);
});