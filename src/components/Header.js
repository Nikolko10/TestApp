import React from 'react';

const Header = (props) => {
	const weak = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
	return weak.map((day, i) => <div key={i}>{day}</div>)
}

export default Header