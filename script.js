const places = [
  {id:'chata-1',name:'Chata Pohoda',address:'Pohraničníků 1, 362 35 Abertamy-Hřebečná',mapUrl:'https://www.google.com/maps/place//data=!4m2!3m1!1s0x47a0bc985e35d42b:0x7936acb2e8b60a15?sa=X&ved=1t:8290&ictx=111',place:'Abertamy · Krušné hory',type:'cabin',tag:'HŘEBEČNÁ · 900 M N. M.',rating:'5,0',reviews:'(56)',image:'https://cdn.megau.eu/accommodations/5293/images/a5293-chata-pohoda-20231213-005849-4979.jpg',short:'Soukromá horská chata u lesa, potoka a běžeckých tras.',description:'Pronajímá se celý dům a nabízí soukromí pro rodiny nebo skupiny až 23 hostů. Chata leží na pozemku o rozloze 5 000 m² u lesa a potoka, přibližně 900 m n. m. Má sedm ložnic, krb, terasu a vybavenou kuchyň. Běžecké stopy a cyklotrasy začínají přímo u domu.',capacity:'Až 23 hostů · 7 ložnic',features:['Celý dům jen pro vás','Krb a terasa','U lesa a potoka'],price:'350 Kč',priceNote:'za osobu / noc · mimosezóna, týdenní pobyt',priceDetails:'Dospělí: 350 Kč/os./noc při týdenním pobytu; 450 Kč/os./noc při kratším pobytu. Děti do 12 let: 300 Kč, při kratším pobytu 350 Kč/os./noc. Děti do 3 let zdarma. Minimum 16 platících osob.',seasonRates:[['Léto','350–450 Kč/os./noc · víkend 700–900 Kč/os.'],['Zima','350–450 Kč/os./noc · víkend 700–900 Kč/os.'],['Mimosezóna','300–350 Kč/os./noc · víkend 700–900 Kč/os.']],booking:'https://www.e-chalupy.cz/ubytovani-hrebecna-chata-pronajmuti-o1220'},
  {id:'chata-2',name:'Chalupa Větrov',address:'Vodárenská 70, 362 35 Abertamy',mapUrl:'https://www.google.com/maps/place//data=!4m2!3m1!1s0x47a0bd40fe0e5329:0x487e66912e0a288?sa=X&ved=1t:8290&ictx=111',place:'Abertamy · Krušné hory',type:'cabin',tag:'NA KRAJI ABERTAM',rating:'4,9',reviews:'(74)',image:'https://www.e-chalupy.cz/foto/pohled-od-jihu-v-lete-1fa1-4ed6-553778.jpg',short:'Horská chalupa u luk a Krušnohorské magistrály.',description:'Kompletně zrekonstruovaná chalupa stojí na klidném okraji Abertam, uprostřed luk a přímo u Krušnohorské magistrály. Pět ložnic ubytuje až 17 hostů. Venku je zahradní altánek s krbem, uvnitř vybavená kuchyň a krbové vytápění. V okolí jsou běžecké stopy, cyklotrasy i lyžařské areály.',capacity:'Až 17 hostů · 5 ložnic',features:['Zahradní altánek a krb','Vybavená kuchyň','Parkování u objektu'],price:'400 Kč',priceNote:'za osobu / noc · mimosezóna, týdenní pobyt',priceDetails:'Dospělí: 400 Kč/os./noc při týdenním pobytu; 450 Kč/os./noc při kratším pobytu. Děti do 12 let: 300 Kč, při kratším pobytu 400 Kč/os./noc. Děti do 3 let zdarma. Minimum 12 platících osob.',seasonRates:[['Léto','350–450 Kč/os./noc · víkend 700–900 Kč/os.'],['Zima','350–450 Kč/os./noc · víkend 700–900 Kč/os.'],['Mimosezóna','300–400 Kč/os./noc · víkend 700–900 Kč/os.']],booking:'https://www.e-chalupy.cz/pronajem-chalupa-vetrov-abertamy-o7087'},
  {id:'chata-3',name:'Chata Vyhlídka',address:'Pohraničníků 68, 362 35 Abertamy-Hřebečná',place:'Abertamy · Krušné hory',type:'cabin',tag:'VÝHLEDY Z HŘEBEČNÉ',rating:'—',reviews:'',image:'https://www.e-chalupy.cz/foto/org-216c374e129d5cd2-1526976780000-af5f-8b5e-945755.jpg',short:'Horská chata s výhledem přímo u Krušnohorské magistrály.',description:'Chata stojí v nadmořské výšce kolem 1 000 metrů a nabízí výhled do krušnohorské krajiny. Ubytuje až 13 hostů ve dvou ložnicích. K dispozici je společenská místnost s kachlovými kamny a barem, vybavená kuchyň a dřevěná terasa. V zimě se k objektu přijíždí na lyžích nebo pásech; v létě lze parkovat u chaty.',capacity:'Až 13 hostů · 2 ložnice',features:['Společenská místnost 48 m²','Kachlová kamna a bar','Terasa s výhledem'],price:'450 Kč',priceNote:'za osobu / noc · týdenní pobyt',priceDetails:'Dospělí: 450 Kč/os./noc při týdenním pobytu. Děti: 300 Kč/os./noc s vlastním spacákem nebo ložním prádlem. Kratší pobyty a větší počet osob jsou dle dohody; minimum 10 platících osob.',seasonRates:[['Léto','300–450 Kč/os./noc'],['Zima','300–450 Kč/os./noc'],['Mimosezóna','300–450 Kč/os./noc']],booking:'https://www.e-chalupy.cz/chata-hrebecna-ubytovani-vyhlidka-u-jarosu-o9374'},
  {id:'kemp',name:'Campeak',address:'Pohraničníků 1, 362 35 Abertamy-Hřebečná',mapUrl:'https://www.google.com/maps/place//data=!4m2!3m1!1s0x47a0bc985e35d42b:0x7936acb2e8b60a15?sa=X&ved=1t:8290&ictx=111',place:'Abertamy · Krušné hory',type:'camp',tag:'POD HVĚZDAMI',rating:'—',reviews:'',image:'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1000&q=85',short:'Místo pod širým nebem vedle Chaty Pohoda.',description:'Campeak najdete na stejné adrese jako Chatu Pohoda, v horské krajině Hřebečné. Stránka je připravená na informace o kempu, rezervace a budoucí živý přenos z kamery.',capacity:'Kemp · Hřebečná',price:'Dle termínu',booking:'https://www.google.com/maps/search/?api=1&query=Pohrani%C4%8Dn%C3%ADk%C5%AFs%201%2C%20Abertamy'}
];

const propertyCopy = {
  'chata-1': {heading:'U lesa a potoka<br><em>na Hřebečné.</em>', mapHeading:'Hřebečná<br><em>Pohraničníků 1.</em>'},
  'chata-2': {heading:'Uprostřed luk<br><em>na okraji Abertam.</em>', mapHeading:'Abertamy<br><em>Vodárenská 70.</em>'},
  'chata-3': {heading:'Výhled do krajiny<br><em>v 1 000 m n. m.</em>', mapHeading:'Hřebečná<br><em>Pohraničníků 68.</em>'},
  kemp: {heading:'Campeak<br><em>Pohraničníků 1.</em>', mapHeading:'Hřebečná<br><em>Pohraničníků 1.</em>'}
};

const nearbyPlaces = {
  'chata-1': [
    {kind:'HORNICKÁ PAMÁTKA',name:'Důl Mauritius',description:'Prohlídková štola v historické cínové oblasti Hřebečné.',url:'https://www.dulmauritius.cz/cs/',image:'https://www.krusnehory.cz/data/2023/05/-and0067.jpg'},
    {kind:'OBČERSTVENÍ',name:'Červená jáma',description:'Horská zastávka u bývalé důlní propadliny na trase Krušnohorské magistrály.',url:'https://ucervenejamy.eatbu.com/',image:'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=85'},
    {kind:'LYŽOVÁNÍ A LETNÍ AKTIVITY',name:'Skiareál Plešivec',description:'Lanovky, lyžařská škola a v létě trailpark, bobová dráha i turistické trasy.',url:'https://www.plesivec.cz/',image:'https://d48-a.sdn.cz/d_48/c_img_QO_BC/lbeQZj.jpeg?fl=res%2C1200%2C900%2C1'},
    {kind:'NAUČNÁ STEZKA',name:'Božídarské rašeliniště',description:'Okružní naučná stezka dlouhá 3,2 km vede po dřevěných chodnících chráněným rašeliništěm.',url:'https://www.krusnehory.cz/cs/sport-a-relax/naucna-stezka-bozidarske-raseliniste-2103.html',image:'https://www.bozidar.cz/images/phocagallery/priroda/stezka_bozidarske_raseliniste/thumbs/phoca_thumb_l_raseliniste_2.jpg'},
    {kind:'HISTORICKÁ STEZKA',name:'Blatenský příkop',description:'Přibližně 12 km dlouhé historické vodní dílo s naučnou trasou.',url:'https://www.horni-blatna.cz/turista-1/blatensky-prikop/blatensky-prikop-231cs.html',image:'https://vary.rozhlas.cz/sites/default/files/styles/cro_16x9_tablet/public/images/95555d89bd84d6089f5b4c28337a6b46.jpg?itok=wF62qROs'}
  ],
  'chata-2': [
    {kind:'LYŽOVÁNÍ',name:'Plešivec · Abertamy',description:'Podle nabídky je sjezdovka 600 m od chalupy a navazuje na areál Plešivec.',url:'https://www.plesivec.cz/',image:'https://d48-a.sdn.cz/d_48/c_img_QO_BC/lbeQZj.jpeg?fl=res%2C1200%2C900%2C1'},
    {kind:'LYŽOVÁNÍ',name:'Skiareál Pernink',description:'Rodinný areál v Perninku; nabídka Chalupy Větrov uvádí Pernink přibližně 4 km od objektu.',url:'https://arealpernink.cz/',image:'https://images.unsplash.com/photo-1551524164-6cf2ac531f07?auto=format&fit=crop&w=900&q=85'},
    {kind:'RESTAURACE',name:'Restaurace Plešivec',description:'Horská restaurace s českou kuchyní a terasou s výhledem na Krušné hory.',url:'https://www.plesivec.cz/restaurace/restaurace-plesivec-40/',image:'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=85'},
    {kind:'BISTRO',name:'Bistro Horský statek Abertamy',description:'Bistro v centru Abertam s českými jídly a surovinami z vlastního chovu.',url:'https://www.farmazvirat.cz/bistro/',image:'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=85'},
    {kind:'AKTIVITY PRO SKUPINY',name:'Pepe a Pipi',description:'V nabídce chaty je uvedena možnost objednat bumper ball, vodní atrakce a skákací hrady.',url:'https://www.pepeapipi.cz/',image:'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=900&q=85'},
    {kind:'MUZEUM',name:'Muzeum Abertamy',description:'Expozice rukavičkářství a hornické historie s minerály z Jáchymovska.',url:'https://www.mesto-abertamy.cz/turista/muzeum-abertamy/',image:'https://www.krusnehory.cz/data/2023/05/-and0067.jpg'},
    {kind:'NAUČNÁ STEZKA',name:'Božídarské rašeliniště',description:'3,2 km dlouhá stezka přes dřevěné chodníky a horskou přírodní rezervaci.',url:'https://www.krusnehory.cz/cs/sport-a-relax/naucna-stezka-bozidarske-raseliniste-2103.html',image:'https://www.bozidar.cz/images/phocagallery/priroda/stezka_bozidarske_raseliniste/thumbs/phoca_thumb_l_raseliniste_2.jpg'}
  ],
  'chata-3': [
    {kind:'OBČERSTVENÍ · 100 M',name:'Červená jáma',description:'Nejbližší občerstvení podle nabídky chaty; leží u důlní propadliny na magistrále.',url:'https://ucervenejamy.eatbu.com/',image:'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=85'},
    {kind:'HORNICKÁ PAMÁTKA',name:'Důl Mauritius',description:'Prohlídková štola v historickém cínovém revíru Hřebečná.',url:'https://www.dulmauritius.cz/cs/',image:'https://www.krusnehory.cz/data/2023/05/-and0067.jpg'},
    {kind:'AKTIVITY PRO SKUPINY',name:'Pepe a Pipi',description:'Nabídka uvedená u chaty zahrnuje bumper ball, vodní atrakce a skákací hrady.',url:'https://www.pepeapipi.cz/',image:'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=900&q=85'},
    {kind:'LYŽOVÁNÍ A LETNÍ AKTIVITY',name:'Skiareál Plešivec',description:'Zimní areál s lanovkami; v létě nabízí trailpark, bobovou dráhu a stezky.',url:'https://www.plesivec.cz/',image:'https://d48-a.sdn.cz/d_48/c_img_QO_BC/lbeQZj.jpeg?fl=res%2C1200%2C900%2C1'},
    {kind:'NAUČNÁ STEZKA',name:'Božídarské rašeliniště',description:'3,2 km okruh po povalových chodnících v chráněné horské krajině.',url:'https://www.krusnehory.cz/cs/sport-a-relax/naucna-stezka-bozidarske-raseliniste-2103.html',image:'https://www.bozidar.cz/images/phocagallery/priroda/stezka_bozidarske_raseliniste/thumbs/phoca_thumb_l_raseliniste_2.jpg'},
    {kind:'HISTORICKÁ STEZKA',name:'Blatenský příkop',description:'Historický kanál a naučná trasa o délce přibližně 12 km.',url:'https://www.horni-blatna.cz/turista-1/blatensky-prikop/blatensky-prikop-231cs.html',image:'https://vary.rozhlas.cz/sites/default/files/styles/cro_16x9_tablet/public/images/95555d89bd84d6089f5b4c28337a6b46.jpg?itok=wF62qROs'},
    {kind:'RESTAURACE',name:'Restaurace Plešivec',description:'Česká kuchyně a prosklená terasa na Plešivci.',url:'https://www.plesivec.cz/restaurace/restaurace-plesivec-40/',image:'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=85'}
  ]
};
nearbyPlaces.kemp = nearbyPlaces['chata-1'];

const galleries = {
  'chata-1':['https://www.e-chalupy.cz/foto/pohled-od-jihu-5827-2451-410966.jpg','https://www.e-chalupy.cz/foto/zima-8750-5e48-410972.jpg','https://cdn.megau.eu/accommodations/5293/images/a5293-chata-pohoda-20231213-005849-4979.jpg','https://cdn.megau.eu/accommodations/5293/images/a5293-chata-pohoda-20231213-005849-4414.jpg','https://images.hauzi.com/700/jx/lrghdwjx.jpg','https://images.hauzi.com/700/5d/lrghdx5d.jpg'],
  'chata-2':['https://www.e-chalupy.cz/foto/pohled-od-jihu-v-lete-1fa1-62b9-553778.jpg','https://www.e-chalupy.cz/foto/pohled-od-jihu-v-lete-1fa1-4ed6-553778.jpg','https://cdn.megau.eu/accommodations/6896/images/a6896-chalupa-vetrov-20231213-010109-3298.jpg','https://www.chalupyachaty.cz/foto/1515/chalupa-vetrov-abertamy-1-7da2.jpg','https://www.eubytko.cz/systemfiles/article/image/1760444003pokoj-1-v-podkrovi-0da7.webp','https://www.krusnehory.cz/data/2023/01/i3-146-chalupa-vetrov.jpg'],
  'chata-3':['https://www.e-chalupy.cz/foto/org-216c374e129d5cd2-1526976780000-af5f-8b5e-945755.jpg','photo-1510798831971-661eb04b3739','photo-1448375240586-882707db888b','photo-1478131143081-80f7f84ca84d'],
  kemp:['photo-1478131143081-80f7f84ca84d','photo-1448375240586-882707db888b','photo-1510798831971-661eb04b3739','photo-1449158743715-0a90ebb6d2d8']
};
const photoUrl = (id, width = 1000) => id.startsWith('https://') ? id : `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

const app = document.querySelector('#app');
const homeMarkup = app.innerHTML;

function cardMarkup(place) {
  const category = place.type === 'camp' ? 'KEMP' : 'CHATA';
  return `<article class="place-card" data-type="${place.type}"><a href="#/misto/${place.id}" aria-label="Prohlédnout: ${place.name}"><div class="card-image"><img src="${place.image}" alt="${place.name} v české přírodě" loading="lazy"><span class="card-badge">${place.type === 'camp' ? 'CAMPEAK · HŘEBEČNÁ' : place.tag}</span><span class="card-arrow" aria-hidden="true">↗</span></div><div class="card-meta"><span class="card-location">${place.place}</span>${place.rating === '—' ? '' : `<span class="card-rating">★ ${place.rating} <span>${place.reviews}</span></span>`}</div><h3 class="card-title">${place.name}</h3><p class="card-desc">${place.short}</p></a></article>`;
}

function renderCards(filter = 'all') {
  const grid = document.querySelector('#places-grid');
  if (!grid) return;
  grid.innerHTML = places.filter(place => filter === 'all' || place.type === filter).map(cardMarkup).join('');
  prepareReveals();
}

function detailMarkup(place) {
  const photoAlt = `${place.name} – ubytování v oblasti ${place.place}`;
  const photos = galleries[place.id].map((id, index) => `<img src="${photoUrl(id, index === 0 ? 1400 : 700)}" alt="${place.name} – fotografie ${index + 1}" loading="lazy">`);
  const mapQuery = encodeURIComponent(place.address ? `${place.name}, ${place.address}, Czech Republic` : `${place.name}, Abertamy, Czech Republic`);
  const mapHref = place.mapUrl || `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
  const bookHref = place.type === 'camp' ? mapHref : place.booking;
  const bookText = place.type === 'camp' ? 'Zobrazit polohu kempu' : 'Ověřit dostupnost';
  const pricePanel = place.priceDetails
    ? `<p class="eyebrow">AKTUÁLNÍ CENA · ŘÍJEN 2026 · MIMOSEZÓNA</p><strong>${place.price}</strong><small>${place.priceNote}</small><p class="price-details">${place.priceDetails}</p><div class="season-rates"><span>CENY PODLE SEZÓNY</span>${place.seasonRates.map(([season, rate]) => `<p><b>${season}</b><i>${rate}</i></p>`).join('')}</div><a class="price-source" href="${place.booking}" target="_blank" rel="noopener noreferrer">Ceník a termíny ubytování ↗</a>`
    : `<p class="eyebrow">CAMPEAK · HŘEBEČNÁ</p><strong>Ceník bude doplněn</strong><small>Aktuální informace o pobytu získáte u provozovatele.</small>`;
  return `<section class="detail-page"><div class="detail-hero"><img src="${place.image}" alt="${photoAlt}"><div class="detail-title"><p class="eyebrow">${place.place.toUpperCase()} · ${place.type === 'camp' ? 'KEMP' : 'UBYTOVÁNÍ'}</p><h1>${place.name}</h1><p>${place.rating === '—' ? place.capacity : `★ ${place.rating} ${place.reviews} · ${place.capacity}`}</p></div></div><div class="detail-body"><div><a class="back-link" href="#/">← Zpět na nabídky</a><h2>Místo, kde můžete<br><em>zvolnit.</em></h2><p>${place.description}</p><div class="detail-chips"><span>${place.capacity}</span><span>${place.place.split(' · ')[0]}</span><span>Česká příroda</span></div><p>${place.address}</p><p>Rezervaci a aktuální dostupnost ověříte přímo u našeho rezervačního partnera.</p></div><aside class="booking-panel">${pricePanel}<a class="button button-dark" href="${bookHref}" target="_blank" rel="noopener noreferrer">${bookText} <span>↗</span></a></aside></div><section class="detail-gallery"><div class="section-heading"><div><p class="eyebrow"><span class="eyebrow-line"></span> FOTOGALERIE OBJEKTU</p><h2>${place.name}<em> · fotogalerie</em></h2></div><span class="gallery-count">01 / ${String(photos.length).padStart(2, '0')}</span></div><div class="gallery-grid">${photos.map((photo, i) => `<button class="gallery-photo${i === 0 ? ' gallery-main' : ''}" data-photo-index="${i}" aria-label="Fotografie ${i + 1} z ${photos.length}">${photo}</button>`).join('')}</div></section><section class="location-section"><div class="location-copy"><p class="eyebrow"><span class="eyebrow-line"></span> ADRESA A PŘÍJEZD</p><h2>${place.name}</h2><p>${place.address || 'Přesná adresa bude doplněna'} · ${place.place}</p><a class="text-link" href="https://www.google.com/maps/search/?api=1&query=${mapQuery}" target="_blank" rel="noopener noreferrer">Otevřít adresu v Google Maps <span>↗</span></a></div><div class="map-frame"><iframe title="Mapa: ${place.name}, ${place.address || 'Abertamy'}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?q=${mapQuery}&output=embed"></iframe><span class="map-note">${place.address ? 'PŘESNÁ ADRESA UBYTOVÁNÍ' : 'PŘESNOU ADRESU DOPLNÍME'}</span></div></section>${place.type === 'camp' ? '<section class="camera-section"><div class="camera-copy"><span class="camera-icon">◉</span><div><p class="eyebrow">CAMPEAK · HŘEBEČNÁ</p><h3>Živý přenos z kempu</h3><p>Obraz z kamery bude doplněn později.</p></div></div><div class="camera-frame"><img src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=80" alt="Ilustrační lesní fotografie; živý přenos bude doplněn"><div class="camera-overlay"><span class="camera-status"><i></i> PŘIPRAVUJEME KAMERU</span></div></div></section>' : ''}</section>`;
}

function route() {
  const match = location.hash.match(/^#\/misto\/([\w-]+)/);
  if (!match) {
    app.innerHTML = homeMarkup;
    document.title = 'Krušnohorské Chaty | Abertamy a Hřebečná';
    bindHome();
    prepareReveals();
    return;
  }
  const place = places.find(item => item.id === match[1]);
  if (!place) { location.hash = '#/'; return; }
  app.innerHTML = detailMarkup(place);
  document.title = `${place.name} — Krušnohorské Chaty`;
  const detailColumn = document.querySelector('.detail-body > div');
  const detailParagraphs = detailColumn?.querySelectorAll(':scope > p');
  const chips = document.querySelector('.detail-chips');
  const mapLink = document.querySelector('.location-copy .text-link');
  const copy = propertyCopy[place.id];
  const detailHeading = document.querySelector('.detail-body h2');
  const mapHeading = document.querySelector('.location-copy h2');
  const galleryHeading = document.querySelector('.detail-gallery h2');
  const galleryEyebrow = document.querySelector('.detail-gallery .eyebrow');
  const locationEyebrow = document.querySelector('.location-copy .eyebrow');
  const bookingLabel = document.querySelector('.booking-panel .eyebrow');
  const cameraEyebrow = document.querySelector('.camera-copy .eyebrow');
  if (copy && detailHeading) detailHeading.innerHTML = copy.heading;
  if (copy && mapHeading) mapHeading.innerHTML = copy.mapHeading;
  if (galleryHeading) galleryHeading.innerHTML = `${place.name}<em> · fotogalerie</em>`;
  if (galleryEyebrow) galleryEyebrow.textContent = 'FOTOGALERIE OBJEKTU';
  if (locationEyebrow) locationEyebrow.textContent = 'ADRESA A PŘÍJEZD';
  if (bookingLabel) bookingLabel.textContent = place.type === 'camp' ? 'ADRESA CAMPEAKU' : 'NABÍDKA NA E-CHALUPY';
  if (cameraEyebrow) cameraEyebrow.textContent = 'CAMPEAK · HŘEBEČNÁ';
  if (mapLink && place.mapUrl) mapLink.href = place.mapUrl;
  if (mapLink) mapLink.innerHTML = 'Otevřít adresu v Google Maps <span>↗</span>';
  if (chips) chips.innerHTML = [place.capacity, ...(place.features || [])].map(item => `<span>${item}</span>`).join('');
  if (detailParagraphs?.[1]) detailParagraphs[1].textContent = place.address || 'Adresa bude doplněna';
  if (detailParagraphs?.[2]) detailParagraphs[2].textContent = place.type === 'camp' ? 'Campeak sdílí tuto adresu s Chatou Pohoda.' : 'Popis kapacity a vybavení podle nabídky e-chalupy.cz.';
  if (place.type === 'cabin' && detailParagraphs?.[2]) {
    const source = document.createElement('a');
    source.className = 'source-link';
    source.href = place.booking;
    source.target = '_blank';
    source.rel = 'noopener noreferrer';
    source.textContent = 'Zdroj informací a rezervace: e-chalupy.cz ↗';
    detailParagraphs[2].after(source);
  }
  const galleryGrid = document.querySelector('.gallery-grid');
  if (galleryGrid) {
    const caption = document.createElement('p');
    caption.className = 'gallery-source';
    caption.textContent = place.type === 'cabin' ? 'Fotografie z nabídek ubytování doplňují ilustrační snímky.' : 'Ilustrační fotografie. Vlastní fotografie kempu lze doplnit kdykoli.';
    galleryGrid.after(caption);
  }
  const nearby = nearbyPlaces[place.id] || [];
  const locationSection = document.querySelector('.location-section');
  if (nearby.length && locationSection) {
    const nearbySection = document.createElement('section');
    nearbySection.className = 'nearby-section';
    nearbySection.innerHTML = `<div class="section-heading"><div><p class="eyebrow"><span class="eyebrow-line"></span> V OKOLÍ ${place.name.toLocaleUpperCase('cs-CZ')}</p><h2>Výlety, lyžování<br /><em>a občerstvení.</em></h2></div></div><div class="nearby-grid">${nearby.map((item, index) => `<article class="nearby-card" style="--nearby-delay:${index * 80}ms"><a class="nearby-photo" href="${item.url}" target="_blank" rel="noopener noreferrer" aria-label="${item.name} – otevřít web"><img src="${item.image}" alt="${item.name}" loading="lazy"></a><div class="nearby-info"><span class="nearby-kind">${item.kind}</span><h3>${item.name}</h3><p>${item.description}</p><a class="nearby-link" href="${item.url}" target="_blank" rel="noopener noreferrer">Otevřít web <span>↗</span></a></div></article>`).join('')}</div>`;
    locationSection.before(nearbySection);
  }
  prepareReveals();
  const galleryButtons = document.querySelectorAll('.gallery-photo');
  galleryButtons.forEach(button => button.addEventListener('click', () => {
    galleryButtons.forEach(item => item.classList.remove('selected'));
    button.classList.add('selected');
    const count = document.querySelector('.gallery-count');
    if (count) count.textContent = `${String(Number(button.dataset.photoIndex) + 1).padStart(2, '0')} / ${String(galleryButtons.length).padStart(2, '0')}`;
  }));
  window.scrollTo(0, 0);
}

function bindHome() {
  const homeGrid = document.querySelector('#places-grid');
  if (!homeGrid) return;
  renderCards();
  document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
    document.querySelector('.filter.active')?.classList.remove('active');
    button.classList.add('active');
    renderCards(button.dataset.filter);
  }));
}

document.addEventListener('click', event => {
  const toggle = event.target.closest('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  const menuButton = document.querySelector('.menu-toggle');
  if (!nav || !menuButton) return;
  if (toggle) {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Zavřít menu' : 'Otevřít menu');
    return;
  }
  if (event.target.closest('.main-nav a')) {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Otevřít menu');
  }
});

function prepareReveals() {
  const revealNodes = document.querySelectorAll('#app .intro, #app .places, #app .quote-band, #app .camp-feature, #app .camera-section, #app .closing-cta, #app .detail-body, #app .detail-gallery, #app .nearby-section, #app .location-section');
  revealNodes.forEach(node => node.classList.add('reveal-on-scroll'));
  document.querySelectorAll('.place-card').forEach((card, index) => {
    card.classList.add('reveal-on-scroll');
    card.style.setProperty('--reveal-delay', `${Math.min(index * 90, 360)}ms`);
  });
  if (!('IntersectionObserver' in window)) {
    revealNodes.forEach(node => node.classList.add('is-visible'));
    document.querySelectorAll('.place-card').forEach(node => node.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  }), {threshold: .12, rootMargin: '0px 0px -35px 0px'});
  document.querySelectorAll('.reveal-on-scroll:not(.is-visible)').forEach(node => observer.observe(node));
}

const progress = document.querySelector('.scroll-progress');
let progressQueued = false;
window.addEventListener('scroll', () => {
  if (progressQueued) return;
  progressQueued = true;
  requestAnimationFrame(() => {
    const max = document.documentElement.scrollHeight - innerHeight;
    progress?.style.setProperty('--scroll', `${max > 0 ? scrollY / max * 100 : 0}%`);
    progressQueued = false;
  });
}, {passive: true});

document.querySelector('.hero')?.addEventListener('pointermove', event => {
  const bounds = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty('--pointer-x', `${event.clientX - bounds.left}px`);
  event.currentTarget.style.setProperty('--pointer-y', `${event.clientY - bounds.top}px`);
});

function playFirstVisitIntro() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  try { if (sessionStorage.getItem('krusnohorske-chaty-intro')) return; } catch {}
  const intro = document.createElement('div');
  intro.className = 'site-intro';
  intro.setAttribute('role', 'dialog');
  intro.setAttribute('aria-label', 'Krušnohorské Chaty');
  intro.innerHTML = `<button class="intro-skip" type="button">Přeskočit <span>↗</span></button><div class="intro-core"><span class="intro-kicker">KRUŠNÉ HORY · ABERTAMY · HŘEBEČNÁ</span><svg class="intro-mountains" viewBox="0 0 680 180" aria-hidden="true"><path d="M10 160 145 52l58 48L318 18l126 121 74-69 152 90"/><path d="m97 160 80-63 43 35 88-77 86 83 59-55 114 77"/></svg><h1>Krušnohorské<br /><em>Chaty</em></h1><p>Chata Pohoda · Chalupa Větrov · Chata Vyhlídka · Campeak</p><div class="intro-meter"><span></span></div></div>`;
  document.body.append(intro);
  let finished = false;
  const finish = () => {
    if (finished) return;
    finished = true;
    intro.classList.add('intro-exit');
    try { sessionStorage.setItem('krusnohorské-chaty-intro', '1'); } catch {}
    setTimeout(() => intro.remove(), 650);
  };
  intro.querySelector('.intro-skip').addEventListener('click', finish);
  setTimeout(finish, 2600);
}

window.addEventListener('hashchange', route);
playFirstVisitIntro();
route();
