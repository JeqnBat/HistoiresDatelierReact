import { useParams } from 'react-router-dom'
import Item from  '../../../../components/Item'

const ItemView = ({ products }) => {
  let { id } = useParams('id')
  let details = products.find(item => item.id === id)

  if (!id) {
    return <h1>404…</h1>
  } else {
    return <Item details={details} />
  }
}

export default ItemView