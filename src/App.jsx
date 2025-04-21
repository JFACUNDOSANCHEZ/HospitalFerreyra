import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./App.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";



function App() {
  const [hoveredRight, setHoveredRight] = useState(false);
  const [hoveredLeft, setHoveredLeft] = useState(false);
  const [hoveredCenter, setHoveredCenter] = useState(false);



  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >

  
  <div className={styles.emergencyBanner}>
  <a href="tel:08107772985" className={styles.emergencyButton}>
    <i className="fas fa-phone"></i> EMERGENCIAS: 0810 XXX XXX
  </a>
</div>
      <motion.nav
        className={styles.nav}
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >

      </motion.nav>

      <motion.section
        className={styles.logoSection}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <img
          className={styles.logo}
          src="https://cofradiadelamerced.org.ar/wp-content/uploads/apross.jpg"
          alt="Logo Apross"
        />
        <div>
          <h3 className={styles.hospital}>Hospital R. Angel Ferreyra</h3>
        </div>
        <div className={styles.urgentInfo}>
          <p>
            <br />
          
            <br />
          </p>
        </div>
      </motion.section>

      <motion.section
        className={styles.hero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <img
          className={styles.heroImage}
          src="https://images.pexels.com/photos/16204310/pexels-photo-16204310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Imagen de fondo"
        />

      
        <div
          className={styles.heroOverlay}
          style={{ left: "10%", right: "auto" }}
          onMouseEnter={() => setHoveredLeft(true)}
          onMouseLeave={() => setHoveredLeft(false)}
        >
          <h2 className={styles.entrega}>Turnos<br /></h2>
          <p>
            Gestiona fácilmente tus turnos con nuestro personal capacitado.Sólo con un click aqui.
          </p>

          <AnimatePresence>
            {hoveredLeft && (
              <motion.a
                href="https://equisdiagnostico.com.ar/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10, transition: { duration: 1 } }}
                transition={{ duration: 1 }}
              >
                <br />
                <button className={styles.ctaButton}>
                  Pedir turnos →
                </button>
              </motion.a>
            )}
          </AnimatePresence>
        </div>



      


<div
  className={styles.heroOverlay}
  style={{ left: "50%", transform: "translateX(-50%)" }}
  onMouseEnter={() => setHoveredCenter(true)}
  onMouseLeave={() => setHoveredCenter(false)}
>
  <h2 className={styles.entrega}>Especialidades</h2>
  <ul>
    <li>Ecografía</li>
    <li>Cardiología</li>
    <li>Neurología</li>
    <li>Dermatología</li>
    <li>Ginecología</li>
  </ul>

  <AnimatePresence>
            {hoveredCenter && (
              <motion.a
                href="https://equisdiagnostico.com.ar/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10, transition: { duration: 1 } }}
                transition={{ duration: 1 }}
              >
                <br />
                <button className={styles.ctaButton}>
                  Descargar estudios →
                </button>
              </motion.a>
            )}
          </AnimatePresence>
</div>


      
        <div
          className={styles.heroOverlay}
          style={{ right: "10%", left: "auto" }}
          onMouseEnter={() => setHoveredRight(true)}
          onMouseLeave={() => setHoveredRight(false)}
        >
          <h2 className={styles.entrega}>Entrega digital<br /></h2>
          <p>
       Accede al informe de sus estudios sin necesidad de asistir
            personalmente a nuestro centro. Sólo con un click aqui.
          </p>

          <AnimatePresence>
            {hoveredRight && (
              <motion.a
                href="https://equisdiagnostico.com.ar/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10, transition: { duration: 0.5 } }}
                transition={{ duration: 0.5 }}
              >
                <br />
                <button className={styles.ctaButton}>
                  Descargar estudios →
                </button>
              </motion.a>
            )}
          </AnimatePresence>
        </div>

      
        
     
      </motion.section>

      <motion.footer
  className={styles.footer}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1, delay: 1.5 }}
>
  <p>© 2025 Apross. Córdoba, Argentina.</p>

  
  <div className={styles.socialLinks}>
    <a
      href="https://wa.me/5493516089800"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
    <a
      href="https://www.instagram.com/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
    >
      <i className="fab fa-instagram"></i>
    </a>
    <a
      href="https://www.facebook.com/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
    >
      <i className="fab fa-facebook-f"></i>
    </a>
  </div>
</motion.footer>

    </motion.div>
  );
}

export default App;
