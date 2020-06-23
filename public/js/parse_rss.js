//questo codiceesgue il parsing del feed rss ddi 1bcremona blog per cedere i nuovi artcoli
//this code parse the rrs feed or 1bcremonablog.com to control new article

const proxyurl = "https://cors-anywhere.herokuapp.com/";
const rss_url = "https://1bcremonablog.com/feed/";
fetch(proxyurl + rss_url)
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => {
    console.log(data);
    const items = data.querySelectorAll("item");
    let html = ``;
    items.forEach(el => {
      var linkart = el.querySelector("link").innerHTML;
      var titleart = el.querySelector("title").innerHTM;
      html += `
        <div class="article">
          <h1>
          ${el.querySelector("title").innerHTML}<br>
          <a href="/articolo">  <button id="openlink" onclick="sessionStorage.setItem('titlearticle1bcremonablog', '${titleart}');sessionStorage.setItem('linkarticle1bcremonablog', '${linkart}')">Leggi l'articolo</button></a>
            </h1>
                    </div>`;
        });

    document.body.insertAdjacentHTML("beforeend", html);
    });
