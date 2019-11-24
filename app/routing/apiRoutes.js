var friendData = require("../data/friends"); 

module.exports = function(app){
  app.get("/api/friends",  function(req, res){
    res.json(friendData); 
  });

  app.post('/api/friends', function(req, res){
    //variable that grabs my user score
        var userScores = req.body; 
    //variable that store the total of the user and friend score diference
        var totalArray = []

// loop thru the friendData lenght
    for(var i = 0
      ; i < friendData.length; i ++){
      // variable that stores the sum of the differences of the user score and the friend score
      var difUserData = 0;
        for(var j=0; j < userScores.length; j ++){
          difUserData = Math.abs(userScores.scores[j] - friendData[i].scores[j]);
    };

    totalArray.push(difUserData); 
    // console.log(totalArray);  
  }
  // Compare the totalArray and see each one is the smaller
    if(totalArray.length === 0){
      return -1;
    }
    var bestMatch = 0;
    var lowesstScore = totalArray[0];
    for (var i = 1; i < totalArray.length; i++) {
      if (totalArray[i] < lowesstScore) {
        bestMatch = i; 
        lowesstScore = totalArray[i];
        
  }
}
console.log(bestMatch); 
// res.json(bestMatch); 
}); 

}
