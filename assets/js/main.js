const current = location.pathname.split('/').pop() || 'index.html';

const links = [
  ['index.html', 'Inicio'],
  ['servicios.html', 'Servicios'],
  ['noticias.html', 'Noticias'],
  ['empresa.html', 'Empresa'],
  ['faq.html', 'FAQ'],
  ['contacto.html', 'Contacto'],
];

const header = document.querySelector('[data-header]');
if (header) {
  header.innerHTML = `
    <header class="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
      <nav class="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8" aria-label="Navegación principal">
        <a href="index.html" class="flex items-center gap-3" aria-label="AQRS IT Consulting, inicio">
          <span class="grid h-11 w-11 place-items-center border border-lime-300 bg-lime-300 font-black tracking-tight text-slate-950">A:</span>
          <span class="leading-tight"><strong class="block text-lg tracking-[.12em] text-white">AQRS</strong><small class="mono text-[10px] uppercase tracking-[.16em] text-lime-300">IT / CONSULTING</small></span>
        </a>
        <button data-menu class="rounded-lg border border-white/15 p-2 text-white md:hidden" aria-expanded="false" aria-label="Abrir menú"><span class="block h-0.5 w-6 bg-current"></span><span class="my-1.5 block h-0.5 w-6 bg-current"></span><span class="block h-0.5 w-6 bg-current"></span></button>
        <div data-nav class="absolute left-5 right-5 top-24 hidden rounded-2xl border border-white/10 bg-slate-900 p-5 shadow-2xl md:static md:flex md:items-center md:gap-1 md:border-0 md:bg-transparent md:p-0 md:shadow-none">
          ${links.map(([href, label]) => `<a href="${href}" class="block rounded-lg px-3 py-2 text-sm font-semibold ${current === href ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-white/5 hover:text-white'}">${label}</a>`).join('')}
          <a href="invertir.html" class="mt-3 block bg-lime-300 px-4 py-2 text-center text-sm font-black text-slate-950 hover:bg-white md:ml-3 md:mt-0">Invierta ↗</a>
        </div>
      </nav>
    </header>`;
}

const footer = document.querySelector('[data-footer]');
if (footer) {
  footer.innerHTML = `
    <footer class="border-t border-white/10 bg-slate-950 py-12 text-slate-400">
      <div class="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-3 lg:px-8">
        <div><p class="text-xl font-black tracking-widest text-white">AQRS<span class="text-lime-300">:</span>IT</p><p class="mt-3 max-w-sm text-sm leading-6">Ingeniería, observabilidad y seguridad para empresas que no pueden detenerse.</p></div>
        <div><p class="font-bold text-white">Enlaces</p><div class="mt-3 grid grid-cols-2 gap-2 text-sm"><a href="servicios.html">Servicios</a><a href="noticias.html">Noticias</a><a href="empresa.html">Empresa</a><a href="contacto.html">Contacto</a></div></div>
        <div>
          <p class="font-bold text-white">Síganos</p>
          <div class="mt-4 flex flex-wrap gap-3">
            <a
              class="social"
              href="https://www.facebook.com/people/AQRS-it-consulting/61593613642509/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook de AQRS IT Consulting"
            >Facebook</a>
            <a class="social" href="#" aria-label="Instagram">Instagram</a>
            <a class="social" href="#" aria-label="LinkedIn">LinkedIn</a>
            <a
              class="social"
              href="https://www.youtube.com/@aqrsitconsulting"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Canal de YouTube de AQRS IT Consulting">
              YouTube
            </a>
          </div>
        </div>
      </div>
      <p class="mx-auto mt-10 max-w-7xl border-t border-white/10 px-5 pt-6 text-xs lg:px-8">© <span data-year></span> AQRS IT Consulting. Proyecto académico — Universidad Galileo.</p>
    </footer>`;
}

document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
const menu = document.querySelector('[data-menu]');
menu?.addEventListener('click', () => {
  const nav = document.querySelector('[data-nav]');
  nav?.classList.toggle('hidden');
  menu.setAttribute('aria-expanded', String(!nav?.classList.contains('hidden')));
});

document.querySelectorAll('form[data-demo]').forEach(form => form.addEventListener('submit', event => {
  event.preventDefault();
  const message = form.querySelector('[data-message]');
  if (message) message.textContent = '¡Gracias! Su mensaje fue preparado correctamente. Conecte un servicio de formularios antes de publicar.';
  form.reset();
}));

const chart = document.querySelector('[data-chart]');
if (chart) chart.innerHTML = [40,65,48,78,58,90,72,88,63,95].map(n => `<i style="height:${n}%" class="flex-1 rounded-t bg-gradient-to-t from-blue-700 to-cyan-400"></i>`).join('');

const values = document.querySelector('[data-values]');
if (values) values.innerHTML = ['Responsabilidad','Innovación','Honestidad','Compromiso','Calidad'].map((value, index) => `<div class="rounded-xl border border-white/10 bg-slate-900 p-5"><span class="text-sm text-cyan-300">0${index + 1}</span><p class="mt-3 font-bold">${value}</p></div>`).join('');

const faqs = document.querySelector('[data-faqs]');
if (faqs) faqs.innerHTML = [
  ['¿Cuál es su horario de atención?','Atendemos de lunes a viernes de 8:00 a 17:00 horas. Los planes de monitoreo funcionan 24/7.'],
  ['¿Trabajan fuera de la capital?','Sí. Ofrecemos soporte remoto en todo Guatemala y coordinamos visitas según ubicación y alcance.'],
  ['¿Cómo se cotiza un proyecto?','Iniciamos con una conversación y un diagnóstico. Luego presentamos alcance, entregables, tiempos y precio.'],
  ['¿Qué métodos de pago aceptan?','Transferencia bancaria, depósito y otros medios acordados en la propuesta comercial.'],
  ['¿Ofrecen garantía?','Sí. Cada proyecto indica su período de garantía y las condiciones de soporte posteriores.'],
  ['¿Atienden emergencias?','Los clientes con plan de soporte pueden acceder a canales prioritarios según el acuerdo contratado.']
].map(([question, answer], index) => `
  <details class="group border-b border-slate-950 bg-transparent">
    <summary class="grid cursor-pointer list-none grid-cols-[42px_1fr_auto] items-center gap-3 py-7 sm:grid-cols-[70px_1fr_auto]">
      <span class="mono text-xs font-bold text-blue-700">
        0${index + 1}
      </span>
      <span class="text-lg font-black sm:text-xl">
        ${question}
      </span>
      <span class="grid h-9 w-9 place-items-center border border-slate-950 text-xl font-normal transition group-open:bg-lime-300">
        +
      </span>
    </summary>
    <p class="max-w-2xl pb-8 pl-[54px] leading-7 text-slate-600 sm:pl-[82px]">
      ${answer}
    </p>
  </details>
`).join('');

const posts = document.querySelector('[data-posts]');
if (posts) posts.innerHTML = [
  ['Día 1','El origen de AQRS','Presentamos nuestra propuesta y el problema empresarial que queremos resolver.','https://aqrs-angel.blogspot.com/2026/08/dia-1-el-origen-de-aqrs-it-consulting.html'],
  ['Día 2','Cuando la red detiene el negocio','Señales de que la conectividad necesita una revisión profesional.','https://aqrs-angel.blogspot.com/2026/08/dia-2-cuando-la-red-detiene-el-negocio.html'],
  ['Día 3','Ciberseguridad para PYMES','Cinco controles básicos para proteger usuarios e información.','https://aqrs-angel.blogspot.com/2026/08/dia-3-ciberseguridad-para-pequenas-y.html'],
  ['Día 4','Monitoreo que previene fallos','Cómo las alertas tempranas reducen tiempos de interrupción.','https://aqrs-angel.blogspot.com/2026/08/dia-4-monitoreo-que-ayuda-prevenir.html'],
  ['Día 5','Virtualización inteligente','Más flexibilidad y aprovechamiento de la infraestructura.','https://aqrs-angel.blogspot.com/2026/08/dia-5-virtualizacion-inteligente-para.html'],
  ['Día 6','El valor del soporte preventivo','Por qué anticiparse cuesta menos que reaccionar a una emergencia.','https://aqrs-angel.blogspot.com/2026/08/dia-6-el-valor-del-soporte-tecnico.html'],
  ['Día 7','Nuestra hoja de ruta','Conclusiones de la semana y próximos pasos para AQRS.','https://aqrs-angel.blogspot.com/2026/08/dia-7-nuestra-hoja-de-ruta-para-aqrs-it.html']
].map(([day, title, description, url], index) => `
  <article class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
    <div class="h-2 bg-gradient-to-r ${index % 2 ? 'from-cyan-400 to-blue-600' : 'from-blue-700 to-indigo-500'}"></div>
    <div class="p-7">
      <div class="flex items-center justify-between gap-4">
        <p class="text-sm font-black uppercase tracking-widest text-blue-600">${day}</p>
        <span class="rounded-full px-3 py-1 text-xs font-bold ${url ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}">
          ${url ? 'Publicado' : 'Pendiente'}
        </span>
      </div>
      <h2 class="mt-3 text-2xl font-black">${title}</h2>
      <p class="mt-3 leading-7 text-slate-600">${description}</p>
      ${url
        ? `<a href="${url}" target="_blank" rel="noopener noreferrer" class="mt-6 inline-block font-black text-blue-700 hover:text-blue-500">Leer en Blogger →</a>`
        : '<p class="mono mt-6 text-xs font-bold uppercase tracking-wider text-slate-400">Se publicará en Blogger</p>'}
    </div>
  </article>
`).join('');
