import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { GetExercises } from '../../../services/ExercisesService';
import Navigator from '../../../components/Navigator';
import '../../../styles/style.css';

function App() {
    const exercises = GetExercises();
    return (
        <Fragment>
            <Navigator />
               <main className ="container container-cards">
                           {exercises.map((item,index) => (
                            <section className= "card" key={index}>

                            
                            
                               
                                <p className = "">{item.Title}</p>
                                
                                <h4 className="">Nivel De Dificultad</h4>
                                <p>{item.DifficultyLevel}</p>
                                <h4 className="">Categorias</h4>
                                <p>{item.Categories}</p>
                                <h4 className ="">Ultimos Cambios</h4>
                                <p>{item.LastUpdated}</p>
                                
                                <div className="boton ">
                                <Link className = "btn" to={"/exercise/" + item.Id}>Ejercicio {index.Id}</Link>
                                </div>
                            </section>
                        ))}
               </main>
          
           
        </Fragment>
    );
}

export default App;