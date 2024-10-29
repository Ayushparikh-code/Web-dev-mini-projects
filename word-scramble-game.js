// script.js 

const words = [ 
	"react","angular","javascript","bootstrap","tailwind", "algorithm", "API", "bandwidth", "cloud", "database", 
    "encryption", "firewall", "frontend", "backend", "framework", 
    "git", "HTML", "JavaScript", "machine learning", "microservices", 
    "open source", "protocol", "repository", "server", "software", 
    "scripting", "UI", "UX", "virtualization", "wireless", 
    "blockchain", "data mining", "DevOps", "IoT", "container", 
    "load balancer", "network", "PHP", "Python", "Ruby", 
    "SQL", "CSS", "agile", "scrum", "big data", 
    "AR", "VR", "3D printing", "digital", "SEO", 
    "malware", "phishing", "VPN", "cryptocurrency", "data lake"
]; 

// Respective list of hints 
const hints = [ 
	"JavaScript framework", 
	"JavaScript Framework", 
	"Scripting Language", 
	"Styling Library", 
	"Styling Library", 
    "solving problems",
    "software rules",
    "data transmission",
    "online storage",
    "data collection",
    "information security",
    "network security",
    "user interaction",
    "server logic",
    "application structure",
    "version control",
    "web structure",
    "web programming",
    "learning algorithms",
    "application architecture",
    "source accessibility",
    "data standards",
    "code storage",
    "data provider",
    "program instructions",
    "task automation",
    "user interface",
    "user experience",
    "resource virtualization",
    "device communication",
    "transaction ledger",
    "data analysis",
    "development operations",
    "connected devices",
    "software packaging",
    "traffic distribution",
    "computer systems",
    "scripting language",
    "versatile programming",
    "database management",
    "style sheets",
    "development method",
    "project management",
    "large datasets",
    "digital overlay",
    "simulated experience",
    "object creation",
    "technology relation",
    "search visibility",
    "disruptive software",
    "information theft",
    "secure network",
    "digital currency",
    "raw storage"
]; 

// Initialize display word 
let displayWord = ""; 

// Function to shuffle letters 
function shuffle(str) { 
	strArray = Array.from(str); 
	for (let i = 0; i < strArray.length - 1; ++i) { 
		let j = Math.floor(Math.random() * strArray.length); 
		// Swap letters 
		let temp = strArray[i]; 
		strArray[i] = strArray[j]; 
		strArray[j] = temp; 
	} 
	return strArray.join(" "); 
} 

// Function to check input and display result 
function check() { 
	let input = document.getElementById("input"); 
	let output = document.getElementById("output"); 
	if ( 
		input.value.toLocaleLowerCase() === 
		displayWord.toLocaleLowerCase() 
	) 
		output.innerHTML = "Result: Correct"; 
	else output.innerHTML = "Result: Incorrect"; 
} 

// To refresh and show new word 
function refresh() { 
	index = Math.floor(Math.random() * 50); 
	displayWord = words[index]; 
	displayHint = hints[index]; 
	scrambleWord = 
		document.getElementById("scrambleWord"); 
	scrambleWord.innerText = 
		shuffle(displayWord).toUpperCase(); 
	let hint = document.getElementById("hint"); 
	hint.innerHTML = "<b>Hint:</b> " + displayHint; 
	document.getElementById("output").innerText = "Result:"; 
} 

// Function call when page load for first time 
refresh();
