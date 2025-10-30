// Navegação móvel
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  // Fecha o menu ao clicar em um link (mobile)
  nav.addEventListener('click', (e)=>{
    const target = e.target;
    if(target instanceof Element && target.tagName === 'A'){
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded','false');
    }
  });
}

// Lead form (demo)
function handleLead(e){
  e.preventDefault();
  const input = document.getElementById('email');
  const feedback = document.getElementById('lead-feedback');
  const email = input?.value?.trim();
  if(!email){
    if(feedback){ feedback.textContent = 'Por favor, informe um e‑mail válido.'; feedback.className = 'lead-feedback error'; }
    input?.focus();
    return false;
  }
  if(feedback){ feedback.textContent = 'Obrigado! Em breve entraremos em contato.'; feedback.className = 'lead-feedback success'; }
  input.value = '';
  return false;
}

// Ano no rodapé
document.getElementById('year').textContent = new Date().getFullYear();

// Sem carrossel: layout em grade, nada a fazer aqui
