import Grid from '../../../components/Grid'

const Naissance = ({ products }) => {
  const filteredItems = products.filter(el => el.category === 'naissance')
  return (
    <Grid products={filteredItems} />
  )
}

export default Naissance