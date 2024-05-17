import { useFetchGifs } from "../hook/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ( { category }) => {

    const { images, isLoading } = useFetchGifs( category );

    // console.log({ images, isLoading });
    // const [counter, setCounter] = useState(10)
    
    
    // setCounter( counter + 1 );

    // const gifs = [1,2,3,4,5]
  
  return (
    <>

        <h3>{ category }</h3>
        {
            isLoading && ( <h2>Cargando... </h2> )
            // isLoading
            // ? ( <h2>Cargando... </h2> )
            // : null
        }
        {/* <h2 >Cargando... </h2> */}

        <div className="card-grid">
            {
                images.map( ( image ) => (
                    <GifItem 
                        key={ image.id }
                        { ...image }
                    />
                    // <li key={ id }>{ title }</li>
                ))
            }
        </div>
        {/* <h5>{ counter }</h5> */}
        {/* <button onClick={ () => setCounter( counter + 1 ) }> +1 </button> */}
        {/* <p>{ category }</p> */}
        {/* {
            gifs.map( gif => (
                <p>{ gif }</p>
            ))
        } */}
    
    </>
  )
}
