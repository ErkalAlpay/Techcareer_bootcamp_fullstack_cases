
//IMPORT CSS
import "./section1.css";

export default function Section1() {
    return (
        <>
            <div>
                <h1 className="baslik">
                     <b>
                        Get Things Done!
                    </b> 
                </h1>
            </div>

            <span className="span1">

                {/*  <FontAwesomeIcon icon="fa-solid fa-floppy-disk" />*/}
                <input type="text" name="newTodo" id="newTodo" placeholder="New Todo"
                    className="input_data_span" />

            </span>

            <div className="span1">

                <button type="button" className="btn btn-primary">Add New To Do</button>

            </div>

            

            <span className="button2">
                <button type="button" className="btn btn-primary">Select All</button>
            </span>

            <div className="button3">
                <button type="button" className="btn btn-primary">Done</button>
            </div>

        </>

    )
}
