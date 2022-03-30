

    score_1 = 0;
    score_2 = 0;
    player_1 = document.getElementById("name1").innerHTML = localStorage.getItem("name1");
    player_2 = document.getElementById("name2").innerHTML = localStorage.getItem("name2");

    document.getElementById("question").innerHTML = "Questioning turn -" + player_1;
    document.getElementById("answer").innerHTML = "answering turn -" + player_2;

	answer = player_2;
    question = player_1;

    
function send()
{
    var input1 = document.getElementById("input_send").value; 
    var input = input1.toLowerCase();
    localStorage.setItem("input", input);
    console.log(input);
    console.log(input.charAt(0));

    var charAT_middle = input.charAt(Math.floor(input.length/2));
    var charAT_2 = input.charAt(4);
    var charAT_extreme = input.charAt(input.length - 1);
    
    var replace_charAT_middle = input.replace(charAT_middle, "_");
    var replace_charAT_2 = replace_charAT_middle.replace(charAT_2, "_");
    var replace_charAT_extreme = replace_charAT_2.replace(charAT_extreme, "_");
    var question_asked = replace_charAT_extreme;

    document.getElementById("output").innerHTML = "<h3>Guess The Word</h3>"+"<br>"+"<br>"+ 
    "Q ." + question_asked + "<br>"+"<span>Answer:<input id='input_check' class='form-control' type='text'"+
    "placeholder='guess the word'></span>"+"<br>"+"<button class='btn-success' onclick='Check()'>Check</button>"+"<br>";
     
}
function Check()
{
    input_4 = localStorage.getItem("input")
    console.log("check() function is called");
    var input3 = document.getElementById("input_check").value;
    var input2 = input3.toLowerCase();
	answer = player_2;
    question = player_1;
    
    if(input2 == input_4)
    {
        console.log("1st if is started");
        if(answer == player_2)
        {
            console.log("2nd if is started");
            score_2++;
            document.getElementById("player_2_score").innerHTML = score_2;
        }
        else
        {
            score_1++
            document.getElementById("player_1_score").innerHTML = score_1;
        }
    }
        if(question == player_1)
        {
            question = player_2;
            document.getElementById("question").innerHTML = "Questioning turn -" + question;
        }
        else
        {
            question = player_1;
            document.getElementById("question").innerHTML = "Questioning turn -" + question;
        }
        if(answer == player_1)
        {
            answer = player_2; 
            document.getElementById("answer").innerHTML = "answering turn -" + answer;
        }
        else
        {
            answer = player_1;
            document.getElementById("answer").innerHTML = "answering turn -" + answer;
        }
}    
