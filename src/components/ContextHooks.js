import React, { useContext } from "react";
import { UserContext, TutorialContext } from "../App";

function ContextHooks() {

    const user = useContext(UserContext)
    const tutorial = useContext(TutorialContext)

  return (
    <div>
      { user } - { tutorial }
    </div>
  );
}

export default ContextHooks;
