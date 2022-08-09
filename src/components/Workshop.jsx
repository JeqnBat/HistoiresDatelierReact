import './css/workshop.css'
import house from '../img/house.webp'
import illustration from '../img/workshop_illustration.webp'

const Workshop = () => {
  return (
    <div id='workshop'>
      <div>
        <img src={house} alt="dessin de l'atelier" />
        <span>Histoires d'atelier</span>
      </div>
      <div className='spacinho'></div>
      <section>
        <img src={illustration} alt='illustration' />
        <div>
          <h1>PORTRAIT</h1>
          <span>
            Je suis Stéphanie, fondatrice d’Histoires d’atelier.<br /><br />

            Avant de créer ma propre entreprise, j’ai tout d’abord été à
            l’Ecole supérieure des arts appliqués Duperré à Paris.
            Après l’obtention de mon diplôme, j’ai été salarié en tant
            que styliste durant quelques années, puis je me suis mise
            à mon compte en 2011 pour créer Histoires d’atelier.
          </span>
        </div>
      </section>
      <div className='spacinho'></div>
      <section>
        <div>
          <h1>CRÉATION</h1>
          <span>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </span>
        </div>
        <img src={illustration} alt='illustration' />
      </section>
      <div className='spacinho'></div>
      <section>
        <img src={illustration} alt='illustration' />
        <div>
          <h1>ÉVOLUTION</h1>
          <span>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </span>
        </div>
      </section>
      <div className='spacinho'></div>
    </div>
  )
}

export default Workshop