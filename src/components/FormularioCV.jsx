import React, { useState } from 'react';
import { User, Mail, Code2, UploadCloud, Link as LinkIcon, MessageSquare, CheckCircle2, FileText } from 'lucide-react';

export default function FormularioCV() {
  const [enviado, setEnviado] = useState(false);
  const [fileName, setFileName] = useState("");
  const [isHovering, setIsHovering] = useState(false);

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
  };

  if (enviado) {
    return (
      <div className="text-center p-8 md:p-12 space-y-6 animate-in fade-in zoom-in duration-500 font-barlow bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md">
        <CheckCircle2 className="w-20 h-20 md:w-24 md:h-24 text-[#00E676] mx-auto drop-shadow-[0_0_15px_rgba(0,230,118,0.5)]" />
        <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter font-poppins">¡Registro Exitoso!</h3>
        <p className="text-gray-400 text-base md:text-lg">Tu perfil ya está en nuestro radar. Pronto nos pondremos en contacto contigo.</p>
        <button 
          onClick={() => { setEnviado(false); setFileName(""); }} 
          className="mt-6 px-8 py-3 rounded-full border border-gray-700 text-gray-300 hover:text-white hover:border-[#E63B11] hover:bg-[#E63B11]/10 transition-all duration-300"
        >
          Enviar otro registro
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 font-barlow relative z-10">
      
      {/* Nombre */}
      <div className="relative group col-span-1">
        <label className="block text-gray-400 mb-2 ml-1 font-semibold uppercase tracking-widest text-[10px] md:text-xs">Nombre:</label>
        <div className="relative">
          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-[#E63B11] transition-colors" />
          {/* Corregido: py-3.5 md:py-4 pr-4 pl-12 asegura que el margen izquierdo nunca se borre */}
          <input 
            type="text" 
            placeholder="¿Cómo quieres que te llamemos?" 
            required 
            className="w-full bg-[#111113] text-white border border-gray-800 py-3.5 md:py-4 pr-4 pl-12 rounded-xl focus:ring-1 focus:ring-[#E63B11] focus:border-[#E63B11] outline-none transition-all placeholder:text-gray-600 shadow-inner text-sm md:text-base" 
          />
        </div>
      </div>

      {/* Email */}
      <div className="relative group col-span-1">
        <label className="block text-gray-400 mb-2 ml-1 font-semibold uppercase tracking-widest text-[10px] md:text-xs">Email:</label>
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-[#E63B11] transition-colors" />
          <input 
            type="email" 
            placeholder="Donde te contactaremos" 
            required 
            className="w-full bg-[#111113] text-white border border-gray-800 py-3.5 md:py-4 pr-4 pl-12 rounded-xl focus:ring-1 focus:ring-[#E63B11] focus:border-[#E63B11] outline-none transition-all placeholder:text-gray-600 shadow-inner text-sm md:text-base" 
          />
        </div>
      </div>

      {/* Área de Interés */}
      <div className="relative group col-span-1">
        <label className="block text-gray-400 mb-2 ml-1 font-semibold uppercase tracking-widest text-[10px] md:text-xs">Tu área de interés:</label>
        <div className="relative">
          <Code2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-[#E63B11] transition-colors z-10" />
          <select required className="w-full bg-[#111113] text-white border border-gray-800 py-3.5 md:py-4 pr-10 pl-12 rounded-xl focus:ring-1 focus:ring-[#E63B11] focus:border-[#E63B11] outline-none cursor-pointer appearance-none transition-all shadow-inner relative text-sm md:text-base">
            <option value="" className="text-gray-500">Selecciona una opción...</option>
            <option value="web">Desarrollo Web (Astro/React)</option>
            <option value="sap">SAP ABAP</option>
            <option value="data">Data & AI</option>
            <option value="cloud">Cloud Architecture</option>
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="relative group col-span-1">
        <label className="block text-gray-400 mb-2 ml-1 font-semibold uppercase tracking-widest text-[10px] md:text-xs">Presume tu talento:</label>
        <div className="relative">
          <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-[#E63B11] transition-colors" />
          <input 
            type="url" 
            placeholder="Link a LinkedIn o GitHub" 
            className="w-full bg-[#111113] text-white border border-gray-800 py-3.5 md:py-4 pr-4 pl-12 rounded-xl focus:ring-1 focus:ring-[#E63B11] focus:border-[#E63B11] outline-none transition-all placeholder:text-gray-600 shadow-inner text-sm md:text-base" 
          />
        </div>
      </div>

      {/* 📎 SECCIÓN DE CV */}
      <div className="relative md:col-span-2 mt-2 md:mt-0">
        <label className="block text-gray-400 mb-2 ml-1 font-semibold uppercase tracking-widest text-[10px] md:text-xs">Tu Currículum (PDF):</label>
        <div 
          className="relative group"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <input 
            type="file" 
            accept=".pdf" 
            onChange={handleFileChange}
            required 
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
          />
          <div className={`w-full border-2 border-dashed p-6 md:p-8 rounded-xl flex flex-col items-center justify-center transition-all duration-300 
            ${fileName 
              ? 'border-[#00E676] bg-[#00E676]/10' 
              : isHovering 
                ? 'border-[#E63B11] bg-[#E63B11]/5' 
                : 'border-gray-700 bg-[#111113]'
            }`}>
            
            {fileName ? (
              <FileText className="w-8 h-8 md:w-10 md:h-10 text-[#00E676] mb-2 drop-shadow-[0_0_8px_rgba(0,230,118,0.5)]" />
            ) : (
              <UploadCloud className={`w-8 h-8 md:w-10 md:h-10 mb-2 transition-colors duration-300 ${isHovering ? 'text-[#E63B11]' : 'text-gray-500'}`} />
            )}
            
            <p className={`text-xs md:text-sm text-center truncate w-full px-4 font-medium transition-colors duration-300
              ${fileName ? 'text-white' : isHovering ? 'text-gray-300' : 'text-gray-500'}`}>
              {fileName ? fileName : "Arrastra tu CV o haz clic para subir (PDF)"}
            </p>
          </div>
        </div>
      </div>

      {/* Meta */}
      <div className="relative group md:col-span-2">
        <label className="block text-gray-400 mb-2 ml-1 font-semibold uppercase tracking-widest text-[10px] md:text-xs">Cuéntanos tu meta:</label>
        <div className="relative">
          <MessageSquare className="absolute left-4 top-4 md:top-5 w-5 h-5 text-gray-500 group-focus-within:text-[#E63B11] transition-colors" />
          <textarea 
            rows="3" 
            placeholder="¿En qué proyecto te gustaría participar?" 
            className="w-full bg-[#111113] text-white border border-gray-800 py-3.5 md:py-4 pr-4 pl-12 rounded-xl focus:ring-1 focus:ring-[#E63B11] focus:border-[#E63B11] outline-none transition-all placeholder:text-gray-600 resize-none shadow-inner text-sm md:text-base"
          ></textarea>
        </div>
      </div>

      {/* Botón */}
      <button 
        type="submit" 
        className="group relative w-full py-3.5 md:py-4 bg-gradient-to-r from-[#E63B11] to-[#ff4b23] text-white font-black font-poppins rounded-xl text-base md:text-lg shadow-[0_0_20px_rgba(230,59,17,0.3)] hover:shadow-[0_0_30px_rgba(230,59,17,0.6)] hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 mt-2 md:mt-4 uppercase tracking-widest overflow-hidden md:col-span-2"
      >
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
        <span className="relative z-10 flex items-center justify-center gap-2">
          ¡Conectar con Qualtop!
        </span>
      </button>

    </form>
  );
}