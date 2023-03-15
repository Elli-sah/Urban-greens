<script>
  import WaterChart from '../components/WaterChart.vue'

  export default {
    name: 'WaterChart',
    components: { WaterChart }
  }
</script>

<template>
  <div class="view-divs">
    <div id="header">
      <h1>Tips & råd</h1>
    </div>
    <div id="big-box">
      <div id="img" />
      <div id="text-box">
        <div class="how-to">
          <h2>Hur man tar sticklingar</h2>
          <p>
            Att ta sticklingar är ett vanligt sätt att föröka växter, och det är
            en relativt enkel process. Här är några steg som kan hjälpa dig att
            ta sticklingar på ett korrekt sätt:
          </p>
          <div id="steps">
            <ol>
              <li>
                <strong>Välj den rätta växten:</strong> Välj en växt som är
                frisk och stark, och vars stjälk inte är för tunn eller för
                hård. Det är också bäst att ta sticklingar på våren eller
                sommaren när växten växer som mest.
              </li>
              <li>
                <strong> Förbered verktygen:</strong> Se till att du har en
                skarp beskärningssax, en ren yta att arbeta på och en behållare
                med vatten eller jord där du kan placera dina sticklingar.
              </li>
              <li>
                <strong> Klipp stjälken:</strong> Klipp av en stjälk från
                huvudväxten på en punkt där det finns en tillräckligt lång och
                frisk gren att arbeta med. Klipp stjälken på en 45 graders
                vinkel med beskärningssaxen.
              </li>
              <li>
                <strong>Ta bort blad:</strong> Ta bort de flesta av bladen på
                stjälken, och lämna bara några stycken kvar i toppen för att
                hjälpa till att bevara fuktigheten.
              </li>
              <li>
                <strong>Plantera sticklingen:</strong> Placera stjälken i ett
                glas med vatten eller plantera den i en liten behållare med
                fuktig jord. Täck över behållaren med en plastpåse eller en
                plastfilm för att skapa en fuktig miljö för sticklingen.
              </li>
              <li>
                <strong> Ta hand om sticklingen:</strong> Se till att behållaren
                med sticklingen placeras på en ljus plats, men undvik direkt
                solljus och utkast. Håll jorden fuktig men inte blöt och vänta
                tills de nya rötterna har bildats innan du transplanterar
                sticklingen till en större behållare eller till trädgården.
              </li>
            </ol>
          </div>
          <p>
            Att ta sticklingar kan vara en rolig och enkel process som kan ge
            dig många nya växter att njuta av. Genom att följa dessa steg kan du
            öka dina chanser att lyckas ta sticklingar på ett korrekt sätt.
          </p>
        </div>

        <div class="how-to">
          <h2>Allmänna Skötselråd för dina Krukväxter</h2>
          <p>
            Krukväxter kan ge liv och färg till alla rum, men för att de ska
            trivas och hålla sig friska kräver de regelbunden skötsel. Här är
            några allmänna skötselråd för krukväxter som kan hjälpa dig att
            hålla dina växter friska och vackra:
          </p>

          <div class="advice">
            <div>
              <h3>Placering</h3>
              <p>
                En viktig faktor för att dina krukväxter ska trivas är att de
                placeras på rätt plats. De flesta krukväxter trivs i en väl
                upplyst omgivning, men undvik att placera dem i direkt solljus
                då det kan bränna bladen. De flesta inomhusväxter trivs bäst i
                en temperatur mellan 18 och 24 grader Celsius, undvik att
                placera dem i utkast och kalla områden. För att få rätt växt
                till rätt ställe bör man reda ut om det är hel- eller halvskugga
                där man skall plantera.
              </p>
              <ul>
                <li>Helskugga är om det finns solljus max 2 timmar per dag.</li>
                <li>
                  Halvskugga är när platsen erbjuder växterna solljus minst 4
                  timmar/dag.
                </li>
              </ul>
            </div>
            <div>
              <!-- <img src="../../assets/Växter/feey-0M1QwymIzxw-unsplash.jpg" alt="" /> -->
            </div>
          </div>
          <div class="advice">
            <div>
              <h3>Bevattning</h3>
              <p>
                Att vattna dina växter regelbundet är viktigt, men övervattna
                inte och se till att jorden inte torkar ut helt mellan
                vattningarna. Hur ofta du behöver vattna beror på faktorer som
                växttyp, storlek, ljusförhållanden och temperatur. Det är alltid
                bäst att känna på jorden innan du vattnar igen. Tänk på att
                vattna i botten och låt inte vattnet stå kvar i krukan för länge
                då detta kan orsaka röta och skador på växten.
              </p>
              <div id="chart-box">
                <WaterChart />
              </div>
            </div>
            <div>
              <h3>Gödsling</h3>
              <p>
                Krukväxter behöver näring för att växa och trivas. Gödsla därför
                med en lämplig gödsel, följ anvisningarna på förpackningen och
                gödsla inte för mycket.
              </p>
            </div>
            <div>
              <h3>Luftfuktighet</h3>
              <p>
                Vissa krukväxter trivs bättre i högre luftfuktighet än vad som
                finns i våra hem. Du kan öka luftfuktigheten genom att spraya
                vatten på bladen eller genom att placera växten på en bricka med
                vatten.
              </p>
            </div>
            <div>
              <h3>Omplantering</h3>
              <p>
                Krukväxter behöver ibland planteras om, när de växer ur sin
                nuvarande kruka. Välj en större kruka och byt ut jorden
                samtidigt. Var noga med att inte skada rötterna när du planterar
                om växten och vattna dem alltid efteråt.
              </p>
            </div>
            <div>
              <h3>Skadedjur</h3>
              <p>
                Håll koll på skadedjur som bladlöss och spinnkvalster som kan
                angripa dina krukväxter. Det finns många olika bekämpningsmedel
                att använda, men det är bäst att använda dem försiktigt och
                enbart när det behövs.
              </p>
            </div>
            <div>
              <h3>Klippning</h3>
              <p>
                Klipp bort döda blad och blommor regelbundet för att hålla din
                krukväxt i bra skick. Det kan också vara nödvändigt att beskära
                växten för att ge den en snygg form eller för att ta bort
                oönskade grenar.
              </p>
            </div>
            <div>
              <h3>Rengöring</h3>
              <p>
                Det finns olika sätt att rengöra växter på beroende på vilken
                typ av växt det är och vad som behöver rengöras. Här är några
                tips:
              </p>
              <div id="steps">
                <ol>
                  <li>
                    Torka av bladen med en mjuk trasa eller en svamp fuktad med
                    vatten. Detta fungerar för de flesta gröna växter.
                  </li>
                  <li>
                    För växter med stora blad som samlar damm kan du använda en
                    mjuk pensel eller en fjäderduster för att försiktigt borsta
                    bort dammet från bladens yta.
                  </li>
                  <li>
                    Om det finns envisa fläckar eller smuts kan du torka av
                    bladen med en lösning av mild tvål och vatten. Se till att
                    du sköljer av tvållösningen noggrant med rent vatten
                    efteråt.
                  </li>
                  <li>
                    För växter med taggar eller stickiga blad, använd handskar
                    för att skydda händerna när du rengör dem. Torka av bladen
                    med en mjuk trasa eller svamp fuktad med vatten.
                  </li>
                  <li>
                    För växter som trivs i fuktiga miljöer, som ormbunkar eller
                    orkidéer, kan du placera dem i duschen och skölja av dem med
                    ljummet vatten.
                  </li>
                </ol>
              </div>
              <p>
                Oavsett vilken metod du väljer att använda, se till att du
                hanterar växterna försiktigt och inte utsätter dem för för
                mycket stress eller skador.
              </p>
            </div>

            <div>
              <p>
                Kom ihåg att olika krukväxter kan ha olika behov av skötsel, så
                det är viktigt att läsa på om din specifika växt och anpassa
                skötseln därefter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  #chart-box {
    margin-bottom: 40px;
  }
  #img {
    background-image: url('../../assets/Växter/vadim-kaipov-8ZELrodSvTc-unsplash.jpg');
    width: inherit;
    height: 300px;
    background-size: cover;
    background-position-y: 80%;
    border-bottom-style: groove;
    border-radius: 10px 10px 0 0;
  }

  #text-box {
    padding: 5% 15% 5% 15%;
  }

  #big-box {
    border-radius: 10px;
    height: auto;
    margin-top: 70px;
    background-color: rgba(255, 255, 255, 0.888);
  }

  h2 {
    margin-bottom: 20px;
    display: flex;
    text-align: left;
    font-weight: bolder;
  }

  h3 {
    display: flex;
    text-align: left;
    font-weight: 600;
    font-size: 23px;
  }

  #steps {
    width: 100%;
    padding: 30px 40px 30px 40px;
    border-radius: 10px;
    margin-bottom: 20px;
    background-color: #577751;
    color: white;
  }

  p {
    margin-bottom: 30px;
  }

  .how-to {
    margin-bottom: 10%;
  }

  li {
    margin-top: 15px;
    font-family: 'Lato', sans serif;
  }

  @media (max-width: 500px) {
    #header {
      font-size: small;
    }

    #steps {
      padding: 20px;
    }

    #text-box {
      padding: 5% 5% 5% 5%;
    }

    ul {
      font-size: small;
    }
  }

  /*
  .advice {
    background-color: white;
    border-radius: 10px;
    padding: 40px;
    margin: 10px;
    display: flex;
    flex-direction: row;
    background-image: url(../../assets/Växter/josh-calabrese-XXpbdU_31Sg-unsplash.jpg);
    background-position-x: center;
    background-position-y: 50%;
    background-size: 100%;
    background-repeat: no-repeat;
    width: 50%;
    height: 600px;
  } */

  /* #intro-text {
    background-color: white;
    border-radius: 10px;
    text-align: center;
    width: 90%;
    padding: 30px;
  } */
</style>
