import React, { } from "react";
import { motion } from "framer-motion";
import styles from "./App.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import imgAprs from "./assets/apross.jpeg"


function App() {
  



  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >

  
  <div className={styles.emergencyBanner}>

</div>
      <motion.nav
        className={styles.nav}
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.2 }}
      >

      </motion.nav>

      <motion.section
        className={styles.logoSection}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <img
          className={styles.logo}
          src={imgAprs}
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

  

<section className={styles.heroContainer}>
  <div
    className={styles.heroOverlay}

  >
    <h2 className={styles.entrega}>Turnos</h2>
    
    <p>
      Gestiona fácilmente tus turnos.
      <br />
       Sólo con un click aquí.
    </p>


        <motion.a
              href="https://wa.me/5493515519207?text=Hola%2C%20quiero%20pedir%20un%20turno"
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
  </div>

  <div
    className={styles.heroOverlay}

  >
    <h2 className={styles.entrega}>Especialidades</h2>
    <ul>
      <li>Ecografía</li>
   
      <li>Cardiología</li>
    
      <li>Neurología</li>
      
      <li>Dermatología</li>
      <li>Ginecología</li>
    </ul>
  </div>

  <div
    className={styles.heroOverlay}

  >
    <h2 className={styles.entrega}>Entrega digital</h2>

    <p>
      Accede al informe de tus estudios sin moverte.
      
       Sólo con un click aquí.
    </p>

 
          <motion.a
                         href="https://hferreyra.informemedico.com.ar/pacientes"
                         target="_blank"
                         rel="noopener noreferrer"
                         initial={{ opacity: 0, y: 10 }}
                         animate={{ opacity: 1, y: 0 }}
                         exit={{ opacity: 0, y: 10, transition: { duration: 1 } }}
                         transition={{ duration: 1 }}
                       >
                         <br />
                         <button className={styles.ctaButton}>
                         Ver estudios →
                         </button>
                       </motion.a>
  </div>
</section>

        
     
 

      <motion.footer
  className={styles.footer}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.2 }}
>
  <p>© 2025 TRS24. Córdoba, Argentina.</p>

  
  <div className={styles.socialLinks}>
 
  </div>
</motion.footer>

    </motion.div>
  );
}

export default App;
