function startQuiz() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("question1").style.display = "inline-block";
  }
  
  
  function question2() {
    document.getElementById("question1").style.display = "none";
    document.getElementById("question2").style.display = "inline-block";
  }
  
  
  function question3() {
    document.getElementById("question2").style.display = "none";
    document.getElementById("question3").style.display = "inline-block";
  }
  
  function question4() {
    document.getElementById("question3").style.display = "none";
    document.getElementById("question4").style.display = "inline-block";
  }

  function question5() {
    document.getElementById("question4").style.display = "none";
    document.getElementById("question5").style.display = "inline-block";
  }

  function results() {
    calculateResults()
    document.getElementById("question5").style.display = "none";
    document.getElementById("results").style.display = "inline-block";
  }
  
  function calculateResults() {
    const radios1 = document.querySelectorAll('input[name="quest1"]');
    let q1Value;
    for (const rb of radios1) {
        if (rb.checked) {
            q1Value = rb.value;
            break;
        }
    }
  
    const radios2 = document.querySelectorAll('input[name="quest2"]');
    let q2Value;
    for (const rb of radios2) {
        if (rb.checked) {
            q2Value = rb.value;
            break;
        }
    }

    const radios3 = document.querySelectorAll('input[name="quest3"]');
    let q3Value;
    for (const rb of radios3) {
        if (rb.checked) {
            q3Value = rb.value;
            break;
        }
    }
  
    const radios4 = document.querySelectorAll('input[name="quest4"]');
    let q4Value;
    for (const rb of radios4) {
        if (rb.checked) {
            q4Value = rb.value;
            break;
        }
    }

    const radios5 = document.querySelectorAll('input[name="quest5"]');
    let q5Value;
    for (const rb of radios5) {
        if (rb.checked) {
            q5Value = rb.value;
            break;
        }
    }
    let total = Number(q1Value) + Number(q2Value) + Number(q3Value) + Number(q4Value) + Number(q5Value)
    result = total / 5;
  
    if (result = 11-15) {
      msg = "You are the Serious Golfer - Always chasing the score and good for a fact or two.";
    } else if (result = 6-10) {
      msg = "You are the Happy Go Lucky Golfer - Do not care anout the score, just happy for the social.";
    } else {
      msg = "You are the Angry Golfer - Prone to a club snap or two or an outburst of profanities";
    }
  
    document.getElementById("result").innerHTML = msg
}