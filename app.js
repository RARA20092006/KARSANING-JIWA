const mb=document.getElementById('mb'),nav=document.getElementById('nav');
mb.onclick=()=>{nav.hidden=!nav.hidden;mb.setAttribute('aria-expanded',!nav.hidden)};
nav.onclick=e=>{if(e.target.tagName==='A')nav.hidden=true};
const D=[
["Kesehatan","Gunungkidul","Puskesmas atau fasilitas kesehatan — contoh kategori","Tanyakan jalur konsultasi dan rujukan melalui kanal resmi fasilitas kesehatan setempat."],
["Konseling","DIY / regional","Rumah sakit, psikolog, psikiater, atau konseling terverifikasi — contoh kategori","Periksa kredensial dan jalur rujukan melalui fasilitas kesehatan atau kanal profesi resmi."],
["Sosial","Gunungkidul","Dinas sosial dan perlindungan perempuan serta anak — contoh kategori","Periksa cakupan layanan dan cara mengaksesnya melalui kanal pemerintah resmi."],
["Darurat","DIY / regional","Layanan kedaruratan dan rujukan resmi — contoh kategori","Hubungi layanan darurat setempat bila ada bahaya langsung."]];
const q=document.getElementById('q'),k=document.getElementById('k'),w=document.getElementById('w'),L=document.getElementById('list');
function render(){const t=q.value.toLowerCase();
const r=D.filter(d=>(!k.value||d[0]===k.value)&&(!w.value||d[1]===w.value)&&(!t||(d[0]+d[2]+d[3]).toLowerCase().includes(t)));
L.innerHTML=r.length?r.map(d=>`<div class="card"><span class="tag">Data demonstrasi — perlu verifikasi</span><h3>${d[2]}</h3><p>Wilayah: ${d[1]}. Nama, alamat, jam, kontak resmi, prosedur akses, dan biaya: Perlu verifikasi. ${d[3]}</p></div>`).join(''):'<p>Tidak ada kategori yang cocok. Coba kata lain.</p>'}
[q,k,w].forEach(e=>e.oninput=render);render();
document.querySelectorAll('[data-ans]').forEach(c=>{
c.querySelectorAll('.chip').forEach(b=>b.onclick=()=>{
const v=b.dataset.v||b.textContent.trim(),ok=v===c.dataset.ans;
c.querySelectorAll('.chip').forEach(x=>x.classList.remove('ok','no'));
b.classList.add(ok?'ok':'no');
c.querySelector('.fb').textContent=ok?'Tepat. Mendengarkan tanpa menghakimi adalah awal yang baik; dukungan orang lain dan layanan tetap penting.':'Belum tepat. Coba lagi — pikirkan respons yang memberi ruang untuk didengar.'})});
