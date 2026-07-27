const stars = document.getElementById("stars");

for(let i=0;i<120;i++){

    const star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"vw";
    star.style.top=Math.random()*100+"vh";

    star.style.animationDelay=Math.random()*2+"s";

    stars.appendChild(star);

}

function enterStudio(){

    window.location.href="studio.html";

}
