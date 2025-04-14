import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <p>INICIO | </p>
      </nav>

      <section className={styles.logoSection}>
        <img
          className={styles.logo}
          src="https://cofradiadelamerced.org.ar/wp-content/uploads/apross.jpg"
          alt="Logo Apross"
        />

<div >
<h3 className={styles.hospital}>Hospital         
Raúl Angel Ferreyra</h3></div>  

<div className={styles.urgentInfo}>
  <p>
    Servicio de Urgencia, Emergencia y/o Médico a Domicilio<br />
    <span>0810 777 2985</span><br />
   
  </p>
</div>
      </section>


      <section className={styles.hero}>
        <img
          className={styles.heroImage}
          src="https://images.pexels.com/photos/16204310/pexels-photo-16204310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Imagen de fondo"
        />
      <div className={styles.menuList}>
      <ul>
        <li>Tomógrafo</li>
        <li>Rayos X</li>
        <li>Ecógrafo</li>
    
  
        <li>Mamógrafo</li>
        <li>Cámara Gamma</li>
        
    
        <li>Nomenclador médico</li>
        <li>Medicamentos Catástrofe</li>
        {/* <li>Laboratorio Bioquímico de baja y alta complejidad</li> */}
       
  
      </ul>



        </div>
        <div className={styles.heroOverlay}>
          <h2>Para ver tus estudios<br /></h2>
          <button className={styles.ctaButton}>
           <a href="https://www.youtube.com/">
            Click aqui
           </a>
            </button>
        </div>
      </section>
      <footer className={styles.footer}>
  <p>© 2025 Apros. Córdoba, Argentina.</p>
  <p>Teléfono: 0800-777-2985 | Email: info@apross.org</p>
</footer>

    </div>
  );
}

export default App;
