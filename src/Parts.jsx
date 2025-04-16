export function PartOne({showPartOne, setShowPartOne}) {

  return (
    <div>
      { showPartOne? <div>PartOne</div>: null }
      <button onClick={()=> {setShowPartOne(true) }}>Toggle</button>
    </div>
  );
}

export function PartTwo({showPartOne, setShowPartOne}) {
  
    return (
      <div>
        { !showPartOne? <div>PartTwo</div>: null }
        <button onClick={()=> {setShowPartOne(false) }}>Toggle</button>
      </div>
    );
  }
