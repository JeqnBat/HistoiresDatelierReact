import Grid from '../../../components/Grid'

const Mariage = ({ products }) => {
  const filteredItems = products.filter(el => el.category === 'mariage')
  return (
    <Grid products={filteredItems} />
  )
}

export default Mariage