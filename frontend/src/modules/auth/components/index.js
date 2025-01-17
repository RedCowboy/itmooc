import { styled } from '@mui/material/styles';
import { Box, Container, Link, Paper } from '@mui/material';

export { default as CustomParticles } from './CustomParticles';

export const MainContainer = styled(Container)(() => ({
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: 0
}));

export const JoinPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    margin: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
        padding: theme.spacing(2),
        margin: theme.spacing(1)
    }
}));

export const ImageBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
        marginBottom: theme.spacing(2)
    }
}));

export const DecoratedLink = styled(Link)({
    textDecoration: 'none !important',
    '&:hover': {
        fontWeight: 600
    }
});
