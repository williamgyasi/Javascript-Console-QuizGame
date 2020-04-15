(function(){
    class User{
        constructor(name){
            this.name=name
        }
    }
    User.prototype.userName=function(){
        console.log(`Welcome Player , ${this.name}`)
    }

    User.prototype.logUserScore=function(){
        let playerScore=keepScores();
        console.log(`WELL DONE PLAYER, ${this.name} ,Your Score is ${playerScore}`)
    }
    class Question{
        constructor(question,options,correctAnswer){
            this.question=question;
            this.options=options;
            this.correctAnswer=correctAnswer
           
        }
        // constructor(currentPlayer){
        //     this.currentPlayer=currentPlayer
        // }
    }
    
    Question.prototype.logQuestions= function(){
        console.log(this.question)
        this.options.map((value,index)=>{
            console.log(`${index} : ${value}`)
        })
    }
    
    Question.prototype.checkAnswer=function(answer,fn){
        var sc;
        if (answer===this.correctAnswer){
            console.log('Correct Answer')
            sc=fn(true)
            this.displayScore(sc)   
        }
        else{
                console.log('Wrong Answer')
                sc =fn(false)
                this.displayScore(sc)
        }
    }

    Question.prototype.displayScore=function(score){
        console.log(`Your Current Score is ` + score)
        console.log('-------------------------------------')
    }
    
    //QUESTIONS 
    var q1=new Question('Is Banana A Fruit',['Yes','No'],0)
    var q2=new Question('What is the coolest Programming language',['Javascript','Python','C++'],2)
    var q3=new Question('If Statements are Objects',['True','False'],2)
    var q4=new Question('Pick the Odd One Out',['Square','Rectangle','Stone'],3)
    var questions=[q1,q2,q3,q4]

    function score (){
        var sc = 0;
        return function(correct){
            if(correct){
                sc++
            }else{
             if(sc!==0){
                 sc--
             }   
            }
            return sc
        }
    }
    var keepScores=score()


    
    function userStart(player){
        newPlayer.userName()
       return function(){
           nextQuestion()
       }
    }

    function nextQuestion(){
        var random=Math.floor(Math.random() * questions.length)
        questions[random].logQuestions()
        var userAnswer=prompt('Please Enter An Answer , Enter + \'exit '+ 'to quit')
        if(userAnswer!=='exit'){
            questions[random].checkAnswer(parseInt(userAnswer),keepScores)
            nextQuestion() 
        }
        else{
            newPlayer.logUserScore()
        }

    }

    var playerName=prompt('Enter Your Name To Get Started')
    var newPlayer=new User(playerName) 
    userStart(newPlayer)()

    
    

})();