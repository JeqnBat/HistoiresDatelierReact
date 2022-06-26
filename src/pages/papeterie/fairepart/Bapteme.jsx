import { useStoreActions } from 'easy-peasy'

const Bapteme = ({ products }) => {
  const { highlightProducts } = useStoreActions(actions => actions)
  let stay =
    products
      .filter((el) => el.category === 'bapteme')
      .map(({highlighted, ...rest}) => ({highlighted: true, ...rest}))
  let update =
      products
        .filter((el) => el.category !== 'bapteme')
        .map(({highlighted, ...rest}) => ({highlighted: false, ...rest}))
  let newArr = [...stay, ...update]
  console.log(stay, update);

    highlightProducts(newArr.sort((a, b) => a.id - b.id))

  return (
    <div>kioko</div>
  )
}

export default Bapteme