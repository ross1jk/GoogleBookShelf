import React from "react";

function Searchform() {
    return (
        <div>
            <form>
                <div className="form-group">
                    <label for="book">Book</label>
                    <input type="text" className="form-control" id="book" />
                </div>
                <button type="submit" className="btn btn-info">Submit</button>
            </form>
        </div>
    );
}

export default Searchform;