function wordOrder(input){
  var allWords = {};
  var split_words = input.split(" ");

  for (var i = 0; i < split_words.length; i++) {
      if(allWords.hasOwnProperty(split_words[i])) {
          allWords[split_words[i]] += 1;
      } else {
      allWords[split_words[i]] = 1;
      }

  }

  var result = Object.keys(allWords);
  var super_result = result.join(' ');
  return super_result;

}
