const initialState = {
  items: getDaysInMonth(),
  hasErrored: false,
  isLoading: false
}

function getDaysInMonth() {
  let d = new Date(2018, 1);
  let dayWeak = new Date().getDay();
  let days = [];
  for (var start = 1; start < dayWeak + 1; start++) {
      days.push('')
  }
  while (d.getMonth() === 1) {
      days.push(d.getDate());
      d.setDate(d.getDate() + 1);
  };
  for (var end = dayWeak; end < 7; end++) {
      days.push('')
  }
  return days.map((item, i) => {
      return {
          num: item,
          time: '',
          note: ''
      }
  });
};

export default initialState