import { motion } from "framer-motion";
import { Folder as FolderIcon, Star } from "lucide-react";

export const Folder = ({ title, subtitle, color }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="flex flex-col items-center p-6 cursor-pointer"
    >
      <div className={`relative w-24 h-20 rounded-t-lg rounded-br-lg ${color} shadow-lg flex items-center justify-center`}>
        {/* Pestaña de la carpeta */}
        <div className={`absolute -top-2 left-0 w-10 h-4 ${color} rounded-t-md`} />
        <Star className="text-white opacity-50" size={24} />
      </div>
      <h3 className="mt-4 font-serif text-lg text-center">{title}</h3>
      <p className="text-[10px] uppercase tracking-widest text-gold-accent text-center">{subtitle}</p>
    </motion.div>
  );
};