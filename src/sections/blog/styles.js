

const styles = {
  blogsContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxHeight: '30em',
  },
  blogTutorialsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'flex-start',
    minHeight: '10em',
    maxHeight: '60em',
    overflowY: 'auto',
    flexWrap: "wrap",
    width: '100%',
    paddingLeft:  ['0px', '0px', '0px'],
  },
  blogTutorialContainer: {
    display: "flex",
    paddingLeft: ['0px', '0px', '0px'],
    flexDirection: "column",
    width: ["90%", "50%", "31%"],
    margin: '0.5em',
    minHeight: "20em",
    height: 'auto',
    boxShadow: "0px 0px 1px rgba(38, 78, 118, 0.35)",
    p: {
      justifySelf: 'flex-end',
      fontSize: ['0.7em', '0.7em', '0.8em']
    },
    button: {
      margin: '1em',
    }
  },
  blogTutorialContainerImg: {
    minHeight: '10em',
    minWidth: '100%',
    width: 'auto',
    height: 'auto'
  }
};

export default styles;
