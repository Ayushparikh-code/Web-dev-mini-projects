
        function rpsGame(yourChoice) {
            console.log(yourChoice);

            var humanChoice, botChoice;
            humanChoice = yourChoice.id;
            var imgs = [document.getElementById("rock"), document.getElementById("paper"), document.getElementById("scissors")]
            botChoice = imgs[Math.floor(Math.random() * 3)];
            botChoice = botChoice.id;
            console.log('Computer choice:', botChoice);
            results = decideWinner(humanChoice, botChoice);
            console.log(results);
            message = finalMessage(results);
            
            
            rpsFrontend(yourChoice.id, botChoice, message);
        }


        function decideWinner(yourChoice, computerChoice) {
            var rpsDataBase = {
                'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
                'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
                'scissors': { 'paper': 1, 'scissors': 0.5, 'rock': 0 },
            }

            var yourScore = rpsDataBase[yourChoice][computerChoice];
            var computerScore = rpsDataBase[computerChoice][yourChoice];

            return [yourScore, computerScore];
        }


        function finalMessage([yourScore, computerScore]) {
            if (yourScore === 0) {
                return { 'message': "You lost!", 'color': 'red' };
            } else if (yourScore === 0.5) {
                return { 'message': "You tied!", 'color': 'yellow' };
            } else {
                return { 'message': "You won!", 'color': 'green' };
            }
        }



       
        function rpsFrontend(humanImageChoice, botImageChoice, finalMessage) {
            //       console.log(yourChoice);
            var imagesDataBase = {
                'rock': document.getElementById("rock").src,
                'paper': document.getElementById("paper").src,
                'scissors': document.getElementById("scissors").src
            };

            document.getElementById("startingPoint").remove();
            document.getElementById("rock").remove();
            document.getElementById("paper").remove();
            document.getElementById("scissors").remove();

            var humanDiv = document.createElement('div');
            var messageDiv = document.createElement('div');
            var botDiv = document.createElement('div');

            humanDiv.innerHTML = "<img src='" + imagesDataBase[humanImageChoice] + "' alt='error' width='150' height='150' style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
            document.getElementById("flex-box-rps").appendChild(humanDiv);
            messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] +"; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>";
            document.getElementById("flex-box-rps").appendChild(messageDiv);
            botDiv.innerHTML = "<img src='" + imagesDataBase[botImageChoice] + "' alt='error' width='150' height='150'  style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"
            document.getElementById("flex-box-rps").appendChild(botDiv);


        }

