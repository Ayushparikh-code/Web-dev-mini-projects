"use strict";

var input = document.querySelectorAll('textarea')[0],
  characterCount = document.querySelector('#characterCount'),
  wordCount = document.querySelector('#wordCount'),
  sentenceCount = document.querySelector('#sentenceCount'),
  paragraphCount = document.querySelector('#paragraphCount'),
  readingTime = document.querySelector('#readingTime'),
  readability = document.querySelector('#readability'),
  keywordsDiv = document.querySelectorAll('.keywords')[0],
  topKeywords = document.querySelector('#topKeywords');

// Updating the displayed stats after every keypress
input.addEventListener('keyup', function () {
  // Keeping the console clean to make only the latest data visible
  console.clear();

  // Character count
  characterCount.innerHTML = input.value.length;

  // Word count using \b to match word boundaries
  var words = input.value.match(/\b[-?(\w+)?]+\b/gi);
  wordCount.innerHTML = words ? words.length : 0;

  // Sentence count using ./!/? as sentence separators
  var sentences = input.value.split(/[.|!|?]+/g);
  sentenceCount.innerHTML = sentences.length - 1;

  // Paragraph count
  var paragraphs = input.value.replace(/\n$/gm, '').split(/\n/);
  paragraphCount.innerHTML = paragraphs.length;

  // Reading time based on 275 words/minute
  var seconds = words ? Math.floor(words.length * 60 / 275) : 0;
  readingTime.innerHTML = seconds > 59
    ? Math.floor(seconds / 60) + "m " + (seconds % 60) + "s"
    : seconds + "s";

  // Keyword analysis
  if (words) {
    var nonStopWords = [];
    var stopWords = ["a", "able", "about", "above", "abst", "accordance", "according", "accordingly", "across", "act", "actually", "added", "adj", "affected", "affecting", "affects", "after", "afterwards", "again", "against", "ah", "all", "almost", "alone", "along", "already", "also", "although", "always", "am", "among", "amongst", "an", "and", "announce", "another", "any", "anybody", "anyhow", "anymore", "anyone", "anything", "anyway", "anyways", "anywhere", "apparently", "approximately", "are", "aren", "arent", "arise", "around", "as", "aside", "ask", "asking", "at", "auth", "available", "away", "awfully", "b", "back", "be", "became", "because", "become", "becomes", "becoming", "been", "before", "beforehand", "begin", "beginning", "beginnings", "begins", "behind", "being", "believe", "below", "beside", "besides", "between", "beyond", "biol", "both", "brief", "briefly", "but", "by", "c", "ca", "came", "can", "cannot", "can't", "cause", "causes", "certain", "certainly", "co", "com", "come", "comes", "contain", "containing", "contains", "could", "couldnt", "d", "date", "did", "didn't", "different", "do", "does", "doesn't", "doing", "done", "don't", "down", "downwards", "due", "during", "e", "each", "ed", "edu", "effect", "eg", "eight", "eighty", "either", "else", "elsewhere", "end", "ending", "enough", "especially", "et", "et-al", "etc", "even", "ever", "every", "everybody", "everyone", "everything", "everywhere", "ex", "except", "f", "far", "few", "ff", "fifth", "first", "five", "fix", "followed", "following", "follows", "for", "former", "formerly", "forth", "found", "four", "from", "further", "furthermore", "g", "gave", "get", "gets", "getting", "give", "given", "gives", "giving", "go", "goes", "gone", "got", "gotten", "h", "had", "happens", "hardly", "has", "hasn't", "have", "haven't", "having", "he", "hed", "hence", "her", "here", "hereafter", "hereby", "herein", "heres", "hereupon", "hers", "herself", "hes", "hi", "hid", "him", "himself", "his", "hither", "home", "how", "howbeit", "however", "hundred", "i", "id", "ie", "if", "i'll", "im", "immediate", "immediately", "importance", "important", "in", "inc", "indeed", "index", "information", "instead", "into", "invention", "inward", "is", "isn't", "it", "itd", "it'll", "its", "itself", "i've", "j", "just", "k", "keep", "keeps", "kept", "kg", "km", "know", "known", "knows", "l", "largely", "last", "lately", "later", "latter", "latterly", "least", "less", "lest", "let", "lets", "like", "liked", "likely", "line", "little", "'ll", "look", "looking", "looks", "ltd", "m", "made", "mainly", "make", "makes", "many", "may", "maybe", "me", "mean", "means", "meantime", "meanwhile", "merely", "mg", "might", "million", "miss", "ml", "more", "moreover", "most", "mostly", "mr", "mrs", "much", "mug", "must", "my", "myself", "n", "na", "name", "namely", "nay", "nd", "near", "nearly", "necessarily", "necessary", "need", "needs", "neither", "never", "nevertheless", "new", "next", "nine", "ninety", "no", "nobody", "non", "none", "nonetheless", "noone", "nor", "normally", "nos", "not", "noted", "nothing", "now", "nowhere", "o", "obtain", "obtained", "obviously", "of", "off", "often", "oh", "ok", "okay", "old", "omitted", "on", "once", "one", "ones", "only", "onto", "or", "ord", "other", "others", "otherwise", "ought", "our", "ours", "ourselves", "out", "outside", "over", "overall", "owing", "own", "p", "page", "pages", "part", "particular", "particularly", "past", "per", "perhaps", "placed", "please", "plus", "poorly", "possible", "possibly", "potentially", "pp", "predominantly", "present", "previously", "primarily", "probably", "promptly", "proud", "provides", "put", "q", "que", "quickly", "quite", "qv", "r", "ran", "rather", "rd", "re", "readily", "really", "recent", "recently", "ref", "refs", "regarding", "regardless", "regards", "related", "relatively", "research", "respectively", "resulted", "resulting", "results", "right", "run", "s", "said", "same", "saw", "say", "saying", "says", "sec", "section", "see", "seeing", "seem", "seemed", "seeming", "seems", "seen", "self", "selves", "sent", "seven", "several", "shall", "she", "shed", "she'll", "shes", "should", "shouldn't", "show", "showed", "shown", "showns", "shows", "significant", "significantly", "similar", "similarly", "since", "six", "slightly", "so", "some", "somebody", "somehow", "someone", "somethan", "something", "sometime", "sometimes", "somewhat", "somewhere", "soon", "sorry", "specifically", "specified", "specify", "specifying", "still", "stop", "strongly", "sub", "substantially", "successfully", "such", "sufficiently", "t", "take", "taken", "taking", "tell", "tends", "than", "that", "thats", "the", "their", "theirs", "them", "themselves", "then", "there", "thereafter", "thereby", "therefore", "these", "they", "they'd", "they'll", "they're", "they've", "third", "this", "those", "through", "throughout", "thru", "thus", "to", "together", "too", "took", "toward", "towards", "tried", "tries", "truly", "try", "trying", "twelve", "twenty", "two", "u", "un", "under", "until", "up", "upon", "us", "use", "used", "useful", "uses", "using", "v", "value", "various", "versus", "very", "via", "view", "viewed", "views", "vs", "w", "want", "wanted", "wanting", "wants", "was", "wasn't", "way", "we", "wed", "welcome", "well", "were", "weren", "weren't", "what", "whatever", "when", "whence", "whenhere", "where", "whereafter", "whereas", "whereby", "wherein", "whereupon", "wherever", "whether", "which", "while", "whilst", "who", "whoever", "whole", "whom", "whose", "why", "will", "willing", "with", "within", "without", "won", "won't", "would", "wouldn't", "x", "y", "yes", "yet", "you", "you'd", "you'll", "you're", "you've", "your", "yours", "yourself", "yourselves", "z", "zero"];

    // Filter out stop words
    nonStopWords = words.filter(word => !stopWords.includes(word.toLowerCase()));

    // Get top keywords
    var keywordCount = {};
    nonStopWords.forEach(word => {
      keywordCount[word] = (keywordCount[word] || 0) + 1;
    });

    // Sort keywords by frequency
    var sortedKeywords = Object.entries(keywordCount).sort((a, b) => b[1] - a[1]);

    // Display top 5 keywords
    topKeywords.innerHTML = sortedKeywords.slice(0, 5).map(keyword => keyword[0] + " (" + keyword[1] + ")").join(', ');
  } else {
    topKeywords.innerHTML = "No keywords found";
  }
});
