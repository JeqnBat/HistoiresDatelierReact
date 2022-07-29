import { useStoreActions } from 'easy-peasy'
import React, { useState } from 'react'
import './css/tailored.css'

const Tailored = () => {
  const [seeSemi, setSeeSemi] = useState(true)
  const [seeForm, setSeeForm] = useState(false)
  const [form, setForm] = useState({
    paper       : 'a',
    format      : '8x11',
    typo        : 'arnoPro',
    motifs      : 'a',
    rectoVerso  : false,
    pli         : false,
    answerCard  : false,
    inspiration : ''
  })
  const { setTailoredForm } = useStoreActions(actions => actions)
  const handleChange = (e) => {
    let key = e.target.name
    let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setForm({...form, [key]: value})
  }
  const handleClick = () => {
    setSeeForm(true)
  }
  const handleSemi = () => {
    setSeeSemi(!seeSemi)
  }
  const handleSubmit = (e) => {
    // envoyer ça au state global
    setTailoredForm(form)
    e.preventDefault()
  }
  return (
    <div 
      id='tailored'
      style={{
        animationDuration: '350s',
        animationType: 'ease-in-out',
        animationName: 'slide-down',
        animationIterationCount: 'infinite'
      }}
    >
      <div onClick={handleSemi}>
        <span>semi mesure</span>
        <i className='fa-solid fa-circle-info'></i>
        <div
          className={seeSemi ? 'show' : ''}
        >Vous voulez modifier la typographie, la couleur et/ou le papier d'un modèle existant ? Cliquez sur ce modèle pour accéder à sa fiche détaillée puis sur semi-mesure</div>
      </div>
      <div>
        Sur-mesure cute welcome screen
      </div>
      <div
        onClick={handleClick}
      >toggle the form +</div>
      <form 
        className={seeForm ? '' : 'hide'}
        onSubmit={handleSubmit}>
        <label>
          Papier
          <select name='paper' value={form.paper} onChange={handleChange}>
            <option value='type1'>type1</option>
            <option value='oldMill'>Old Mill</option>
            <option value='type3'>type3</option>
            <option value='type4'>type4</option>
          </select>
        </label>
        <label>
          Format
          <select name='format' value={form.format} onChange={handleChange}>
            <option value='8x11'>8cm x 11cm</option>
            <option value='9x17'>9cm x 17cm</option>
            <option value='7x10'>7cm x 10cm</option>
            <option value='12x20'>12cm x 20cm</option>
          </select>
        </label>
        <label>
          Typographie
          <select name='typo' value={form.typo} onChange={handleChange}>
            <option value='arnoPro'>arnoPro</option>
            <option value='arial'>arial</option>
            <option value='kalinsha'>kalinsha</option>
          </select>
        </label>
        <label>
          Motifs
          <select name='motifs' value={form.motifs} onChange={handleChange}>
            <option value='fleurs'>fleurs</option>
            <option value='feuilles'>feuilles</option>
          </select>
        </label>
        <label>
          Recto / Verso
          <input
            name='rectoVerso'
            type='checkbox'
            checked={form.verso}
            onChange={handleChange}
          />
        </label>
        <label>
          Pli
          <input
            name='pli'
            type='checkbox'
            checked={form.pli}
            onChange={handleChange}
          />
        </label>
        <label>
          Carton réponse
          <input
            name='answerCard'
            type='checkbox'
            checked={form.answerCard}
            onChange={handleChange}
          />
        </label>
        <label>
          Inspiration
          <input
            name='inspiration'
            type='text-area'
            check={form.inspiration}
            onChange={handleChange}
          />
        </label>
        <input type='submit' value='envoyer' />
      </form>
      <div id='custom-article-props'>
        <div>{form.paper}</div>
        <div>{form.format}</div>
        <div>{form.typo}</div>
        <div>{form.motifs}</div>
        <div>{form.rectoVerso ? 'recto verso' : 'recto seul'}</div>
        <div>{form.pli ? 'avec pli' : 'sans pli'}</div>
        <div>{form.answerCard ? 'avec carton réponse' : 'sans carton réponse'}</div>
      </div>
      <div>
        these are your infos, do you validate ?<br />
        <span>no, come back</span><span>yes validate</span>
      </div>
    </div>
  )
}

export default Tailored