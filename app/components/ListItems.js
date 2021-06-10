import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import Link from 'next/link'


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function FolderList({ items = [] }) {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            {
                items.map((ele, i) => {
                    return (
                        <Link href={`/view/${ele._id}`} key={i}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <AccountTreeIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="click to view menu" secondary={ele._id} />
                        </ListItem>
                        </Link>
                    )
                })
            }
        </List>
    );
}