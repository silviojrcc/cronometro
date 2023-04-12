(function () {
    
    const display = document.querySelector('.display');
    const iniciarBtn = document.querySelector('.iniciar');
    const pausarBtn = document.querySelector('.pausar');
    const resetearBtn = document.querySelector('.resetear');

    let segundos = 0;
    let minutos = 0;
    let horas = 0;
    let milisegundos = 0;

    function iniciar() {
        intervalo = setInterval(function() {
            milisegundos++;
            if (milisegundos === 1000) {
                milisegundos = 0;
                segundos++;
            }
            if (segundos === 60) {
                segundos = 0;
                minutos++;
            }
            if (minutos === 60) {
                minutos = 0;
                horas++;
            }
            display.innerHTML = formatearTiempo(horas) + ':' + formatearTiempo(minutos) + ':' + formatearTiempo(segundos) + '.' + formatearMilisegundos(milisegundos);
        }, 1);
    }

    function pausar() {
        clearInterval(intervalo);
    }

    function resetear() {
        clearInterval(intervalo);
        segundos = 0;
        minutos = 0;
        horas = 0;
        milisegundos = 0;
        display.innerHTML = '00:00:00.000';
    }

    function formatearTiempo(tiempo) {
        return (tiempo < 10) ? '0' + tiempo : tiempo;
    }

    function formatearMilisegundos(tiempo) {
        if (tiempo < 10) {
            return '00' + tiempo;
        } else if (tiempo < 100) {
            return '0' + tiempo;
        } else {
            return tiempo;
        }
    }

    iniciarBtn.addEventListener('click', () => {
        iniciarBtn.classList.add("d-none");
        pausarBtn.classList.remove("d-none");
        resetearBtn.classList.remove("d-none");
        iniciar();
    });
    pausarBtn.addEventListener('click', () => {
        iniciarBtn.classList.remove("d-none");
        pausarBtn.classList.add("d-none");
        pausar();
    });
    resetearBtn.addEventListener('click', () => {
        iniciarBtn.classList.remove("d-none");
        pausarBtn.classList.add("d-none");
        resetearBtn.classList.add("d-none");
        resetear();
    });
 
})();