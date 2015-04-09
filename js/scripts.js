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

      debugger;
  var sort_words = allWords.sort(function(a, b) {
      return a-b;
    });
  console.log(sort_words);

  var result = Object.keys(allWords);
  console.log(result);
  // var sort_array = result.sort(function(a, b){return b-a});
  // console.log(sort_array);

  var super_result = result.join(' ');
  console.log(super_result);

  return super_result;

}
