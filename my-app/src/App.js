import Banner from './components/Banner'
import logo from './assets/logo.png'
import Cart from './components/Cart'
import ShoppingList from './components/ShoppingList'

function App() {
	return (
		<div>
			<Banner>
				<img src={logo} alt='Jungle House' className='jh-logo' />
				<h1 className='jh-title'>Jungle House</h1>
			</Banner>
			<Cart />
			<ShoppingList />
		</div>
	)
}

export default App
