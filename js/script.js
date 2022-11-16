
function incLink() {
  const links = document.querySelectorAll(".header-menu a");

  function ativarLink(link) {
    const url = location.href;
    const href = link.href;

    if (url.includes(href)) {
      link.classList.add("ativo");
    }
  }

  links.forEach(ativarLink);
}
incLink();



const termoList = document.querySelectorAll('.termos h2');

termoList[0].nextElementSibling.classList.add('ativo');

function activeLink() {
  this.nextElementSibling.classList.toggle('ativo');
}

termoList.forEach((item) => {
  item.addEventListener('click', activeLink);
})