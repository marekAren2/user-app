export default function Zegar() {
    const dzisiaj = new Date();
    const godzina = dzisiaj.getHours();
    const minuta = dzisiaj.getMinutes();
    const sekunda = dzisiaj.getSeconds();
  
    // Dodaj zero przed liczbami jednocyfrowymi
    const sformatowanaGodzina = dodajZero(godzina);
    const sformatowanaMinuta = dodajZero(minuta);
    const sformatowanaSekunda = dodajZero(sekunda);
  
    // Pobierz element HTML, do którego będzie wstawiana data
    const zegarElement = document.getElementById('zegar');
  
    // Ustaw tekst zegara na stronie
    // zegarElement.innerHTML = `${sformatowanaGodzina}:${sformatowanaMinuta}:${sformatowanaSekunda}`;
    console.log(`${sformatowanaGodzina}:${sformatowanaMinuta}:${sformatowanaSekunda}`);
    // Ustawienie funkcji na cykliczne wywoływanie co sekundę
    setTimeout(Zegar, 1000);
  }
  
  function dodajZero(cyfra) {
    return cyfra < 10 ? `0${cyfra}` : cyfra;
  }
  
  // Wywołaj funkcję po załadowaniu strony
  
  /* window.onload = function () {
    Zegar();
  }; */
  