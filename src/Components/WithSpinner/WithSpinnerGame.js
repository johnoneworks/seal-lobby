import React from "react";
import Spinner from "../Spinner/Spinner";

const WithSpinnerGame = WrappedComponent =>
    ({ isGameGridLoading, isGameOverviewLoading, ...otherProps }) => {

        return isGameGridLoading
            ? <Spinner />
            : (isGameOverviewLoading
                ? null
                : <WrappedComponent {...otherProps} />)

    };

export default WithSpinnerGame;