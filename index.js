var p = document.createElement('p');
document.body.appendChild(p);
p.id = "para-1";
p.className = "write-up";

var helloWorldText = document.createTextNode('Hello World!');
p.appendChild(helloWorldText);

var myParagraphElements = document.getElementsByTagName("p");
console.log(myParagraphElements[3]);
console.log(myParagraphElements[4]);
console.log(myParagraphElements[5]);

for(i=0; i<myParagraphElements.length; i++) {
    myParagraphElements[i].className = "essay paragraph";
}

/* Now that we have added a class of 'essay' to each element we 
can select these based on their _.support.argsClass */

var essayParagraphs = document.getElementsByClassName('essay');
console.log(essayParagraphs);
myParagraphElements[0].style.color = "red";
myParagraphElements[0].style.width = "400px";
myParagraphElements[0].style.height = "400px";
myParagraphElements[0].style.backgroundColor = "orange";
document.getElementById('first-paragraph').style.color = "green";
