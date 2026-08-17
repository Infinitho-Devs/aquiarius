<!doctype html>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Infinitho-Devs/aquiarius@main/ventavisa/estilo4.css">
<script>(function(){try{var u=(window.location.href||"").toLowerCase();if(u.indexOf("basket.asp")!==-1)document.documentElement.classList.add("paco-pg-carrito");}catch(e){}})();</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
<link rel="icon" type="image/png" href="https://cdn.jsdelivr.net/gh/Infinitho-Devs/aquiarius@main/imagenes/favicon.png">


<header id="menu__paco" class="paco-header" style="background-image:url('https://cdn.jsdelivr.net/gh/Infinitho-Devs/aquiarius@main/assetsmain/header2.jpg') !important;background-size:cover !important;background-position:center !important;background-repeat:no-repeat !important;">
<div class="paco-header-border-bottom"></div>
<div class="paco-header-corner-left"></div>
<div class="paco-header-corner-right"></div>
<div class="paco-menu__header--logo">
<a href="https://festivalpresidente.tuboleta.com.do/eventperformances.asp?evt=952"></a>
</div>
<nav class="paco-navbar">
<a href="#pmf-lineup" class="js-lineup-link">LINEUP</a>
</nav>
<div class="paco-header-actions">
<a href="/myaccount.asp?gifrompage=1&gitopage=1" class="paco-account-btn" title="Mi Cuenta">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
<span>MI CUENTA</span>
</a>
<a href="/basket.asp" class="paco-cart-btn" title="Ir a Mi Carrito">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
<circle cx="9" cy="21" r="1"></circle>
<circle cx="20" cy="21" r="1"></circle>
<path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
</svg>
<span>MI CARRITO</span>
</a>
<a href="javascript:void(0)" class="paco-hamburger-btn" id="hamburgerBtn" aria-label="Abrir menú" aria-expanded="false" role="button">
<span></span>
<span></span>
<span></span>
</a>
</div>
</header>
<nav class="paco-mobile-nav-overlay" id="mobileNavOverlay">
<button class="paco-mobile-close-btn" id="closeOverlayBtn" aria-label="Cerrar menú" type="button">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#DFBA53" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
<line x1="18" y1="6" x2="6" y2="18"></line>
<line x1="6" y1="6" x2="18" y2="18"></line>
</svg>
</button>
<a href="#pmf-lineup" class="js-lineup-link">LINEUP</a>
</nav>
<script>(function(){
function esVisible(el){
return !!(el&&(el.offsetWidth||el.offsetHeight||(el.getClientRects&&el.getClientRects().length)));
}
function pacoLineupVisibilidad(){
try{
var enlaces=document.querySelectorAll(".js-lineup-link");
if(!enlaces.length)return;
var hayLineup=esVisible(document.getElementById("pmf-lineup"));
for(var i=0;i<enlaces.length;i++){enlaces[i].style.display=hayLineup?"":"none";}
}catch(e){}
}
function pacoLineupInit(){
pacoLineupVisibilidad();
setTimeout(pacoLineupVisibilidad,600);
setTimeout(pacoLineupVisibilidad,1500);
}
if(document.readyState==="loading"){
document.addEventListener("DOMContentLoaded",pacoLineupInit);
}else{
pacoLineupInit();
}
})();</script>
<script>(function(){
function ajustarEspacioHeader(){
try{
var header=document.getElementById('menu__paco');
var wrapper=document.querySelector('.paco-landing-wrapper');
if(!header||!wrapper)return;
var posicion=getComputedStyle(header).position;
if(posicion==='absolute'||posicion==='fixed'){
wrapper.style.marginTop=header.offsetHeight+'px';
}else{
wrapper.style.marginTop='';
}
}catch(e){}
}
function ajustarFondoHeader(){
try{
var header=document.getElementById('menu__paco');
if(!header)return;
var esMovil=window.innerWidth<=760;
header.style.setProperty('background-position',esMovil?'left center':'center','important');
}catch(e){}
}
ajustarEspacioHeader();
ajustarFondoHeader();
window.addEventListener('load',function(){ajustarEspacioHeader();ajustarFondoHeader();});
window.addEventListener('resize',function(){ajustarEspacioHeader();ajustarFondoHeader();});
})();</script>


<div class="paco-landing-wrapper" style="display: flex; flex-direction: column; width: 100%; clear: both;">
<section class="fpx-banner" id="heroBanner">
<a href="#planesSlider" class="fpx-banner__link" aria-label="Comprar boletas">
<img src="https://cdn.jsdelivr.net/gh/Infinitho-Devs/aquiarius@main/assetsmain/banner-preventavisa-desktop.jpg" alt="Festival Presidente 2026" class="fpx-banner__img fpx-banner__img--pc">
<img src="https://cdn.jsdelivr.net/gh/Infinitho-Devs/aquiarius@main/assetsmain/banner-visa-movilhd.jpeg" alt="Festival Presidente 2026" class="fpx-banner__img fpx-banner__img--movil">
</a>
</section>
<style>
.pmf-lineup-wrap{position:relative;overflow-x:hidden;background-color:#001a10;background-image:radial-gradient(900px 520px at 14% -12%, rgba(87, 232, 74, 0.08), transparent 60%),radial-gradient(820px 520px at 88% 112%, rgba(218, 182, 79, 0.08), transparent 60%),url('https://cdn.jsdelivr.net/gh/Infinitho-Devs/aquiarius@main/imagenes/malla-original-2171x4096.png');background-repeat:no-repeat,no-repeat,repeat;background-position:center,center,top center;}
.pmf-lineup-wrap .pmf-lineup{background:none;padding-top:14px;padding-bottom:14px;}
.pmf-lineup-wrap .pmf-lineup:first-child{padding-top:40px;}
.pmf-lineup-wrap .pmf-lineup:last-child{padding-bottom:40px;}
.pmf-lineup-wrap .pmf-lineup__header{margin-bottom:12px;}
.pmf-lineup-wrap .pmf-lineup__logo img{width:150px;}
.pmf-lineup-wrap .pmf-lineup__desc{font-size:12px;}
.pmf-lineup-wrap .pmf-lineup__stage{gap:14px;}
.pmf-lineup-wrap .pmf-lineup__track{gap:16px;}
.pmf-lineup-wrap .pmf-lineup__card{width:177px;padding:7px;border-radius:12px;}
.pmf-lineup-wrap .pmf-lineup__card-photo{aspect-ratio:3/4;margin-bottom:7px;border-radius:8px;}
.pmf-lineup-wrap .pmf-lineup__card-name{font-size:11px;letter-spacing:1px;margin:0 0 2px;}
.pmf-lineup-wrap .pmf-lineup__card-country{font-size:10px;}
.pmf-lineup-wrap .pmf-lineup__arrows{margin-top:0;justify-content:center;}
.pmf-lineup-wrap .pmf-lineup__arrow{width:32px;height:32px;}
@media (max-width:768px){
.pmf-lineup-wrap .pmf-lineup__card{width:142px;}
.pmf-lineup-wrap .pmf-lineup__logo img{width:130px;}
}
</style>
<div class="pmf-lineup-wrap">
<section class="pmf-lineup" id="pmf-lineup">
  <div class="pmf-lineup__container">
    <div class="pmf-lineup__header">
      <div class="pmf-lineup__header-left">
        <div class="pmf-lineup__logo">
          <img src="https://cdn.jsdelivr.net/gh/Infinitho-Devs/aquiarius@main/imagenes/LINEUP.png" alt="Lineup">
        </div>
        <div class="pmf-lineup__desc"><p>Las voces que han <span>marcado tu vida</span> y las que están escribiendo el presente se encuentran en un mismo escenario. Este lineup no solo se escucha, se siente.</p></div>
      </div>
    </div>
  </div>
</section>
<section class="pmf-lineup">
  <div class="pmf-lineup__container">
    <div class="pmf-lineup__header">
      <div class="pmf-lineup__header-left">
        <div class="pmf-lineup__logo">
          <img src="https://cdn.jsdelivr.net/gh/Infinitho-Devs/aquiarius@main/imagenes/fecha1.png" alt="Viernes 11">
        </div>
      </div>
    </div>
    <div class="pmf-lineup__stage">
      <div class="pmf-lineup__track js-lineup-track">
        <div class="pmf-lineup__card" data-date="">
          <div class="pmf-lineup__card-photo">
            <img src="https://cdn.jsdelivr.net/gh/Infinitho-Devs/aquiarius@main/arts/Artistas_individuales_FP-05.png" alt="Juan Luis Guerra">
          </div>
          <p class="pmf-lineup__card-name">Juan Luis Guerra</p>
          <p class="pmf-lineup__card-country">República Dominicana</p>
        </div>
        <div class="pmf-lineup__card" data-date="">
          <div class="pmf-lineup__card-photo">
            <img src="https://cdn.jsdelivr.net/gh/Infinitho-Devs/aquiarius@main/arts/Artistas_individuales_FP-01.png" alt="Calvin Harris">
          </div>
          <p class="pmf-lineup__card-name">Calvin Harris</p>
          <p class="pmf-lineup__card-country">Escocia</p>
        </div>
        <div class="pmf-lineup__card" data-date="">
          <div class="pmf-lineup__card-photo">
            <img src="https://cdn.jsdelivr.net/gh/Infinitho-Devs/aquiarius@main/arts/Artistas_individuales_FP-06.png" alt="Beéle">
          </div>
          <p class="pmf-lineup__card-name">Beéle</p>
          <p class="pmf-lineup__card-country">Colombia</p>
        </div>
        <div class="pmf-lineup__card" data-date="">
          <div class="pmf-lineup__card-photo">
            <img src="https://cdn.jsdelivr.net/gh/Infinitho-Devs/aquiarius@main/arts/Artistas_individuales_FP-07.png" alt="Danny Ocean">
          </div>
          <p class="pmf-lineup__card-name">Danny Ocean</p>
          <p class="pmf-lineup__card-country">Venezuela</p>
        </div>
        <div class="pmf-lineup__card" data-date="">
          <div class="pmf-lineup__card-photo">
            <img src="https://cdn.jsdelivr.net/gh/Infinitho-Devs/aquiarius@main/arts/Artistas_individuales_FP-12.png" alt="Milly Quezada">
          </div>
          <p class="pmf-lineup__card-name">Milly Quezada</p>
          <p class="pmf-lineup__card-country">República Dominicana</p>
        </div>
        <div class="pmf-lineup__card" data-date="">
          <div class="pmf-lineup__card-photo">
            <img src="https://cdn.jsdelivr.net/gh/Infinitho-Devs/aquiarius@main/arts/Artistas_individuales_FP-09.png" alt="Elena Rose">
          </div>
          <p class="pmf-lineup__card-name">Elena Rose</p>
          <p class="pmf-lineup__card-country">Venezuela</p>
        </div>
        <div class="pmf-lineup__card" data-date="">
          <div class="pmf-lineup__card-photo">
            <img src="https://cdn.jsdelivr.net/gh/Infinitho-Devs/aquiarius@main/arts/Artistas_individuales_FP-17.png" alt="Chiquito Team Band">
          </div>
          <p class="pmf-lineup__card-name">Chiquito Team Band</p>
          <p class="pmf-lineup__card-country">República Dominicana</p>
        </div>
        <div class="pmf-lineup__card" data-date="">
          <div class="pmf-lineup__card-photo">
            <img src="https://cdn.jsdelivr.net/gh/Infinitho-Devs/aquiarius@main/arts/Artistas_individuales_FP-13.png" alt="Fineta Records">
          </div>
          <p class="pmf-lineup__card-name">Fineta Records</p>
          <p class="pmf-lineup__card-country">República Dominicana</p>
        </div>
        <div class="pmf-lineup__card" data-date="">
          <div class="pmf-lineup__card-photo">
            <img src="https://cdn.jsdelivr.net/gh/Infinitho-Devs/aquiarius@main/arts/leo_rd.png" alt="Leo RD">
          </div>
          <p class="pmf-lineup__card-name">Leo RD</p>
          <p class="pmf-lineup__card-country">República Dominicana</p>
        </div>
        <div class="pmf-lineup__card" data-date="">
          <div class="pmf-lineup__card-photo">
            <img src="https://cdn.jsdelivr.net/gh/Infinitho-Devs/aquiarius@main/arts/Artistas_individuales_FP-14.png" alt="La Mas Doll">
          </div>
          <p class="pmf-lineup__card-name">La Mas Doll</p>
          <p class="pmf-lineup__card-country">República Dominicana</p>
        </div>
        <div class="pmf-lineup__card" data-date="">
          <div class="pmf-lineup__card-photo">
            <img src="https://cdn.jsdelivr.net/gh/Infinitho-Devs/aquiarius@main/arts/Artistas_individuales_FP-19.png" alt="Arlene MC">
          </div>
          <p class="pmf-lineup__card-name">Arlene MC</p>
          <p class="pmf-lineup__card-country">República Dominicana</p>
        </div>
      </div>
      <div class="pmf-lineup__arrows">
        <button class="pmf-lineup__arrow pmf-lineup__arrow--prev" type="button" aria-label="Anterior"></button>
        <button class="pmf-lineup__arrow pmf-lineup__arrow--next" type="button" aria-label="Siguiente"></button>
      </div>
    </div>
  </div>
</section>
<section class="pmf-lineup">
  <div class="pmf-lineup__container">
    <div class="pmf-lineup__header">
      <div class="pmf-lineup__header-left">
        <div class="pmf-lineup__logo">
          <img src="https://cdn.jsdelivr.net/gh/Infinitho-Devs/aquiarius@main/imagenes/fecha2.png" alt="Sábado 12">
        </div>
      </div>
    </div>
    <div class="pmf-lineup__stage">
      <div class="pmf-lineup__track js-lineup-track">
        <div class="pmf-lineup__card" data-date="">
          <div class="pmf-lineup__card-photo">
            <img src="https://cdn.jsdelivr.net/gh/Infinitho-Devs/aquiarius@main/arts/Artistas_individuales_FP-08.png" alt="Don Omar">
          </div>
          <p class="pmf-lineup__card-name">Don Omar</p>
          <p class="pmf-lineup__card-country">Puerto Rico</p>
        </div>
        <div class="pmf-lineup__card" data-date="">
          <div class="pmf-lineup__card-photo">
            <img src="https://cdn.jsdelivr.net/gh/Infinitho-Devs/aquiarius@main/arts/Artistas_individuales_FP-02.png" alt="Katy Perry">
          </div>
          <p class="pmf-lineup__card-name">Katy Perry</p>
          <p class="pmf-lineup__card-country">Estados Unidos</p>
        </div>
        <div class="pmf-lineup__card" data-date="">
          <div class="pmf-lineup__card-photo">
            <img src="https://cdn.jsdelivr.net/gh/Infinitho-Devs/aquiarius@main/arts/Artistas_individuales_FP-04.png" alt="Omar Courtz">
          </div>
          <p class="pmf-lineup__card-name">Omar Courtz</p>
          <p class="pmf-lineup__card-country">Puerto Rico</p>
        </div>
        <div class="pmf-lineup__card" data-date="">
          <div class="pmf-lineup__card-photo">
            <img src="https://cdn.jsdelivr.net/gh/Infinitho-Devs/aquiarius@main/arts/Artistas_individuales_FP-21.png" alt="Aria Vega">
          </div>
          <p class="pmf-lineup__card-name">Aria Vega</p>
          <p class="pmf-lineup__card-country">Colombia</p>
        </div>
        <div class="pmf-lineup__card" data-date="">
          <div class="pmf-lineup__card-photo">
            <img src="https://cdn.jsdelivr.net/gh/Infinitho-Devs/aquiarius@main/arts/Artistas_individuales_FP-03.png" alt="Dalvin La Melodía">
          </div>
          <p class="pmf-lineup__card-name">Dalvin La Melodía</p>
          <p class="pmf-lineup__card-country">República Dominicana</p>
        </div>
        <div class="pmf-lineup__card" data-date="">
          <div class="pmf-lineup__card-photo">
            <img src="https://cdn.jsdelivr.net/gh/Infinitho-Devs/aquiarius@main/arts/Artistas_individuales_FP-11.png" alt="Yiyo Sarante">
          </div>
          <p class="pmf-lineup__card-name">Yiyo Sarante</p>
          <p class="pmf-lineup__card-country">República Dominicana</p>
        </div>
        <div class="pmf-lineup__card" data-date="">
          <div class="pmf-lineup__card-photo">
            <img src="https://cdn.jsdelivr.net/gh/Infinitho-Devs/aquiarius@main/arts/Artistas_individuales_FP-15.png" alt="Karlo">
          </div>
          <p class="pmf-lineup__card-name">Karlo</p>
          <p class="pmf-lineup__card-country">México</p>
        </div>
        <div class="pmf-lineup__card" data-date="">
          <div class="pmf-lineup__card-photo">
            <img src="https://cdn.jsdelivr.net/gh/Infinitho-Devs/aquiarius@main/arts/Artistas_individuales_FP-13.png" alt="Fineta Records">
          </div>
          <p class="pmf-lineup__card-name">Fineta Records</p>
          <p class="pmf-lineup__card-country">República Dominicana</p>
        </div>
        <div class="pmf-lineup__card" data-date="">
          <div class="pmf-lineup__card-photo">
            <img src="https://cdn.jsdelivr.net/gh/Infinitho-Devs/aquiarius@main/arts/Artistas_individuales_FP-16.png" alt="Lápiz Conciente">
          </div>
          <p class="pmf-lineup__card-name">Lápiz Conciente</p>
          <p class="pmf-lineup__card-country">República Dominicana</p>
        </div>
        <div class="pmf-lineup__card" data-date="">
          <div class="pmf-lineup__card-photo">
            <img src="https://cdn.jsdelivr.net/gh/Infinitho-Devs/aquiarius@main/arts/Artistas_individuales_FP-18.png" alt="Donaty">
          </div>
          <p class="pmf-lineup__card-name">Donaty</p>
          <p class="pmf-lineup__card-country">República Dominicana</p>
        </div>
      </div>
      <div class="pmf-lineup__arrows">
        <button class="pmf-lineup__arrow pmf-lineup__arrow--prev" type="button" aria-label="Anterior"></button>
        <button class="pmf-lineup__arrow pmf-lineup__arrow--next" type="button" aria-label="Siguiente"></button>
      </div>
    </div>
  </div>
</section>
</div>
<div class="pmf-planes-section fpx-planes">
<div class="fpx-planes__bg" aria-hidden="true"></div>
<div class="w3-planes-head fpx-planes__head">
<span class="w3-planes-kicker fpx-planes__kicker">VIVE EL FESTIVAL</span>
<h2 class="w3-planes-title fpx-planes__title">COMPRA TU BOLETA</h2>
</div>
<div class="pmf-planes-wrapper pmf-boleteria fpx-ticket-group pmf-planes__card" id="planesSlider">

<div class="fpx-ticket-top">

<div class="fpx-ticket-map">
<img src="https://cdn.jsdelivr.net/gh/Infinitho-Devs/aquiarius@main/imagenes/mapa4.png" alt="Mapa del festival" class="fpx-ticket-map__img">
</div>

<div class="fpx-ticket-prices">
<div class="fpx-ticket-prices__cols">
<span class="fpx-ticket-prices__col-label">Precio por día</span>
<span class="fpx-ticket-prices__col-label fpx-ticket-prices__col-label--combo">Combo 2 días</span>
</div>
<div class="fpx-ticket-prices__grid">
<div class="fpx-ticket-prices__row" style="--fpx-tier-color:#FFB400">
<span class="fpx-ticket-prices__name">Terreno VIP</span>
<span class="fpx-ticket-prices__values">
<span class="fpx-ticket-prices__day">RD$10,500</span>
<span class="fpx-ticket-prices__amount">RD$21,000</span>
</span>
</div>
<div class="fpx-ticket-prices__row" style="--fpx-tier-color:#009E72">
<span class="fpx-ticket-prices__name">Terreno</span>
<span class="fpx-ticket-prices__values">
<span class="fpx-ticket-prices__day">RD$8,500</span>
<span class="fpx-ticket-prices__amount">RD$17,000</span>
</span>
</div>
<div class="fpx-ticket-prices__row" style="--fpx-tier-color:#0070BE">
<span class="fpx-ticket-prices__name">Gradas</span>
<span class="fpx-ticket-prices__values">
<span class="fpx-ticket-prices__day">RD$6,900</span>
<span class="fpx-ticket-prices__amount">RD$13,800</span>
</span>
</div>
<div class="fpx-ticket-prices__row" style="--fpx-tier-color:#3A4FE0">
<span class="fpx-ticket-prices__name">Grada D1, C1, A1, B1</span>
<span class="fpx-ticket-prices__values">
<span class="fpx-ticket-prices__day">RD$3,900</span>
<span class="fpx-ticket-prices__amount">RD$7,800</span>
</span>
</div>
</div>
</div>

</div>

<div class="pmf-planes__desc fpx-ticket-highlight-wrap">
<div class="fpx-ticket-highlight">
<div class="fpx-ticket-list">
<span class="fpx-ticket-list__preventa">Precios preventa: Combo 2 días</span>
<span class="fpx-ticket-list__kicker">Tu combo incluye:</span>
<ul class="fpx-ticket-list__items">
<li><span>Acceso los dos días al festival.</span></li>
<li><span>Acceso a todas las experiencias y escenarios.</span></li>
</ul>
</div>
<span class="fpx-ticket-highlight__presale">
<span class="fpx-ticket-highlight__presale-txt">PREVENTA · TODAS LAS TARJETAS</span>
<span class="fpx-ticket-highlight__presale-logo--visa"><img src="https://cdn.jsdelivr.net/gh/Infinitho-Devs/aquiarius@main/PATROCINADORES/logo7.png" alt="Visa"></span>
</span>
<a href="https://festivalpresidente.tuboleta.com.do/orderticketsvenue.asp?p=4150" class="pmf-planes__btn fpx-card__btn fpx-ticket-highlight__btn">COMPRAR BOLETAS</a>
</div>
</div>

</div>
</div>
<section class="paco-sponsors pmf-sponsors" id="patrocinadores">
<div class="paco-sponsors__title pmf-sponsors__title-wrap">
<img src="https://cdn.jsdelivr.net/gh/Infinitho-Devs/aquiarius@main/imagenes/PATROCINADORES.png" alt="Patrocinadores">
</div>
<div class="pmf-sponsors__grid">
<div class="pmf-sponsors__card"><img class="pmf-sponsors__logo pmf-sponsors__logo--l6" src="https://cdn.jsdelivr.net/gh/Infinitho-Devs/aquiarius@main/PATROCINADORES/logo6.png" alt="Patrocinador"></div>
<div class="pmf-sponsors__card"><img class="pmf-sponsors__logo pmf-sponsors__logo--l7" src="https://cdn.jsdelivr.net/gh/Infinitho-Devs/aquiarius@main/PATROCINADORES/logo7.png" alt="Patrocinador"></div>
<div class="pmf-sponsors__card"><img class="pmf-sponsors__logo" src="https://cdn.jsdelivr.net/gh/Infinitho-Devs/aquiarius@main/PATROCINADORES/logo9.png" alt="Patrocinador"></div>
<div class="pmf-sponsors__card"><img class="pmf-sponsors__logo" src="https://cdn.jsdelivr.net/gh/Infinitho-Devs/aquiarius@main/PATROCINADORES/logo8.png" alt="Patrocinador"></div>
<div class="pmf-sponsors__card"><img class="pmf-sponsors__logo pmf-sponsors__logo--corona" src="https://cdn.jsdelivr.net/gh/Infinitho-Devs/aquiarius@main/PATROCINADORES/LOGO1.png" alt="Corona"></div>
<div class="pmf-sponsors__card"><img class="pmf-sponsors__logo pmf-sponsors__logo--one" src="https://cdn.jsdelivr.net/gh/Infinitho-Devs/aquiarius@main/PATROCINADORES/logo2.png" alt="Cerveza The One"></div>
<div class="pmf-sponsors__card"><img class="pmf-sponsors__logo pmf-sponsors__logo--mul" src="https://cdn.jsdelivr.net/gh/Infinitho-Devs/aquiarius@main/PATROCINADORES/logo3.svg" alt="Michelob Ultra"></div>
<div class="pmf-sponsors__card"><img class="pmf-sponsors__logo" src="https://cdn.jsdelivr.net/gh/Infinitho-Devs/aquiarius@main/PATROCINADORES/logo5.png" alt="Patrocinador"></div>
</div>
</section>
<a href="https://wa.me/18295208207" target="_blank" class="paco-wa-float" aria-label="Contáctanos por WhatsApp" title="Contáctanos por WhatsApp">
<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
</svg>
</a>
</div>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">


<div class="fp-footer-section">
<div class="fp-footer-inner">
<div class="fp-footer-brand">
<a href="#">
<img src="https://cdn.jsdelivr.net/gh/Infinitho-Devs/aquiarius@main/imagenes/logo-footer.jpg" alt="Presidente" class="fp-footer-brand-img">
</a>
</div>
<div class="fp-footer-divider-top"></div>
<div class="fp-footer-grid">
<div class="fp-footer-col">
<h3 class="fp-footer-title">SOMOS PRESIDENTE</h3>
<ul class="fp-footer-list">
<li class="fp-footer-item">
<a href="https://www.presidente.com.do/somos-presidente" target="_blank" rel="noopener" class="fp-footer-link">Somos Presidente</a>
</li>
</ul>
</div>
<div class="fp-footer-col">
<h3 class="fp-footer-title">NUESTROS COROS</h3>
<ul class="fp-footer-list">
<li class="fp-footer-item">
<a href="https://www.presidente.com.do/campanas" target="_blank" rel="noopener" class="fp-footer-link">Nuestros Coros</a>
</li>
</ul>
</div>
<div class="fp-footer-col">
<h3 class="fp-footer-title">PA'L CORO</h3>
<ul class="fp-footer-list">
<li class="fp-footer-item">
<a href="#" class="fp-footer-link">Pa'l Coro</a>
</li>
</ul>
</div>
<div class="fp-footer-col">
<h3 class="fp-footer-title">INFORMACIÓN</h3>
<ul class="fp-footer-list">
<li class="fp-footer-item">
<a href="https://www.presidente.com.do/" target="_blank" rel="noopener" class="fp-footer-link">CONTÁCTANOS</a>
</li>
<li class="fp-footer-item">
<a href="https://www.presidente.com.do/" target="_blank" rel="noopener" class="fp-footer-link">HABLEMOS DE ALCOHOL</a>
</li>
<li class="fp-footer-item">
<a href="https://www.presidente.com.do/" target="_blank" rel="noopener" class="fp-footer-link">ANHEUSER-BUSCH INBEV © 2022</a>
</li>
</ul>
</div>
<div class="fp-footer-col fp-social-col">
<h3 class="fp-footer-title">SÍGUENOS EN</h3>
<div class="fp-social-list">
<a href="https://facebook.com/cervezapresidente" target="_blank" rel="noopener" aria-label="Facebook" class="fp-social-item">
<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
<path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.01 11.49 5.65 13.75 5.65c1.08 0 2.22.19 2.22.19v2.44h-1.25c-1.23 0-1.62.77-1.62 1.56V12h2.77l-.44 3h-2.33v6.8C18.56 20.87 22 16.84 22 12z"/>
</svg>
</a>
<a href="https://instagram.com/cervpresidente" target="_blank" rel="noopener" aria-label="Instagram" class="fp-social-item">
<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
</svg>
</a>
<a href="https://twitter.com/CervPresidente" target="_blank" rel="noopener" aria-label="X / Twitter" class="fp-social-item">
<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
</svg>
</a>
<a href="https://youtube.com/channel/UCvF2Fb8wM-YEvjKL8doLa0g" target="_blank" rel="noopener" aria-label="YouTube" class="fp-social-item">
<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
</svg>
</a>
</div>
</div>
</div>
<div class="fp-footer-divider-bottom"></div>
<div class="fp-legal-group">
<a href="https://cdn.jsdelivr.net/gh/Infinitho-Devs/aquiarius@main/tc-2026-3.html" target="_blank" rel="noopener" class="fp-legal-item" onclick="if(window.pacoAbrirDocPopup){event.preventDefault();pacoAbrirDocPopup(this.href);return false;}">TERMINOS Y CONDICIONES</a>
<a href="https://cdn.jsdelivr.net/gh/Infinitho-Devs/aquiarius@main/preguntas-2026.html" target="_blank" rel="noopener" class="fp-legal-item" onclick="if(window.pacoAbrirDocPopup){event.preventDefault();pacoAbrirDocPopup(this.href);return false;}">PREGUNTAS FRECUENTES</a>
<a href="https://cdn.jsdelivr.net/gh/Infinitho-Devs/aquiarius@main/politicas-2026.html" target="_blank" rel="noopener" class="fp-legal-item" onclick="if(window.pacoAbrirDocPopup){event.preventDefault();pacoAbrirDocPopup(this.href);return false;}">POLÍTICAS DE PRIVACIDAD</a>
</div>
</div>
<div class="fp-resp-bar">
<div class="fp-resp-inner">
<div class="fp-resp-brand">
<img src="https://cdn.jsdelivr.net/gh/Infinitho-Devs/aquiarius@main/imagenes/legal-abi.jpg" alt="Consumo responsable" class="fp-resp-img">
</div>
<div class="fp-resp-content">
<p class="fp-resp-text">
NO COMPARTIR NUESTRO CONTENIDO CON MENORES DE EDAD.
TOMA CON RESPONSABILIDAD EL CONSUMO DE ALCOHOL
PERJUDICA LA SALUD.
PROHÍBASE EL EXPENDIO DE BEBIDAS EMBRIAGANTES
A MENORES DE EDAD.
</p>
</div>
</div>
</div>
</div>

<div id="paco-docpopup-overlay" aria-hidden="true">
<div class="paco-docpopup-card" role="dialog" aria-modal="true">
<button type="button" class="paco-docpopup-close" aria-label="Cerrar">&times;</button>
<div class="paco-docpopup-loading">Cargando…</div>
<div class="paco-docpopup-error" style="display:none;">
<p>No se pudo cargar el documento.</p>
<a href="#" target="_blank" rel="noopener">Abrir en una pestaña nueva</a>
</div>
<iframe class="paco-docpopup-iframe" title="Documento" style="display:none;"></iframe>
</div>
</div>
<style>
#paco-docpopup-overlay{position:fixed;inset:0;z-index:2147483647;display:none;align-items:center;justify-content:center;padding:22px;background:rgba(0,10,6,.72);}
#paco-docpopup-overlay.paco-abierto{display:flex;}
.paco-docpopup-card{position:relative;width:100%;max-width:920px;height:88vh;height:88dvh;max-height:900px;border-radius:18px;overflow:hidden;background:#01150B;box-shadow:0 30px 70px rgba(0,0,0,.55);border:1px solid rgba(223,186,83,.25);}
.paco-docpopup-close{position:absolute;top:10px;right:10px;z-index:2;width:36px;height:36px;border-radius:50%;border:none;background:#DFBA53;color:#06251a;font-size:20px;line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 6px 16px rgba(0,0,0,.4);font-family:Arial,Helvetica,sans-serif;}
.paco-docpopup-iframe{width:100%;height:100%;border:0;display:block;background:#001a10;}
.paco-docpopup-loading{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#DFBA53;font-family:Arial,Helvetica,sans-serif;font-size:12.5px;letter-spacing:1.5px;text-transform:uppercase;font-weight:700;}
.paco-docpopup-error{position:absolute;inset:0;display:flex;flex-direction:column;gap:14px;align-items:center;justify-content:center;padding:30px;text-align:center;color:#e3e7e2;font-family:Arial,Helvetica,sans-serif;font-size:13px;}
.paco-docpopup-error a{color:#DFBA53;font-weight:700;text-decoration:none;}
@media (max-width:760px){.paco-docpopup-card{height:92vh;height:92dvh;border-radius:14px;}}
</style>
<script>
(function(){
var overlay=document.getElementById('paco-docpopup-overlay');
if(!overlay)return;
var card=overlay.querySelector('.paco-docpopup-card');
var loading=card.querySelector('.paco-docpopup-loading');
var errBox=card.querySelector('.paco-docpopup-error');
var errLink=errBox.querySelector('a');
var iframe=card.querySelector('.paco-docpopup-iframe');
var closeBtn=card.querySelector('.paco-docpopup-close');
var cache={};
function forzarRepintado(){
overlay.style.display='none';
void overlay.offsetHeight;
overlay.style.display='';
}
function cerrar(){
overlay.classList.remove('paco-abierto');
overlay.setAttribute('aria-hidden','true');
document.body.style.overflow='';
iframe.style.display='none';
iframe.removeAttribute('srcdoc');
}
function abrir(url){
try{if(overlay.parentNode!==document.body){document.body.appendChild(overlay);}}catch(e){}
overlay.classList.add('paco-abierto');
overlay.setAttribute('aria-hidden','false');
document.body.style.overflow='hidden';
if(window.innerWidth<=760){
forzarRepintado();
setTimeout(forzarRepintado,60);
}
errBox.style.display='none';
iframe.style.display='none';
loading.style.display='flex';
errLink.href=url;
if(cache[url]){
iframe.srcdoc=cache[url];
iframe.style.display='block';
loading.style.display='none';
return false;
}
fetch(url,{mode:'cors'}).then(function(res){
if(!res.ok)throw new Error('http '+res.status);
return res.text();
}).then(function(html){
cache[url]=html;
iframe.srcdoc=html;
iframe.style.display='block';
loading.style.display='none';
}).catch(function(){
loading.style.display='none';
errBox.style.display='flex';
});
return false;
}
iframe.addEventListener('load',function(){
try{
var doc=iframe.contentDocument;
if(!doc)return;
doc.addEventListener('click',function(e){
var a=e.target&&e.target.closest?e.target.closest('a'):null;
if(!a)return;
var href=a.getAttribute('href')||'';
if(href.charAt(0)!=='#')return;
e.preventDefault();
var id=href.slice(1);
var dest=id?doc.getElementById(id):null;
if(dest&&dest.scrollIntoView){dest.scrollIntoView({behavior:'smooth',block:'start'});}
else if(doc.defaultView){doc.defaultView.scrollTo({top:0,behavior:'smooth'});}
});
}catch(err){}
});
closeBtn.addEventListener('click',cerrar);
overlay.addEventListener('click',function(e){if(e.target===overlay)cerrar();});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&overlay.classList.contains('paco-abierto'))cerrar();});
window.addEventListener('resize',function(){if(overlay.classList.contains('paco-abierto'))forzarRepintado();});
window.pacoAbrirDocPopup=abrir;
})();
</script>

<script src="https://cdn.jsdelivr.net/gh/Infinitho-Devs/aquiarius@main/ventavisa/script4.js"></script>
<script src="https://cdn.jsdelivr.net/gh/Infinitho-Devs/aquiarius@main/cc/opup.js"></script>
