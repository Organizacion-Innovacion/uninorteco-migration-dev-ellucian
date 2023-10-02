import { withStyles } from "@ellucian/react-design-system/core/styles";
import { spacing40 } from "@ellucian/react-design-system/core/styles/tokens";
import {
  Typography,
  TextField,
  Badge,
  Illustration,
  IMAGES,
} from "@ellucian/react-design-system/core";
import { Icon, IconSprite, icons } from "@ellucian/ds-icons/lib";
import PropTypes from "prop-types";
import React from "react";
import { useIntl } from "react-intl";
import { setupLogger } from "../util/setup-logger";
import { AppLogger } from "../core/config/logger";
import { withIntl } from "../i18n/ReactIntlProviderWrapper";

// setup logger for card
setupLogger();

const myLogger = AppLogger.getAppLogger().createContextLogger("main card");

  

const styles = () => ({
  card: {
    marginTop: 0,
    marginRight: spacing40,
    marginBottom: 0,
    marginLeft: spacing40,
  },
  centerContent: {
    display: "flex",
    flexFlow: "column nowrap",
    textAlign: "center",
    justifyContent: "center",
    padding: "0 1rem",
  },
});

function MainCard(props) {
  const { classes } = props;
  const intl = useIntl();

  myLogger.debug("card template 1");

  return (
    <div className={classes.centerContent}>
      <div className={classes.centerContent}>
        <Illustration name={IMAGES.NO_MESSAGES} />
        <Typography variant="h3" id="CardContentDescription" gutterBottom>
          ¿Tienes preguntas?
        </Typography>
        <Typography
          className={classes.cardContentDescription}
          variant="body2"
          id="CardContentCaption"
          gutterBottom
        >
          Visita el Centro de Ayuda para obtener respuestas a las preguntas más
          frecuentes o escribe tu pregunta
        </Typography>
      </div>
    </div>
  );

  // return (

  //   <div
  //     style={{
  //       border: "none",
  //       borderRadius: "5px",
  //       padding: "1rem",
  //       width: "300px",
  //     }}
  //   >
  //     <TextField label="Buscar" variant="outlined" style={{ marginBottom: "2rem" }} />
  //     {sampleResults.map((result, index) => (
  //       <div
  //         key="id"
  //         style={{
  //           marginBottom: "1.5rem",
  //           // padding: "0.5rem",
  //           borderBottom: "1px solid #e0e0e0",
  //           width: "100%",
  //           // boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  //         }}
  //       >
  //         <Typography variant="h5">{result.title}</Typography>

  //         <Typography variant="body2" style={{ marginTop: "0.5rem" }}>
  //           {result.preview}
  //         </Typography>
  //         <Typography
  //           variant="caption"
  //           style={{ display: "block", marginTop: "0.5rem" }}
  //         >
  //           <div
  //             style={{
  //               display: "flex",
  //               alignItems: "center",
  //               justifyContent: "flex-start",
  //             }}
  //           >
  //             <Icon name="calendar" style={{ marginRight: "0.5rem" }} />
  //             <Typography variant="h5" style={{ display: "inline" }}>
  //               {result.date}
  //             </Typography>
  //           </div>
  //         </Typography>
  //       </div>
  //     ))}
  //   </div>
  // );
}

MainCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

const MainCardWithStyles = withStyles(styles)(MainCard);

export default withIntl(MainCardWithStyles);