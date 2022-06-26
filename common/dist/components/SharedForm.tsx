import React from "react";
import Form from "@rjsf/core";

const schema = {
    title: "How are you liking this app??",
    type: "object",
    required: ["feedback"],
    properties: {
        feedback: { type: "string" },
    },
};

const SharedForm = (): React.ReactNode => {
    return (
        <Form
            //@ts-ignore
            schema={schema}
        />
    );
};

export default SharedForm;
