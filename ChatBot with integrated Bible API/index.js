// API call To Get All the Books
function getBooks(){

    const data = null;
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {

	    if (this.readyState === this.DONE) {
		    console.log(this.responseText);

            var obji = JSON.parse(this.responseText);
            var reply = '<div id="card1" class="cards cardleft"><img src="https://support.upwork.com/hc/article_attachments/360040474034/chatbot-data.png" id="imgLeft"  align="left">'+obji.The_Old_Testament+'<br>'+obji.The_New_Testament+'</div>';
            document.getElementById('chatBox').innerHTML += reply;
            autoScroller();

        }
    });

    xhr.open("GET", "https://ajith-holy-bible.p.rapidapi.com/GetBooks");
    xhr.setRequestHeader("X-RapidAPI-Host", "ajith-holy-bible.p.rapidapi.com");
    xhr.setRequestHeader("X-RapidAPI-Key", "060a0e62b3msh3b4dceebd52177fp1e5142jsn9222f9a719e6");
    xhr.send(data);

}

// API call to Get a particular chapter of any Book
function getChapter(bookName, chapterNo){

    const data = null;
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    xhr.addEventListener("readystatechange", function () {

        if (this.readyState === this.DONE) {
            console.log(this.responseText);

            var obji = JSON.parse(this.responseText);

            if(obji.Output!='Wrong slection!!! Please try again.'){
                var reply = '<div id="card1" class="cards cardleft"><img src="https://support.upwork.com/hc/article_attachments/360040474034/chatbot-data.png"  id="imgLeft"  align="left">'+obji.Output+'</div>';
                document.getElementById('chatBox').innerHTML += reply;

            }
            else{
                var reply = '<div id="card1" class="cards cardleft"><img src="https://support.upwork.com/hc/article_attachments/360040474034/chatbot-data.png"  id="imgLeft"  align="left">Did not found what you were looking for!</div>';
                document.getElementById('msgBox').innerHTML += reply;
                reply = '<div id="card1" class="cards cardleft"><img src="https://support.upwork.com/hc/article_attachments/360040474034/chatbot-data.png"  id="imgLeft"  align="left">Try Again...</div>';
                document.getElementById('chatBox').innerHTML += reply;
            
            }

            autoScroller();
        
        }
    });

    var url = 'https://ajith-holy-bible.p.rapidapi.com/GetChapter?Book='+bookName+'&chapter='+chapterNo;
    xhr.open("GET", url);
    xhr.setRequestHeader("X-RapidAPI-Host", "ajith-holy-bible.p.rapidapi.com");
    xhr.setRequestHeader("X-RapidAPI-Key", "060a0e62b3msh3b4dceebd52177fp1e5142jsn9222f9a719e6");
    xhr.send(data);
    
}

// API call to get verses from any book any chapter
function getVerses(bookName,chapterNo,verseFrom,verseTo){

    const data = null;
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
	    if (this.readyState === this.DONE) {
		    console.log(this.responseText);
        
            var obji = JSON.parse(this.responseText);
        
            if(obji.Output!='Wrong slection!!! Please try again.'){
            
                var reply = '<div id="card1" class="cards cardleft"><img src="https://support.upwork.com/hc/article_attachments/360040474034/chatbot-data.png"  id="imgLeft"  align="left">'+obji.Output+'</div>';
                document.getElementById('chatBox').innerHTML += reply;
            
            }
            else{

                var reply = '<div id="card1" class="cards cardleft"><img src="https://support.upwork.com/hc/article_attachments/360040474034/chatbot-data.png" id="imgLeft"  align="left" >Did not found what you were looking for!</div>';
                document.getElementById('chatBox').innerHTML += reply;
            
                reply = '<div id="card1" class="cards cardleft"><img src="https://support.upwork.com/hc/article_attachments/360040474034/chatbot-data.png" id="imgLeft"   align="left">Try Again...</div>';
                document.getElementById('chatBox').innerHTML += reply;
           
            }
           
            autoScroller();
	
        }
    });

    var url = 'https://ajith-holy-bible.p.rapidapi.com/GetVerses?Book='+bookName+'&chapter='+chapterNo+'&VerseFrom='+verseFrom+'&VerseTo='+verseTo;
    xhr.open("GET", url);
    xhr.setRequestHeader("X-RapidAPI-Host", "ajith-holy-bible.p.rapidapi.com");
    xhr.setRequestHeader("X-RapidAPI-Key", "060a0e62b3msh3b4dceebd52177fp1e5142jsn9222f9a719e6");
    xhr.send(data);

}

//  API call to get a particular verse from any Chapter of any book
function getVerseofChapter(bookName,chapterNo,verse){

    const data = null;
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
	    if (this.readyState === this.DONE) {
	    	console.log(this.responseText);
        
            var obji = JSON.parse(this.responseText);
       
            if(obji.Output!='Wrong slection!!! Please try again.'){
          
                var reply = '<div id="card1" class="cards cardleft"><img src="https://support.upwork.com/hc/article_attachments/360040474034/chatbot-data.png"  id="imgLeft"  align="left">'+obji.Output+'</div>';
                document.getElementById('chatBox').innerHTML += reply;
           
            }
            else{
                var reply = '<div id="card1" class="cards cardleft"><img src="https://support.upwork.com/hc/article_attachments/360040474034/chatbot-data.png"  id="imgLeft"  align="left">Did not found what you were looking for!</div>';
                document.getElementById('chatBox').innerHTML += reply;
            
                reply = '<div id="card1" class="cards cardleft"><img src="https://support.upwork.com/hc/article_attachments/360040474034/chatbot-data.png"  id="imgLeft"  align="left">Try Again...</div>';
                document.getElementById('chatBox').innerHTML += reply;
            
            }
            
            autoScroller();
	
        }
    });
    var url = 'https://ajith-holy-bible.p.rapidapi.com/GetVerseOfaChapter?Book='+bookName+'&chapter='+chapterNo+'&Verse='+verse;
    xhr.open("GET", url);
    xhr.setRequestHeader("X-RapidAPI-Host", "ajith-holy-bible.p.rapidapi.com");
    xhr.setRequestHeader("X-RapidAPI-Key", "060a0e62b3msh3b4dceebd52177fp1e5142jsn9222f9a719e6");
    xhr.send(data);

}

// For the dynamic display of Header

// Setting Interval For Head Text For Introduction Function
var timemain = setInterval(intro,2000)

// Intro Text Function
function intro(){

    document.getElementById("introText").innerHTML = '<span style="color:yellow;">I</span>';

    var time2 = setTimeout(two,500);
    var time3 = setTimeout(three, 1000);
    var time4 = setTimeout(four,1500);

}

// am text Function
function two(){
    document.getElementById("introText").innerHTML += '<span style="color:rgb(255, 0, 174);"> am</span>';
}

// a text Function
function three(){
    document.getElementById("introText").innerHTML += '<span style="color:rgb(0, 128, 255);"> a</span>';
}

// ChatBot text Function
function four(){
    document.getElementById("introText").innerHTML += '<span style="color:white;"> Chat Bot !!</span>';
}


//For the Status

// To Display the Green Symbol
function displaySymbol(){
    document.getElementById('statusSymbol').style.display = 'block';
}

var time6 = setInterval(onlineSymbolDisplay,1000);

// Calls the display symbol fuction after a set time
function onlineSymbolDisplay(){
    document.getElementById('statusSymbol').style.display = 'none';
    var timer = setTimeout(displaySymbol, 500);
}




// Variable to set the replies
var flag = 1;

// Main Message
var prevMsg = "Hi there ! My name is BotSter. <br> We can have a fun talk, or You can ask me about Holy Book Bible<br>1. Ask me the names of all the Holy Bible books.<br>2. Get the verse of any chapter from any of the Holy bible Book.<br>3. I can show you any chapter of any of the Holy Bible book.<br>4. Get the list of verses from any chapter of any of the Holy bible Book. ";


// Calling the initial loading function when the page is loaded
onloading();

// Initial Function when Website loads
function onloading(){

    var tempMsgBoxIn = '<div id="card1" class="cards cardleft"><img src="https://support.upwork.com/hc/article_attachments/360040474034/chatbot-data.png" id="imgLeft"  align="left">'+prevMsg+'</div>';
    document.getElementById('chatBox').innerHTML = tempMsgBoxIn;
    autoScroller();

}



// To ask the Book Name From the User
function askBookName(){

    document.getElementById('chatBox').innerHTML += '<div id="card1" class="cards cardleft"><img src="https://support.upwork.com/hc/article_attachments/360040474034/chatbot-data.png"  id="imgLeft" align="left" >Type the book name </div>';

}

// To ask the chapter number
function askChapterNo(){

    document.getElementById('chatBox').innerHTML += '<div id="card1" class="cards cardleft"><img src="https://support.upwork.com/hc/article_attachments/360040474034/chatbot-data.png"  id="imgLeft" align="left" >Type the Chapter Number</div>';

}

// To ask the verse number
function askVerseNo(){

    document.getElementById('chatBox').innerHTML += '<div id="card1" class="cards cardleft"><img src="https://support.upwork.com/hc/article_attachments/360040474034/chatbot-data.png" id="imgLeft"   align="left">Type the Verse No </div>';

}

// To ask the starting range of verse
function askVerseFrom(){

    document.getElementById('chatBox').innerHTML += '<div id="card1" class="cards cardleft"><img src="https://support.upwork.com/hc/article_attachments/360040474034/chatbot-data.png"  id="imgLeft"  align="left">Type from which verse do you want </div>';

}

// To ask the end  range of verse
function askVerseTo(){

    document.getElementById('chatBox').innerHTML += '<div id="card1" class="cards cardleft"><img src="https://support.upwork.com/hc/article_attachments/360040474034/chatbot-data.png"  id="imgLeft" align="left" >Type till which verse do you want </div>';

}


// Default variables set
var bookNameVar = "Luke";
var chapterNoVar = 1;
var verseFromVar = 1;
var verseToVar = 2;
var verseNoVar = 1;

// Function to automatically scroll to the bottom when new message pops up
function autoScroller(){
    
    var scroll = document.getElementById('chatBox');
    scroll.scrollTop = scroll.scrollHeight;
    scroll.animate({scrollTop: scroll.scrollHeight});

}


// Default message to display
function defaultMsgDisplay(){

    var defaultMsg = 'Anything you wanna know about Holy Book Bible?';
    var template = '<div id="card1" class="cards cardleft"><img src="https://support.upwork.com/hc/article_attachments/360040474034/chatbot-data.png"  id="imgLeft" align="left" align="left" >'+defaultMsg+'</div>';
    document.getElementById('chatBox').innerHTML += template;
    autoScroller();
}



// Function to get the reply
function getReply(text){

    // Initial questions if flag is set to 1
    if(flag==1){

        // If user asks to show all bible books
        if(text.includes('all books') || text.includes('get all books') || text.includes('all book') || text.includes('get all book')){

            getBooks();

        }

        // If user asks to show a chapter
        else if(text.includes('get chapter') || text.includes('show chapter') || text.includes('show chapters') || text.includes('get chapters')){

            // Ask for book name
            askBookName();
            flag=2;

        }

        // If user asks to show a range of verses
        else if(text.includes('get verses from') || text.includes('get verses to') || text.includes('show verses') || text.includes('show verses from') || text.includes('show verses to') || text.includes('get verses')){

            // Ask for Book name
            askBookName();
            flag=4;

        }

        // If user asks to show a particular verse
        else if(text.includes('verse no') || text.includes('get verse') || text.includes('show verse') || text.includes('get verse no') || text.includes('show verse no')){

            // Ask for book name
            askBookName();
            flag=8;

        }
        
        // If user greets
        else if(text.includes('hi') || text.includes('hello') || text.includes('hey') || text.includes('hola')){

            var rep = '<div id="card1" class="cards cardleft"><img src="https://support.upwork.com/hc/article_attachments/360040474034/chatbot-data.png" id="imgLeft"   align="left">Hello, Nice to meet you !</div>';
            document.getElementById('chatBox').innerHTML += rep;

        }
        
        // Normal conversation
        else if(text.includes('how are you') || text.includes('how do you do')){
            
            var rep = '<div id="card1" class="cards cardleft"><img src="https://support.upwork.com/hc/article_attachments/360040474034/chatbot-data.png" id="imgLeft"   align="left">Hello, I am Fine ! Thanks for asking. I hope you are fine too !</div>';
            document.getElementById('chatBox').innerHTML += rep;

        }
        
        else if(text.includes('what you can do') || text.includes('what you do')){
            
            var rep = '<div id="card1" class="cards cardleft"><img src="https://support.upwork.com/hc/article_attachments/360040474034/chatbot-data.png" id="imgLeft"  align="left" >'+prevMsg+'</div>';
            document.getElementById('chatBox').innerHTML += rep;
            defaultMsgDisplay();

        }
        
        // If user praises
        else if(text.includes('good') || text.includes('nice') || text.includes('awesome')){

            var rep = '<div id="card1" class="cards cardleft"><img src="https://support.upwork.com/hc/article_attachments/360040474034/chatbot-data.png" id="imgLeft"   align="left">Thankyou! it means a lot!</div>';
            document.getElementById('chatBox').innerHTML += rep;

        }
        
        // If user says no to anything
        else if(text.includes('no') || text.includes('nah') || text.includes('nope')){

            var rep = '<div id="card1" class="cards cardleft"><img src="https://support.upwork.com/hc/article_attachments/360040474034/chatbot-data.png" id="imgLeft"  align="left" >OK.....</div>';
            document.getElementById('chatBox').innerHTML += rep;
        
        }

        // If user says by or end the conversation
        else if(text.includes('bye') || text.includes('see you') || text.includes('tata')){

            var rep = '<div id="card1" class="cards cardleft"><img src="https://support.upwork.com/hc/article_attachments/360040474034/chatbot-data.png" id="imgLeft"   align="left">Bye Bye<br>Hope to see you again soon!</div>';
            document.getElementById('chatBox').innerHTML += rep;

        }
        
        else if(text.includes('yes') || text.includes('yeah')){

            var rep = '<div id="card1" class="cards cardleft"><img src="https://support.upwork.com/hc/article_attachments/360040474034/chatbot-data.png" id="imgLeft"   align="left">Ok...np</div>';
            document.getElementById('chatBox').innerHTML += rep;

        }

        else if(text.includes('thank')){

            var rep = '<div id="card1" class="cards cardleft"><img src="https://support.upwork.com/hc/article_attachments/360040474034/chatbot-data.png" id="imgLeft"   align="left">Welcome! Happy to help!</div>';
            document.getElementById('chatBox').innerHTML += rep;

        }

        // If user types not understandable message
        else{

            var errReply = '<div id="card1" class="cards cardleft"><img src="https://support.upwork.com/hc/article_attachments/360040474034/chatbot-data.png" id="imgLeft"  align="left" >Did not get you! Ask Again ...</div>';
            document.getElementById('chatBox').innerHTML += errReply;

        }
    }

    // If user has asked to show all bible books then ask for chapter number
    else if(flag==2){

        bookNameVar = text;
        askChapterNo();
        flag=3;

    }
    
    // If user has asked to show all bible books then get the chapter
    else if(flag==3){

        chapterNoVar = text;
        getChapter(bookNameVar, chapterNoVar);
        flag = 1;
        var wait = setTimeout(defaultMsgDisplay,4000);

    }

    // If user has asked to show a chapter then ask for chapter number
    else if(flag==4){

            bookNameVar = text;
            askChapterNo();
            flag=5;

    }

    // If user has asked to show a chapter then ask for starting verse number
    else if(flag==5){

        chapterNoVar = text;
        askVerseFrom();
        flag = 6;

    }

    // If user has asked to show a chapter then ask for end verse number
    else if(flag==6){

        verseFromVar = text;
        askVerseTo();
        flag = 7;

    }

    // If user has asked to show a chapter then get the verses
    else if(flag==7){

        verseToVar = text;
        getVerses(bookNameVar,chapterNoVar,verseFromVar,verseToVar);
        flag=1;
        var wait = setTimeout(defaultMsgDisplay,4000);

    }

     // If user has asked to show a particular verse then ask for chapter number
    else if(flag==8){

            bookNameVar = text;
            askChapterNo();
            flag=9;

    }
    
     // If user has asked to show a particular verse then ask for verse number
    else if(flag==9){

        chapterNoVar= text;
        askVerseNo();
        flag=10;

    }
    
     // If user has asked to show a particular verse then ask for book name
    else if(flag==10){

        verseNoVar = text;
        getVerseofChapter(bookNameVar,chapterNoVar,verseNoVar);
        flag=1;
        var wait = setTimeout(defaultMsgDisplay,4000);

    }

    // If all if blocks are not executed
    else{

        alert('Flag error');
        var wait = setTimeout(defaultMsgDisplay,4000);

    }    
}

// Function to remove typing message
function removal(){

    document.getElementById('typing').innerHTML = "";
    
}


// Function is called when send button is clicked
function adder(){

    // Taking the value from input box
    var val = document.getElementById('inputBox').value;

    // If value is not empty
    if(val!=""){
    
        // Showing typing for some time after user sends a message
        document.getElementById('typing').innerHTML = 'Typing...';
   
        // displaying the message sent by user
        var tsg = '<div id="card1" class="cards cardright"><div id="cardFlex">'+val+'<img src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png" id="imgRight" align="right"></div></div>';

        document.getElementById('chatBox').innerHTML += tsg;

        autoScroller();

        // calling the getreply function
        val = val.toLowerCase();
        var call = setTimeout(getReply,2500,val);
        var rem = setTimeout(removal,2000);
        
        // emptying the input box after sending the messages
        document.getElementById('inputBox').value = "";
        var sc = setTimeout(autoScroller,2700);

    }
}



