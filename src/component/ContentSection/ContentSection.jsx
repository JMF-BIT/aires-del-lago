import { Grid, Box } from "@mui/material";
import { motion } from "framer-motion";
import "./ContentSection.css";

const ContentSection = ({ title, text, imageUrl, reverse = false }) => {
  return (
    <Box className="content-section">
      <Grid
        container
        className="content-section-grid"
        direction={reverse ? "row-reverse" : "row"}
      >
        {/* Text Column */}
        <Grid item xs={12} md={6} className="content-section-text">
          <motion.div
            className="content-section-text-inner"
            initial={{ opacity: 0, x: reverse ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="content-section-title">{title}</h2>
            <div className="content-section-body">
              {Array.isArray(text) ? (
                text.map((paragraph, index) => (
                  <p key={index} className="content-section-paragraph">
                    {paragraph}
                  </p>
                ))
              ) : (
                <p className="content-section-paragraph">{text}</p>
              )}
            </div>
          </motion.div>
        </Grid>

        {/* Image Column */}
        <Grid item xs={12} md={6}>
          <motion.div
            className="content-section-image"
            style={{ backgroundImage: `url(${imageUrl})` }}
            initial={{ opacity: 0, x: reverse ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContentSection;
