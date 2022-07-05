import { useStoreActions } from 'easy-peasy'
import React, { useState } from 'react'
import './css/tailored.css'

const Tailored = () => {
  const { setTailoredForm } = useStoreActions(actions => actions)
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
  const handleChange = (e) => {
    let key = e.target.name
    let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setForm({...form, [key]: value})
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
      <div>/!\tip semi mesure</div>
      <form onSubmit={handleSubmit}>
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
    </div>
  )
}

export default Tailored