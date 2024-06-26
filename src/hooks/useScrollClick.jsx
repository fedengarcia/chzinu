import React from "react";

export default function useScrollClick() {

    const scrollToTeam = (id) => {
        // Obtener la posición de la sección a la que deseas redirigir
        const section = document.getElementById(id ?? 'team');
        const sectionPosition = section.offsetTop;
    
        // Hacer scroll hasta la posición de la sección
        window.scrollTo({
          top: sectionPosition,
          behavior: 'smooth'
        });
    }

    return {
        scrollToTeam
    }
}
