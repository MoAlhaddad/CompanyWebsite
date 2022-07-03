import ShapeLeft from 'assets/shape-left.png';
import ShapeRight from 'assets/shape-right.png';


const styles = {
    banner: {
      pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
      pb: [2, null, 0, null, 2, 0, null, 5],
      mt: ['10em'],
      position: 'relative',
      zIndex: 2,
      '&::before': {
        content: '""',
        top: 10,
        bottom: 6,
        left: 0,
        height: '30em',
        width: '100vw',
        zIndex: -1,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: 'bottom left 10em',
      },
      '&::after': {
        position: 'absolute',
        content: '""',
        bottom: '40px',
        right: 0,
        zIndex: -1,
        backgroundImage: `url(${ShapeRight})`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: 'bottom right',
      },
      container: {
        minHeight: 'inherit',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        pt: '10em'
      },
      button: {
        display: 'flex',
        position: 'absolute',
        top:'50%',
        border: 'none',
        borderRadius: '10px',
        color: 'blue',
        cursor: 'pointer',
        hover: 'green',
        lineHeight: '1.21428571em',
        padding: '.67857143em 1em',
        background: '#fff',
        border: '1px solid rgba(34,36,38,.15)',
        color: 'rgba(255, 255, 255, 0)',
        borderRadius: '.28571429rem',
        webkitTransition: 'border-color .1s ease,-webkit-box-shadow .1s ease',
        transition: 'border-color .1s ease,-webkit-box-shadow .1s ease',
        transition: 'box-shadow .1s ease,border-color .1s ease',
        transition: 'box-shadow .1s ease,border-color .1s ease,-webkit-box-shadow .1s ease',
        webkitBoxShadow: 'none',
        margin: 0,
        width: '100%',
        outline: 0,
        swebkitTapHighlightColor: 'rgba(255,255,255,0)',
        bg: '#4BB543',
        padding: '1em !important',
        borderRadius: '5px !important'
        },
      
      contentBox: {
        width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
        mx: 'auto',
        textAlign: 'center',
        mb: ['40px', null, null, null, null, 7],
      },
      imageBox: {
        justifyContent: 'center',
        textAlign: 'center',
        display: 'inline-flex',
        mb: [0, null, -6, null, null, '-40px', null, -3],
        img: {
          position: 'relative',
          height: [245, 'auto'],
        },

      },
      
    },
  };

  
export default styles;