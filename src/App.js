import './App.css';

function App() {
  return (
   <div>
<h2>Right Tooltip</h2>
<p>Move the mouse over the text below:</p>

<div className='tooltip'>Hover over me!
  <span  className='tooltiptext'>Thanks for hovering! I'm a tooltip</span>
</div>
</div>

  );
}

export default App;
