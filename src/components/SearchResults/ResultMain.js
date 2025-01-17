import React from "react";
import PropTypes from "prop-types";
import LinesEllipsis from "react-lines-ellipsis";

function ResultMain({ data }) {
    return (
        <div className="ResultMainConatiner" tabIndex="-1">
            <a
                target={"_blank"}
                rel="noreferrer"
                href={data.pretty_url}
                className="ResultMainUpperLink"
            >
                {data.pretty_url}
            </a>
            <a
                target={"_blank"}
                rel="noreferrer"
                href={data.pretty_url}
                className="ResultMainLink"
            >
                <LinesEllipsis
                    text={data.title}
                    maxLine="2"
                    ellipsis="..."
                    trimRight
                    basedOn="letters"
                />
            </a>
            <p className="ResultMainDescription">
                <LinesEllipsis
                    text={data.content}
                    maxLine="4"
                    ellipsis="..."
                    trimRight
                    basedOn="letters"
                />
            </p>
        </div>
    );
}

export default ResultMain;

export const SearchSuggestions = ({ data }) => {
    return (
        <div className="SearchSuggestions p-2">
            <p className="text-dark fw-bold">Suggestions</p>
            <ul>
                {data?.map((item, i) => {
                    return (
                        <li className="SearchSuggestionsLink" key={i}>
                            <a href={"/search?q=" + item}>{item}</a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

ResultMain.propTypes = {
    data: PropTypes.object,
};

SearchSuggestions.propTypes = {
    data: PropTypes.object,
};
