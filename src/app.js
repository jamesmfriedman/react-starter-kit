import 'raw-loader!./index.ejs';
import { AppContainer } from 'react-hot-loader';
import { App } from './components/app.component';

console.log(process.env);

const render = Component => {
	ReactDOM.render(
		<AppContainer>
			<Component/>
		</AppContainer>,
		document.getElementById('root')
	);
};

render(App);

// Hot Module Replacement API
if (module.hot) {
	module.hot.accept('./components/app.component', () => {
		render(App);
	});
}
