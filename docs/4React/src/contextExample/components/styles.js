const styles = (theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  card: {
    maxWidth: 150,
    background: theme.palette.primary.light,
    color: theme.palette.secondary.dark,
  },
  button: {
    color: "inherit",
    padding: theme.spacing(2),
    margin: theme.spacing(1, "auto"),
  },
});

export default styles;
