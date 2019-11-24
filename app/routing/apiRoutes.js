var friendData = require('../data/friends'); 

module.exports = function (app){
  app.get('/api/friends',  function(req, res){
    res.json(friendData); 
  });

  app.post('/api/friends', function(req, res){
    var userScores = req.body.scores; 
    var totalArray= []; 
    var match = 0; 
    // var friendScore = friendData[i].score[j]; 
    // console.log(friendData); 
    for(var i = 0; i < friendData.length; i ++){
       var matchSubtraction = 0
      for(var j=0; j < userScores.length; j ++){
        matchSubtraction += (Math.abs(friendData[i].scores[j] - parseInt(userScores[j])));
      }
      totalArray.push(matchSubtraction); 
    }
     console.log(totalArray); 

     res.json(friendData[match])
     friendData.push(req.body);
    //  console.log("new: " + JSON.stringify(req.body));
  }); 

}
