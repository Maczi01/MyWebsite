import MainContainer from "../components/MainContainer";
import Title from "../components/Title";
import styled from "styled-components";

const AboutTitle = styled.h3`
  font-size: 4rem;
  display: flex;
  padding: 10px;
  margin: 20px;
  justify-content: center;
  font-weight: bold;
`
const AboutText = styled.p`
  display: flex;
  padding: 10px;
  margin: 20px;
  justify-content: center;
`

const AboutContent = () => (
    <MainContainer>
        <Title/>
        <AboutText>
            Nazywam się Mateusz, od kilku lat pracuje jako konstruktor w branży mechanicznej. Ukończyłem
            Inżynierię mechaniczną na Politechnice Wrocławskiej z tytułem magistra. Od kilku lat interesuje się
            programowaniem, ze szczególnym uwzględnieniem projektowania aplikacji internetowych. W obszarze
            moich zainteresowań są zagadnienia związane z frontendem - głównie React.js, a także z backednem
            (Java i Spring).
        </AboutText>
        <AboutTitle>
            Programowanie
        </AboutTitle>
        <AboutText>
            Programowanie to coś, co sprawia mi ogromną frajdę. Uwielbiam poznawać nowe technologie, tworzyć
            nowe projekty i rozwiązywać problemy. W nauce programowania pociąga mnie ogrom wiedzy.
        </AboutText>
        <AboutTitle>
            Doświadczenie
        </AboutTitle>
        <AboutText>
            Posiadam kilkuletnie doświadczenie w projektowaniu konstrukcji maszyn przemysłu ciężkiego.
            Przez 5 lat zajmowałem się także organizacją imprez masowych. Posiadam niewielkie doświadczenie w
            branży IT.
        </AboutText>
        <AboutTitle>
            Osobowość
        </AboutTitle>
        <AboutText>
            Jestem miłą i komunikatywną osobą, która lubi pracę w grupie. Lubię współdziałać z osobami zmotywowanymi do
            pracy.
            Myślę, że jestem kreatywny. Mam dużo pomysłów i często znajduje nieoczywiste rozwiązania. Ponadto uwielbiam
            rozmawiać z ludźmi.
        </AboutText>
        <AboutTitle>
            Podziękowania
        </AboutTitle>
        <AboutText>
            Jesli czytasz ten tekst, to mogę uznać, że dotarłeś do końca. Mam nadzieję, że udało Ci się mnie trochę
            poznać. Jeżeli jednak miałbyś jakiekolwiek pytania, nie wahaj się napisać. Odpisuje na każdy email!
            Jeśli jednak potrzebujesz jedynie mojego CV, kliknij tu.
        </AboutText>
        <AboutTitle>
            Miłego dnia!
        </AboutTitle>
    </MainContainer>
)

export default AboutContent;