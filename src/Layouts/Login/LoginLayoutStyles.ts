import { createNamedStyles } from '../../create_named_styles';
import theme from '../../theme';
export const LoginLayoutStyles = createNamedStyles({
  bg: {
    backgroundColor: '#ffffff',
    width: '45%',
    height: '60%',
    display: 'flex',
    flexDirection: 'row',
    boxShadow: '-6px -17px 125px -99px rgba(255,255,255,0.61)',
  },
  leftContainer: {
    backgroundColor: theme.palette.primary.main,
    flex: 1,
    padding: 10,
  },
  rightContainer: {
    flex: 1,
    padding: 10,
  },
});
