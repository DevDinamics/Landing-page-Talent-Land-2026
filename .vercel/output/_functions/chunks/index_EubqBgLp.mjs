import { c as createComponent, $ as $$Image } from './_astro_assets_PKPqr18o.mjs';
import 'piccolore';
import { c as createRenderInstruction, r as renderHead, b as renderSlot, d as renderTemplate, m as maybeRenderHead, e as renderComponent, f as addAttribute } from './entrypoint_DxP5BAJB.mjs';
import 'clsx';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useRef, useEffect, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { GraduationCap, Coffee, Award, Users, CheckCircle2, User, Mail, Phone, Code2, Link, FileText, UploadCloud, Briefcase, Loader2 } from 'lucide-react';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es" class="scroll-smooth bg-[#070708]"> <head><meta charset="UTF-8"><meta name="description" content="Únete a Qualtop en Talent Land 2026"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/png" href="/favicon.png"><link href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,700;1,400&family=Montserrat:wght@400;500;700&family=Poppins:wght@400;500;700&display=swap" rel="stylesheet"><title>${title}</title>${renderHead()}</head> <body class="bg-[#070708] text-white antialiased"> ${renderSlot($$result, $$slots["default"])}</body></html>`;
}, "/Users/mac/Downloads/Talend-Land/landing-qualtop/src/layouts/Layout.astro", void 0);

const logoQualtop$1 = new Proxy({"src":"/_astro/Logo4Qualtop.hHhY6h_G.png","width":1823,"height":532,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mac/Downloads/Talend-Land/landing-qualtop/src/assets/Logo4Qualtop.png";
							}
							
							return target[name];
						}
					});

const atomoTech = new Proxy({"src":"/_astro/2-Secundario.kGHZ_93c.png","width":3202,"height":1320,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mac/Downloads/Talend-Land/landing-qualtop/src/assets/2-Secundario.png";
							}
							
							return target[name];
						}
					});

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="w-full flex flex-col items-center py-5 gap-4 mb-16 border-b border-white/5 bg-black/40 backdrop-blur-md relative z-50"> <span class="text-[10px] md:text-xs font-barlow text-gray-400 uppercase tracking-[0.2em] font-medium">
Qualtop en Talent Land México 2026
</span> <div class="flex items-center gap-8 md:gap-12"> ${renderComponent($$result, "Image", $$Image, { "src": logoQualtop$1, "alt": "Logo Qualtop", "class": "h-8 md:h-9 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300" })} <div class="h-6 w-px bg-gradient-to-b from-transparent via-gray-600 to-transparent"></div> ${renderComponent($$result, "Image", $$Image, { "src": atomoTech, "alt": "Logo Talent Land", "class": "h-8 md:h-9 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300" })} </div> </header>`;
}, "/Users/mac/Downloads/Talend-Land/landing-qualtop/src/components/Navbar.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative text-center mb-10 md:mb-20 pt-10 min-h-[85vh] md:min-h-[70vh] flex flex-col items-center overflow-hidden" data-astro-cid-bbe6dxrz> <div id="hero-title-parallax" class="absolute top-16 md:top-10 left-0 right-0 z-0 flex justify-center pointer-events-none origin-top px-4" data-astro-cid-bbe6dxrz> <h1 class="text-5xl sm:text-6xl md:text-8xl font-black font-poppins tracking-tighter leading-[0.85] md:leading-none" data-astro-cid-bbe6dxrz> <span class="text-transparent block" style="-webkit-text-stroke: 1px rgba(255,255,255,0.6);" data-astro-cid-bbe6dxrz>
TALENTO +
</span> <span class="text-qualtop-primary block" data-astro-cid-bbe6dxrz>TECNOLOGÍA:</span> </h1> </div> <div class="relative z-10 max-w-4xl mx-auto space-y-6 mt-[200px] sm:mt-[220px] md:mt-[300px] bg-[#070708]/60 md:bg-[#070708]/80 backdrop-blur-md pt-8 md:pt-10 pb-8 px-6 rounded-3xl border border-white/5 md:border-none" data-astro-cid-bbe6dxrz> <h2 class="text-xl md:text-3xl font-montserrat font-medium text-white leading-tight" data-astro-cid-bbe6dxrz>
Soluciones que mueven al mundo
</h2> <p class="max-w-2xl mx-auto text-qualtop-grayLight leading-relaxed font-barlow text-base md:text-lg px-2" data-astro-cid-bbe6dxrz>
En Qualtop, sabemos que las grandes soluciones nacen cuando las mentes brillantes tienen las herramientas correctas. Crea soluciones de alto impacto respaldado por la tecnología de <span class="text-white font-bold" data-astro-cid-bbe6dxrz>Google Cloud y Oracle.</span> </p> <div class="pt-6 flex justify-center" data-astro-cid-bbe6dxrz> <a href="#registro" class="generate-button group no-underline" data-astro-cid-bbe6dxrz> <svg class="dots absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 200 60" data-astro-cid-bbe6dxrz></svg> <div class="relative z-10 flex items-center gap-3" data-astro-cid-bbe6dxrz> <svg class="icon w-5 h-5 md:w-6 md:h-6 text-black group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 26" data-astro-cid-bbe6dxrz> <path d="M5.16 2.62L5.81 1c.03-.08.11-.13.2-.13s.17.05.2.13l.64 1.62 1.6.65c.08.03.13.11.13.2s-.05.17-.13.2l-1.6.65-.64 1.62c-.03.08-.11.13-.2.13s-.17-.05-.2-.13L5.16 4.31l-1.6-.65c-.08-.03-.13-.11-.13-.2s.05-.17.13-.2l1.6-.65z" fill="currentColor" data-astro-cid-bbe6dxrz></path> <path d="M11.24 9.44c.31-.14.56-.39.7-.7l1.61-3.62c.17-.38.54-.62.95-.62s.78.24.95.62l1.61 3.62c.14.31.39.56.7.7l3.62 1.61c.38.17.62.54.62.95s-.24.78-.62.95l-3.62 1.61c-.31.14-.56.39-.7.7l-1.61 3.62c-.17.38-.54.62-.95.62s-.78-.24-.95-.62l-1.61-3.62c-.14-.31-.39-.56-.7-.7L7.62 12.95c-.38-.17-.62-.54-.62-.95s.24-.78.62-.95l3.62-1.61z" fill="currentColor" data-astro-cid-bbe6dxrz></path> </svg> <span class="font-poppins font-bold text-base md:text-xl tracking-[0.1em] text-white" data-astro-cid-bbe6dxrz>¡ACEPTO EL RETO!</span> </div> </a> </div> </div> </section>  ${renderScript($$result, "/Users/mac/Downloads/Talend-Land/landing-qualtop/src/components/Hero.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/mac/Downloads/Talend-Land/landing-qualtop/src/components/Hero.astro", void 0);

function Particulas({ count = 4e3 }) {
  const mesh = useRef();
  const mouse = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX / window.innerWidth * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push(THREE.MathUtils.randFloatSpread(120), THREE.MathUtils.randFloatSpread(120), THREE.MathUtils.randFloatSpread(120));
    }
    return new Float32Array(temp);
  }, [count]);
  useFrame((state, delta) => {
    state.clock.getElapsedTime();
    mesh.current.rotation.y += delta * 0.1;
    mesh.current.rotation.x += (mouse.current.y * 0.5 - mesh.current.rotation.x) * 0.05;
    mesh.current.rotation.z += (mouse.current.x * 0.5 - mesh.current.rotation.z) * 0.05;
  });
  return /* @__PURE__ */ jsxs("points", { ref: mesh, children: [
    /* @__PURE__ */ jsx("bufferGeometry", { children: /* @__PURE__ */ jsx("bufferAttribute", { attach: "attributes-position", count: particles.length / 3, array: particles, itemSize: 3 }) }),
    /* @__PURE__ */ jsx("pointsMaterial", { size: 0.15, color: "#ffffff", transparent: true, opacity: 0.6, sizeAttenuation: true, blending: THREE.AdditiveBlending })
  ] });
}
function Fondo3D() {
  return /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 z-0 bg-[#070708] pointer-events-none", children: [
    /* @__PURE__ */ jsx(Canvas, { camera: { position: [0, 0, 50], fov: 75 }, gl: { alpha: true }, children: /* @__PURE__ */ jsx(Particulas, {}) }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent to-[#070708]" })
  ] });
}

const logoTalent = new Proxy({"src":"/_astro/talend-land.C3YTfKMe.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mac/Downloads/Talend-Land/landing-qualtop/src/assets/talend-land.png";
							}
							
							return target[name];
						}
					});

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Crecimiento = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", '<section id="section-crecimiento" class="relative w-full py-20 md:py-32 px-6 overflow-hidden bg-[#070708] text-white"> <div class="absolute inset-0 z-0 pointer-events-none"> <div class="absolute top-[5%] left-[-15%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#E63B11] opacity-[0.06] blur-[80px] md:blur-[150px] rounded-full"></div> <div class="absolute bottom-[5%] right-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-green-500 opacity-[0.04] blur-[80px] md:blur-[130px] rounded-full"></div> <div class="watermark-1 absolute top-[5%] -left-10 md:-left-20 opacity-[0.05] md:opacity-10 w-[40%] md:w-[25%] h-auto grayscale brightness-200 rotate-[15deg]"> ', ' </div> <div class="watermark-2 absolute bottom-[5%] -right-5 md:-right-10 opacity-[0.08] md:opacity-20 w-[50%] md:w-[30%] h-auto grayscale brightness-200 rotate-[-12deg]"> ', ' </div> </div> <div class="max-w-6xl mx-auto relative z-10"> <div class="text-center mb-16 md:mb-24 space-y-6"> <div class="flex justify-center -mt-6 mb-8 md:-mt-16 md:mb-14 relative z-20"> <div class="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center backdrop-blur-xl shadow-inner  transition-all duration-500 group rounded-2xl"> ', ' </div> </div> <h2 class="text-3xl md:text-6xl font-black font-poppins tracking-tighter uppercase leading-[0.9] text-white drop-shadow-lg">\nEl ecosistema donde <br> vas a crear.\n</h2> <p class="text-gray-400 max-w-2xl mx-auto leading-relaxed text-base md:text-lg font-barlow">\nProyectos reales, impacto global. Potenciamos tu capacidad en los sectores más dinámicos. En Qualtop aplicarás IA, Data y estrategias Multi-cloud para resolver retos críticos que mueven al mundo.\n</p> <div class="inline-block mt-4 md:mt-8"> <div class="px-6 py-3 border border-green-500/20 bg-green-500/5 backdrop-blur-md text-[10px] md:text-sm font-medium text-green-400 tracking-wider">\nAQUÍ TU APRENDIZAJE NO TIENE TECHO Y TRABAJAS CODO A CODO CON TECNOLOGÍAS DE VANGUARDIA\n</div> </div> </div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center scroll-reveal-container"> <div class="space-y-6 md:space-y-10 scroll-element-up text-center lg:text-left order-2 lg:order-1"> <h3 class="text-3xl md:text-5xl font-black font-poppins leading-tight uppercase tracking-tighter">\nTu crecimiento,<br> <span class="text-[#E63B11]">nuestra prioridad</span> </h3> <p class="text-gray-400 leading-relaxed text-base md:text-lg max-w-xl font-barlow text-center lg:text-justify mx-auto lg:mx-0">\nUn entorno diseñado para tu <span class="text-white font-semibold">bienestar y desarrollo</span>. Sabemos lo que valoras. En Qualtop te ofrecemos un espacio donde puedas <span class="text-white font-semibold">ser tú mismo</span> mientras te conviertes en el <span class="text-[#E63B11] font-bold">experto</span> que quieres ser:\n</p> </div> <div class="relative group scroll-element-up flex justify-center items-center order-1 lg:order-2" style="transition-delay: 200ms;"> ', " </div> </div> </div> </section> <script>\n  // Tu script de Parallax y Observer se mantiene igual, ya es funcional y responsivo.\n  window.addEventListener('scroll', () => {\n    const w1 = document.querySelector('.watermark-1');\n    const w2 = document.querySelector('.watermark-2');\n    if (!w1 || !w2) return;\n    const scrollY = window.scrollY;\n    w1.style.transform = `translateY(${scrollY * -0.05}px) rotate(${15 + scrollY * 0.02}deg)`;\n    w2.style.transform = `translateY(${scrollY * -0.1}px) rotate(${(-12) + scrollY * -0.04}deg)`;\n  });\n\n  const observer = new IntersectionObserver((entries) => {\n    entries.forEach(entry => {\n      if (entry.isIntersecting) {\n        entry.target.querySelectorAll('.scroll-element-up').forEach(el => {\n          el.classList.add('animate-reveal-up');\n        });\n      }\n    });\n  }, { threshold: 0.1 });\n\n  const target = document.querySelector('.scroll-reveal-container');\n  if (target) observer.observe(target);\n<\/script>"], ["", '<section id="section-crecimiento" class="relative w-full py-20 md:py-32 px-6 overflow-hidden bg-[#070708] text-white"> <div class="absolute inset-0 z-0 pointer-events-none"> <div class="absolute top-[5%] left-[-15%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#E63B11] opacity-[0.06] blur-[80px] md:blur-[150px] rounded-full"></div> <div class="absolute bottom-[5%] right-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-green-500 opacity-[0.04] blur-[80px] md:blur-[130px] rounded-full"></div> <div class="watermark-1 absolute top-[5%] -left-10 md:-left-20 opacity-[0.05] md:opacity-10 w-[40%] md:w-[25%] h-auto grayscale brightness-200 rotate-[15deg]"> ', ' </div> <div class="watermark-2 absolute bottom-[5%] -right-5 md:-right-10 opacity-[0.08] md:opacity-20 w-[50%] md:w-[30%] h-auto grayscale brightness-200 rotate-[-12deg]"> ', ' </div> </div> <div class="max-w-6xl mx-auto relative z-10"> <div class="text-center mb-16 md:mb-24 space-y-6"> <div class="flex justify-center -mt-6 mb-8 md:-mt-16 md:mb-14 relative z-20"> <div class="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center backdrop-blur-xl shadow-inner  transition-all duration-500 group rounded-2xl"> ', ' </div> </div> <h2 class="text-3xl md:text-6xl font-black font-poppins tracking-tighter uppercase leading-[0.9] text-white drop-shadow-lg">\nEl ecosistema donde <br> vas a crear.\n</h2> <p class="text-gray-400 max-w-2xl mx-auto leading-relaxed text-base md:text-lg font-barlow">\nProyectos reales, impacto global. Potenciamos tu capacidad en los sectores más dinámicos. En Qualtop aplicarás IA, Data y estrategias Multi-cloud para resolver retos críticos que mueven al mundo.\n</p> <div class="inline-block mt-4 md:mt-8"> <div class="px-6 py-3 border border-green-500/20 bg-green-500/5 backdrop-blur-md text-[10px] md:text-sm font-medium text-green-400 tracking-wider">\nAQUÍ TU APRENDIZAJE NO TIENE TECHO Y TRABAJAS CODO A CODO CON TECNOLOGÍAS DE VANGUARDIA\n</div> </div> </div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center scroll-reveal-container"> <div class="space-y-6 md:space-y-10 scroll-element-up text-center lg:text-left order-2 lg:order-1"> <h3 class="text-3xl md:text-5xl font-black font-poppins leading-tight uppercase tracking-tighter">\nTu crecimiento,<br> <span class="text-[#E63B11]">nuestra prioridad</span> </h3> <p class="text-gray-400 leading-relaxed text-base md:text-lg max-w-xl font-barlow text-center lg:text-justify mx-auto lg:mx-0">\nUn entorno diseñado para tu <span class="text-white font-semibold">bienestar y desarrollo</span>. Sabemos lo que valoras. En Qualtop te ofrecemos un espacio donde puedas <span class="text-white font-semibold">ser tú mismo</span> mientras te conviertes en el <span class="text-[#E63B11] font-bold">experto</span> que quieres ser:\n</p> </div> <div class="relative group scroll-element-up flex justify-center items-center order-1 lg:order-2" style="transition-delay: 200ms;"> ', " </div> </div> </div> </section> <script>\n  // Tu script de Parallax y Observer se mantiene igual, ya es funcional y responsivo.\n  window.addEventListener('scroll', () => {\n    const w1 = document.querySelector('.watermark-1');\n    const w2 = document.querySelector('.watermark-2');\n    if (!w1 || !w2) return;\n    const scrollY = window.scrollY;\n    w1.style.transform = \\`translateY(\\${scrollY * -0.05}px) rotate(\\${15 + scrollY * 0.02}deg)\\`;\n    w2.style.transform = \\`translateY(\\${scrollY * -0.1}px) rotate(\\${(-12) + scrollY * -0.04}deg)\\`;\n  });\n\n  const observer = new IntersectionObserver((entries) => {\n    entries.forEach(entry => {\n      if (entry.isIntersecting) {\n        entry.target.querySelectorAll('.scroll-element-up').forEach(el => {\n          el.classList.add('animate-reveal-up');\n        });\n      }\n    });\n  }, { threshold: 0.1 });\n\n  const target = document.querySelector('.scroll-reveal-container');\n  if (target) observer.observe(target);\n<\/script>"])), maybeRenderHead(), renderComponent($$result, "Image", $$Image, { "src": logoTalent, "alt": "Logo Talent Land", "class": "w-full h-auto" }), renderComponent($$result, "Image", $$Image, { "src": logoTalent, "alt": "Logo Talent Land", "class": "w-full h-auto" }), renderComponent($$result, "Image", $$Image, { "src": logoTalent, "alt": "Icono Talent Land Central", "class": "w-16 h-16 md:w-28 md:h-28 object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" }), renderComponent($$result, "Image", $$Image, { "src": atomoTech, "alt": "Molécula Tech", "class": "w-[70%] md:w-full max-w-[320px] md:max-w-[380px] hover:scale-105 transition-transform duration-700 mx-auto" }));
}, "/Users/mac/Downloads/Talend-Land/landing-qualtop/src/components/Crecimiento.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Beneficios = createComponent(($$result, $$props, $$slots) => {
  const beneficios = [
    { icon: GraduationCap, title1: "Carrera y", title2: "Certificaciones", desc: "Planes claros para potenciar tus habilidades y acceso a capacitaciones oficiales en Google y Oracle." },
    { icon: Coffee, title1: "Flexibilidad", title2: "Híbrida", desc: "Lo mejor de los dos mundos. En Qualtop confiamos en tu talento, estés donde estés." },
    { icon: Award, title1: "Prestaciones", title2: "Superiores", desc: "Beneficios que realmente suman. Cuidamos de ti para que tú cuides de la innovación." },
    { icon: Users, title1: "Cultura", title2: "Colaborativa", desc: "Un equipo experto, joven y apasionado listo para mentorizarte en los retos más exigentes." }
  ];
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<section id="section-beneficios" class="w-full py-32 px-6 bg-[#070708] text-white relative overflow-hidden group/section"> <svg class="shape absolute top-[10%] left-[5%] w-12 h-12 text-[#E63B11] opacity-20 z-0 pointer-events-none" data-speed="0.2" data-mouse="0.05" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"></path></svg> <div class="shape absolute top-[25%] left-[15%] w-3 h-3 bg-white opacity-10 rounded-full z-0 pointer-events-none" data-speed="0.1" data-mouse="0.08"></div> <div class="shape absolute top-[60%] left-[8%] w-10 h-10 border border-[#E63B11]/20 rotate-12 z-0 pointer-events-none" data-speed="0.15" data-mouse="0.03"></div> <svg class="shape absolute bottom-[15%] left-[12%] w-16 h-16 text-white opacity-5 z-0 pointer-events-none" data-speed="-0.1" data-mouse="0.04" viewBox="0 0 100 100"> <circle cx="20" cy="20" r="3" fill="currentColor"></circle><circle cx="50" cy="20" r="3" fill="currentColor"></circle><circle cx="20" cy="50" r="3" fill="currentColor"></circle><circle cx="50" cy="50" r="3" fill="currentColor"></circle> </svg> <div class="shape absolute top-[15%] right-[25%] w-5 h-5 border-2 border-white/10 rotate-45 z-0 pointer-events-none" data-speed="0.25" data-mouse="0.06"></div> <svg class="shape absolute top-[40%] right-[8%] w-14 h-14 text-[#E63B11] opacity-20 z-0 pointer-events-none" data-speed="0.12" data-mouse="0.04" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 12l18-9-9 18-9-9z"></path></svg> <div class="shape absolute bottom-[30%] right-[20%] w-2 h-10 bg-[#E63B11] opacity-10 rotate-[35deg] z-0 pointer-events-none" data-speed="0.18" data-mouse="0.07"></div> <div class="shape absolute bottom-[10%] right-[40%] w-4 h-4 bg-white opacity-5 rotate-45 z-0 pointer-events-none" data-speed="0.08" data-mouse="0.09"></div> <svg class="shape absolute top-[70%] right-[15%] w-24 h-24 text-white opacity-10 z-0 pointer-events-none" data-speed="-0.05" data-mouse="0.02" viewBox="0 0 100 100"> <rect x="10" y="10" width="4" height="4" fill="currentColor"></rect><rect x="30" y="10" width="4" height="4" fill="currentColor"></rect><rect x="50" y="10" width="4" height="4" fill="currentColor"></rect> <rect x="10" y="30" width="4" height="4" fill="currentColor"></rect><rect x="30" y="30" width="4" height="4" fill="currentColor"></rect><rect x="50" y="30" width="4" height="4" fill="currentColor"></rect> </svg> <div class="max-w-6xl mx-auto relative z-10"> <div id="grid-beneficios" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"> ', " </div> </div> </section> <script>\n  (() => {\n    const section = document.getElementById('section-beneficios');\n    const shapes = document.querySelectorAll('.shape');\n    \n    let mouseX = 0;\n    let mouseY = 0;\n\n    window.addEventListener('mousemove', (e) => {\n      mouseX = (e.clientX / window.innerWidth) - 0.5;\n      mouseY = (e.clientY / window.innerHeight) - 0.5;\n    });\n\n    function animate() {\n      if (!section) return; \n      \n      const scrollY = window.scrollY;\n      const sectionTop = section.offsetTop;\n      const relativeScroll = scrollY - sectionTop;\n\n      if (relativeScroll > -window.innerHeight && relativeScroll < section.offsetHeight) {\n        shapes.forEach(shape => {\n          const speed = parseFloat(shape.dataset.speed || 0);\n          const mouseFactor = parseFloat(shape.dataset.mouse || 0);\n\n          const ty = relativeScroll * speed;\n          const mx = mouseX * 100 * mouseFactor;\n          const my = mouseY * 100 * mouseFactor;\n\n          const baseRotation = shape.style.transform.match(/rotate\\(([^)]+)\\)/)?.[0] || '';\n          shape.style.transform = `translate(${mx}px, ${ty + my}px) ${baseRotation}`;\n        });\n      }\n      requestAnimationFrame(animate);\n    }\n\n    requestAnimationFrame(animate);\n\n    const cards = document.querySelectorAll('.beneficio-card');\n    const cardsObserver = new IntersectionObserver((entries, obs) => {\n      entries.forEach(entry => {\n        if (entry.isIntersecting) {\n          entry.target.classList.remove('opacity-0', 'translate-y-12');\n          entry.target.classList.add('opacity-100', 'translate-y-0');\n          obs.unobserve(entry.target);\n        }\n      });\n    }, { \n      threshold: 0.1,\n      rootMargin: \"0px 0px -50px 0px\" \n    });\n\n    cards.forEach(card => cardsObserver.observe(card));\n  })();\n<\/script>"], ["", '<section id="section-beneficios" class="w-full py-32 px-6 bg-[#070708] text-white relative overflow-hidden group/section"> <svg class="shape absolute top-[10%] left-[5%] w-12 h-12 text-[#E63B11] opacity-20 z-0 pointer-events-none" data-speed="0.2" data-mouse="0.05" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"></path></svg> <div class="shape absolute top-[25%] left-[15%] w-3 h-3 bg-white opacity-10 rounded-full z-0 pointer-events-none" data-speed="0.1" data-mouse="0.08"></div> <div class="shape absolute top-[60%] left-[8%] w-10 h-10 border border-[#E63B11]/20 rotate-12 z-0 pointer-events-none" data-speed="0.15" data-mouse="0.03"></div> <svg class="shape absolute bottom-[15%] left-[12%] w-16 h-16 text-white opacity-5 z-0 pointer-events-none" data-speed="-0.1" data-mouse="0.04" viewBox="0 0 100 100"> <circle cx="20" cy="20" r="3" fill="currentColor"></circle><circle cx="50" cy="20" r="3" fill="currentColor"></circle><circle cx="20" cy="50" r="3" fill="currentColor"></circle><circle cx="50" cy="50" r="3" fill="currentColor"></circle> </svg> <div class="shape absolute top-[15%] right-[25%] w-5 h-5 border-2 border-white/10 rotate-45 z-0 pointer-events-none" data-speed="0.25" data-mouse="0.06"></div> <svg class="shape absolute top-[40%] right-[8%] w-14 h-14 text-[#E63B11] opacity-20 z-0 pointer-events-none" data-speed="0.12" data-mouse="0.04" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 12l18-9-9 18-9-9z"></path></svg> <div class="shape absolute bottom-[30%] right-[20%] w-2 h-10 bg-[#E63B11] opacity-10 rotate-[35deg] z-0 pointer-events-none" data-speed="0.18" data-mouse="0.07"></div> <div class="shape absolute bottom-[10%] right-[40%] w-4 h-4 bg-white opacity-5 rotate-45 z-0 pointer-events-none" data-speed="0.08" data-mouse="0.09"></div> <svg class="shape absolute top-[70%] right-[15%] w-24 h-24 text-white opacity-10 z-0 pointer-events-none" data-speed="-0.05" data-mouse="0.02" viewBox="0 0 100 100"> <rect x="10" y="10" width="4" height="4" fill="currentColor"></rect><rect x="30" y="10" width="4" height="4" fill="currentColor"></rect><rect x="50" y="10" width="4" height="4" fill="currentColor"></rect> <rect x="10" y="30" width="4" height="4" fill="currentColor"></rect><rect x="30" y="30" width="4" height="4" fill="currentColor"></rect><rect x="50" y="30" width="4" height="4" fill="currentColor"></rect> </svg> <div class="max-w-6xl mx-auto relative z-10"> <div id="grid-beneficios" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"> ', " </div> </div> </section> <script>\n  (() => {\n    const section = document.getElementById('section-beneficios');\n    const shapes = document.querySelectorAll('.shape');\n    \n    let mouseX = 0;\n    let mouseY = 0;\n\n    window.addEventListener('mousemove', (e) => {\n      mouseX = (e.clientX / window.innerWidth) - 0.5;\n      mouseY = (e.clientY / window.innerHeight) - 0.5;\n    });\n\n    function animate() {\n      if (!section) return; \n      \n      const scrollY = window.scrollY;\n      const sectionTop = section.offsetTop;\n      const relativeScroll = scrollY - sectionTop;\n\n      if (relativeScroll > -window.innerHeight && relativeScroll < section.offsetHeight) {\n        shapes.forEach(shape => {\n          const speed = parseFloat(shape.dataset.speed || 0);\n          const mouseFactor = parseFloat(shape.dataset.mouse || 0);\n\n          const ty = relativeScroll * speed;\n          const mx = mouseX * 100 * mouseFactor;\n          const my = mouseY * 100 * mouseFactor;\n\n          const baseRotation = shape.style.transform.match(/rotate\\\\(([^)]+)\\\\)/)?.[0] || '';\n          shape.style.transform = \\`translate(\\${mx}px, \\${ty + my}px) \\${baseRotation}\\`;\n        });\n      }\n      requestAnimationFrame(animate);\n    }\n\n    requestAnimationFrame(animate);\n\n    const cards = document.querySelectorAll('.beneficio-card');\n    const cardsObserver = new IntersectionObserver((entries, obs) => {\n      entries.forEach(entry => {\n        if (entry.isIntersecting) {\n          entry.target.classList.remove('opacity-0', 'translate-y-12');\n          entry.target.classList.add('opacity-100', 'translate-y-0');\n          obs.unobserve(entry.target);\n        }\n      });\n    }, { \n      threshold: 0.1,\n      rootMargin: \"0px 0px -50px 0px\" \n    });\n\n    cards.forEach(card => cardsObserver.observe(card));\n  })();\n<\/script>"])), maybeRenderHead(), beneficios.map((item, index) => renderTemplate`<div class="beneficio-card opacity-0 translate-y-12 transition-all duration-700 ease-out group h-full"${addAttribute(`transition-delay: ${index * 150}ms;`, "style")}> <div class="relative h-full bg-[#0b0b0b]/80 backdrop-blur-md rounded-3xl p-8 flex flex-col items-center text-center gap-6 border border-white/5 overflow-hidden transition-all duration-500 group-hover:border-[#E63B11]/40 group-hover:-translate-y-2"> <div class="relative w-16 h-16 flex items-center justify-center border border-white/10 rounded-2xl bg-white/5 group-hover:border-[#E63B11]/50 group-hover:bg-[#E63B11]/10 transition-all duration-500"> ${renderComponent($$result, "item.icon", item.icon, { "className": "w-8 h-8 text-gray-400 group-hover:text-[#E63B11] transition-colors" })} </div> <h3 class="relative font-bold text-xl font-poppins tracking-tight uppercase leading-tight"> ${item.title1} <br><span class="text-[#E63B11]">${item.title2}</span> </h3> <p class="relative text-sm text-gray-500 font-barlow leading-relaxed group-hover:text-gray-300 transition-colors duration-300"> ${item.desc} </p> </div> </div>`));
}, "/Users/mac/Downloads/Talend-Land/landing-qualtop/src/components/Beneficios.astro", void 0);

const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64String = reader.result.split(",")[1];
      resolve(base64String);
    };
    reader.onerror = (error) => reject(error);
  });
};
function FormularioCV() {
  const [enviado, setEnviado] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileName, setFileName] = useState("");
  const [isHovering, setIsHovering] = useState(false);
  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const elements = e.target.elements;
    const fileInput = elements.cv;
    const file = fileInput.files[0];
    let fileBase64 = "";
    let fileMimeType = "";
    let finalFileName = "";
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("El CV es muy pesado. Máximo 5MB por favor.");
        setIsSubmitting(false);
        return;
      }
      fileBase64 = await fileToBase64(file);
      fileMimeType = file.type;
      const nombreLimpio = elements.nombre.value.replace(/\s+/g, "_");
      finalFileName = `${nombreLimpio}_CV_${file.name}`;
    }
    const formData = {
      nombre: elements.nombre.value,
      email: elements.email.value,
      telefono: elements.telefono.value,
      tecnologias: elements.tecnologias.value,
      link: elements.link.value,
      oportunidades: elements.oportunidades.value,
      fileBase64,
      fileName: finalFileName,
      fileMimeType
    };
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbxGqbRtGKFe_AFOOxRtRh2uerAAJYN40hG-VWp7LZwp3HPkZCYqDDASTQzYaODBnlfh/exec", {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8"
        },
        body: JSON.stringify(formData)
      });
      const dataServer = await response.json();
      console.log("Respuesta de Google:", dataServer);
      if (dataServer.result === "error") {
        alert("Google devolvió un error: " + dataServer.error);
        setIsSubmitting(false);
        return;
      }
      setEnviado(true);
    } catch (error) {
      console.error("Error al guardar:", error);
      alert("Hubo un problema de conexión. Inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };
  if (enviado) {
    return /* @__PURE__ */ jsxs("div", { className: "text-center p-8 md:p-12 space-y-6 animate-in fade-in zoom-in duration-500 font-barlow bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md", children: [
      /* @__PURE__ */ jsx(CheckCircle2, { className: "w-20 h-20 md:w-24 md:h-24 text-[#00E676] mx-auto drop-shadow-[0_0_15px_rgba(0,230,118,0.5)]" }),
      /* @__PURE__ */ jsx("h3", { className: "text-2xl md:text-3xl font-black text-white uppercase tracking-tighter font-poppins", children: "¡Registro Exitoso!" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-base md:text-lg", children: "Tu perfil ya está en nuestro radar. Pronto nos pondremos en contacto contigo." }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            setEnviado(false);
            setFileName("");
          },
          className: "mt-6 px-8 py-3 rounded-full border border-gray-700 text-gray-300 hover:text-white hover:border-[#E63B11] hover:bg-[#E63B11]/10 transition-all duration-300",
          children: "Enviar otro registro"
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 font-barlow relative z-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative group col-span-1", children: [
      /* @__PURE__ */ jsx("label", { className: "block text-gray-400 mb-2 ml-1 font-semibold uppercase tracking-widest text-[10px] md:text-xs", children: "Nombre:" }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx(User, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-[#E63B11] transition-colors" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            name: "nombre",
            placeholder: "¿Cómo quieres que te llamemos?",
            required: true,
            className: "w-full bg-[#111113] text-white border border-gray-800 py-3.5 md:py-4 pr-4 pl-12 rounded-xl focus:ring-1 focus:ring-[#E63B11] focus:border-[#E63B11] outline-none transition-all placeholder:text-gray-600 shadow-inner text-sm md:text-base"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative group col-span-1", children: [
      /* @__PURE__ */ jsx("label", { className: "block text-gray-400 mb-2 ml-1 font-semibold uppercase tracking-widest text-[10px] md:text-xs", children: "Email:" }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx(Mail, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-[#E63B11] transition-colors" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "email",
            name: "email",
            placeholder: "Donde te contactaremos",
            required: true,
            className: "w-full bg-[#111113] text-white border border-gray-800 py-3.5 md:py-4 pr-4 pl-12 rounded-xl focus:ring-1 focus:ring-[#E63B11] focus:border-[#E63B11] outline-none transition-all placeholder:text-gray-600 shadow-inner text-sm md:text-base"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative group col-span-1", children: [
      /* @__PURE__ */ jsx("label", { className: "block text-gray-400 mb-2 ml-1 font-semibold uppercase tracking-widest text-[10px] md:text-xs", children: "Teléfono:" }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx(Phone, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-[#E63B11] transition-colors" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "tel",
            name: "telefono",
            placeholder: "Tu número de contacto",
            required: true,
            className: "w-full bg-[#111113] text-white border border-gray-800 py-3.5 md:py-4 pr-4 pl-12 rounded-xl focus:ring-1 focus:ring-[#E63B11] focus:border-[#E63B11] outline-none transition-all placeholder:text-gray-600 shadow-inner text-sm md:text-base"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative group col-span-1", children: [
      /* @__PURE__ */ jsx("label", { className: "block text-gray-400 mb-2 ml-1 font-semibold uppercase tracking-widest text-[10px] md:text-xs", children: "¿Qué tecnologías dominas?:" }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx(Code2, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-[#E63B11] transition-colors z-10" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            name: "tecnologias",
            placeholder: "Ej: React, AWS, Python, SAP...",
            required: true,
            className: "w-full bg-[#111113] text-white border border-gray-800 py-3.5 md:py-4 pr-4 pl-12 rounded-xl focus:ring-1 focus:ring-[#E63B11] focus:border-[#E63B11] outline-none transition-all placeholder:text-gray-600 shadow-inner text-sm md:text-base"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative group md:col-span-2", children: [
      /* @__PURE__ */ jsx("label", { className: "block text-gray-400 mb-2 ml-1 font-semibold uppercase tracking-widest text-[10px] md:text-xs", children: "Presume tu talento:" }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx(Link, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-[#E63B11] transition-colors" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "url",
            name: "link",
            placeholder: "Link a LinkedIn o GitHub",
            className: "w-full bg-[#111113] text-white border border-gray-800 py-3.5 md:py-4 pr-4 pl-12 rounded-xl focus:ring-1 focus:ring-[#E63B11] focus:border-[#E63B11] outline-none transition-all placeholder:text-gray-600 shadow-inner text-sm md:text-base"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative md:col-span-2 mt-2 md:mt-0", children: [
      /* @__PURE__ */ jsx("label", { className: "block text-gray-400 mb-2 ml-1 font-semibold uppercase tracking-widest text-[10px] md:text-xs", children: "Tu Currículum (PDF):" }),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "relative group",
          onMouseEnter: () => setIsHovering(true),
          onMouseLeave: () => setIsHovering(false),
          children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "file",
                name: "cv",
                accept: ".pdf",
                onChange: handleFileChange,
                required: true,
                className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: `w-full border-2 border-dashed p-6 md:p-8 rounded-xl flex flex-col items-center justify-center transition-all duration-300 
            ${fileName ? "border-[#00E676] bg-[#00E676]/10" : isHovering ? "border-[#E63B11] bg-[#E63B11]/5" : "border-gray-700 bg-[#111113]"}`, children: [
              fileName ? /* @__PURE__ */ jsx(FileText, { className: "w-8 h-8 md:w-10 md:h-10 text-[#00E676] mb-2 drop-shadow-[0_0_8px_rgba(0,230,118,0.5)]" }) : /* @__PURE__ */ jsx(UploadCloud, { className: `w-8 h-8 md:w-10 md:h-10 mb-2 transition-colors duration-300 ${isHovering ? "text-[#E63B11]" : "text-gray-500"}` }),
              /* @__PURE__ */ jsx("p", { className: `text-xs md:text-sm text-center truncate w-full px-4 font-medium transition-colors duration-300
              ${fileName ? "text-white" : isHovering ? "text-gray-300" : "text-gray-500"}`, children: fileName ? fileName : "Arrastra tu CV o haz clic para subir (PDF)" })
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative group md:col-span-2", children: [
      /* @__PURE__ */ jsx("label", { className: "block text-gray-400 mb-2 ml-1 font-semibold uppercase tracking-widest text-[10px] md:text-xs", children: "¿Te gustaría que te contactemos con oportunidades?" }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx(Briefcase, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-[#E63B11] transition-colors z-10" }),
        /* @__PURE__ */ jsxs(
          "select",
          {
            name: "oportunidades",
            required: true,
            className: "w-full bg-[#111113] text-white border border-gray-800 py-3.5 md:py-4 pr-10 pl-12 rounded-xl focus:ring-1 focus:ring-[#E63B11] focus:border-[#E63B11] outline-none cursor-pointer appearance-none transition-all shadow-inner relative text-sm md:text-base",
            children: [
              /* @__PURE__ */ jsx("option", { value: "", className: "text-gray-500", children: "Selecciona una opción..." }),
              /* @__PURE__ */ jsx("option", { value: "Activamente buscando", children: "Sí, estoy buscando trabajo activamente" }),
              /* @__PURE__ */ jsx("option", { value: "Interesado a futuro", children: "Sí, me interesan oportunidades a futuro" }),
              /* @__PURE__ */ jsx("option", { value: "Solo conociendo", children: "No por ahora, solo estoy conociendo" })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none", children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-gray-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 9l-7 7-7-7" }) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(
      "button",
      {
        type: "submit",
        disabled: isSubmitting,
        className: `group relative w-full py-3.5 md:py-4 bg-gradient-to-r from-[#E63B11] to-[#ff4b23] text-white font-black font-poppins rounded-xl text-base md:text-lg shadow-[0_0_20px_rgba(230,59,17,0.3)] transition-all duration-300 mt-2 md:mt-4 uppercase tracking-widest overflow-hidden md:col-span-2 ${isSubmitting ? "opacity-80 cursor-wait" : "hover:shadow-[0_0_30px_rgba(230,59,17,0.6)] hover:-translate-y-1 active:scale-[0.98]"}`,
        children: [
          !isSubmitting && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" }),
          /* @__PURE__ */ jsx("span", { className: "relative z-10 flex items-center justify-center gap-2", children: isSubmitting ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(Loader2, { className: "w-5 h-5 md:w-6 md:h-6 animate-spin" }),
            "Procesando..."
          ] }) : "¡Conectar con Qualtop!" })
        ]
      }
    )
  ] });
}

const $$FormSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="registro" class="w-full max-w-6xl mx-auto py-16 md:py-24 px-6 relative overflow-hidden bg-[#070708]"> <div class="absolute inset-0 z-0 pointer-events-none"> <div class="absolute top-[5%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#E63B11] opacity-[0.05] blur-[80px] md:blur-[150px] rounded-full"></div> <div class="absolute bottom-[5%] right-[-5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-green-500 opacity-[0.04] blur-[80px] md:blur-[130px] rounded-full"></div> </div> <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative z-10"> <div class="flex-1 space-y-8 md:space-y-12 text-center lg:text-left w-full"> <div class="space-y-4 md:space-y-6"> <h2 class="text-4xl md:text-5xl lg:text-6xl font-black font-poppins text-white uppercase leading-[0.9] tracking-tighter drop-shadow-lg">
Tu historia en tecnología <br> <span class="text-transparent" style="-webkit-text-stroke: 1px rgba(255,255,255,0.7);">empieza aquí</span> </h2> <p class="text-lg md:text-xl font-barlow text-gray-400 max-w-md mx-auto lg:mx-0">
Déjanos tus datos y prepárate para crear algo increíble.
</p> </div> <div class="flex items-center justify-center lg:justify-start py-2 md:py-6"> ${renderComponent($$result, "Image", $$Image, { "src": logoTalent, "alt": "Logo Talent Land México", "class": "w-full h-auto max-w-[160px] md:max-w-[220px] hover:scale-105 transition-transform duration-500 object-contain" })} </div> </div> <div class="flex-1 w-full max-w-xl"> <div class="bg-[#0D0D0D] border border-gray-800 p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl relative"> <div class="absolute -top-5 -right-5 md:-top-10 md:-right-10 w-24 md:w-40 h-24 md:h-40 bg-[#E63B11] rounded-full blur-[50px] md:blur-[80px] opacity-10"></div> ${renderComponent($$result, "FormularioCV", FormularioCV, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/mac/Downloads/Talend-Land/landing-qualtop/src/components/FormularioCV.jsx", "client:component-export": "default" })} </div> </div> </div> </section>`;
}, "/Users/mac/Downloads/Talend-Land/landing-qualtop/src/components/FormSection.astro", void 0);

const logoQualtop = new Proxy({"src":"/_astro/logo-qualtop.CTs4S-KH.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mac/Downloads/Talend-Land/landing-qualtop/src/assets/logo-qualtop.png";
							}
							
							return target[name];
						}
					});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Preloader = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<div id="preloader-container" class="fixed inset-0 z-[10000] flex items-center justify-center bg-[#070708] pointer-events-auto" data-astro-cid-whrugjgn> <div class="relative flex flex-col items-center" data-astro-cid-whrugjgn> <div class="relative flex items-center gap-6 md:gap-10 px-4 py-2" data-astro-cid-whrugjgn> <div class="qlt-logo-entry" data-astro-cid-whrugjgn> ', ' </div> <div class="h-8 w-[1px] bg-white/20 qlt-divider" data-astro-cid-whrugjgn></div> <div class="qlt-logo-entry qlt-delay-200" data-astro-cid-whrugjgn> ', ` </div> <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent qlt-scan" data-astro-cid-whrugjgn></div> </div> <div class="mt-12 relative w-40 h-[1px] bg-white/5 overflow-hidden" data-astro-cid-whrugjgn> <div id="qlt-progress" class="absolute inset-y-0 left-0 bg-white/40 w-0 transition-all duration-[1500ms] ease-in-out" data-astro-cid-whrugjgn></div> </div> <div class="mt-4 flex items-center gap-2" data-astro-cid-whrugjgn> <span class="w-1.5 h-1.5 bg-green-500 rounded-full qlt-ping" data-astro-cid-whrugjgn></span> <p class="font-mono text-[9px] tracking-[0.5em] text-gray-500 uppercase" data-astro-cid-whrugjgn>
CARGANDO_TU_PROXIMO_RETO...
</p> </div> </div> </div> <script>
  (function() {
    const preloader = document.getElementById('preloader-container');
    const progressBar = document.getElementById('qlt-progress');
    
    if (sessionStorage.getItem('preloaderShown')) {
      if (preloader) preloader.remove(); // Usamos remove() para que desaparezca del DOM totalmente
      return;
    }

    // Bloquear scroll mientras carga
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      if (progressBar) progressBar.style.width = '100%';
    }, 100);

    setTimeout(() => {
      if (preloader) {
        preloader.style.opacity = '0';
        preloader.style.transition = 'opacity 0.8s ease';
        
        setTimeout(() => {
          preloader.remove(); // Limpieza total del DOM
          document.body.style.overflow = ''; // Devolver el scroll
          sessionStorage.setItem('preloaderShown', 'true');
        }, 800);
      }
    }, 2800);
  })();
<\/script>`])), maybeRenderHead(), renderComponent($$result, "Image", $$Image, { "src": logoQualtop, "alt": "Qualtop Logo", "class": "w-28 md:w-44 h-auto object-contain brightness-125", "data-astro-cid-whrugjgn": true }), renderComponent($$result, "Image", $$Image, { "src": logoTalent, "alt": "Talent Land Logo", "class": "w-28 md:w-44 h-auto object-contain grayscale brightness-200 opacity-60", "data-astro-cid-whrugjgn": true }));
}, "/Users/mac/Downloads/Talend-Land/landing-qualtop/src/components/Preloader.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Qualtop | Talent Land México 2026" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Preloader", $$Preloader, {})} ${renderComponent($$result2, "TechBackground3D", Fondo3D, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/mac/Downloads/Talend-Land/landing-qualtop/src/components/Fondo3D.jsx", "client:component-export": "default" })} ${maybeRenderHead()}<main class="relative z-10 w-full flex flex-col items-center bg-transparent"> <div class="w-full max-w-7xl mx-auto px-6 pt-12"> ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${renderComponent($$result2, "Hero", $$Hero, {})} </div> <div class="w-full bg-[#070708] relative z-20"> ${renderComponent($$result2, "Crecimiento", $$Crecimiento, {})} <div class="max-w-7xl mx-auto px-6 py-12"> ${renderComponent($$result2, "Beneficios", $$Beneficios, {})} ${renderComponent($$result2, "FormSection", $$FormSection, {})} </div> <footer class="w-full mt-24 py-10 border-t border-white/10 text-center"> <p class="text-sm font-barlow text-gray-400 tracking-wide">
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Qualtop S.A. de C.V. Todos los derechos reservados.
</p> </footer> </div> </main> ` })}`;
}, "/Users/mac/Downloads/Talend-Land/landing-qualtop/src/pages/index.astro", void 0);

const $$file = "/Users/mac/Downloads/Talend-Land/landing-qualtop/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
