// ====== DATA MASTER (alias game) ======
const PRESETS = {
  // PG Soft
  mw: "Mahjong Ways", mw2: "Mahjong Ways 2", ln: "Lucky Neko", wb: "Wild Bandito",
  sp: "Starlight Princess", sp1000: "Starlight Princess 1000", wf: "Wild Fireworks",
  wn: "Win Win Fish Prawn Crab", wm: "Wild Coaster", dw: "Dragon Tiger Luck",
  qh: "Queen of Bounty", hown: "Heist Stakes", jg: "Journey to the Wealth",
  // Pragmatic
  go: "Gates of Olympus", go2: "Gates of Olympus 1000", sb: "Sweet Bonanza",
  sbo: "Sweet Bonanza Xmas", sbr: "Sugar Rush", db: "Dog House", dbm: "Dog House Megaways",
  bn: "Bonanza Gold", wp: "Wild West Gold", wpm: "Wild West Gold Megaways",
  jj: "Joker Jewels", tf: "5 Lions Megaways", st: "Starlight Christmas",
  bbf: "Bigger Bass Bonanza", bb: "Big Bass Bonanza", bbs: "Big Bass Splash",
  bba: "Big Bass Amazon Xtreme",
  // Lain-lain
  bh: "Brothers Kingdom", gd: "Gold Panther", koi: "Koi Gate", fa: "Fa Cai Shen",
  lm: "Lucky Twins", mm: "Mega Moolah", q9mw: "Marvelous Wonderland", q9fh: "Fa Hong",
  ds: "Dead or a Wild", mmx: "Money Train 3", wby: "Wild Bounty", wbh: "Wild Bounty Hunters",
  st2: "Starburst XXXtreme", sbt: "Starburst", az: "Aztec Gems", azd: "Aztec Gems Deluxe",
  sk: "Sugar Bonanza", bj: "Blackjack", pk: "Poker", rlt: "Roulette",
  // Mobile
  ml: "Mobile Legends", pubg: "PUBG Mobile",
};
const NAME_TO_ALIAS = Object.fromEntries(Object.entries(PRESETS).map(([a,n]) => [n.toLowerCase(), a]));

// ====== UTIL ======
const rand = (min,max)=>Math.floor(Math.random()*(max-min+1))+min;
const pick = arr => arr[Math.floor(Math.random()*arr.length)];
const shuffle = arr => { const a=arr.slice(); for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]} return a; };
const take = (arr,n)=>shuffle(arr).slice(0,Math.min(n,arr.length));
const limit = (s,n=100)=>s.length>n ? s.slice(0, n-1)+'…' : s; // limiter judul 100 char

// ====== VARIANTS ======
const titleVariants = [
  "Rajacuan - Jadwal Live {DATE} Mabar Seru {GAME} Tergacor",
  "Rajacuan Live {DATE} - Mabar Bareng Komunitas {GAME}",
  "Rajacuan Gaspol {GAME} {DATE} - Mabar Seru Sepanjang Hari",
  "Rajacuan {DATE} - Mabar {GAME} Full Hiburan & Tantangan",
  "Rajacuan - Main {GAME} {DATE} Bareng Viewers Setia",
  "Rajacuan {DATE} - Live Mabar {GAME} + Tips & Trik Seru",
  "Rajacuan Hadir Lagi {DATE} - Mabar {GAME} Gak Pake Lama",
  "Rajacuan {DATE} - Turnamen Mini {GAME} Bareng Komunitas",
  "Rajacuan - Live Gaming {GAME} {DATE} Full Aksi & Strategi",
  "Rajacuan {DATE} - Main {GAME} Sampai Max Level",
  "Rajacuan - Push Rank {GAME} {DATE} Bareng Squad",
  "Rajacuan {DATE} - Live Seru {GAME} Mode Gokil",
  "Rajacuan - Gameplay {GAME} {DATE} Paling Menegangkan",
  "Rajacuan {DATE} - Mabar {GAME} ala Turnamen",
  "Rajacuan - Santai Sore Mabar {GAME} {DATE}",
  "Rajacuan {DATE} - Hunting Momen Epic di {GAME}",
  "Rajacuan - Live {GAME} {DATE} dengan Strategi Baru",
  "Rajacuan {DATE} - Main {GAME} Sambil Interaksi Viewers",
  "Rajacuan - Streaming {GAME} {DATE} Bikin Nagih",
  "Rajacuan {DATE} - Mabar {GAME} Bawa Pulang Kemenangan",
  "Rajacuan - Live {GAME} {DATE} Versi Fun Match",
  "Rajacuan {DATE} - Coba Mode Unik di {GAME}",
  "Rajacuan - Gas Main {GAME} {DATE} Sampai Habis",
  "Rajacuan {DATE} - Main {GAME} Sambil Share Tips",
  "Rajacuan - {GAME} {DATE} Full Gameplay + Chat Seru",
  "Rajacuan {DATE} - Mabar {GAME} Bareng Player Senior",
  "Rajacuan - Main {GAME} {DATE} Mode Full Power",
  "Rajacuan {DATE} - Buktikan Skill di {GAME}",
  "Rajacuan - Live {GAME} {DATE} Gaya Santai Tapi Menang",
  "Rajacuan {DATE} - Main {GAME} dengan Formasi Baru",
  "Rajacuan - Momen Epic {GAME} {DATE} Versi Live",
  "Rajacuan {DATE} - Main {GAME} All Out Sampai Malam",
  "Rajacuan - Mabar {GAME} {DATE} Anti Garing",
  "Rajacuan {DATE} - Gameplay {GAME} Bikin Ketagihan",
  "Rajacuan - Gas {GAME} {DATE} Sampai Menang Besar",
  "Rajacuan {DATE} - Live {GAME} Santai & Seru",
  "Rajacuan - Seru-seruan {GAME} {DATE} Bareng Teman",
  "Rajacuan {DATE} - Push Mabar {GAME} Anti Stop",
  "Rajacuan - Live {GAME} {DATE} Versi Gaming Community",
];

const ctaLines = [
  "Login sekarang dan rasakan sensasinya di {LINK}",
  "Join sekarang juga lewat {LINK} dan mulai petualanganmu",
  "Klik {LINK} untuk langsung gabung dan main bareng",
  "Daftar gratis sekarang di {LINK} dan nikmati bonusnya",
  "Main bareng kita di {LINK}, jangan sampai ketinggalan",
  "Buktikan skill lo sekarang di {LINK}",
  "Gas main sekarang lewat {LINK} sebelum ketinggalan momen",
  "Ikut mabar hari ini di {LINK}, seru dan menantang",
  "Mulai seru-seruan bareng di {LINK}",
  "Cek {LINK} untuk info lengkap dan langsung join",
  "Rasakan keseruan maksimal di {LINK}",
  "Mainkan game favoritmu sekarang di {LINK}",
  "Klik {LINK} untuk aksi tanpa batas",
  "Yuk gabung bareng komunitas di {LINK}",
  "Main kapan saja, di mana saja lewat {LINK}",
  "Tantang temanmu sekarang di {LINK}",
  "Ayo gabung sekarang di {LINK}, gratis dan seru",
  "Mulai perjalanan gaming lo di {LINK}",
  "Ikutan event live hari ini di {LINK}",
  "Buka {LINK} dan raih kemenanganmu sekarang",
  "Gabung sekarang dan buktikan kemampuanmu di {LINK}",
  "Cek jadwal dan langsung main di {LINK}",
  "Gaspol bareng kita lewat {LINK}",
  "Waktunya main dan menang di {LINK}",
  "Ayo bawa tim lo ke {LINK} sekarang",
  "Klik dan main bareng di {LINK} hari ini",
  "Main tanpa batas, cuma di {LINK}",
  "Langsung gas ke {LINK} dan join mabar",
  "Nikmati aksi seru bersama di {LINK}",
  "Main bareng Rajacuan? Klik {LINK} sekarang",
  "Rasakan vibe turnamen di {LINK}",
  "Jangan tunggu lagi, gabung di {LINK} sekarang",
  "Mulai sekarang di {LINK}, gratis dan mudah",
  "Klik {LINK} untuk ikut live mabar seru",
  "Main bareng komunitas gaming terbaik di {LINK}",
  "Ikutan challenge harian di {LINK}",
  "Masuk dan mulai aksi gaming lo di {LINK}",
  "Gas bareng tim di {LINK} sekarang juga",
  "Buka {LINK} dan nikmati hiburan gaming top",
];

const benefitsPool = [
  "Event eksklusif dan promo baru setiap minggu",
  "Hadiah besar dan bonus harian untuk semua pemain",
  "Komunitas solid, aktif, dan ramah pemain baru",
  "Game berjalan lancar tanpa lag dan bug",
  "Tersedia berbagai mode permainan seru dan menantang",
  "Support 24 jam siap membantu kapan saja",
  "Turnamen berhadiah jutaan setiap bulan",
  "Gameplay adil tanpa manipulasi hasil",
  "Bisa mabar bareng komunitas kapan saja",
  "Update game rutin dengan fitur baru",
  "Banyak pilihan game populer yang lagi hype",
  "Sistem keamanan akun tingkat tinggi",
  "Proses deposit & withdraw cepat tanpa ribet",
  "Tersedia leaderboard untuk adu skill",
  "Hadiah kejutan untuk pemain aktif",
  "Program referral dengan komisi menarik",
  "Event komunitas offline & online seru",
  "Mini game santai untuk isi waktu tunggu",
  "Bonus login harian tanpa syarat",
  "Sistem matchmaking adil untuk semua level",
  "Challenge mingguan dengan hadiah spesial",
  "Skin dan item eksklusif untuk pemain aktif",
  "Koneksi stabil untuk pengalaman bermain mulus",
  "Bisa ikut voting fitur atau event baru",
  "Dukungan multi-platform: PC, Mobile, Tablet",
  "Siaran live interaktif dengan host seru",
  "Giveaway rutin untuk penonton live",
  "Mabar private room bareng influencer gaming",
  "Statistik permainan lengkap untuk tracking progress",
  "Tantangan rahasia yang memicu adrenalin",
  "Reward tambahan untuk pemain loyal",
  "Sistem ranking transparan dan kompetitif",
  "Fitur replay untuk analisa permainan",
  "Event kolaborasi dengan game populer lainnya",
  "Hadiah langsung untuk pencapaian tertentu",
  "Bisa custom avatar dan profil unik",
  "Pilihan bahasa lokal lengkap untuk kenyamanan",
  "Notifikasi real-time untuk event penting",
  "Sistem anti-cheat canggih untuk fair play",
];

// 30 deskripsi
const descriptionBlocks = [
`Hari ini kita mabar seru bareng di Rajacuan!
Siapkan strategi terbaik, kumpulkan kemenangan, dan rasakan keseruan bermain di {GAME} yang lagi panas.
Suasana live kali ini bakal bikin tegang sekaligus seru, mirip turnamen mabar komunitas yang penuh kejutan.`,
`Rajacuan kembali live {DATE}!
{GAME} lagi ramai dan siap bikin momen mabar makin seru.
Jangan ketinggalan tiap putaran yang penuh kejutan — vibe-nya seperti scrim komunitas kompetitif.`,
`Mabar bareng Rajacuan sekarang!
{GAME} lagi hot, cocok buat seru-seruan sambil adu strategi.
Live bakal penuh aksi dan momentum kemenangan yang sayang dilewatkan.`,
`Kita gas {GAME} {DATE} dengan format mabar santai ala komunitas.
Tujuan kita simple: have fun, build momentum, dan push kemenangan bareng-bareng.
Kalem tapi tajam — itu gaya main kita di Rajacuan.`,
`Live {GAME} {DATE} di Rajacuan siap kasih hiburan plus tantangan.
Nikmati serunya gameplay, cek strategi baru, dan ikutan interaksi chat langsung dengan player lainnya.`,
`Rajacuan mengundang semua player untuk mabar {GAME} {DATE}.
Rasakan atmosfer seperti kompetisi resmi tapi dengan suasana santai dan friendly.`,
`{GAME} hari ini lagi meta banget!
Di Rajacuan, kita bakal main bareng dan bahas trik-trik kecil yang bikin gameplay makin solid.`,
`Siapa yang siap bawa pulang kemenangan hari ini?
Rajacuan live {GAME} {DATE}, pastikan lo ikut dari awal sampe akhir.`,
`Main bareng Rajacuan itu selalu beda.
{GAME} kali ini bakal kita bawa ke level yang lebih seru dengan strategi baru yang belum pernah dibahas.`,
`Rajacuan siap nemenin sore lo dengan mabar {GAME}.
Ngobrol, main, dan nikmatin momen bareng komunitas tanpa tekanan.`,
`Saatnya kita unjuk gigi di {GAME} {DATE}.
Rajacuan bakal live, siap kasih momen epic dan tawa ngakak bareng.`,
`{GAME} hari ini di Rajacuan nggak cuma soal menang.
Ini tentang kebersamaan dan keseruan mabar bareng orang-orang gokil di komunitas.`,
`Rajacuan live lagi {DATE}!
{GAME} bakal jadi arena kita uji mekanik sambil nyari momen lucu di tengah game.`,
`Gaspol {GAME} di Rajacuan!
Live {DATE} ini bakal penuh kejutan dan strategi out of the box.`,
`Rajacuan hadir bawa vibe turnamen di mabar {GAME}.
Persiapkan mental dan koneksi internet, ini bakal seru banget.`,
`Hari ini kita all-in di {GAME}.
Rajacuan live {DATE} bakal jadi cerita seru yang lo nggak mau skip.`,
`Ngopi sore sambil mabar {GAME} di Rajacuan, itu baru definisi healing yang bener.
Join live kita {DATE}!`,
`Rajacuan ngajak semua player untuk gabung di live {GAME}.
Santai tapi tetep kompetitif, cocok buat semua level player.`,
`Biarpun santai, {GAME} hari ini di Rajacuan bakal bikin deg-degan.
Ikuti setiap match biar nggak ketinggalan momen epic.`,
`{GAME} {DATE} ini spesial karena kita bakal coba strategi unik.
Rajacuan siap buktiin kalau fun dan menang bisa jalan bareng.`,
`Rajacuan hadir lagi, bawa energi positif di mabar {GAME}.
Persiapkan jempol lo, karena ini bakal intense.`,
`Live kali ini kita fokus di teamwork dan komunikasi.
{GAME} di Rajacuan {DATE} akan jadi pelajaran dan hiburan.`,
`Nggak cuma gameplay, Rajacuan {GAME} {DATE} juga bakal ada sesi Q&A santai sama komunitas.`,
`Rajacuan siap bawain suasana ala arena pro player ke mabar {GAME}.
Cobain vibe kompetitif yang tetep fun.`,
`{GAME} di Rajacuan {DATE} cocok banget buat lo yang cari hiburan after kerja.
Santai, interaktif, dan penuh aksi.`,
`Rajacuan bakal eksperimen strategi gila-gilaan di {GAME}.
Siap-siap ketawa sekaligus terkejut liat hasilnya.`,
`Hari ini kita main {GAME} di Rajacuan sambil bagi tips rahasia.
Biar semua bisa improve skill bareng-bareng.`,
`{GAME} {DATE} di Rajacuan bukan cuma main, tapi juga nge-build chemistry bareng viewer.`,
`Rajacuan live lagi, kali ini kita main {GAME} sambil push target harian.
Siapa tau ada bonus kejutan di akhir.`,
`Mabar di Rajacuan itu selalu unpredictable.
{GAME} kali ini bakal buktiin kenapa komunitas ini nggak pernah bosen.`,
`Rajacuan {DATE} siap kasih pengalaman mabar {GAME} yang beda dari biasanya.
Jangan sampe kelewatan!`,
];

// Hashtags
const rajacuanCoreHashtags = ['#Rajacuan','#MabarRajacuan','#RajacuanLive','#Rajacuan2025','#RajacuanGacor','#MabarHariIni','#GameOnlineSeru'];
const hashtagsPool = [
  "#MobileLegends","#MLBB","#MLBBIndonesia","#MLBBEsports","#MLBBMabar",
  "#MobileLegendsBangBang","#MLBBGameplay","#MLBBLive","#MLBBPro","#MLBBMatch",
  "#MabarMLBB","#MLBBHighlight","#MLBBPushRank","#MLBBFans","#MLBBStrategy",
  "#MLBBUpdate","#MLBBKompetitif","#MLBBSquad","#MLBBTurnamen","#MLBBSeru",
  "#PUBGMobile","#PUBGM","#PUBGIndonesia","#PUBGMobileID","#PUBGMobileLive",
  "#PUBGGameplay","#PUBGSquad","#PUBGPushRank","#PUBGPro","#PUBGMatch",
  "#PUBGTurnamen","#PUBGHighlight","#PUBGEsports","#PUBGKompetitif","#PUBGSeru",
  "#PUBGMobileTips","#PUBGMabar","#PUBGUpdate","#PUBGLiveStreaming","#PUBGLovers",
  "#GameMobile","#MobileGaming","#GamingIndonesia","#MabarOnline","#SquadGaming",
  "#GameLive","#GameEsports","#ProPlayer","#EsportsIndonesia","#KomunitasGaming",
];

// ====== BUILDERS ======
function resolveGame(input){
  if(!input) return null;
  const key = input.trim();
  if(PRESETS[key.toLowerCase()]) return PRESETS[key.toLowerCase()];
  if(NAME_TO_ALIAS[key.toLowerCase()]) return PRESETS[NAME_TO_ALIAS[key.toLowerCase()]];
  const hit = Object.values(PRESETS).find(n=>n.toLowerCase().includes(key.toLowerCase()));
  return hit || key;
}
function buildHashtags(game,mix=true){
  const g=game.replace(/\s+/g,'');
  const gameTags=[`#${g}`,`#${g}Tergacor`];
  const pickedCore=take(rajacuanCoreHashtags, rand(3,5));
  const pickedPool=mix?take(hashtagsPool, rand(4,7)):[];
  return shuffle([...pickedCore, ...gameTags, ...pickedPool]).slice(0, rand(7,10));
}
function buildTags(game,date){
  const g=game.toLowerCase();
  const base=[
    'rajacuan','rajacuan mabar',`rajacuan live ${date.toLowerCase()}`,`rajacuan ${g}`,'rajacuan gacor',
    'mabar rajacuan','jadwal live rajacuan','rajacuan terbaru','rajacuan resmi','rajacuan link',
    'rajacuan game seru',`rajacuan ${g} tergacor`,`${g} gacor`,`${g} live`,
    'mabar game online','rajacuan kompetitif','rajacuan turnamen','rajacuan main bareng',
    `live ${g} rajacuan`,`streaming ${g} rajacuan`,`mabar ${g} hari ini`,
  ];
  return take(base, rand(12,18));
}
function buildDescription({game,date,link,forceHybrid}){
  const mode = forceHybrid ? 'hybrid' : pick(['single','combo','hybrid']);
  const cta = pick(ctaLines).replace('{LINK}', link);
  const benefits = take(benefitsPool, rand(3,5)).map(b=>`- ${b}`).join('\n');
  let body='';
  if(mode==='single'){
    body = pick(descriptionBlocks);
  }else if(mode==='combo'){
    const p1 = pick(descriptionBlocks); let p2 = pick(descriptionBlocks); let t=0;
    while(p2===p1 && t++<5) p2 = pick(descriptionBlocks);
    body = `${p1}\n\n${p2}`;
  }else{
    const header = `Rajacuan - Jadwal Live {DATE} Mabar Seru {GAME} Tergacor`;
    body = `${header}\n\n${pick(descriptionBlocks)}`;
  }
  return body.replaceAll('{GAME}',game).replaceAll('{DATE}',date) + `\n\n${cta}\n\nKenapa main di Rajacuan:\n${benefits}`;
}
function generatePack({game,date,link,mixHashtag,forceHybrid}){
  let title = pick(titleVariants).replace('{GAME}',game).replace('{DATE}',date);
  title = limit(title, 100); // limit judul
  const desc = buildDescription({game,date,link,forceHybrid});
  const hashtags = buildHashtags(game, mixHashtag);
  const tags = buildTags(game, date);
  return { title, desc, hashtags, tags };
}

// ====== UI WIRING ======
const el = sel=>document.querySelector(sel);
const outEl = el('#out'); const statusEl = el('#status'); const aliasBox = el('#aliasBox');

// Save/Load preferences
function savePrefs(){
  const data = {
    game: el('#inpGame').value,
    date: el('#inpDate').value,
    link: el('#inpLink').value,
    count: el('#inpCount').value,
    mix: el('#chkMLPUBG').checked,
    hybrid: el('#chkHybrid').checked,
  };
  localStorage.setItem('rjcPrefs', JSON.stringify(data));
}
function loadPrefs(){
  try{
    const p = JSON.parse(localStorage.getItem('rjcPrefs')||'{}');
    if(p.game) el('#inpGame').value = p.game;
    if(p.date) el('#inpDate').value = p.date;
    if(p.link) el('#inpLink').value = p.link;
    if(p.count) el('#inpCount').value = p.count;
    if(typeof p.mix==='boolean') el('#chkMLPUBG').checked = p.mix;
    if(typeof p.hybrid==='boolean') el('#chkHybrid').checked = p.hybrid;
  }catch(e){}
}
window.addEventListener('load', loadPrefs);

// Alias panel
el('#btnList').onclick = ()=>{
  aliasBox.style.display = aliasBox.style.display==='none' ? 'block' : 'none';
  const list = Object.entries(PRESETS).sort((a,b)=>a[1].localeCompare(b[1]))
    .map(([al,nm])=>`<code>${al}</code> — ${nm}`).join('<br>');
  aliasBox.innerHTML = `<h3 style="margin-top:0">Alias Game</h3><div class="mono">${list}</div>`;
};

// Clear & Copy All
el('#btnClear').onclick = ()=>{ outEl.innerHTML=''; statusEl.textContent='Output dibersihkan.'; };
el('#btnCopyAll').onclick = ()=>{
  const text = [...outEl.querySelectorAll('.mono')].map(n=>n.textContent).join('\n');
  navigator.clipboard.writeText(text).then(()=>statusEl.textContent='Semua output disalin.');
};

// Export .txt
el('#btnExport').onclick = ()=>{
  const text = [...outEl.querySelectorAll('.mono')].map(n=>n.textContent).join('\n');
  if(!text.trim()){ statusEl.textContent='Belum ada output.'; return; }
  const blob = new Blob([text],{type:'text/plain;charset=utf-8'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href = url; a.download = 'rjc-pack.txt'; a.click();
  URL.revokeObjectURL(url);
};

// Export .csv
el('#btnExportCSV').onclick = ()=>{
  const cards = [...outEl.querySelectorAll('.item')];
  if(!cards.length){ statusEl.textContent='Belum ada output.'; return; }
  const rows = cards.map((card,i)=>{
    const title = card.querySelector('[id^="title-"]').textContent.replace(/"/g,'""');
    const desc  = card.querySelector('[id^="desc-"]').textContent.replace(/"/g,'""');
    const hash  = card.querySelector('[id^="hash-"]').textContent.replace(/"/g,'""');
    const tags  = card.querySelector('[id^="tags-"]').textContent.replace(/"/g,'""');
    return `${i+1},"${title}","${desc}","${hash}","${tags}"`;
  });
  const header = 'index,title,description,hashtags,tags';
  const csv = [header, ...rows].join('\n');
  const blob = new Blob([csv], {type:'text/csv;charset=utf-8'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href = url; a.download = 'rjc-pack.csv'; a.click();
  URL.revokeObjectURL(url);
};

// Generate (single view + copy per-bagian)
el('#btnGenerate').onclick = ()=>{
  const gRaw = el('#inpGame').value.trim();
  const date = el('#inpDate').value.trim() || 'Hari Ini';
  const link = el('#inpLink').value.trim() || 'https://www.huntsvilleskiclub.org/';
  const num = Math.max(1, parseInt(el('#inpCount').value||'1',10));
  const mixHashtag = el('#chkMLPUBG').checked;
  const forceHybrid = el('#chkHybrid').checked;

  if(!gRaw){ statusEl.textContent='Isi Game dulu (alias atau nama).'; return; }
  const game = resolveGame(gRaw);
  statusEl.textContent = 'Generating...';

  outEl.innerHTML='';
  const blocks=[];

  for(let i=0;i<num;i++){
    const pack = generatePack({game,date,link,mixHashtag,forceHybrid});

    const copyAllText =
`Judul:
${pack.title}

Deskripsi:
${pack.desc}

Hashtag:
${pack.hashtags.join(' ')}

Tags (CSV):
${pack.tags.join(', ')}`;

    const card = document.createElement('div');
    card.className = 'item';
    card.innerHTML = `
      <div class="row" style="justify-content:space-between">
        <h3>Variasi #${i+1}</h3>
        <div class="row">
          <button class="btn" data-copy="title">Copy Title</button>
          <button class="btn" data-copy="desc">Copy Desc</button>
          <button class="btn" data-copy="hash">Copy Hashtags</button>
          <button class="btn" data-copy="tags">Copy Tags</button>
          <button class="btn ok" data-copy="all">Copy All</button>
        </div>
      </div>
      <div class="sep"></div>
      <label>Judul</label>
      <div class="mono" id="title-${i}">${pack.title}</div>
      <div class="sep"></div>
      <label>Deskripsi</label>
      <div class="mono" id="desc-${i}">${pack.desc}</div>
      <div class="sep"></div>
      <label>Hashtag</label>
      <div class="mono" id="hash-${i}">${pack.hashtags.join(' ')}</div>
      <div class="sep"></div>
      <label>Tags (CSV)</label>
      <div class="mono" id="tags-${i}">${pack.tags.join(', ')}</div>
    `;

    card.querySelectorAll('[data-copy]').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        let text=''; const type=btn.getAttribute('data-copy');
        if(type==='title') text = card.querySelector(`#title-${i}`).textContent;
        else if(type==='desc') text = card.querySelector(`#desc-${i}`).textContent;
        else if(type==='hash') text = card.querySelector(`#hash-${i}`).textContent;
        else if(type==='tags') text = card.querySelector(`#tags-${i}`).textContent;
        else if(type==='all') text = copyAllText;
        navigator.clipboard.writeText(text).then(()=>{ statusEl.textContent='Disalin.'; savePrefs(); });
      });
    });

    outEl.appendChild(card);
    blocks.push(copyAllText);
  }

  window.__lastOutput = blocks.join('\n\n');
  statusEl.textContent = `Generated ${num} variasi untuk: ${game}`;
  savePrefs();
};
