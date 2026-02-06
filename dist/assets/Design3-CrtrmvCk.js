import{j as e,L as i,r as o}from"./index-CtH1U4e6.js";import{b as r,p as l,t as c,s as d}from"./social-Bov4NeFl.js";const x=[{key:"frontend",label:"Frontend"},{key:"backend",label:"Backend"},{key:"testing",label:"Testing"},{key:"cloud",label:"Cloud & DevOps"}],m=({project:t})=>{const[a,n]=o.useState(!1);return e.jsxs("div",{className:"mb-20 border-b border-[#2A2A2A] pb-12",children:[e.jsx("div",{className:"overflow-hidden mb-8",onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),children:e.jsx("img",{src:t.image,alt:t.alt,className:"w-full block transition-[filter] duration-600 ease-in-out",style:{filter:a?"none":"grayscale(100%)"}})}),e.jsx("h3",{className:"font-instrument italic text-2xl font-normal mb-4 -tracking-tight",children:t.title}),e.jsx("p",{className:"font-inter text-sm leading-relaxed text-[#888] mb-5",children:t.description}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-5",children:t.techStack.map(s=>e.jsx("span",{className:"font-inter text-xs border border-[#2A2A2A] px-3 py-1 tracking-wide uppercase",children:s.label},s.label))}),t.github&&e.jsx("a",{href:t.github,target:"_blank",rel:"noopener noreferrer",className:"font-inter text-sm text-[#E5E5E5] no-underline border-b border-[#888] pb-0.5 hover:border-[#E5E5E5] transition-colors duration-300",children:"View Source"})]})},b=()=>e.jsx("a",{href:"#about",className:"absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce","aria-label":"Scroll to content",children:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#888",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",className:"opacity-60 hover:opacity-100 transition-opacity duration-300",children:e.jsx("path",{d:"M12 5v14M5 12l7 7 7-7"})})}),h=()=>e.jsxs("div",{className:"bg-[#0A0A0A] text-[#E5E5E5] font-inter min-h-screen",children:[e.jsx("style",{children:`
      .d3-atmosphere {
        position: fixed;
        inset: 0;
        pointer-events: none;
        z-index: 0;
        background:
          linear-gradient(160deg, #0A0A0A 0%, #110f0c 25%, #0A0A0A 50%, #0d0c0a 75%, #0A0A0A 100%),
          linear-gradient(70deg, transparent 0%, rgba(30,24,16,0.5) 30%, transparent 60%),
          linear-gradient(300deg, transparent 20%, rgba(22,18,12,0.4) 50%, transparent 80%);
        background-blend-mode: normal, soft-light, overlay;
      }
      .d3-atmosphere::before {
        content: '';
        position: absolute;
        inset: 0;
        background:
          conic-gradient(from 200deg at 30% 40%, transparent 0deg, rgba(28,22,14,0.3) 60deg, transparent 120deg, rgba(24,20,12,0.2) 200deg, transparent 280deg),
          conic-gradient(from 40deg at 70% 60%, transparent 0deg, rgba(22,18,10,0.25) 80deg, transparent 160deg, rgba(26,20,14,0.15) 260deg, transparent 340deg);
        filter: blur(80px);
      }
      .d3-atmosphere::after {
        content: '';
        position: absolute;
        inset: 0;
        background: radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.5) 100%);
      }
      .d3-grain {
        position: fixed;
        inset: 0;
        pointer-events: none;
        z-index: 1;
        opacity: 0.03;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        background-repeat: repeat;
        background-size: 256px 256px;
      }
    `}),e.jsx("div",{className:"d3-atmosphere"}),e.jsx("div",{className:"d3-grain"}),e.jsx("div",{className:"fixed top-6 left-6 z-30",children:e.jsx(i,{to:"/",className:"font-inter text-sm text-[#888] no-underline tracking-wide hover:text-[#E5E5E5] transition-colors duration-300",children:"← Back"})}),e.jsxs("section",{className:"relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 py-8",children:[e.jsx("h1",{className:"font-instrument italic text-[clamp(3rem,8vw,6rem)] font-normal -tracking-wider leading-none mb-8",children:r.name}),e.jsx("p",{className:"font-inter text-sm tracking-[0.15em] uppercase text-[#888] mb-2",children:r.role}),e.jsxs("p",{className:"font-inter text-xs text-[#888] tracking-widest",children:[r.location," — ",r.employer]}),e.jsx(b,{})]}),e.jsxs("section",{id:"about",className:"relative z-10 max-w-3xl mx-auto px-6 py-20",children:[e.jsx("h2",{className:"font-instrument italic text-3xl font-normal mb-12 -tracking-tight border-b border-[#2A2A2A] pb-4",children:"About"}),e.jsx("p",{className:"font-inter text-base leading-loose text-[#888] max-w-xl",children:r.bio})]}),e.jsxs("section",{className:"relative z-10 max-w-3xl mx-auto px-6 py-20",children:[e.jsx("h2",{className:"font-instrument italic text-3xl font-normal mb-12 -tracking-tight border-b border-[#2A2A2A] pb-4",children:"Projects"}),l.map(t=>e.jsx(m,{project:t},t.id))]}),e.jsxs("section",{className:"relative z-10 max-w-3xl mx-auto px-6 py-20",children:[e.jsx("h2",{className:"font-instrument italic text-3xl font-normal mb-12 -tracking-tight border-b border-[#2A2A2A] pb-4",children:"Tech Stack"}),e.jsx("div",{className:"grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-10",children:x.map(t=>e.jsxs("div",{children:[e.jsx("h3",{className:"font-instrument italic text-lg font-normal mb-4 pb-2 border-b border-[#2A2A2A]",children:t.label}),e.jsx("ul",{className:"list-none p-0 m-0",children:c[t.key].map(a=>e.jsx("li",{className:"font-inter text-sm text-[#888] py-1.5 border-b border-[#2A2A2A]",children:a.name},a.name))})]},t.key))})]}),e.jsxs("section",{className:"relative z-10 max-w-3xl mx-auto px-6 pt-20 pb-24 text-center",children:[e.jsx("h2",{className:"font-instrument italic text-3xl font-normal mb-12 -tracking-tight border-b border-[#2A2A2A] pb-4",children:"Contact"}),e.jsx("div",{className:"flex justify-center gap-8 flex-wrap",children:d.map(t=>e.jsx("a",{href:t.url,target:"_blank",rel:"noopener noreferrer",className:"font-inter text-sm text-[#E5E5E5] no-underline tracking-wide border-b border-[#2A2A2A] pb-1 hover:border-[#E5E5E5] transition-colors duration-300",children:t.label},t.id))})]}),e.jsxs("footer",{className:"relative z-10 text-center px-6 py-8 border-t border-[#2A2A2A] font-inter text-xs text-[#888] tracking-widest uppercase",children:[r.name," © ",new Date().getFullYear()]})]});export{h as default};
