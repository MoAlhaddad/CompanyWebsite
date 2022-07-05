import ShapeLeft from 'assets/shape-left.png';
import ShapeRight from 'assets/shape-right.png';



const styles = {
  buttons: {
    primary: {
    bg: 'color',
    minWidth: 120,
    }
  },
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
        // display: 'flex',
        // // position: 'absolute',
        // padding: '1.5em',
        // top:'50%',
        // border: 'none',
        // borderRadius: '10px',
        // color: 'white',
        // borderRadius: '2em !important'
        },
      
      contentBox: {
        width: ['100%', '100%', '535px', null, '57%', '60%', '68%', '60%'],
        mx: 'auto',
        textAlign: 'center',
        mb: ['40px', '40px', null, null, null, 7],
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