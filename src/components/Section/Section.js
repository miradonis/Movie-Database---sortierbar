import './Section.css';
import MovieList from '../../assets/data/MovieList';
import { useState } from 'react';

// komponente
const Section = () => {

    let [dataForSort, setAlphabetical] = useState(MovieList);

    const Ascending = () => {
        let copy = [...MovieList];
        copy.sort((x, y) => x.year - y.year)
        setAlphabetical(copy);
    }

    const Descending = () => {
        let copy = [...MovieList];
        setAlphabetical(copy.sort((x, y) => y.year - x.year));
    }

    const BestRate = () => {
        let copy = [...MovieList];
        setAlphabetical(copy.sort((x, y) => y.rate - x.rate));
    }

    const SortAZ = () => {
        let copy = [...MovieList];
        setAlphabetical(copy.sort((x, y) => y.title > x.title ? -1 : 1));
    }

    const SortZA = () => {
        let copy = [...MovieList];
        setAlphabetical(copy.sort((x, y) => y.title < x.title ? -1 : 1));
    }

    
    return ( 
        <section>
            <div>
                <button onClick={Ascending}>Sort by Date Ascending</button>
                <button onClick={Descending}>Sort by Date Descending</button>
                <button onClick={BestRate}>Sort by Best Rate</button>
                <button onClick={SortAZ}>A - Z</button>
                <button onClick={SortZA}>Z - A</button>
            </div>
            <article className='cards'>
                {
                dataForSort.map((item, index) => {
                // console.log(MovieList.length);
                return (
                    <article className='card' key={index}>
                        <p>{item.title}</p>
                        <p>{item.year}</p>
                        <p>{item.director}</p>
                        <p>{item.duration}</p>
                        <p>{item.rate}</p>
                        {
                        item.genre.map((item, index) => {
                            return (<p key={index}>{item}</p>)       
                        })
                        } 
            </article>
                )
            })
            }
            </article>


        </section>
    );
}
export default Section;