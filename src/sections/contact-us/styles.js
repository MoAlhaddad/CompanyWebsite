const styles = {
    container: {
        width: '110%',
        marginLeft: '0',
    },
    containerBox: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        paddingLeft: '0'
    },
    errorText: {
        color: '#ff3333'
    },
    errorInput: {
        border: 'solid 2px	#ff3333',
        '&::placeholder': {
            color: '#ff3333'
        },
        msInputPlaceholderColor: '#ff3333'
    },
    form: {
        marginLeft: '0',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },
    inputContainer50: {
        display: 'flex',
        marginTop: '1.5em',
        flexDirection: 'column',
        width: ['90%', '47%', '47%'],
    },
    inputContainer50Text: {
        paddingLeft: '0.2em'
    },
    input: {
        margin: 0,
        width: '100%',
        outline: 0,
        swebkitTapHighlightColor: 'rgba(255,255,255,0)',
        textAlign: 'left',
        lineHeight: '1.21428571em',
        padding: '.67857143em 1em',
        background: '#fff',
        border: '1px solid rgba(34,36,38,.15)',
        color: 'rgba(0,0,0,.87)',
        borderRadius: '.28571429rem',
        webkitTransition: 'border-color .1s ease,-webkit-box-shadow .1s ease',
        transition: 'border-color .1s ease,-webkit-box-shadow .1s ease',
        transition: 'box-shadow .1s ease,border-color .1s ease',
        transition: 'box-shadow .1s ease,border-color .1s ease,-webkit-box-shadow .1s ease',
        webkitBoxShadow: 'none',
        boxShadow: 'none',
    },
    textAreaContainer: {
        width: '100%',
        height: '15em',
        marginTop: '1.5em',
    },
    textArea: {
        resize: 'none',
        fontFamily: 'Poppins, sans-serif',
    },
    submitButton: {
        bg: '#4BB543',
        padding: '1em !important',
        borderRadius: '5px !important'
    }
};

export default styles;