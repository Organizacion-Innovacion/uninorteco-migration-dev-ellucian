import React from "react";
import { withStyles } from "@ellucian/react-design-system/core/styles";
import { spacing20 } from "@ellucian/react-design-system/core/styles/tokens";
import { Typography } from "@ellucian/react-design-system/core";
import PropTypes from "prop-types";
import { usePageControl } from "@ellucian/experience-extension-utils";
// import { useIntl } from "react-intl";
import { calculateDistance } from "../core/common/utils";
// import { APP_ENV_VARS } from "../core/config/app-env-vars";
import { AppLogger } from "../core/config/logger";
import StepProgressComponent from "./components/stepProgressComponent/StepProgressComponent";

// set up a context to help to identify the log messages
const myLogger = AppLogger.getAppLogger().createContextLogger("home.jsx");

const styles = () => ({
  card: {
    margin: `0 ${spacing20}`,
  },
});

const HomePage = (props) => {
  const { classes } = props;
  const { setPageTitle } = usePageControl();
  // const intl = useIntl();

  setPageTitle("Actualización de datos egresados");

  const distance = calculateDistance(11.1, -74.11, 11.2, -73.11);
  // this will print "home.jsx: the distance is <number>"
  myLogger.debug(`the distance is ${distance}`);

  return (
    <div className={classes.card}>
      <Typography variant="h1">
        Eres parte de la comunidad más grande de Uninorte
      </Typography>
      <Typography>Porque te queremos cerca siempre, ayúdanos a <strong>validar</strong>, <strong>completar</strong> y <strong>actualizar</strong> tus datos.</Typography>
      <Typography>
      Última actualización: 04-07-2023.
      </Typography>
      <Typography>Aquellos marcados con  podrían estar desactualizados.</Typography>
      <StepProgressComponent />
    </div>
  );
};

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePage);
