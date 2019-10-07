import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import CartContext from '../contexts/CartContext';


//using ContextHook

const Navigation = () => {
const cart = useContext(CartContext);

	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{cart.length}</span>
			</NavLink>
		</div>
	);
};

//export default Navigation

//using ContextConsumer 

// const Navigation = () => {
	
// 	return (
// 		<CartContext.Consumer>
// 			{
// 				props => {
// 					return (
// 						<div className="navigation">
// 							<NavLink to="/">Products</NavLink>
// 							<NavLink to="/cart">
// 								Cart <span>{props.length}</span>
// 							</NavLink>
// 						</div>
// 					)
// 				}
				
// 			}
			
// 		</CartContext.Consumer>
// 	)
// }
// export default Navigation;

//using static Context Type 

// const Navigation = () => {
	
// 	return (
// 		<div className="navigation">
// 						<NavLink to="/">Products</NavLink>
// 						<NavLink to="/cart">
// 							Cart <span>{this.cart.length}</span>
//  							</NavLink>
// 					</div>

// 	)

// }

// Navigation.contextType = CartContext;

//error using static Context Type; this/cart cannot defined 

export default Navigation;