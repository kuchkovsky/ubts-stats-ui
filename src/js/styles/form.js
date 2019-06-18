const formStyles = (width = 500, otherProps = () => {}) =>
  theme => ({
    main: {
      width: 'auto',
      display: 'block', // Fix IE 11 issue.
      [theme.breakpoints.up(width + theme.spacing.unit * 3 * 2)]: {
        width,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing.unit,
    },
    headerImage: {
      width: '100%',
      marginBottom: 20,
    },
    spinnerContainer: {
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    spinner: {
      position: 'relative',
      top: '50%',
      left: '50%',
      marginLeft: -30,
    },
    accentText: {
      fontWeight: '500',
    },
    justify: {
      textAlign: 'justify',
    },
    section: {
      marginTop: 20,
    },
    sectionTitle: {
      textAlign: 'center',
    },
    sectionTitleInfo: {
      textAlign: 'center',
      marginBottom: 20,
    },
    sectionSubtitle: {
      marginTop: 10,
      textAlign: 'center',
    },
    sectionSubtext: {
      marginTop: 10,
      textAlign: 'justify',
    },
    question: {
      marginTop: 15,
    },
    nestedRadioGroup: {
      marginLeft: 20,
    },
    agreement: {
      textAlign: 'justify',
      marginLeft: -20,
    },
    submit: {
      marginTop: theme.spacing.unit * 3,
    },
    errorMessage: {
      marginTop: 20,
      textAlign: 'center',
      color: 'red',
    },
    infoMessageWrapper: {
      marginTop: theme.spacing.unit,
      height: 48,
    },
    ...otherProps(theme),
  });

export default formStyles;
