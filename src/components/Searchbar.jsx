import React from "react";
import { BiSearch } from "react-icons/bi";

const Searchbar = () => {
    return (
        <>
            <section className="searchsec">
                <form className="searchsec-form mb-4 rounded overflow-hidden border">
                    <div className="input-group">
                    <input
                        type="text"
                        placeholder="search your favourite items..."
                        className="form-control border-0"
                        autocomplete="off"
                    />
                    <div className="input-group-append">
                        <button
                        type="button"
                        className="btn btn-primary search-btn"
                        >
                        <BiSearch size={20}/>
                        </button>
                    </div>
                    </div>
                </form>
            </section>
        </>
    );
};

export default Searchbar;
