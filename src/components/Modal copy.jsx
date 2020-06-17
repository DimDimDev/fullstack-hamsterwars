import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
// import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import LastGame from './LastGame';

const styles = (theme) => ({
    root: {
        width: 300,
        padding: theme.spacing(2),
        position: 'absolute',
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});


// const DialogTitle = withStyles(styles)((props) => {
//     const { children, classes, onClose, ...other } = props;

//     return (
//         <MuiDialogTitle disableTypography className={classes.root} {...other}>
//             <Typography variant="h6">{children}</Typography>
//             {onClose ? (
//                 <IconButton aria-label="close" className={classes.closeButton} onClick={onclose}>
//                 </IconButton>
//             ) : null}
//         </MuiDialogTitle>
//     );
// });

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

const Modal = (open, setOpen) => {
    // const handleClickOpen = () => {
    //     setOpen(true);
    // };
    // const handleClose = () => {
    //     setOpen(false);
    // };
    return (
        <div>
            <Button variant="outlined" color="primary" onClick={setOpen}>
                Open dialog
      </Button>
            <Dialog onClose={setOpen} aria-labelledby="customized-dialog-title" open={!open}>
                {/* <DialogTitle id="customized-dialog-title" onClose={e => setOpen}>
                    Modal title
        </DialogTitle> */}
                <DialogContent dividers>
                    <LastGame />
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={e => setOpen(!open)} color="primary">
                        Save changes
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Modal;