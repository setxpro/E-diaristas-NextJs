import React from "react";

import { SafeEnviromentContainer } from "./SafeEnviroment.styles";
import { Container } from "@material-ui/core";

const SafeEnviroment = () => {
  return (
    <SafeEnviromentContainer>
      <Container>
        Ambiente seguro <i className={"twf-lock"} />
      </Container>
    </SafeEnviromentContainer>
  );
};

export default SafeEnviroment;
