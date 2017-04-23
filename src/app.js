import 'raw-loader!./index.ejs';

function formatName(user) {
	return user.firstName + ' ' + user.lastName;
}

const user = {
	firstName: 'James',
	lastName: 'Friedman'
};

const element = (
	<h1>Hello, {formatName(user)}!</h1>
);

ReactDOM.render(
	element,
	document.getElementById('root')
);
