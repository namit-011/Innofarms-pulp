/* ========================================
   INNOFARMS ASEPTIC PULP — APP LOGIC
   ======================================== */

// ── PRODUCT DATA ──────────────────────────────────────────────
const PRODUCTS = [
  {
    id: 'apple',
    name: 'Apple Pulp',
    latin: 'Malus domestica',
    emoji: '🍎',
    color: '#ef4444',
    bgGrad: 'linear-gradient(135deg,#fef2f2,#fecaca)',
    desc: 'High-altitude apple pulp with deep red colour and rich tartness. Ideal for juice blends, baby food, and bakery fillings.',
    specs: ['Brix: 12–14°', 'pH: 3.4–3.8', 'Colour: Deep Red'],
    applications: ['Juice & Nectars', 'Baby Food', 'Jams', 'Beverages'],
    origin: 'Kashmir & Himachal Pradesh',
    season: 'Aug – Oct',
    coa: null,
  },
  {
    id: 'guava',
    name: 'Guava Pulp',
    latin: 'Psidium guajava',
    emoji: '🍈',
    color: '#84cc16',
    bgGrad: 'linear-gradient(135deg,#f7fee7,#d9f99d)',
    desc: 'Creamy pink guava pulp with high vitamin C content and distinctive tropical aroma. Perfect for RTS beverages, jams, and dairy blends.',
    specs: ['Brix: 8–10°', 'pH: 3.5–4.0', 'Colour: Pink-White'],
    applications: ['Beverages', 'Ice Cream', 'Jams', 'Dairy'],
    origin: 'Maharashtra & Rajasthan',
    season: 'Year-round',
    coa: 'COA/Guava pulp COA.docx (4).pdf',
    image: 'Images/guava pulp.jpg',
    imgPos: 'center 80%',
  },
  {
    id: 'seabuckthorn',
    name: 'Seabuckthorn Pulp',
    latin: 'Hippophae rhamnoides',
    emoji: '🫐',
    color: '#f59e0b',
    bgGrad: 'linear-gradient(135deg,#fffbeb,#fde68a)',
    desc: 'Rare super-fruit pulp, extraordinarily rich in Omega-7, vitamins A, C & E. A prized ingredient in nutraceuticals and wellness drinks.',
    specs: ['Brix: 6–8°', 'pH: 2.8–3.2', 'Colour: Deep Orange'],
    applications: ['Nutraceuticals', 'Health Drinks', 'Cosmetics', 'Supplement Blends'],
    origin: 'Ladakh & Himachal Pradesh',
    season: 'Sep – Nov',
    coa: 'COA/Seabuckthorn pulp COA.docx (2).pdf',
    image: 'Images/sea buck thorn pulp.jpeg',
    imgPos: 'center 60%',
  },
  {
    id: 'grapes',
    name: 'Grape Pulp',
    latin: 'Vitis vinifera',
    emoji: '🍇',
    color: '#7c3aed',
    bgGrad: 'linear-gradient(135deg,#f5f3ff,#ddd6fe)',
    desc: 'Deep-coloured grape pulp with natural anthocyanins and balanced sugar profile. Excellent for wine-derivative products, juices, and confectionery.',
    specs: ['Brix: 14–18°', 'pH: 3.3–3.7', 'Colour: Deep Purple'],
    applications: ['Juice Blends', 'Confectionery', 'Wine Products', 'Beverages'],
    origin: 'Nashik, Maharashtra',
    season: 'Mar – May',
    coa: null,
  },
  {
    id: 'litchi',
    name: 'Litchi Pulp',
    latin: 'Litchi chinensis',
    emoji: '🍒',
    color: '#ec4899',
    bgGrad: 'linear-gradient(135deg,#fdf2f8,#f9a8d4)',
    desc: 'Delicate floral litchi pulp preserving the signature aroma and sweetness of premium Shahi litchi variety. Highly sought in premium beverages.',
    specs: ['Brix: 16–20°', 'pH: 3.8–4.2', 'Colour: Translucent White'],
    applications: ['Premium Beverages', 'Ice Cream', 'Mocktails', 'Dairy Desserts'],
    origin: 'Bihar & Uttarakhand',
    season: 'May – Jun',
    coa: 'COA/Aseptic Litchi COA.docx.pdf',
    image: 'Images/litchi pulp.jpeg',
    imgPos: 'center 55%',
  },
  {
    id: 'mango',
    name: 'Mango Pulp',
    latin: 'Mangifera indica',
    emoji: '🥭',
    color: '#f59e0b',
    bgGrad: 'linear-gradient(135deg,#fffbeb,#fed7aa)',
    desc: 'Premium Alphonso and Totapuri mango pulp with rich fibre, intense flavour, and natural golden-yellow colour. India\'s most-exported fruit pulp.',
    specs: ['Brix: 14–20°', 'pH: 3.6–4.0', 'Colour: Deep Yellow'],
    applications: ['Juice & Pulp Drinks', 'Ice Cream', 'Jams', 'Baby Food'],
    origin: 'Ratnagiri & Konkan Belt',
    season: 'Mar – Jun',
    coa: 'COA/Mango pulp COA.docx.pdf',
  },
  {
    id: 'jamun',
    name: 'Jamun Pulp',
    latin: 'Syzygium cumini',
    emoji: '🫐',
    color: '#4c1d95',
    bgGrad: 'linear-gradient(135deg,#ede9fe,#c4b5fd)',
    desc: 'Deep purple jamun pulp rich in anthocyanins, antioxidants, and clinically studied for glycaemic management. A rising star in functional foods.',
    specs: ['Brix: 8–12°', 'pH: 3.0–3.5', 'Colour: Deep Purple'],
    applications: ['Functional Beverages', 'Diabetic Foods', 'Nutraceuticals', 'Pharma'],
    origin: 'UP & Karnataka',
    season: 'Jun – Aug',
    coa: 'COA/Jamun pulp COA.docx (4).pdf',
  },
  {
    id: 'pineapple',
    name: 'Pineapple Pulp',
    latin: 'Ananas comosus',
    emoji: '🍍',
    color: '#eab308',
    bgGrad: 'linear-gradient(135deg,#fefce8,#fef08a)',
    desc: 'Tropical pineapple pulp with vibrant yellow colour, high bromelain enzyme content, and bold tangy flavour — ideal for beverages and marinades.',
    specs: ['Brix: 12–16°', 'pH: 3.4–3.9', 'Colour: Golden Yellow'],
    applications: ['Beverages', 'Marinades', 'Dairy Blends', 'Confectionery'],
    origin: 'Meghalaya & Northeast India',
    season: 'Apr – Jul',
    coa: 'COA/Pineapple pulp COA.docx (3).pdf',
    image: 'Images/pineapple pulp.jpeg',
    imgPos: 'right center',
  },
  {
    id: 'tomato',
    name: 'Tomato Paste',
    latin: 'Solanum lycopersicum',
    emoji: '🍅',
    color: '#dc2626',
    bgGrad: 'linear-gradient(135deg,#fff1f2,#fecaca)',
    desc: 'Rich concentrated tomato paste with deep red colour, high lycopene content, and balanced acidity. Perfect for sauces, soups, ready-to-eat meals, and ketchup manufacturing.',
    specs: ['Brix: 28–32°', 'pH: 4.0–4.5', 'Colour: Deep Red'],
    applications: ['Sauces & Ketchup', 'Ready Meals', 'Soups', 'Marinades'],
    origin: 'Andhra Pradesh & Maharashtra',
    season: 'Oct – Feb',
    coa: null,
    image: 'Images/tomato pulp.jpeg',
    imgPos: 'center 45%',
  },
  {
    id: 'chilli',
    name: 'Chilli Paste',
    latin: 'Capsicum annuum',
    emoji: '🌶️',
    color: '#ef4444',
    bgGrad: 'linear-gradient(135deg,#fff7ed,#fed7aa)',
    desc: 'Aseptic red & green chilli paste with precise heat units, vibrant colour, and authentic pungency. Available in varying Scoville ranges to suit sauces, condiments, and spice blends.',
    specs: ['SHU: 5,000–50,000', 'Moisture: ≤12%', 'Colour: Bright Red/Green'],
    applications: ['Hot Sauces', 'Condiments', 'Spice Blends', 'Ready Meals'],
    origin: 'Telangana & Andhra Pradesh',
    season: 'Nov – Mar',
    coa: null,
  },
  {
    id: 'garlic',
    name: 'Garlic Paste',
    latin: 'Allium sativum',
    emoji: '🧄',
    color: '#ca8a04',
    bgGrad: 'linear-gradient(135deg,#fefce8,#fef9c3)',
    desc: 'Farm-fresh aseptic garlic paste with full allicin potency preserved. No added preservatives or sulphites — ideal for food manufacturers, restaurants, and ready-meal producers.',
    specs: ['Moisture: ≤65%', 'Allicin: High', 'Colour: Off-White'],
    applications: ['Ready Meals', 'Marinades', 'Sauces', 'Seasoning Blends'],
    origin: 'Madhya Pradesh & Rajasthan',
    season: 'Nov – Feb',
    coa: null,
  },
  {
    id: 'ginger',
    name: 'Ginger Paste',
    latin: 'Zingiber officinale',
    emoji: '🫚',
    color: '#d97706',
    bgGrad: 'linear-gradient(135deg,#fffbeb,#fde68a)',
    desc: 'Aseptically processed ginger paste retaining peak gingerol and volatile oil content for maximum flavour and functional benefit. No fillers, no additives.',
    specs: ['Moisture: ≤70%', 'Gingerol: High', 'Colour: Light Yellow'],
    applications: ['Ready Meals', 'Beverages', 'Nutraceuticals', 'Condiments'],
    origin: 'Kerala & Northeast India',
    season: 'Nov – Feb',
    coa: null,
  },
];

const MOQ_INFO = {
  '3kg':   { label: '3 kg',   moq: 'No MOQ',            pill: '3 kg' },
  '20kg':  { label: '20 kg',  moq: 'MOQ: 10 bags',      pill: '20 kg × 10' },
  '200kg': { label: '200 kg', moq: 'MOQ: 1 Metric Ton', pill: '200 kg × 5' },
};

// ── RENDER PRODUCT CARDS ──────────────────────────────────────
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  grid.innerHTML = PRODUCTS.map(p => `
    <div class="product-card" data-product="${p.id}">
      <div class="product-hero" style="background:${p.bgGrad}">
        ${p.image
          ? `<img src="${p.image}" alt="${p.name}" class="product-hero-img" style="object-position:${p.imgPos || 'center center'}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" />
             <span class="product-hero-fallback" style="display:none">${p.emoji}</span>
             <div class="product-hero-overlay" style="background:linear-gradient(to bottom, transparent 30%, ${p.bgGrad.match(/#[0-9a-f]{3,6}/gi)?.[1] || 'rgba(0,0,0,0.1)'} 100%)"></div>`
          : `<span class="product-hero-fallback">${p.emoji}</span>`
        }
      </div>
      <div class="product-body">
        <h3 class="product-name">${p.name}</h3>
        <p class="product-latin">${p.latin}</p>
        <p class="product-desc">${p.desc}</p>
        <div class="product-specs">
          ${p.specs.map(s => `<span class="spec-chip">${s}</span>`).join('')}
        </div>
        <div class="product-specs" style="margin-top:4px">
          <span class="spec-chip" style="background:#f0f9ff;color:#0369a1;border-color:#bae6fd">📍 ${p.origin}</span>
          <span class="spec-chip" style="background:#fff7ed;color:#c2410c;border-color:#fed7aa">🗓 ${p.season}</span>
        </div>
        <div class="product-packs">
          <h5>Available Pack Sizes</h5>
          <div class="pack-pills">
            <span class="pack-pill">3 kg <em style="font-style:normal;opacity:.6;font-size:.65rem"> (No MOQ)</em></span>
            <span class="pack-pill highlight">20 kg <em style="font-style:normal;font-size:.65rem"> (MOQ 10 bags)</em></span>
            <span class="pack-pill">200 kg <em style="font-style:normal;opacity:.6;font-size:.65rem"> (MOQ 1 MT)</em></span>
          </div>
        </div>
        <div class="product-actions">
          <button class="product-cta" onclick="openModal('${p.id}')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            Request Quote
          </button>
          ${p.coa ? `<a class="product-coa-btn" href="${p.coa}" target="_blank" download>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            COA
          </a>` : ''}
        </div>
      </div>
    </div>
  `).join('');
}

// ── MODAL ────────────────────────────────────────────────────
function openModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  document.getElementById('modalFruitIcon').textContent = product.emoji;
  document.getElementById('modalTitle').textContent = `Quote for ${product.name}`;
  document.getElementById('modalSubtitle').textContent = `Origin: ${product.origin} · Season: ${product.season}`;
  document.getElementById('modalPulpField').value = product.name;
  document.getElementById('hiddenPulpType').value = product.name;

  const overlay = document.getElementById('modalOverlay');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Reset form
  document.getElementById('modalQuoteForm').reset();
  document.getElementById('modalPulpField').value = product.name;
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

// Close modal on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// ── FORM SUBMISSIONS ─────────────────────────────────────────
function submitModalForm(e) {
  e.preventDefault();
  const form = e.target;
  const data = Object.fromEntries(new FormData(form));

  console.log('Quote request (modal):', data);
  // TODO: Replace with your actual API endpoint / EmailJS / form service
  // Example: fetch('/api/quote', { method: 'POST', body: JSON.stringify(data) })

  closeModal();
  showToast();
}

function submitGeneralForm(e) {
  e.preventDefault();
  const form = e.target;
  const data = Object.fromEntries(new FormData(form));

  console.log('Quote request (general):', data);
  // TODO: Replace with your actual form handler

  form.reset();
  showToast();
}

function showToast() {
  const toast = document.getElementById('toast');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4000);
}

// ── NAVBAR SCROLL EFFECT ─────────────────────────────────────
function handleNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}
window.addEventListener('scroll', handleNavbarScroll, { passive: true });
handleNavbarScroll();

// ── HAMBURGER MENU ───────────────────────────────────────────
document.getElementById('hamburger').addEventListener('click', function() {
  const links = document.getElementById('navLinks');
  links.classList.toggle('open');
});

// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
  });
});

// ── SCROLL REVEAL ────────────────────────────────────────────
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  const revealTargets = document.querySelectorAll(
    '.why-card, .pack-card, .product-card, .trace-step, .ah-item'
  );

  revealTargets.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.05}s, transform 0.5s ease ${i * 0.05}s`;
    observer.observe(el);
  });
}

// ── SMOOTH ANCHOR SCROLL ─────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ── FAIRFARMS DATA ────────────────────────────────────────────
const FAIRFARMS = [
  {
    id: 'apple-juice',
    name: 'Apple Juice',
    tagline: '"Simply Apple, Nothing Much"',
    category: 'juice',
    catLabel: 'Fruit Juice',
    catColor: '#ef4444',
    image: 'https://cdn.shopify.com/s/files/1/1797/4963/products/300ml_apple-01.jpg?v=1669354816',
    origin: 'Kashmir Orchards',
    desc: 'Kashmiri apples sourced directly from farmers, tree-ripened for maximum natural sweetness. 15% pure apple pulp — no concentrate, no artificial colour.',
    features: ['15% Real Fruit Pulp', 'No Concentrate', 'Rich in Vitamin C', 'Tree-Ripened', 'No Artificial Colour'],
    amazon: 'https://www.amazon.in/dp/B0BMB71YS1',
  },
  {
    id: 'guava-juice',
    name: 'Guava Juice',
    tagline: 'Pulpy. Refreshing. Natural.',
    category: 'juice',
    catLabel: 'Fruit Juice',
    catColor: '#84cc16',
    image: 'https://cdn.shopify.com/s/files/1/1797/4963/products/WhatsApp-Image-2022-09-30-at-11.38.58-1.jpg?v=1669354819',
    origin: 'Sawai Madhopur, Rajasthan',
    desc: 'Rajasthan guava pulp with natural grits and real pulpy texture. Rich in Vitamin C and dietary fibre, no added colour.',
    features: ['15% Real Fruit Pulp', 'Natural Pulpy Grits', 'High Vitamin C', 'High Dietary Fibre', 'No Added Colour'],
    amazon: 'https://www.amazon.in/dp/B0BL6YQ888',
  },
  {
    id: 'litchi-juice',
    name: 'Litchi Juice',
    tagline: 'Floral. Sweet. Himalayan.',
    category: 'juice',
    catLabel: 'Fruit Juice',
    catColor: '#ec4899',
    image: 'https://cdn.shopify.com/s/files/1/1797/4963/products/300_nrml_litchi-01.jpg?v=1669354805',
    origin: 'Uttarakhand Farms',
    desc: 'Tree-ripened Uttarakhand litchi with its signature floral aroma preserved. No artificial colour or concentrate.',
    features: ['10% Real Fruit Pulp', 'Tree-Ripened Litchi', 'Natural Floral Aroma', 'No Artificial Colour', 'No Concentrate'],
    amazon: 'https://www.amazon.in/dp/B0BJVS73WB',
  },
  {
    id: 'mango-juice',
    name: 'Mango Juice',
    tagline: 'Dusseri. Diabetic-Friendly.',
    category: 'juice',
    catLabel: 'Fruit Juice',
    catColor: '#f59e0b',
    image: null,
    emoji: '🥭',
    bgGrad: 'linear-gradient(135deg, #92400e 0%, #b45309 50%, #d97706 100%)',
    origin: 'Maliyabad, Uttar Pradesh',
    desc: 'Dusseri mango sourced directly from Maliyabad farmers. No added sugar, no artificial colour — low calorie and diabetic-friendly.',
    features: ['No Added Sugar', 'Low Calorie', 'Diabetic-Friendly', 'Dusseri Variety', 'No Artificial Colour'],
    amazon: 'https://www.amazon.in/dp/B0BJQCHKLM',
  },
  {
    id: 'sf-apple',
    name: 'Sugar-Free Apple',
    tagline: 'Kashmir apple, zero sugar',
    category: 'sugarfree',
    catLabel: 'Sugar-Free',
    catColor: '#22c55e',
    image: 'https://cdn.shopify.com/s/files/1/1797/4963/products/apple_SUGARFREE-01.jpg?v=1669354831',
    origin: 'Kashmir Orchards',
    desc: 'Pure Kashmiri apple pulp with no added sugar. All the crispness of a fresh apple, none of the guilt.',
    features: ['Zero Added Sugar', 'Calorie-Free', 'Pure Apple Pulp', 'Kashmir Origin', 'No Artificial Colour'],
    amazon: 'https://www.amazon.in/dp/B0BV2W5VFC',
  },
  {
    id: 'sf-guava',
    name: 'Sugar-Free Guava',
    tagline: 'Calorie-free, pulpy goodness',
    category: 'sugarfree',
    catLabel: 'Sugar-Free',
    catColor: '#22c55e',
    image: 'https://cdn.shopify.com/s/files/1/1797/4963/products/guava1-01.jpg?v=1669354842',
    origin: 'Sawai Madhopur, Rajasthan',
    desc: 'Sawai Madhopur guava with rock salt and natural stabilisers. Zero sugar, no artificial colour — just pure guava.',
    features: ['Zero Added Sugar', 'Natural Pulpy Grits', 'Rock Salt Added', 'No Artificial Colour', 'Calorie-Free'],
    altLink: 'https://www.foodwalas.com/products/ffj-sugarfree-guava-juice',
  },
  {
    id: 'sf-litchi',
    name: 'Sugar-Free Litchi',
    tagline: 'Himalayan litchi, guilt-free',
    category: 'sugarfree',
    catLabel: 'Sugar-Free',
    catColor: '#22c55e',
    image: 'https://cdn.shopify.com/s/files/1/1797/4963/products/litchi_sugarfree-01.jpg?v=1669354853',
    origin: 'Uttarakhand Farms',
    desc: 'Uttarakhand litchi pulp with no added sugar or artificial colours. Naturally sweetened — all the flavour, zero guilt.',
    features: ['Zero Added Sugar', 'Tree-Ripened Litchi', 'No Artificial Colour', 'Natural Sweetness', 'Calorie-Free'],
    altLink: 'https://www.foodwalas.com/products/ffj-sugarfree-litchi-juice',
  },
  {
    id: 'mango-bar',
    name: 'Mango Bar',
    tagline: 'Concentrated mango goodness',
    category: 'bar',
    catLabel: 'Fruit Bar',
    catColor: '#f59e0b',
    image: 'https://cdn.shopify.com/s/files/1/1797/4963/products/mango_bar-01.jpg?v=1669354881',
    origin: 'Maliyabad, Uttar Pradesh',
    desc: 'Each 20g bar is made from real Dusseri mango pulp — a natural, portable snack for adults and kids. Pack of 20 bars.',
    features: ['20g × 20 Bars/Pack', 'Real Fruit Pulp', 'No Artificial Additive', 'Natural Snack', 'For All Ages'],
    altLink: 'https://www.foodwalas.com/collections/fairfarms',
  },
  {
    id: 'guava-bar',
    name: 'Guava Bar',
    tagline: 'Tangy guava in every bite',
    category: 'bar',
    catLabel: 'Fruit Bar',
    catColor: '#84cc16',
    image: 'https://cdn.shopify.com/s/files/1/1797/4963/products/guava-01.jpg?v=1669354870',
    origin: 'Sawai Madhopur, Rajasthan',
    desc: 'Guava pulp compressed into a delicious, fibre-rich snack bar. High in Vitamin C, made for everyday healthy munching.',
    features: ['20g × 20 Bars/Pack', 'High Vitamin C', 'High Dietary Fibre', 'Real Guava Pulp', 'No Artificial Additive'],
    amazon: 'https://www.amazon.in/dp/B0BKWJS6R4',
  },
];

// ── RENDER FAIRFARMS ──────────────────────────────────────────
function renderFairFarms(filter = 'all') {
  const grid = document.getElementById('fairfarmsGrid');
  if (!grid) return;

  const items = filter === 'all' ? FAIRFARMS : FAIRFARMS.filter(p => p.category === filter);

  grid.innerHTML = items.map(p => {
    const buyLink = p.amazon || p.altLink || '#contact';
    const isAmazon = !!p.amazon;
    const buyLabel = isAmazon
      ? `<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" style="flex-shrink:0"><path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.226-.088.39-.045.525.13.12.174.09.336-.12.48-1.244.714-2.578 1.195-4 1.44-1.42.248-2.707.373-3.868.373-2.136 0-4.125-.353-5.964-1.057a16.614 16.614 0 0 1-4.828-3.078c-.29-.265-.29-.535-.012-.817zm2.78-3.87c.18.195.395.17.645-.07l1.168-1.113c.24-.24.267-.445.08-.615a5.1 5.1 0 0 0-1.4-.87c-.58-.25-1.2-.37-1.86-.37-.93 0-1.74.21-2.43.63-.28.17-.28.38 0 .63l.9.85c.19.17.4.18.63.03.38-.24.8-.36 1.26-.36.36 0 .68.06.97.19.28.12.52.29.7.5z"/></svg> Buy on Amazon`
      : 'View on Foodwalas ↗';
    const btnClass = isAmazon ? 'amazon-btn' : 'alt-btn';

    const mediaHtml = p.image
      ? `<img class="ff-ci" src="${p.image}" alt="${p.name}" loading="lazy"
             onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" />
         <div class="ff-ci-fallback" style="display:none;background:${p.bgGrad || 'linear-gradient(135deg,#166534,#15803d)'}">
           <span style="font-size:4.5rem">${p.emoji || '🍃'}</span>
         </div>`
      : `<div class="ff-ci-fallback" style="background:${p.bgGrad || 'linear-gradient(135deg,#166534,#15803d)'}">
           <span style="font-size:4.5rem">${p.emoji || '🍃'}</span>
         </div>`;

    return `
    <div class="ff-card" data-cat="${p.category}" data-id="${p.id}">
      <div class="ff-card-media">${mediaHtml}</div>
      <div class="ff-card-base">
        <span class="ff-cat-tag" style="--tc:${p.catColor}">${p.catLabel}</span>
        <h4>${p.name}</h4>
      </div>
      <div class="ff-card-overlay">
        <span class="ff-cat-tag" style="--tc:${p.catColor}">${p.catLabel}</span>
        <h4>${p.name}</h4>
        <p class="ff-ov-tagline">${p.tagline}</p>
        <p class="ff-ov-desc">${p.desc}</p>
        <div class="ff-ov-pills">
          ${p.features.map(f => `<span>${f}</span>`).join('')}
        </div>
        <div class="ff-ov-footer">
          <span class="ff-origin-label">📍 ${p.origin}</span>
          <a href="${buyLink}" target="_blank" class="ff-buy-btn ${btnClass}">${buyLabel}</a>
        </div>
      </div>
      <div class="ff-tap-hint">👆 Tap for details</div>
    </div>`;
  }).join('');

  // Touch support — tap to toggle overlay on mobile
  grid.querySelectorAll('.ff-card').forEach(card => {
    card.addEventListener('click', function(e) {
      if (e.target.closest('a')) return;
      const isActive = this.classList.contains('active');
      grid.querySelectorAll('.ff-card.active').forEach(c => c.classList.remove('active'));
      if (!isActive) this.classList.add('active');
    });
  });
}

// ── FAIRFARMS FILTER TABS ─────────────────────────────────────
function initFairFarmsFilters() {
  document.querySelectorAll('.ff-filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.ff-filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const grid = document.getElementById('fairfarmsGrid');
      // Fade out
      grid.style.opacity = '0';
      grid.style.transform = 'translateY(8px)';
      setTimeout(() => {
        renderFairFarms(this.dataset.cat);
        grid.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
        grid.style.opacity = '1';
        grid.style.transform = 'translateY(0)';
      }, 200);
    });
  });
}

// ── WHY ASEPTIC TABS ──────────────────────────────────────────
function initWhyTabs() {
  const btns  = document.querySelectorAll('.why-tab-btn');
  const panels = document.querySelectorAll('.why-tab-panel');
  if (!btns.length) return;

  btns.forEach(btn => {
    btn.addEventListener('click', function () {
      const idx = this.dataset.tab;
      btns.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      this.classList.add('active');
      document.querySelector(`.why-tab-panel[data-panel="${idx}"]`).classList.add('active');
    });
  });
}

// ── INIT ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  renderFairFarms();
  initFairFarmsFilters();
  initScrollReveal();
  initWhyTabs();
});
