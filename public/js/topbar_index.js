function topbar(){
    var ciao = "ciao cioa"
    var topbarel = document.getElementById("root");
    var topbarhtml = `
    <div class="topbar">
    <button id="opennavbtn" onclick="openNav()">&#9776; Menù</button>
    <b>1bcremonablog app</b>
</div>
    `;
    topbarel.innerHTML += topbarhtml;


};

topbar();
