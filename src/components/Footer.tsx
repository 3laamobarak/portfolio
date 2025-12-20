import { motion } from "framer-motion";
import { Heart } from "lucide-react";
export function Footer() {
  return <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div className="flex flex-col md:flex-row items-center justify-between gap-4" initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} transition={{
        duration: 0.5
      }}>
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Alaa Mobarak. All rights reserved.
          </p>
          {/*<p className="text-sm text-muted-foreground flex items-center gap-1"><Heart className="w-4 h-4 text-primary" /> using React & TypeScript</p>*/}
        </motion.div>
      </div>
    </footer>;
}