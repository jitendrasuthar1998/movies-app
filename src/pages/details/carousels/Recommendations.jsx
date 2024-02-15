import React from "react";

import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";

const Recommendations = ({ mediaType, id }) => {
    const { data, loading, error } = useFetch(
        `/${mediaType}/${id}/recommendations`
    );

    console.log("media type at Recommendations: " , mediaType)

    return (
        <Carousel
            title="Recommendations"
            data={data?.results}
            loading={loading}
            endPoint={mediaType}
        />
    );
};

export default Recommendations;