let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

const questions = [
{
question: "1. What does CPU stand for?",
options: [
"Central Processing Unit",
"Computer Processing Unit",
"Central Program Unit",
"Computer Program Utility"
]
},
{
question: "2. Which language is used to style web pages?",
options: ["HTML", "CSS", "Python", "Java"]
},
{
question: "3. What is the output of 10 + 5 * 2?",
options: ["20", "25", "30", "15"]
},
{
question: "4. Which data structure follows LIFO?",
options: ["Queue", "Array", "Stack", "Tree"]
},
{
question: "5. What does RAM stand for?",
options: [
"Random Access Memory",
"Read Access Memory",
"Run Access Memory",
"Rapid Access Memory"
]
},
{
question: "6. Which symbol is used for single-line comments in JavaScript?",
options: ["<!-- -->", "//", "/* */", "#"]
},
{
question: "7. What is the binary value of decimal 10?",
options: ["1010", "1110", "1001", "1100"]
},
{
question: "8. Which HTML tag is used to create a hyperlink?",
options: ["<link>", "<a>", "<href>", "<url>"]
},
{
question: "9. What does SQL stand for?",
options: [
"Structured Query Language",
"Simple Query Language",
"Standard Question Language",
"System Query Language"
]
},
{
question: "10. Which company developed Java?",
options: [
"Microsoft",
"Google",
"Sun Microsystems",
"Apple"
]
},
{
question: "11. What is the time complexity of Binary Search?",
options: ["O(n)", "O(log n)", "O(n²)", "O(1)"]
},
{
question: "12. Which operator is used for equality comparison in JavaScript?",
options: ["=", "==", "+=", "=>"]
},
{
question: "13. Which of the following is an Operating System?",
options: ["Windows", "Intel", "Chrome", "NVIDIA"]
},
{
question: "14. What will be the next number in the series: 2, 4, 8, 16, ?",
options: ["24", "30", "32", "36"]
},
{
question: "15. Which data structure uses FIFO?",
options: ["Stack", "Queue", "Linked List", "Graph"]
}
];

function startTest(){

let name = document.getElementById("candidateName").value;
let email = document.getElementById("candidateEmail").value;
let phone = document.getElementById("candidatePhone").value;

if(name === "" || email === "" || phone === ""){
alert("Please fill all details");
return;
}

if(phone.length !== 10){
alert("Enter valid 10 digit mobile number");
return;
}

document.getElementById("startScreen").classList.add("hidden");
document.getElementById("quizScreen").classList.remove("hidden");

loadQuestion();
startTimer();
}

function loadQuestion(){

const q = questions[currentQuestion];

document.getElementById("question").innerText=q.question;

document.getElementById("progressText").innerText=
`Question ${currentQuestion+1} / 15`;

document.getElementById("progressBar").style.width=
((currentQuestion+1)/15)*100+"%";

const optionsDiv=document.getElementById("options");
optionsDiv.innerHTML="";

q.options.forEach((option,index)=>{

let div=document.createElement("div");
div.classList.add("option");
div.innerText=option;

div.onclick=()=>{
selectedAnswer=index;

document.querySelectorAll(".option")
.forEach(o=>o.classList.remove("selected"));

div.classList.add("selected");
};

optionsDiv.appendChild(div);

});
}

function nextQuestion(){

if(selectedAnswer===questions[currentQuestion].answer){
score++;
}

selectedAnswer=null;
currentQuestion++;

if(currentQuestion<questions.length){
loadQuestion();
}
else{
showResult();
}
}

let timeLeft=30*60;

function startTimer(){

const timer=setInterval(()=>{

let mins=Math.floor(timeLeft/60);
let secs=timeLeft%60;

document.getElementById("timer").innerText=
`${mins}:${secs<10?'0':''}${secs}`;

timeLeft--;

if(timeLeft<0){
clearInterval(timer);
showResult();
}

},1000);

}

function showResult(){

document.getElementById("quizScreen").classList.add("hidden");
document.getElementById("resultScreen").classList.remove("hidden");

let name=document.getElementById("candidateName").value;

document.getElementById("candidate").innerText =
"Candidate : " + name;

document.getElementById("score").innerText =
"Your assessment has been submitted successfully.";

document.getElementById("status").innerText =
"Thank you for completing the assessment. Our team will review your responses and contact shortlisted candidates.";
}