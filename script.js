"use strict";
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const calm=matchMedia("(prefers-reduced-motion: reduce)").matches;
const esc=s=>s.replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

/* ===== EDIT HERE ===== */
// Content portfolio: add real media by setting src (e.g. "assets/images/YOUR-FILE.jpg") and alt text.
const WORKS=[
 {c:"Reels",l:"ADD REEL HERE",h:260},{c:"Posters",l:"ADD POSTER HERE",h:340},{c:"Thumbnails",l:"ADD THUMBNAIL HERE",h:170},
 {c:"Social Posts",l:"ADD SOCIAL POST HERE",h:220},{c:"Promotional Designs",l:"ADD PROMO DESIGN HERE",h:300},
 {c:"YouTube",l:"ADD YOUTUBE WORK HERE",h:180},{c:"Short-form Video",l:"ADD SHORT VIDEO HERE",h:280}
 // Example (put the file in assets/images/ first): {c:"Posters",l:"Poster title",src:"assets/images/YOUR-FILE.jpg",alt:"Description"}
];
// Projects: add new ones to this list.
const PROJECTS=[
 {n:"ZAID JARVIS AI",s:"Personal AI Assistant",u:"https://github.com/ZAIDU704/ZAID-JARVIS-AI",
  d:"A Python-based personal AI assistant project focused on voice interaction, persistent memory, reminders, desktop automation, system controls, and an interactive interface.",
  t:["Python","Voice interaction","Persistent memory","SQLite","Reminders","Desktop automation","System controls","Offline voice functionality","PySide6 interface"],
  f:["Voice interaction","Persistent memory","Reminders","Desktop automation","System controls","Interactive interface"],
  v:["VOICE","MEMORY","REMINDERS","AUTOMATION","SYSTEM","AI ASSISTANT"],img:"assets/projects/zaid-jarvis-ai.svg"},
 {n:"GestureTeach AI",s:"Computer vision",u:"https://github.com/ZAIDU704/GestureTeach-AI",
  d:"A computer-vision project using hand gestures for touchless computer and presentation control.",
  t:["Python","OpenCV","MediaPipe"],f:["Gesture cursor","Clicking","Presentation control","Slide control","Volume control","Brightness control"],
  v:["HAND","CAMERA","COMPUTER"],img:"assets/projects/gestureteach-ai.svg"},
 {n:"ZAIDU DRAW",s:"Multiplayer game",u:"https://github.com/ZAIDU704/zaidu-draw",
  d:"A real-time multiplayer drawing and guessing game.",
  t:["Node.js","Express","Socket.IO","HTML","CSS","JavaScript"],f:["Drawing canvas","Players","Guessing","Score","Real-time connection"],
  v:["CANVAS","PLAYERS","GUESS","SCORE","LIVE"],img:"assets/projects/zaidu-draw.svg"}
];
/* ===================== */
const WHAT={"Digital content":["Content creation","Social media management","Reels","Short-form video","Content planning","Caption writing","Hashtag research"],
"Graphic design":["Posters","Thumbnails","Social posts","Promotional designs","Canva"],
"Video":["Video editing","Reels","Short-form content","CapCut","Adobe Premiere"],
"Social media":["Instagram","Facebook","YouTube","Audience engagement","Page management","Promotion"],
"Computer & office":["MS Word","MS Excel","MS PowerPoint","Typing","Data entry","Documentation","Computer operations"],
"AI":["ChatGPT","Claude","Gemini","AI image generation","AI video tools","AI writing","AI research","AI voice tools","AI-assisted productivity"],
"Programming":["Python — Beginner","HTML/CSS — Beginner","JavaScript fundamentals","Basic web development","GitHub","Programming fundamentals"],
"Cybersecurity":["Cybersecurity fundamentals","Authentication","MFA","Encryption","Networking basics","Linux","Security fundamentals","Ethical hacking fundamentals"]};
const SKILLS={"Creative":["Graphic design","Canva","Posters","Thumbnails","Video editing","Reels"],
"Social media":["Instagram","Facebook","YouTube","Content planning","Social media management","Promotion"],
"Office & digital":["MS Word","MS Excel","MS PowerPoint","Typing","Data entry","Documentation"],
"AI":["ChatGPT","Claude","Gemini","AI image generation","AI video tools","AI writing","AI research","AI voice tools"],
"Programming":[["Python","Beginner"],["HTML/CSS","Beginner"],["Basic web development","Learning"],"GitHub","Programming fundamentals"],
"Cybersecurity":["MFA","Authentication","OTP/TOTP","Encryption","HTTPS/TLS concepts","Password security","Phishing","Brute force","Dictionary attacks","Credential stuffing","Hashing concepts","Networking basics","Linux","Security fundamentals","Ethical hacking fundamentals"].map(x=>[x,"Learning"])};
const CY={"Authentication":"MFA, authentication factors (know / have / are), OTP, TOTP, security keys, WebAuthn, phishing-resistant authentication",
"Encryption":"Plaintext and ciphertext, encryption and decryption, keys, HTTPS, TLS, public/private key concepts",
"Password security":"Passwords and hashes, brute-force and dictionary attacks, credential stuffing, online vs offline attacks, rate limiting, lockouts",
"Social engineering":"Phishing, suspicious links, credential-theft concepts, security awareness",
"Networking":"IP, DNS, internet fundamentals, network basics",
"Linux":"Fundamentals, terminal and command line, Kali Linux lab environment, Termux/Linux experimentation",
"Ethical hacking":"Security fundamentals, reconnaissance and vulnerability concepts, web security fundamentals, methodology. Educational learning and experimentation only."};

/* render */
const chip=x=>Array.isArray(x)?`<span>${x[0]}<em>${x[1]}</em></span>`:`<span>${x}</span>`;
$("#whatGrid").innerHTML=Object.entries(WHAT).map(([k,v])=>`<article class="card rv"><h3>${k}</h3><ul>${v.map(i=>`<li>${i}</li>`).join("")}</ul></article>`).join("");
$("#skillGrid").innerHTML=Object.entries(SKILLS).map(([k,v])=>`<article class="card rv"><h3>${k}</h3><div class="chips">${v.map(chip).join("")}</div></article>`).join("");
$("#cyGrid").innerHTML=Object.entries(CY).map(([k,v])=>`<article class="card rv"><h3>${k}</h3><p class="muted">${v}</p></article>`).join("");

/* hero letters */
const h1=$("#zaidu");h1.innerHTML=[..."ZAIDU"].map((c,i)=>`<span aria-hidden="true" style="animation-delay:${i*90+100}ms">${c}</span>`).join("");

/* nav */
const hd=$("#nav"),bg=$("#burger"),lk=$("#links");
const setMenu=o=>{lk.classList.toggle("open",o);bg.setAttribute("aria-expanded",o);bg.setAttribute("aria-label",o?"Close menu":"Open menu")};
bg.onclick=()=>setMenu(!lk.classList.contains("open"));
$$("a",lk).forEach(a=>a.onclick=()=>setMenu(false));
addEventListener("keydown",e=>{if(e.key==="Escape")setMenu(false)});
const navA=$$("#links a"),secs=navA.map(a=>$(a.getAttribute("href")));
function onScroll(){
 hd.classList.toggle("sc",scrollY>20);
 let cur=0;secs.forEach((s,i)=>{if(s.getBoundingClientRect().top<innerHeight*.4)cur=i});
 navA.forEach((a,i)=>{a.classList.toggle("on",i===cur);i===cur?a.setAttribute("aria-current","true"):a.removeAttribute("aria-current")});
 const j=$("#path"),r=j.getBoundingClientRect(),p=Math.min(1,Math.max(0,(innerHeight*.7-r.top)/r.height));
 j.style.setProperty("--pg",p);$$("li",j).forEach((li,i)=>li.classList.toggle("on",p>=(i+.3)/8));
 const b=$("#brand"),br=b.getBoundingClientRect(),bp=Math.min(1,Math.max(0,-br.top/(br.height-innerHeight)));
 $$(".bw",b).forEach((w,i)=>w.classList.toggle("on",calm||bp>(i===4?.78:i*.17)));
}
addEventListener("scroll",onScroll,{passive:true});onScroll();

/* reveal + counters */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.15});
$$(".rv").forEach(el=>io.observe(el));
const cio=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;cio.unobserve(e.target);
 const el=e.target,to=+el.dataset.to,suf=el.dataset.suffix||"",t0=performance.now();
 const step=t=>{const p=calm?1:Math.min(1,(t-t0)/1400);el.textContent=Math.round(to*(1-Math.pow(1-p,3)))+(p===1?suf:"");if(p<1)requestAnimationFrame(step)};requestAnimationFrame(step)}),{threshold:.5});
$$(".count").forEach(c=>cio.observe(c));

/* hero parallax */
if(!calm&&matchMedia("(hover:hover)").matches)addEventListener("mousemove",e=>{const f=$(".floats");f.style.setProperty("--px",(e.clientX/innerWidth-.5)*-14+"px");f.style.setProperty("--py",(e.clientY/innerHeight-.5)*-10+"px")});

/* terminal */
const term=$("#term"),full=term.dataset.text;
term.textContent=calm?full:"";
new IntersectionObserver((es,o)=>{if(es[0].isIntersecting&&!calm){o.disconnect();let i=0;const t=setInterval(()=>{term.textContent=full.slice(0,++i);if(i>=full.length)clearInterval(t)},28)}},{threshold:.4}).observe(term);

/* dialog helpers */
const dlg=$("#modal"),mb=$("#mBody");
function open(html){mb.innerHTML=html;document.body.classList.add("lock");dlg.showModal()}
dlg.addEventListener("close",()=>document.body.classList.remove("lock"));
$("#mClose").onclick=()=>dlg.close();
dlg.addEventListener("click",e=>{if(e.target===dlg)dlg.close()});

/* projects */
const preview=p=>`<div class="pv"><small>Conceptual Project Preview</small><img class="pimg" src="${p.img}" alt="Conceptual preview of ${esc(p.n)}: ${p.v.join(", ")}" width="600" height="340" loading="lazy"></div>`;
$("#projList").innerHTML=PROJECTS.map((p,i)=>`<button class="card pc rv" data-i="${i}" aria-label="Open details for ${esc(p.n)}">${preview(p)}<div class="pb"><h3>${esc(p.n)}</h3><p>${esc(p.s)}. ${esc(p.d)}</p><div class="chips" style="margin-top:12px">${p.t.slice(0,4).map(x=>`<span>${x}</span>`).join("")}</div></div></button>`).join("");
$$(".pc").forEach(b=>{b.onclick=()=>{const p=PROJECTS[b.dataset.i];
 open(`<h3 id="mTitle">${esc(p.n)}</h3><p class="muted">${esc(p.s)}</p><p style="margin-top:12px">${esc(p.d)}</p>${preview(p)}<h4>Technologies</h4><div class="chips">${p.t.map(x=>`<span>${x}</span>`).join("")}</div><h4>Features</h4><div class="chips">${p.f.map(x=>`<span>${x}</span>`).join("")}</div><a class="btn primary" href="${p.u}" target="_blank" rel="noopener">View on GitHub</a>`)}});

/* content portfolio */
const cats=["All",...new Set(WORKS.map(w=>w.c))];
$("#filters").innerHTML=cats.map((c,i)=>`<button class="btn" aria-pressed="${i===0}" data-c="${c}">${c}</button>`).join("");
$("#works").innerHTML=WORKS.map((w,i)=>`<button class="work" data-c="${w.c}" data-i="${i}" aria-label="Preview: ${esc(w.l)}">${w.src?`<img loading="lazy" src="${w.src}" alt="${esc(w.alt||w.l)}">`:`<div class="ph" style="height:${w.h}px">${w.l}</div>`}</button>`).join("");
$$("#filters .btn").forEach(b=>b.onclick=()=>{$$("#filters .btn").forEach(x=>x.setAttribute("aria-pressed",x===b));
 $$(".work").forEach(w=>w.classList.toggle("hide",b.dataset.c!=="All"&&w.dataset.c!==b.dataset.c))});
$$(".work").forEach(b=>b.onclick=()=>{const w=WORKS[b.dataset.i];
 open(`<h3 id="mTitle">${esc(w.c)}</h3>${w.src?`<img style="width:100%;margin-top:12px;border-radius:12px" src="${w.src}" alt="${esc(w.alt||w.l)}">`:`<p class="muted" style="margin-top:12px">${w.l}. Add your work in the WORKS list in script.js.</p>`}`)});
