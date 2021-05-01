import React from "react";

function Searchform(props) {
    return (
        <div>
            <form>
                <div className="form-group">
                    <label for="book">Book</label>
                    <input type="text" className="form-control" value={props.value} onChange={props.onChange} id="book" />
                </div>
                <button onClick={props.onClick} type="submit" className="btn btn-info">Submit</button>
            </form>
        </div>
    );
}

export default Searchform;