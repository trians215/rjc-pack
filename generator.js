/* ====== UTIL ====== */
const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const shuffle = (arr) => { const a=arr.slice(); for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]} return a; };
const take = (arr, n) => shuffle(arr).slice(0, Math.min(n, arr.length));
const limit = (s, n=100) => s.length > n ? s.slice(0, n-1) + '…' : s;
const slugify = s => s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');

/* ====== YOUTUBE MODE (dari versi sebelumnya, ringkas) ====== */
const PRESETS={mw:"Mahjong Ways",mw2:"Mahjong Ways 2",ln:"Lucky Neko",wb:"Wild Bandito",sp:"Starlight Princess",sp1000:"Starlight Princess 1000",wf:"Wild Fireworks",wn:"Win Win Fish Prawn Crab",wm:"Wild Coaster",dw:"Dragon Tiger Luck",qh:"Queen of Bounty",hown:"Heist Stakes",jg:"Journey to the Wealth",go:"Gates of Olympus",go2:"Gates of Olympus 1000",sb:"Sweet Bonanza",sbo:"Sweet Bonanza Xmas",sbr:"Sugar Rush",db:"Dog House",dbm:"Dog House Megaways",bn:"Bonanza Gold",wp:"Wild West Gold",wpm:"Wild West Gold Megaways",jj:"Joker Jewels",tf:"5 Lions Megaways",st:"Starlight Christmas",bbf:"Bigger Bass Bonanza",bb:"Big Bass Bonanza",bbs:"Big Bass Splash",bba:"Big Bass Amazon Xtreme",bh:"Brothers Kingdom",gd:"Gold Panther",koi:"Koi Gate",fa:"Fa Cai Shen",lm:"Lucky Twins",mm:"Mega Moolah",q9mw:"Marvelous Wonderland",q9fh:"Fa Hong",ds:"Dead or a Wild",mmx:"Money Train 3",wby:"Wild Bounty",wbh:"Wild Bounty Hunters",st2:"Starburst XXXtreme",sbt:"Starburst",az:"Aztec Gems",azd:"Aztec Gems Deluxe",sk:"Sugar Bonanza",bj:"Blackjack",pk:"Poker",rlt:"Roulette",ml:"Mobile Legends",pubg:"PUBG Mobile"};
const NAME_TO_ALIAS=Object.fromEntries(Object.entries(PRESETS).map(([a,n])=>[n.toLowerCase(),a]));
const rjCore=['#Rajacuan','#MabarRajacuan','#RajacuanLive','#Rajacuan2025','#RajacuanGacor','#MabarHariIni','#GameOnlineSeru'];
const hashtagsPool=[ "#MobileLegends","#MLBB","#MLBBIndonesia","#MLBBEsports","#MLBBMabar","#MobileLegendsBangBang","#MLBBGameplay","#MLBBLive","#MLBBPro","#MLBBMatch","#MabarMLBB","#MLBBHighlight","#MLBBPushRank","#MLBBFans","#MLBBStrategy","#MLBBUpdate","#MLBBKompetitif","#MLBBSquad","#MLBBTurnamen","#MLBBSeru","#PUBGMobile","#PUBGM","#PUBGIndonesia","#PUBGMobileID","#PUBGMobileLive","#PUBGGameplay","#PUBGSquad","#PUBGPushRank","#PUBGPro","#PUBGMatch","#PUBGTurnamen","#PUBGHighlight","#PUBGEsports","#PUBGKompetitif","#PUBGSeru","#PUBGMobileTips","#PUBGMabar","#PUBGUpdate","#PUBGLiveStreaming","#PUBGLovers","#GameMobile","#MobileGaming","#GamingIndonesia","#MabarOnline","#SquadGaming","#GameLive","#GameEsports","#ProPlayer","#EsportsIndonesia","#KomunitasGaming" ];
const titleVariants=[ "Rajacuan - Jadwal Live {DATE} Mabar Seru {GAME} Tergacor","Rajacuan Live {DATE} - Mabar Bareng Komunitas {GAME}","Rajacuan Gaspol {GAME} {DATE} - Mabar Seru Sepanjang Hari","Rajacuan {DATE} - Mabar {GAME} Full Hiburan & Tantangan","Rajacuan - Main {GAME} {DATE} Bareng Viewers Setia","Rajacuan {DATE} - Live Mabar {GAME} + Tips & Trik Seru","Rajacuan Hadir Lagi {DATE} - Mabar {GAME} Gak Pake Lama","Rajacuan {DATE} - Turnamen Mini {GAME} Bareng Komunitas","Rajacuan - Live Gaming {GAME} {DATE} Full Aksi & Strategi","Rajacuan {DATE} - Main {GAME} Sampai Max Level","Rajacuan - Push Rank {GAME} {DATE} Bareng Squad","Rajacuan {DATE} - Live Seru {GAME} Mode Gokil","Rajacuan - Gameplay {GAME} {DATE} Paling Menegangkan","Rajacuan {DATE} - Mabar {GAME} ala Turnamen","Rajacuan - Santai Sore Mabar {GAME} {DATE}","Rajacuan {DATE} - Hunting Momen Epic di {GAME}","Rajacuan - Live {GAME} {DATE} dengan Strategi Baru","Rajacuan {DATE} - Main {GAME} Sambil Interaksi Viewers","Rajacuan - Streaming {GAME} {DATE} Bikin Nagih","Rajacuan {DATE} - Mabar {GAME} Bawa Pulang Kemenangan","Rajacuan - Live {GAME} {DATE} Versi Fun Match","Rajacuan {DATE} - Coba Mode Unik di {GAME}","Rajacuan - Gas Main {GAME} {DATE} Sampai Habis","Rajacuan {DATE} - Main {GAME} Sambil Share Tips","Rajacuan - {GAME} {DATE} Full Gameplay + Chat Seru","Rajacuan {DATE} - Mabar {GAME} Bareng Player Senior","Rajacuan - Main {GAME} {DATE} Mode Full Power","Rajacuan {DATE} - Buktikan Skill di {GAME}","Rajacuan - Live {GAME} {DATE} Gaya Santai Tapi Menang","Rajacuan {DATE} - Main {GAME} dengan Formasi Baru","Rajacuan - Momen Epic {GAME} {DATE} Versi Live","Rajacuan {DATE} - Main {GAME} All Out Sampai Malam","Rajacuan - Mabar {GAME} {DATE} Anti Garing","Rajacuan {DATE} - Gameplay {GAME} Bikin Ketagihan","Rajacuan - Gas {GAME} {DATE} Sampai Menang Besar","Rajacuan {DATE} - Live {GAME} Santai & Seru","Rajacuan - Seru-seruan {GAME} {DATE} Bareng Teman","Rajacuan {DATE} - Push Mabar {GAME} Anti Stop","Rajacuan - Live {GAME} {DATE} Versi Gaming Community" ];
const ctaLines=[ "Login sekarang dan rasakan sensasinya di {LINK}","Join sekarang juga lewat {LINK} dan mulai petualanganmu","Klik {LINK} untuk langsung gabung dan main bareng","Daftar gratis sekarang di {LINK} dan nikmati bonusnya","Main bareng kita di {LINK}, jangan sampai ketinggalan","Buktikan skill lo sekarang di {LINK}","Gas main sekarang lewat {LINK} sebelum ketinggalan momen","Ikut mabar hari ini di {LINK}, seru dan menantang","Mulai seru-seruan bareng di {LINK}","Cek {LINK} untuk info lengkap dan langsung join","Rasakan keseruan maksimal di {LINK}","Mainkan game favoritmu sekarang di {LINK}","Klik {LINK} untuk aksi tanpa batas","Yuk gabung bareng komunitas di {LINK}","Main kapan saja, di mana saja lewat {LINK}","Tantang temanmu sekarang di {LINK}","Ayo gabung sekarang di {LINK}, gratis dan seru","Mulai perjalanan gaming lo di {LINK}","Ikutan event live hari ini di {LINK}","Buka {LINK} dan raih kemenanganmu sekarang","Gabung sekarang dan buktikan kemampuanmu di {LINK}","Cek jadwal dan langsung main di {LINK}","Gaspol bareng kita lewat {LINK}","Waktunya main dan menang di {LINK}","Ayo bawa tim lo ke {LINK} sekarang","Klik dan main bareng di {LINK} hari ini","Main tanpa batas, cuma di {LINK}","Langsung gas ke {LINK} dan join mabar","Nikmati aksi seru bersama di {LINK}","Main bareng Rajacuan? Klik {LINK} sekarang","Rasakan vibe turnamen di {LINK}","Jangan tunggu lagi, gabung di {LINK} sekarang","Mulai sekarang di {LINK}, gratis dan mudah","Klik {LINK} untuk ikut live mabar seru","Main bareng komunitas gaming terbaik di {LINK}","Ikutan challenge harian di {LINK}","Masuk dan mulai aksi gaming lo di {LINK}","Gas bareng tim di {LINK} sekarang juga","Buka {LINK} dan nikmati hiburan gaming top" ];
const benefitsPool=[ "Event eksklusif dan promo baru setiap minggu","Hadiah besar dan bonus harian untuk semua pemain","Komunitas solid, aktif, dan ramah pemain baru","Game berjalan lancar tanpa lag dan bug","Tersedia berbagai mode permainan seru dan menantang","Support 24 jam siap membantu kapan saja","Turnamen berhadiah jutaan setiap bulan","Gameplay adil tanpa manipulasi hasil","Bisa mabar bareng komunitas kapan saja","Update game rutin dengan fitur baru","Banyak pilihan game populer yang lagi hype","Sistem keamanan akun tingkat tinggi","Proses deposit & withdraw cepat tanpa ribet","Tersedia leaderboard untuk adu skill","Hadiah kejutan untuk pemain aktif","Program referral dengan komisi menarik","Event komunitas offline & online seru","Mini game santai untuk isi waktu tunggu","Bonus login harian tanpa syarat","Sistem matchmaking adil untuk semua level","Challenge mingguan dengan hadiah spesial","Skin dan item eksklusif untuk pemain aktif","Koneksi stabil untuk pengalaman bermain mulus","Bisa ikut voting fitur atau event baru","Dukungan multi-platform: PC, Mobile, Tablet","Siaran live interaktif dengan host seru","Giveaway rutin untuk penonton live","Mabar private room bareng influencer gaming","Statistik permainan lengkap untuk tracking progress","Tantangan rahasia yang memicu adrenalin","Reward tambahan untuk pemain loyal","Sistem ranking transparan dan kompetitif","Fitur replay untuk analisa permainan","Event kolaborasi dengan game populer lainnya","Hadiah langsung untuk pencapaian tertentu","Bisa custom avatar dan profil unik","Pilihan bahasa lokal lengkap untuk kenyamanan","Notifikasi real-time untuk event penting","Sistem anti-cheat canggih untuk fair play" ];
const descriptionBlocks=[`Hari ini kita mabar seru bareng di Rajacuan!
Siapkan strategi terbaik, kumpulkan kemenangan, dan rasakan keseruan bermain di {GAME} yang lagi panas.
Suasana live kali ini bakal bikin tegang sekaligus seru, mirip turnamen mabar komunitas yang penuh kejutan.`, `Rajacuan kembali live {DATE}!
{GAME} lagi ramai dan siap bikin momen mabar makin seru.
Jangan ketinggalan tiap putaran yang penuh kejutan — vibe-nya seperti scrim komunitas kompetitif.`, `Mabar bareng Rajacuan sekarang!
{GAME} lagi hot, cocok buat seru-seruan sambil adu strategi.
Live bakal penuh aksi dan momentum kemenangan yang sayang dilewatkan.`, `Kita gas {GAME} {DATE} dengan format mabar santai ala komunitas.
Tujuan kita simple: have fun, build momentum, dan push kemenangan bareng-bareng.
Kalem tapi tajam — itu gaya main kita di Rajacuan.`, `Live {GAME} {DATE} di Rajacuan siap kasih hiburan plus tantangan.
Nikmati serunya gameplay, cek strategi baru, dan ikutan interaksi chat langsung dengan player lainnya.`, `Rajacuan mengundang semua player untuk mabar {GAME} {DATE}.
Rasakan atmosfer seperti kompetisi resmi tapi dengan suasana santai dan friendly.`, `{GAME} hari ini lagi meta banget!
Di Rajacuan, kita bakal main bareng dan bahas trik-trik kecil yang bikin gameplay makin solid.`, `Siapa yang siap bawa pulang kemenangan hari ini?
Rajacuan live {GAME} {DATE}, pastikan lo ikut dari awal sampe akhir.`, `Main bareng Rajacuan itu selalu beda.
{GAME} kali ini bakal kita bawa ke level yang lebih seru dengan strategi baru yang belum pernah dibahas.`, `Rajacuan siap nemenin sore lo dengan mabar {GAME}.
Ngobrol, main, dan nikmatin momen bareng komunitas tanpa tekanan.`, `Saatnya kita unjuk gigi di {GAME} {DATE}.
Rajacuan bakal live, siap kasih momen epic dan tawa ngakak bareng.`, `{GAME} hari ini di Rajacuan nggak cuma soal menang.
Ini tentang kebersamaan dan keseruan mabar bareng orang-orang gokil di komunitas.`, `Rajacuan live lagi {DATE}!
{GAME} bakal jadi arena kita uji mekanik sambil nyari momen lucu di tengah game.`, `Gaspol {GAME} di Rajacuan!
Live {DATE} ini bakal penuh kejutan dan strategi out of the box.`, `Rajacuan hadir bawa vibe turnamen di mabar {GAME}.
Persiapkan mental dan koneksi internet, ini bakal seru banget.`, `Hari ini kita all-in di {GAME}.
Rajacuan live {DATE} bakal jadi cerita seru yang lo nggak mau skip.`, `Ngopi sore sambil mabar {GAME} di Rajacuan, itu baru definisi healing yang bener.
Join live kita {DATE}!`, `Rajacuan ngajak semua player untuk gabung di live {GAME}.
Santai tapi tetep kompetitif, cocok buat semua level player.`, `Biarpun santai, {GAME} hari ini di Rajacuan bakal bikin deg-degan.
Ikuti setiap match biar nggak ketinggalan momen epic.`, `{GAME} {DATE} ini spesial karena kita bakal coba strategi unik.
Rajacuan siap buktiin kalau fun dan menang bisa jalan bareng.`, `Rajacuan hadir lagi, bawa energi positif di mabar {GAME}.
Persiapkan jempol lo, karena ini bakal intense.`, `Live kali ini kita fokus di teamwork dan komunikasi.
{GAME} di Rajacuan {DATE} akan jadi pelajaran dan hiburan.`, `Nggak cuma gameplay, Rajacuan {GAME} {DATE} juga bakal ada sesi Q&A santai sama komunitas.`, `Rajacuan siap bawain suasana ala arena pro player ke mabar {GAME}.
Cobain vibe kompetitif yang tetep fun.`, `{GAME} di Rajacuan {DATE} cocok banget buat lo yang cari hiburan after kerja.
Santai, interaktif, dan penuh aksi.`, `Rajacuan bakal eksperimen strategi gila-gilaan di {GAME}.
Siap-siap ketawa sekaligus terkejut liat hasilnya.`, `Hari ini kita main {GAME} di Rajacuan sambil bagi tips rahasia.
Biar semua bisa improve skill bareng-bareng.`, `{GAME} {DATE} di Rajacuan bukan cuma main, tapi juga nge-build chemistry bareng viewer.`, `Rajacuan live lagi, kali ini kita main {GAME} sambil push target harian.
Siapa tau ada bonus kejutan di akhir.`, `Mabar di Rajacuan itu selalu unpredictable.
{GAME} kali ini bakal buktiin kenapa komunitas ini nggak pernah bosen.`, `Rajacuan {DATE} siap kasih pengalaman mabar {GAME} yang beda dari biasanya.
Jangan sampe kelewatan!` ];

/* ====== YOUTUBE BUILDERS + UI (singkat) ====== */
function resolveGame(v){ if(!v) return null; const k=v.trim(); if(PRESETS[k.toLowerCase()]) return PRESETS[k.toLowerCase()]; if(NAME_TO_ALIAS[k.toLowerCase()]) return PRESETS[NAME_TO_ALIAS[k.toLowerCase()]]; const hit=Object.values(PRESETS).find(n=>n.toLowerCase().includes(k.toLowerCase())); return hit||k; }
function buildHashtags(game,mix=true){ const g=game.replace(/\s+/g,''); const gameTags=[`#${g}`,`#${g}Tergacor`]; const pickedCore=take(rjCore,randInt(3,5)); const pickedPool=mix?take(hashtagsPool,randInt(4,7)):[]; return shuffle([...pickedCore,...gameTags,...pickedPool]).slice(0,randInt(7,10)); }
function buildTags(game,date){ const g=game.toLowerCase(); const base=['rajacuan','rajacuan mabar',`rajacuan live ${date.toLowerCase()}`,`rajacuan ${g}`,'rajacuan gacor','mabar rajacuan','jadwal live rajacuan','rajacuan terbaru','rajacuan resmi','rajacuan link','rajacuan game seru',`rajacuan ${g} tergacor`,`${g} gacor`,`${g} live`,'mabar game online','rajacuan kompetitif','rajacuan turnamen','rajacuan main bareng',`live ${g} rajacuan`,`streaming ${g} rajacuan`,`mabar ${g} hari ini`]; return take(base,randInt(12,18)); }
function buildDescription({game,date,link,forceHybrid}){ const mode=forceHybrid?'hybrid':pick(['single','combo','hybrid']); const cta=pick(ctaLines).replace('{LINK}',link); const benefits=take(benefitsPool,randInt(3,5)).map(b=>`- ${b}`).join('\n'); let body=''; if(mode==='single'){ body=pick(descriptionBlocks); } else if(mode==='combo'){ const p1=pick(descriptionBlocks); let p2=pick(descriptionBlocks); let t=0; while(p2===p1 && t++<5) p2=pick(descriptionBlocks); body=`${p1}\n\n${p2}`; } else { const header='Rajacuan - Jadwal Live {DATE} Mabar Seru {GAME} Tergacor'; body=`${header}\n\n${pick(descriptionBlocks)}`; } return body.replaceAll('{GAME}',game).replaceAll('{DATE}',date)+`\n\n${cta}\n\nKenapa main di Rajacuan:\n${benefits}`; }
function generatePack({game,date,link,mixHashtag,forceHybrid}){ let title=pick(titleVariants).replace('{GAME}',game).replace('{DATE}',date); title=limit(title,100); const desc=buildDescription({game,date,link,forceHybrid}); const hashtags=buildHashtags(game,mixHashtag); const tags=buildTags(game,date); return {title,desc,hashtags,tags}; }
const $=s=>document.querySelector(s); const out=$('#out'), statusEl=$('#status'), aliasBox=$('#aliasBox');
$('#btnList').onclick=()=>{ aliasBox.style.display=aliasBox.style.display==='none'?'block':'none'; aliasBox.innerHTML=`<h3 style="margin-top:0">Alias Game</h3><div class="mono">${Object.entries(PRESETS).sort((a,b)=>a[1].localeCompare(b[1])).map(([al,nm])=>`<code>${al}</code> — ${nm}`).join('<br>')}</div>`; };
$('#btnClear').onclick=()=>{ out.innerHTML=''; statusEl.textContent='Output dibersihkan.'; };
$('#btnCopyAll').onclick=()=>{ const text=[...out.querySelectorAll('.mono')].map(n=>n.textContent).join('\n'); navigator.clipboard.writeText(text).then(()=>statusEl.textContent='Semua output disalin.'); };
$('#btnExport').onclick=()=>{ const text=[...out.querySelectorAll('.item')].map((card,i)=>{const t=card.querySelector('[id^="title-"]').textContent; const d=card.querySelector('[id^="desc-"]').textContent; const h=card.querySelector('[id^="hash-"]').textContent; const g=card.querySelector('[id^="tags-"]').textContent; return `Judul:\n${t}\n\nDeskripsi:\n${d}\n\nHashtag:\n${h}\n\nTags (CSV):\n${g}`;}).join('\n\n'); if(!text.trim()){statusEl.textContent='Belum ada output.';return;} const blob=new Blob([text],{type:'text/plain;charset=utf-8'}); const url=URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download='rjc-pack.txt'; a.click(); URL.revokeObjectURL(url); };
$('#btnExportCSV').onclick=()=>{ const cards=[...out.querySelectorAll('.item')]; if(!cards.length){statusEl.textContent='Belum ada output.';return;} const rows=cards.map((card,i)=>{ const title=card.querySelector('[id^="title-"]').textContent.replace(/"/g,'""'); const desc=card.querySelector('[id^="desc-"]').textContent.replace(/"/g,'""'); const hash=card.querySelector('[id^="hash-"]').textContent.replace(/"/g,'""'); const tags=card.querySelector('[id^="tags-"]').textContent.replace(/"/g,'""'); return `${i+1},"${title}","${desc}","${hash}","${tags}"`; }); const csv=['index,title,description,hashtags,tags',...rows].join('\n'); const blob=new Blob([csv],{type:'text/csv;charset=utf-8'}); const url=URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download='rjc-pack.csv'; a.click(); URL.revokeObjectURL(url); };
$('#btnGenerate').onclick=()=>{ const gRaw=$('#inpGame').value.trim(); const date=$('#inpDate').value.trim()||'Hari Ini'; const link=$('#inpLink').value.trim()||'https://www.huntsvilleskiclub.org/'; const num=Math.max(1,parseInt($('#inpCount').value||'1',10)); const mixHashtag=$('#chkMLPUBG').checked; const forceHybrid=$('#chkHybrid').checked; if(!gRaw){ statusEl.textContent='Isi Game dulu (alias atau nama).'; return; } const game=resolveGame(gRaw); statusEl.textContent='Generating...'; out.innerHTML=''; for(let i=0;i<num;i++){ const p=generatePack({game,date,link,mixHashtag,forceHybrid}); const copyAllText=`Judul:\n${p.title}\n\nDeskripsi:\n${p.desc}\n\nHashtag:\n${p.hashtags.join(' ')}\n\nTags (CSV):\n${p.tags.join(', ')}`; const card=document.createElement('div'); card.className='item'; card.innerHTML=`
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
      <div class="mono" id="title-${i}">${p.title}</div>
      <div class="sep"></div>
      <label>Deskripsi</label>
      <div class="mono" id="desc-${i}">${p.desc}</div>
      <div class="sep"></div>
      <label>Hashtag</label>
      <div class="mono" id="hash-${i}">${p.hashtags.join(' ')}</div>
      <div class="sep"></div>
      <label>Tags (CSV)</label>
      <div class="mono" id="tags-${i}">${p.tags.join(', ')}</div>`; card.querySelectorAll('[data-copy]').forEach(btn=>btn.addEventListener('click',()=>{ const t=btn.getAttribute('data-copy'); let text=''; if(t==='title') text=card.querySelector(`#title-${i}`).textContent; else if(t==='desc') text=card.querySelector(`#desc-${i}`).textContent; else if(t==='hash') text=card.querySelector(`#hash-${i}`).textContent; else if(t==='tags') text=card.querySelector(`#tags-${i}`).textContent; else if(t==='all') text=copyAllText; navigator.clipboard.writeText(text).then(()=>statusEl.textContent='Disalin.'); })); out.appendChild(card); } statusEl.textContent=`Generated ${num} variasi untuk: ${game}`; };

/* ====== ARTICLE MODE: BULK TITLE + DESCRIPTION ====== */
/* Keyword bank */
const gamesDefault=[ "Mahjong Ways 1","Mahjong Ways 2","Starlight Princess","Gates of Olympus","Sweet Bonanza","PUBG Mobile","Mobile Legends","Free Fire","Valorant","Higgs Domino","Call of Duty Mobile" ];
const fitur=[ "mode baru","event spesial","fitur rahasia","strategi unik","trik lama","gaya main santai","misi harian","fitur jackpot","combo epic","spin cepat" ];
const hasil=[ "menang besar","tembus jackpot","pecah rekor","dapet sensasi gila","ngalahin lawan","dapet hadiah langka","boost ranking","tembus skor tinggi" ];
const emosi=[ "kaget","seneng banget","tegang","puas","nagih","takjub","terharu" ];
const momen=[ "simbol langka keluar","combo jalan","lawan tumbang","tim kompak","spin pecah","bonus turun","headshot sempurna" ];
const angka=[ "5","10","15","20","30" ];

/* Pool Title (50) */
const poolTitle=[
"Tadi Malem Coba {fitur} di {game}, Hasilnya Bikin {emosi}",
"Niatnya Santai, Eh Malah {hasil} Pas Main {game}",
"Cuma {angka} Menit di {game}, Langsung {hasil}",
"Gak Nyangka {hasil} Pas Coba {fitur} di {game}",
"Awalnya Ragu, Eh Ternyata {hasil} di {game}",
"Main {game} Sambil Ngopi, Eh Malah {hasil}",
"Iseng Nyoba {fitur}, {hasil} pun Datang di {game}",
"Baru Login {game}, Gak Nyangka {momen} Terjadi",
"{angka} Kali Coba, Akhirnya {hasil} di {game}",
"{fitur} di {game} Bener-Bener Bikin {emosi}",
"Gak Disangka, {momen} Bikin Gue {emosi} di {game}",
"{angka} Menit Main {game}, Langsung {hasil}",
"Lagi Santai, Tiba-Tiba {momen} Muncul di {game}",
"Trik Lama Ternyata Masih Manjur di {game}",
"{fitur} di {game} Gak Main-Main, Langsung {hasil}",
"Temen Kasih Tips, Gue Coba di {game}, Eh {hasil}",
"Misi {fitur} di {game} Bikin Gue {emosi}",
"{angka} Kali Spin di {game}, Hasilnya {hasil}",
"Awalnya Main Biasa, Tapi {momen} Bikin {emosi}",
"{fitur} Rahasia di {game} Bikin Gue {hasil}",
"Main {game} di Jam Tertentu, Eh {hasil}",
"Coba Mode {fitur} di {game}, Ternyata {hasil}",
"{angka} Hari Main {game}, Akhirnya {hasil}",
"Kesalahan Kecil, Tapi Malah {hasil} di {game}",
"Lagi Asik Main {game}, Tiba-Tiba {momen} Muncul",
"Strategi {fitur} Bener-Bener Gila di {game}",
"{game} Emang Paling Mantap Buat {hasil}",
"Baru Sadar {fitur} Bisa Bikin {hasil}",
"{angka} Spin Pertama di {game}, Langsung {hasil}",
"{game} Hari Ini Lagi Gacor Banget",
"Nggak Nyangka {fitur} Bikin {emosi} di {game}",
"Dari Cuma Nyoba, Jadi {hasil} di {game}",
"{game} Kasih Momen {momen} Paling Epic",
"Baru Login, Udah {hasil} di {game}",
"Ternyata {fitur} Ampuh Bikin {hasil}",
"{game} Selalu Punya Kejutan {momen}",
"{angka} Jam Main, Akhirnya {hasil}",
"Dari Penasaran Jadi {hasil} di {game}",
"Nggak Pernah Kecewa Main {game}",
"{fitur} di {game} Bikin Malam Jadi {emosi}",
"Cuma Main Biasa, Eh {momen} Hadir",
"{angka} Menit Pertama, Udah {hasil}",
"Mode {fitur} di {game} Lagi Hot Banget",
"{game} Hari Ini Beri {momen} Paling Gila",
"Awalnya Cuma Tes, Eh {hasil} di {game}",
"{angka} Hari Main Tanpa Henti, Akhirnya {hasil}",
"{game} Selalu Bikin {emosi} Tiap Main",
"{fitur} Bener-Bener Andalan di {game}",
"Lagi Ngantuk, Main {game}, Eh {hasil}",
"{momen} di {game} Gak Akan Gue Lupain"
];

/* Pool Deskripsi (50) */
const poolDescription=[
"Pagi ini iseng nyoba {fitur} di {game}, awalnya biasa aja. Tapi pas {momen} kejadian, rasanya {emosi} banget. Mungkin lo juga pernah ngalamin momen kayak gini.",
"Awalnya cuma pengen coba mode {fitur} di {game}, eh malah {hasil}. Rasanya campur aduk, antara {emosi} dan penasaran pengen coba lagi.",
"Main {game} itu selalu penuh kejutan. Kali ini gue nyobain {fitur} dan pas {momen} muncul, gue langsung {emosi}.",
"Kadang hal kecil bikin beda. Kayak tadi pas gue main {game} dan coba {fitur}, hasilnya {hasil}.",
"Nggak nyangka trik ini masih manjur di {game}. Cuma modal {angka} menit, udah {hasil}.",
"{game} emang nggak pernah kehabisan cara bikin gue {emosi}. Apalagi pas {momen} itu kejadian.",
"Dari iseng malah jadi {hasil}. Itulah yang gue rasain main {game} hari ini.",
"Tadi malem nyobain {fitur} di {game}, hasilnya bikin gue {emosi}.",
"Setiap kali main {game}, selalu ada cerita baru. Kayak tadi pas {momen} bikin gue {hasil}.",
"{fitur} di {game} ternyata punya efek gila. Gue coba tadi, hasilnya {hasil}.",
"Main santai di {game} malah berujung {hasil}.",
"Dari awal gue udah feeling kalau {fitur} di {game} bakal bikin {hasil}.",
"Kadang cuma butuh {angka} menit buat {hasil} di {game}.",
"Gue pikir cuma kebetulan, tapi ternyata {fitur} emang bikin {hasil}.",
"{momen} di {game} itu bener-bener bikin {emosi}.",
"Awalnya biasa aja, tapi {fitur} bikin gue {hasil}.",
"Gue nggak nyangka main {game} bisa seseru ini.",
"{angka} kali coba akhirnya bikin gue {hasil}.",
"{fitur} di {game} bener-bener bikin ketagihan.",
"Tiap main {game} selalu ada kejutan {momen}.",
"Nggak pernah bosen sama {game}.",
"{hasil} di {game} hari ini bener-bener tak terduga.",
"{fitur} ternyata punya potensi besar buat {hasil}.",
"Main {game} sambil santai aja, tapi {hasil}.",
"Gue selalu suka kejutan di {game}.",
"Dari awal gue udah tahu {fitur} ini spesial.",
"{momen} bikin gue makin cinta sama {game}.",
"{angka} menit pertama udah {hasil}.",
"{game} selalu bikin gue pengen balik lagi.",
"{fitur} bikin main {game} lebih seru.",
"{hasil} hari ini bikin gue makin semangat main {game}.",
"{momen} bikin gue speechless.",
"Dari cuma nyoba jadi ketagihan main {game}.",
"{fitur} ternyata bikin efek luar biasa di {game}.",
"{game} kasih pengalaman {emosi} banget hari ini.",
"Awalnya cuma penasaran, eh {hasil}.",
"{fitur} itu kunci {hasil} di {game}.",
"Tiap momen {momen} selalu bikin gue {emosi}.",
"{game} emang rajanya kejutan.",
"{hasil} hari ini nggak akan gue lupain.",
"Dari iseng malah jadi serius main {game}.",
"{fitur} di {game} bikin adrenalin naik.",
"{momen} di {game} bikin gue merinding.",
"Gue nggak nyangka {fitur} bisa kayak gini.",
"{hasil} bikin hari gue makin asik.",
"Tiap kali {momen} muncul, rasanya {emosi}.",
"{fitur} bikin {game} tambah nagih.",
"{game} selalu punya kejutan baru.",
"{hasil} hari ini bener-bener spesial.",
"Gue bakal coba {fitur} lagi di {game}."
];

/* Random helpers + seed */
function seedRandom(seed){
  if(!seed) return; // simple LCG seed for reproducible order
  let s=0; for(let i=0;i<seed.length;i++) s=(s*31 + seed.charCodeAt(i))>>>0;
  Math.random = (function(a){ return function(){ a = (1664525 * a + 1013904223) % 4294967296; return a/4294967296; };})(s||Date.now());
}

function replacePlaceholders(tpl, pickers){
  return tpl
    .replace(/{game}/g, pickers.game())
    .replace(/{fitur}/g, pickers.fitur())
    .replace(/{hasil}/g, pickers.hasil())
    .replace(/{emosi}/g, pickers.emosi())
    .replace(/{momen}/g, pickers.momen())
    .replace(/{angka}/g, pickers.angka());
}

function buildPickers(customGames, mix=true){
  const games = customGames && customGames.length ? customGames : gamesDefault;
  return {
    game: ()=> mix ? pick(games) : games[0],
    fitur: ()=> pick(fitur),
    hasil: ()=> pick(hasil),
    emosi: ()=> pick(emosi),
    momen: ()=> pick(momen),
    angka: ()=> pick(angka),
  };
}

function generateBulk(count, opts={}){
  const { mixGames=true, seed=null, customGames=[] } = opts;
  seedRandom(seed||"");
  const pickers = buildPickers(customGames, mixGames);
  const rows=[];
  for(let i=0;i<count;i++){
    const title = replacePlaceholders(pick(poolTitle), pickers);
    const desc  = replacePlaceholders(pick(poolDescription), pickers);
    rows.push({title, description: desc});
  }
  return rows;
}

/* UI wiring for bulk */
const artOut = document.querySelector('#articleBulkOut');
const artNote = document.querySelector('#articleBulkNote');
const artStatus = document.querySelector('#articleBulkStatus');

document.querySelector('#btnArticleBulkGen').addEventListener('click', ()=>{
  const count = Math.max(1, parseInt(document.querySelector('#artBulkCount').value||'200',10));
  const previewLimit = Math.max(10, parseInt(document.querySelector('#artPreviewLimit').value||'50',10));
  const mixGames = document.querySelector('#artMixGames').checked;
  const shuffleAll = document.querySelector('#artShuffle').checked;
  const seed = document.querySelector('#artSeed').value.trim();
  const cgInput = document.querySelector('#artGames').value.trim();
  const customGames = cgInput ? cgInput.split(',').map(s=>s.trim()).filter(Boolean) : [];

  const data = generateBulk(count, { mixGames, seed, customGames });
  const preview = (shuffleAll ? shuffle(data) : data).slice(0, previewLimit);

  artOut.innerHTML='';
  preview.forEach((row,i)=>{
    const card = document.createElement('div');
    card.className = 'item';
    card.innerHTML = `
      <div class="row" style="justify-content:space-between">
        <h3>Var #${i+1}</h3>
        <div class="row">
          <button class="btn" data-copy="title">Copy Title</button>
          <button class="btn" data-copy="desc">Copy Desc</button>
          <button class="btn ok" data-copy="all">Copy All</button>
        </div>
      </div>
      <div class="sep"></div>
      <label>Title</label>
      <div class="mono" id="btitle-${i}">${row.title}</div>
      <div class="sep"></div>
      <label>Description</label>
      <div class="mono" id="bdesc-${i}">${row.description}</div>
    `;
    card.querySelectorAll('[data-copy]').forEach(btn=>{
      btn.addEventListener('click',()=>{
        const t=btn.getAttribute('data-copy');
        let text='';
        if(t==='title') text = card.querySelector(`#btitle-${i}`).textContent;
        else if(t==='desc') text = card.querySelector(`#bdesc-${i}`).textContent;
        else if(t==='all') text = `Title: ${row.title}\nDescription: ${row.description}`;
        navigator.clipboard.writeText(text).then(()=> artStatus.textContent='Disalin.');
      });
    });
    artOut.appendChild(card);
  });

  artNote.textContent = `Preview ${preview.length} dari total ${data.length} variasi. Gunakan tombol "Download CSV" untuk file lengkap.`;
  // stash latest for CSV
  window.__bulkData = data;
  artStatus.textContent = `Generated ${data.length} variasi.`;
});

document.querySelector('#btnArticleBulkCSV').addEventListener('click', ()=>{
  const data = window.__bulkData || [];
  if(!data.length){ artStatus.textContent='Belum ada data. Klik "Generate" dulu.'; return; }
  const header = 'title,description';
  const csv = [header, ...data.map(r=>`"${r.title.replace(/"/g,'""')}","${r.description.replace(/"/g,'""')}"`)].join('\n');
  const blob = new Blob([csv], {type:'text/csv;charset=utf-8'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href = url; a.download = 'article_variations.csv'; a.click();
  URL.revokeObjectURL(url);
});

document.querySelector('#btnArticleBulkClear').addEventListener('click', ()=>{
  artOut.innerHTML=''; artNote.textContent=''; artStatus.textContent='Bersih.'; window.__bulkData = [];
});
