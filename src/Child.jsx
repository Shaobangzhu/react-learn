function Child({onAbc}) {
    // return <div onClick={()=>{alert(123)}}>Child</div>
    // return <input onInput={(e) => {console.log(e)}} />
    return <input onInput={onAbc}/>
}

export default Child;