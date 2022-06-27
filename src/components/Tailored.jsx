import './css/tailored.css'

const Tailored = () => {
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
      <div>Explication part 1</div>
      <div>Explication part 2</div>
      <div>Explication part 3</div>
    </div>
  )
}

export default Tailored