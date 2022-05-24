import React, {useState} from 'react'

function Select(props) {

    const [selected, setSelected] = useState([]);
    const [cats, setCats] = useState(
        ["Action",
        "Adventure", 
        "Comedy", 
        "Crime",
        "mystery",
        "Fantasy",
        "Historical",
        "Historical fiction",
        "Horror",
        "Romance",
        "Satire",
        "Science fiction",
        "Cyberpunk",
        "Speculative",
        "Thriller",
        "Western",
        "Other"]);

    const handleSubmit = (e) => {
        e.preventDefault()
        props.setGenre(selected)
    }
        
  return (
    <div>
        <h3>select some categories</h3>
        <form onSubmit={(e) => handleSubmit(e)}>
            {cats.map(cat => (
                <div>
                <input id={cat} key={cat} type={'checkbox'} onChange={(e) => e.target.checked ? setSelected([...selected, cat]) : setSelected(selected.filter(i => i !== cat))}/>
                    {cat}
                </div>
            ))}
            <button>recommend</button>
        </form>
        
    </div>
  )
}

export default Select