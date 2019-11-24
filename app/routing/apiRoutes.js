var friendData = require("../data/friends"); 

module.exports = function(app){
  app.get("/api/friends",  function(req, res){
    res.json(friendData); 
  });

  app.post('/api/friends', function(req, res){
    //variable that grabs my user score
        var userData = req.body; 
    //variable that store the total of the user and friend score diference
        var totalArray = []

// loop thru the friendData lenght
    for(var i = 0; i < friendData.length; i ++){
      // variable that stores the sum of the differences of the user score and the friend score
      var difUserData = 0; 
        for(var j=0; j < userData.scores.length; j ++){
          difUserData += Math.abs(parseInt(userData.scores[j]) - friendData[i].scores[j]);
    };

    totalArray.push(difUserData); 
    console.log(totalArray);  
  }
// This function capture the index of the smalest value in an array 
  function indexOfSmallest(a) {
    var lowest = 0;
    for (var i = 1; i < a.length; i++) {
     if (a[i] < a[lowest]) lowest = i;
    }
    return lowest;
   }
// this variable run the index of smallest function referencing the total score array
   var bestMatchIndex = (indexOfSmallest(totalArray));
   console.log(friendData[bestMatchIndex]); 
   res.json(friendData[bestMatchIndex]); 
   
}); 

}
